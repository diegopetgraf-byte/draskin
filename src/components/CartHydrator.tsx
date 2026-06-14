'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/stores/cartStore';

/**
 * CartHydrator
 *
 * Triggers Zustand's persist rehydration AFTER the component mounts on the
 * client. Awaits completion before marking the store as hydrated so that
 * the cart badge and drawer reflect the correct item count immediately.
 */
export function CartHydrator() {
    useEffect(() => {
        const load = async () => {
            try {
                await useCartStore.persist.rehydrate();
            } catch {
                // Stale or incompatible localStorage – proceed with defaults
            } finally {
                useCartStore.getState().setHasHydrated(true);
            }
        };
        load();
    }, []);

    return null;
}
