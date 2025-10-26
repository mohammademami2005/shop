import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// --- Theme Store ---
interface ThemeState {
  mode: 'light' | 'dark'
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      toggleTheme: () =>
        set((state) => ({
          mode: state.mode === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme-storage',
    }
  )
)

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description: string
  img: string[]
  category: string
  bestSells: boolean
  total: number // هر آیتم خودش total داره
}

interface CartState {
  items: CartItem[]
  totalAmount: number // جمع کل سبد
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  quantityPlus: (id: string) => void
  quantityMinus: (id: string) => void
  calcTotal: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalAmount: 0,

      // متود کمکی برای محاسبه total هر آیتم و جمع کل
      calcTotal: () => {
        const items = get().items.map(i => ({ ...i, total: i.price * i.quantity }));
        const totalAmount = items.reduce((acc, i) => acc + i.total, 0);
        set({ items, totalAmount });
      },

      addItem: (item) => {
        const existing = get().items.find(i => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, quantity: 1, total: item.price }] });
        }
        get().calcTotal(); // بعد اضافه کردن، جمع کل را آپدیت کن
      },

      removeItem: (id) => {
        set({ items: get().items.filter(i => i.id !== id) });
        get().calcTotal();
      },

      quantityPlus: (id) => {
        set({
          items: get().items.map(i =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
        get().calcTotal();
      },

      quantityMinus: (id) => {
        const item = get().items.find(i => i.id === id);
        if (!item) return;

        if (item.quantity <= 1) {
          set({ items: get().items.filter(i => i.id !== id) });
        } else {
          set({
            items: get().items.map(i =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        }
        get().calcTotal();
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);
