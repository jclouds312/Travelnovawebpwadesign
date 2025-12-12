export interface Destination {
  id: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  category: string;
  description: string;
}

export const categories: string[] = ["All", "Beach", "Mountain", "City", "Forest", "Desert"];

export const destinations: Destination[] = [
  {
    id: "1",
    title: "Bali Rice Terraces",
    location: "Ubud, Indonesia",
    rating: 4.9,
    price: 120,
    category: "Nature",
    description: "Experience the tranquil beauty of the Tegalalang Rice Terrace in Ubud. Lush greenery, peaceful atmosphere, and cultural richness await you.",
  },
  {
    id: "2",
    title: "Santorini Coastline",
    location: "Santorini, Greece",
    rating: 4.8,
    price: 250,
    category: "Beach",
    description: "Stunning views of the Aegean Sea from the famous white-washed buildings of Oia. Perfect for a romantic getaway or a luxury escape.",
  },
  {
    id: "3",
    title: "Tokyo Cyberpunk",
    location: "Shibuya, Japan",
    rating: 4.7,
    price: 180,
    category: "City",
    description: "Immerse yourself in the vibrant energy of Tokyo. Neon lights, incredible food, and a perfect blend of tradition and futuristic technology.",
  },
];
