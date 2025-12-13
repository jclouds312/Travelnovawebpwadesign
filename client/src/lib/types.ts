export interface User {
  id: string;
  name: string;
  location: string;
  avatar: string;
  isOnline?: boolean;
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  country: string;
  rating: number;
  price: number;
  image: string;
  category: string;
  description: string;
  likes: number;
}
