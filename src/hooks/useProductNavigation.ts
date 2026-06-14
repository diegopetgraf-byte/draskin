import { useState, useEffect } from 'react';
import { fetchProductNavigation } from '@/lib/products/api';

interface NavigationProduct {
    handle: string;
    primaryCollection: string | null;
}

interface UseProductNavigationReturn {
    products: NavigationProduct[];
    isLoading: boolean;
    error: string | null;
}

export function useProductNavigation(collection: string): UseProductNavigationReturn {
    const [products, setProducts] = useState<NavigationProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchProductNavigation(collection);
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch navigation data');
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [collection]);

    return { products, isLoading, error };
}
