import Layout from "@/components/layout";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { destinations, type Destination } from "@/lib/dummy-data";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import baliImage from "@assets/generated_images/bali_landscape.png";
import santoriniImage from "@assets/generated_images/santorini_architecture.png";
import tokyoImage from "@assets/generated_images/tokyo_street_night.png";

export default function Explore() {
  const [search, setSearch] = useState("");

  const filtered = destinations.filter(d => 
    d.title.toLowerCase().includes(search.toLowerCase()) || 
    d.location.toLowerCase().includes(search.toLowerCase())
  );

  const getImage = (id: string) => {
    if (id === "1") return baliImage;
    if (id === "2") return santoriniImage;
    if (id === "3") return tokyoImage;
    return baliImage;
  };

  return (
    <Layout>
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-6">Explore World</h1>
        
        <div className="relative mb-8">
           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-200"
            placeholder="Search places..." 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filtered.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
            >
              <img src={getImage(dest.id)} alt={dest.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold leading-tight">{dest.title}</h3>
                <p className="text-white/80 text-xs">{dest.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
