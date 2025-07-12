import { persist } from 'zustand/middleware';
import { create } from "zustand"
import { IProduct } from "./(store)/types/product";

export interface ICartProductQuantity {
  cartQuantity: number
  setCartProductsQuantity: (quantity: number) => void
}

export const useCartProductQuantity = create<ICartProductQuantity>((set) => ({
  cartQuantity: 0,
  setCartProductsQuantity: (quantity) => set({ cartQuantity: quantity })
}))


interface CartState {
  quantity: number,
  incrementQuantity: () => void
  decrementQuantity: () => void
  resetQuantity: () => void
  cart: IProduct[];
  addToCart: (product: Omit<IProduct, 'quantity: number'>) => void;
  deleteItem: (product: IProduct) => void;
  incrementQuantityOfItemInCart: (product: IProduct) => void;
  decrementQuantityOfItemInCart: (product: IProduct) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      quantity: 1,

      incrementQuantity: () =>
        set((state) => ({
          quantity: state.quantity + 1,
        })),

      decrementQuantity: () =>
        set((state) => ({
          quantity: state.quantity > 1 ? state.quantity - 1 : 1,
        })),

      resetQuantity: () => set(() => ({ quantity: 1 })),

      addToCart: (product) => {
        const cart = get().cart;
        const quantity = get().quantity;

        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity }],
          });
        }

        set({ quantity: 1 });
      },

      deleteItem: (product) => {
        const cart = get().cart

        const existing = cart.find((item) => item === product);

        if (existing) {
          const found = cart.findIndex((element) => element.id === product.id)
          if (found !== -1) {
            cart.splice(found, 1)
            set({
              cart: [...cart]
            })
          }
        }
      },

      incrementQuantityOfItemInCart: (product) => {
        const cart = get().cart

        const existing = cart.find((item) => item === product);

        if (existing) {
          cart.map((element) => element.id === existing.id ? element.quantity += 1 : "")
          set({
            cart: [...cart]
          })
        }
      },
      decrementQuantityOfItemInCart: (product) => {
        const cart = get().cart

        const existing = cart.find((item) => item === product);

        if (existing) {
          cart.map((element) => element.id === existing.id ? element.quantity > 0 ? element.quantity -= 1 : "" : "")
          set({
            cart: [...cart]
          })
        }
      }
    }),

    {
      name: 'cart-storage', // key in localStorage
    }
  )
);

