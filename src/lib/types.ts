
import type { ImagePlaceholder } from './placeholder-images';
import type { Timestamp } from 'firebase/firestore';

export type User = {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: Timestamp;
}

export type Dish = {
  id: string;
  name: string;
  description: string;
  author: string;
  authorImage: ImagePlaceholder;
  image: ImagePlaceholder;
  category: 'Trending' | 'Latest' | 'Popular';
  userId: string;
  createdAt: Timestamp;
};

export type Comment = {
    id: string;
    dishId: string;
    userId: string;
    author: string;
    authorImage: string;
    text: string;
    createdAt: Timestamp;
}

export type Like = {
    id: string;
    createdAt: Timestamp;
}

export type CartItem = Dish & {
  price: number;
  quantity: number;
};
