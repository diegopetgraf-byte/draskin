import productsData from '@/data/products.json';
import type {
  Product,
  ProductNode,
  DbProduct,
  DbProductImage,
  DbProductOption,
  DbProductVariant
} from './types';
import { logger } from '@/lib/logger';
import { getCollectionProductHandles } from '@/data/collection_products';

interface ProductWithRelations extends DbProduct {
  product_images: DbProductImage[];
  product_options: DbProductOption[];
  product_variants: DbProductVariant[];
}

// Type cast the local JSON data
const rawProducts = productsData as unknown as ProductWithRelations[];

// Build a handle → product index for fast lookups
const productsByHandle = new Map<string, ProductWithRelations>();
for (const p of rawProducts) {
  productsByHandle.set(p.handle, p);
}

function transformToProduct(row: ProductWithRelations): Product {
  const variants = row.product_variants || [];
  const minPrice = variants.length > 0
    ? Math.min(...variants.map(v => v.price))
    : 0;
  const currency = variants[0]?.currency || 'BRL';

  return {
    id: row.id,
    handle: row.handle,
    title: row.title,
    description: row.description || '',
    seoTitle: (row as any).seo_title || null,
    seoDescription: (row as any).seo_description || null,
    productType: row.product_type,
    vendor: row.vendor,
    tags: row.tags || [],
    primaryCollection: row.primary_collection,
    images: (row.product_images || [])
      .sort((a, b) => a.position - b.position)
      .map(img => ({
        id: img.id,
        url: img.url,
        altText: img.alt_text,
        position: img.position,
      })),
    options: (row.product_options || [])
      .sort((a, b) => a.position - b.position)
      .map(opt => ({
        id: opt.id,
        name: opt.name,
        values: opt.option_values,
        position: opt.position,
      })),
    variants: variants.map(v => ({
      id: v.id,
      title: v.title,
      price: {
        amount: v.price.toString(),
        currencyCode: v.currency,
      },
      availableForSale: v.available,
      sku: v.sku,
      selectedOptions: v.selected_options || [],
    })),
    priceRange: {
      minVariantPrice: {
        amount: minPrice.toString(),
        currencyCode: currency,
      },
    },
  };
}

// Transform to local node format for backward compatibility with UI components
export function transformToLocalNodeFormat(product: Product): ProductNode {
  return {
    node: {
      id: product.id,
      title: product.title,
      description: product.description,
      handle: product.handle,
      tags: product.tags,
      primaryCollection: product.primaryCollection,
      priceRange: product.priceRange,
      images: {
        edges: product.images.map(img => ({
          node: {
            url: img.url,
            altText: img.altText,
          },
        })),
      },
      variants: {
        edges: product.variants.map(v => ({
          node: {
            id: v.id,
            title: v.title,
            price: v.price,
            sku: v.sku,
            availableForSale: v.availableForSale,
            selectedOptions: v.selectedOptions,
          },
        })),
      },
      options: product.options.map(opt => ({
        name: opt.name,
        values: opt.values,
      })),
    },
  };
}

// Sort helper: Kits first, then maintain existing position order
const sortWithKitsFirst = (products: ProductNode[]) => {
  return [...products].sort((a, b) => {
    const aIsKit = a.node.handle.toLowerCase().includes('kit') ||
      a.node.title.toLowerCase().includes('kit');
    const bIsKit = b.node.handle.toLowerCase().includes('kit') ||
      b.node.title.toLowerCase().includes('kit');

    if (aIsKit && !bIsKit) return -1;
    if (!aIsKit && bIsKit) return 1;
    return 0; // Maintain existing position order from DB
  });
};

export async function fetchProducts(limit = 50, searchQuery?: string, collection?: string): Promise<ProductNode[]> {
  try {
    // If searching, search across ALL products regardless of collection
    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      const filtered = rawProducts
        .filter(p =>
          p.title.toLowerCase().includes(term) ||
          (p.description && p.description.toLowerCase().includes(term))
        )
        .slice(0, limit);

      return filtered.map(row =>
        transformToLocalNodeFormat(transformToProduct(row))
      );
    }

    // If a collection is specified, use the mapping to get ordered products
    if (collection) {
      const handles = getCollectionProductHandles(collection);

      if (handles && handles.length > 0) {
        // Resolve handles to products, preserving mapping order
        const ordered: ProductWithRelations[] = [];
        for (const handle of handles) {
          const product = productsByHandle.get(handle);
          if (product) ordered.push(product);
        }

        const products = ordered
          .slice(0, limit)
          .map(row => transformToLocalNodeFormat(transformToProduct(row)));

        return sortWithKitsFirst(products);
      }

      // grafica-estetica or unmapped collections: show all products
      const all = [...rawProducts]
        .sort((a, b) => a.position - b.position)
        .slice(0, limit)
        .map(row => transformToLocalNodeFormat(transformToProduct(row)));

      return sortWithKitsFirst(all);
    }

    // No collection, no search: return all products sorted by position
    const all = [...rawProducts]
      .sort((a, b) => a.position - b.position)
      .slice(0, limit)
      .map(row => transformToLocalNodeFormat(transformToProduct(row)));

    return sortWithKitsFirst(all);
  } catch (error) {
    logger.error('Unexpected error fetching products', error);
    return [];
  }
}

export async function fetchProductByHandle(handle: string): Promise<Product | null> {
  try {
    const row = rawProducts.find(p => p.handle === handle);
    if (!row) return null;

    return transformToProduct(row);
  } catch (error) {
    logger.error('Unexpected error fetching product', error);
    return null;
  }
}

export async function fetchProductByHandleNode(handle: string): Promise<ProductNode['node'] | null> {
  const product = await fetchProductByHandle(handle);
  if (!product) return null;
  return transformToLocalNodeFormat(product).node;
}

export async function fetchProductNavigation(collection: string): Promise<Array<{ handle: string; primaryCollection: string | null }>> {
  try {
    const handles = getCollectionProductHandles(collection);

    if (handles && handles.length > 0) {
      // Use mapping order
      const result: Array<{ handle: string; primaryCollection: string | null }> = [];
      for (const handle of handles) {
        const product = productsByHandle.get(handle);
        if (product) {
          result.push({ handle: product.handle, primaryCollection: product.primary_collection });
        }
      }

      // Still put kits first
      return result.sort((a, b) => {
        const aIsKit = a.handle.toLowerCase().includes('kit');
        const bIsKit = b.handle.toLowerCase().includes('kit');
        if (aIsKit && !bIsKit) return -1;
        if (!aIsKit && bIsKit) return 1;
        return 0;
      });
    }

    // Fallback: all products sorted by position
    const sortedData = [...rawProducts].sort((a, b) => a.position - b.position);
    return sortedData.map(p => ({
      handle: p.handle,
      primaryCollection: p.primary_collection
    }));
  } catch (error) {
    logger.error('Unexpected error fetching product navigation', error);
    return [];
  }
}

export async function searchProducts(query: string, limit = 20): Promise<ProductNode[]> {
  return fetchProducts(limit, query);
}
