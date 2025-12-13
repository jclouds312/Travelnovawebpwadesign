import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Users, BarChart3, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: "Mapea tus Viajes",
      description: "Registra cada destino que visitas en un mapa interactivo global"
    },
    {
      icon: Camera,
      title: "Captura Momentos",
      description: "Guarda fotos, videos y recuerdos de cada experiencia única"
    },
    {
      icon: Users,
      title: "Conecta con Viajeros",
      description: "Comparte historias e inspírate con una comunidad global"
    },
    {
      icon: BarChart3,
      title: "Estadísticas Personales",
      description: "Visualiza tu progreso: países visitados, kilómetros recorridos y más"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 px-6 pt-12 pb-24">
        <Link href="/">
           <span className="text-muted-foreground text-sm mb-6 block cursor-pointer hover:text-primary">← Atrás</span>
        </Link>
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
            Todo lo que necesitas para viajar y compartir
          </h1>
          <p className="text-slate-500 mb-8">
            TravelNova combina las mejores funcionalidades en una experiencia fluida y moderna
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-10">
        <Link href="/interests">
          <Button className="w-full h-14 rounded-full text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            Continuar <ChevronRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
