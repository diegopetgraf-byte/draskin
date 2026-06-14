// Local product types (compatible with legacy format for UI components)

export interface ProductImage {
  id: string;
  url: string;
  altText: string | null;
  position: number;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
  position: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  sku: string | null;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  seoTitle: string | null;
  seoDescription: string | null;
  productType: string | null;
  vendor: string;
  tags: string[];
  primaryCollection: string | null;
  images: ProductImage[];
  options: ProductOption[];
  variants: ProductVariant[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

// Database row types (from Supabase)
export interface DbProduct {
  id: string;
  handle: string;
  title: string;
  description: string | null;
  product_type: string | null;
  vendor: string;
  tags: string[] | null;
  position: number;
  primary_collection: string | null;
  created_at: string;
  updated_at: string;
}

export interface DbProductImage {
  id: string;
  product_id: string;
  url: string;
  alt_text: string | null;
  position: number;
  created_at: string;
}

export interface DbProductOption {
  id: string;
  product_id: string;
  name: string;
  option_values: string[];
  position: number;
  created_at: string;
}

export interface DbProductVariant {
  id: string;
  product_id: string;
  title: string;
  price: number;
  currency: string;
  sku: string | null;
  available: boolean;
  selected_options: Array<{ name: string; value: string }>;
  created_at: string;
}

// Local node format for compatibility with existing components
export interface ProductNode {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    tags: string[];
    primaryCollection: string | null;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: ProductVariant;
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

// Backward compatibility alias for components
export type LegacyProduct = ProductNode;
export type LocalVariant = ProductNode['node']['variants']['edges'][0]['node'];
