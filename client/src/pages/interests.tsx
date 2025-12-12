import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mountain, Palmtree, Building2, Utensils, Camera, Heart, Map, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Interests() {
  const [selected, setSelected] = useState<string[]>([]);
  const [, setLocation] = useLocation();

  const toggleInterest = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const interests = [
    { id: "adventure", label: "Aventura", icon: Mountain },
    { id: "beach", label: "Playa", icon: Palmtree },
    { id: "cities", label: "Ciudades", icon: Building2 },
    { id: "food", label: "Gastronomía", icon: Utensils },
    { id: "photo", label: "Fotografía", icon: Camera },
    { id: "romantic", label: "Romántico", icon: Heart },
    { id: "backpack", label: "Mochilero", icon: Map },
    { id: "cultural", label: "Cultural", icon: Landmark },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-6 pt-12 pb-32">
        <Link href="/features">
           <span className="text-muted-foreground text-sm mb-6 block cursor-pointer hover:text-primary">← Atrás</span>
        </Link>
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            ¿Qué te apasiona?
          </h1>
          <p className="text-slate-500 mb-8">
            Selecciona tus intereses para personalizar tu experiencia y recibir recomendaciones
          </p>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((item, index) => {
              const isSelected = selected.includes(item.id);
              const Icon = item.icon;
              return (
                <motion.button 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleInterest(item.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 gap-3",
                    isSelected 
                      ? "border-primary bg-primary/5 text-primary shadow-md" 
                      : "border-slate-100 bg-white text-slate-500 hover:border-primary/30 hover:bg-slate-50"
                  )}
                >
                  <Icon size={32} strokeWidth={1.5} />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-10 space-y-3">
        <Button 
          onClick={() => setLocation("/register")}
          className="w-full h-14 rounded-full text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          Continuar <ChevronRight className="ml-2" />
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/register")}
          className="w-full text-slate-400 font-normal hover:text-slate-600"
        >
          Omitir por ahora
        </Button>
      </div>
    </div>
  );
}
