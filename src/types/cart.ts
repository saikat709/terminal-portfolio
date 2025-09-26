import type { Book, Order } from "./apiTypes";

export interface CartItem {
  id?: number;
  book: Book;
  quantity: number;
}

export interface CartContextType {
  itemsToOrder: CartItem[];
  cartItems: CartItem[];
  isCartLoading?: boolean;
  addToCart: (item: Book) => Promise<void>;
  orderItems: () => void;
  orderItem: (item: CartItem) => void;
  cartCount: () => number;
  cartHasItem: (id: number) => boolean;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;

  saveCurrentOrder: (order: Order) => void;
  clearCurrentOrder: () => void;
  currentOrder: Order | null;
}


export interface Cart {
  id: number;
  user: number;
  items: CartItem[];
}