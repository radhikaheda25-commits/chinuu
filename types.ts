
export type Category = 'Men' | 'Women' | 'Kids' | 'Sports';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  images: string[];
  colors: string[];
  sizes: number[];
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  wishlist: string[];
}
