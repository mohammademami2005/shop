import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
      name: 'theme-storage', // کلید ذخیره در localStorage
    }
  )
)

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description: string
  img:string[]
  category:string
  bestSells : boolean
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  quantityPlus: (id: string) => void
  quantityMinus: (id: string) => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => {
      // اونایی که از قبل توی کارت وجود دارند
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        return {
          items: state.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }] }
    })
  },

  removeItem: (id) => {
    set((state) => {
      return { items: state.items.filter((i) => i.id !== id) }
    })
  },
  quantityPlus: (id: string) => {
    set((state) => {
      return {
        items: state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
      }
    })
  },

  quantityMinus: (id: string) => {
    const item = get().items.find((i) => i.id === id)
    if (!item) return item
    if (item?.quantity == 1) {
      get().removeItem(id)
    } else {

      set((state) => {
        return {
          items: state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        }
      })
    }

  }
}))




