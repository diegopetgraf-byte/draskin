import { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '@/lib/products/api';
import type { ProductNode } from '@/lib/products/types';

interface UseProductsReturn {
  products: ProductNode[];
  isLoading: boolean;
  error: string | null;
}

export function useProducts(limit: number = 50, query?: string, collection?: string, initialData?: ProductNode[]): UseProductsReturn {
  const [products, setProducts] = useState<ProductNode[]>(initialData || []);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  // Track if we have already used initial data to avoid double fetching on mount
  // If we have initialData, we skip the first effect execution for these specific params
  const moutedRef = useRef(false);

  useEffect(() => {
    // If we have initial data, we don't need to fetch on mount
    // But if params change later, we do need to fetch
    if (initialData && !moutedRef.current) {
      moutedRef.current = true;
      return;
    }

    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchProducts(limit, query, collection);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [limit, query, collection, initialData]); // Include initialData in deps to satisfy linter, though logic handles it

  return { products, isLoading, error };
}
