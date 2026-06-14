import { useState, useEffect } from 'react';
import { fetchProductByHandle, transformToLocalNodeFormat } from '@/lib/products/api';
import type { ProductNode } from '@/lib/products/types';

interface UseProductReturn {
  product: ProductNode['node'] | null;
  isLoading: boolean;
  error: string | null;
}

export function useProduct(handle: string | undefined): UseProductReturn {
  const [product, setProduct] = useState<ProductNode['node'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) {
      setIsLoading(false);
      setError('No product handle provided');
      return;
    }

    const loadProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchProductByHandle(handle);
        if (data) {
          // Transform to local node format for compatibility
          const localNode = transformToLocalNodeFormat(data);
          setProduct(localNode.node);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  return { product, isLoading, error };
}
