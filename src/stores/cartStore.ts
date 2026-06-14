import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { ProductNode } from '@/lib/products/types';
import { PIX_DISCOUNT_RATE } from '@/lib/pricingParams';

export interface ShippingData {
  nome: string; documento: string; email: string;
  rua: string; numero: string; complemento: string;
  bairro: string; cidade: string; uf: string; cep: string;
}

export const defaultShippingData: ShippingData = {
  nome: '', documento: '', email: '',
  rua: '', numero: '', complemento: '',
  bairro: '', cidade: '', uf: '', cep: '',
};

export interface PersonalizationData {
  text: string;
  logoUrl: string | null;
}

export interface CartItem {
  lineId: string;
  product: ProductNode;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
  personalization?: PersonalizationData;
  productPath?: string; // e.g. "/papelaria-estetica/timbrado-a4-estetica"
}

export interface ClientInfo {
  text: string;
  logoUrl: string | null;
  file?: File | null;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  isOpen: boolean;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'lineId'>) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
  updateItemPersonalization: (lineId: string, data: Partial<PersonalizationData>) => void;
  clientInfo: ClientInfo;
  setClientInfo: (data: Partial<ClientInfo>) => void;
  shippingData: ShippingData;
  updateShippingField: (field: keyof ShippingData, value: string) => void;
  totalItems: number;
  subtotal: number;
  pixDiscount: number;
  totalWithPix: number;
  installmentValue: number;
  selectedInstallment: number | null;
  setSelectedInstallment: (n: number | null) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      clientInfo: { text: '', logoUrl: null, file: null },
      isLoading: false,
      isOpen: false,
      _hasHydrated: false,
      selectedInstallment: null,
      shippingData: defaultShippingData,

      setHasHydrated: (state) => set({ _hasHydrated: state }),
      setSelectedInstallment: (n) => set({ selectedInstallment: n }),
      updateShippingField: (field, value) =>
        set((state) => ({ shippingData: { ...state.shippingData, [field]: value } })),

      get totalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      get subtotal() {
        return get().items.reduce(
          (sum, item) => sum + parseFloat(item.price.amount) * item.quantity,
          0
        );
      },
      get pixDiscount() {
        return get().subtotal * PIX_DISCOUNT_RATE;
      },
      get totalWithPix() {
        return get().subtotal * (1 - PIX_DISCOUNT_RATE);
      },
      get installmentValue() {
        return get().subtotal;
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (item) => {
        const { items } = get();
        set({
          items: [...items, { ...item, lineId: crypto.randomUUID() }],
          isOpen: true,
        });
      },

      updateQuantity: (lineId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(lineId);
          return;
        }
        const { items } = get();
        set({
          items: items.map((i) =>
            i.lineId === lineId ? { ...i, quantity } : i
          ),
        });
      },

      removeItem: (lineId) => {
        const { items } = get();
        const newItems = items.filter((i) => i.lineId !== lineId);
        if (newItems.length === 0) {
          set({ items: [], isOpen: false, selectedInstallment: null });
        } else {
          set({ items: newItems });
        }
      },

      updateItemPersonalization: (lineId, data) => {
        const { items } = get();
        set({
          items: items.map((i) =>
            i.lineId === lineId
              ? { ...i, personalization: { ...i.personalization, ...data } as PersonalizationData }
              : i
          )
        });
      },

      clearCart: () => set({ items: [], isOpen: false }),

      setClientInfo: (data) =>
        set((state) => ({
          clientInfo: { ...state.clientInfo, ...data },
        })),
    }),
    {
      name: 'esthetique-cart-v2',
      storage: createJSONStorage(() => localStorage),
      // Only persist items
      partialize: (state) => ({ items: state.items, shippingData: state.shippingData }),
      // CRITICAL: skip auto-hydration on store creation.
      // We manually call rehydrate() inside a useEffect in CartHydrator
      // so the localStorage read happens AFTER React mounts on the client,
      // preventing the empty initial state from overwriting persisted data.
      skipHydration: true,
    }
  )
);
