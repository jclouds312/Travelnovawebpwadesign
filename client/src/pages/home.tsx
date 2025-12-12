import { useState } from "react";
import Layout from "@/components/layout";
import { Search, MapPin, Star, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { destinations, categories, type Destination } from "@/lib/dummy-data";
import { motion } from "framer-motion";

// Import generated images
import baliImage from "@assets/generated_images/bali_landscape.png";
import santoriniImage from "@assets/generated_images/santorini_architecture.png";
import tokyoImage from "@assets/generated_images/tokyo_street_night.png";
import logoIcon from "@assets/generated_images/travelnova_logo_icon.png";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredDestinations =
    activeCategory === "All"
      ? destinations
      : destinations.filter((d: Destination) => d.category === activeCategory);

  // Map dummy images to real generated ones for the demo
  const getImage = (id: string) => {
    if (id === "1") return baliImage;
    if (id === "2") return santoriniImage;
    if (id === "3") return tokyoImage;
    return baliImage; // Fallback
  };

  return (
    <Layout>
      {/* Header Section */}
      <div className="relative px-6 pt-12 pb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={logoIcon} alt="Travelnova" className="w-full h-full object-cover p-1" />
             </div>
             <span className="font-serif text-2xl font-bold tracking-tight text-primary">Travelnova</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>

        <h1 className="text-4xl font-serif font-medium leading-tight mb-6 text-slate-800">
          Where do you want <br />
          <span className="text-primary italic">to go?</span>
        </h1>

        <div className="relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            className="pl-10 h-14 rounded-2xl bg-white shadow-sm border-slate-100 focus-visible:ring-primary/20 text-base"
            placeholder="Search destinations, hotels..."
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-8 overflow-x-auto hide-scrollbar pb-2">
        <div className="flex gap-3">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="px-6 pb-24">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-semibold text-slate-800">Popular Trips</h2>
          <Button variant="link" className="text-primary p-0 h-auto font-medium">
            See All
          </Button>
        </div>

        <div className="space-y-6">
          {filteredDestinations.map((destination: Destination, index: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={destination.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={getImage(destination.id)}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5 fill-current opacity-90" />
                </button>
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-slate-800 font-semibold px-3 py-1 shadow-sm border-0">
                        ${destination.price}/night
                    </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {destination.title}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold text-slate-700">{destination.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-primary" />
                  {destination.location}
                </div>

                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    {destination.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
