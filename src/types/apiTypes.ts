import type { CartItem } from "./cart";

export interface Author {
  id: number;
  name: string;
  bio: string;
  picture?: string | null;
}

export interface Publisher {
  id: number;
  name: string;
  description?: string | null;
  picture?: string | null;
}

export interface Category {
  id: number;
  name: string;
  description?: string | null;
}

export interface Book {
  id: number;
  name: string;
  description?: string | null;
  author: Author; // can be populated or just id
  publisher?: Publisher | number | null;
  price: number;
  available_quantity: number;
  discount_percentage: number;
  picture?: string | null;
  categories: Category[];
}

export interface Order {
  id: number;
  user: User;
  cart_items: CartItem[];
  shipping_address: string;
  order_time: string;
  status: string;
}

export interface Profile {
  id: number;
  user: number;
  phone_number?: string | null;
  address?: string | null;
  bio?: string | null;
}


export interface User {
    id: number;
    full_name: string;
    email: string;
    profile?: Profile;
}