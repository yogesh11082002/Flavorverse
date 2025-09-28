
import type { ImagePlaceholder } from './placeholder-images';

export type Dish = {
  id: string;
  name: string;
  description: string;
  author: string;
  authorImage: ImagePlaceholder;
  image: ImagePlaceholder;
  likes: number;
  commentsCount: number;
  category: 'Trending' | 'Latest' | 'Popular';
};

export type CartItem = Dish & {
  price: number;
  quantity: number;
};
