import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Images
import img1 from "@assets/generated_images/futuristic_travel_onboarding.png";
import img2 from "@assets/generated_images/connected_world_globe.png";
import img3 from "@assets/generated_images/sharing_moments_concept.png";

const slides = [
  {
    id: 1,
    title: "Explora el Futuro",
    desc: "Descubre destinos con nuestra tecnología de mapeo holográfico y guías inmersivas.",
    image: img1,
  },
  {
    id: 2,
    title: "Conecta tu Mundo",
    desc: "Únete a una red global de viajeros. Comparte rutas, consejos y experiencias en tiempo real.",
    image: img2,
  },
  {
    id: 3,
    title: "Captura & Comparte",
    desc: "Crea bitácoras de viaje automáticas y comparte tus momentos con un solo toque.",
    image: img3,
  },
];

export default function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    } else {
      // Navigate to next screen (handled by Link wrapper)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden flex flex-col justify-between">
      {/* Background Elements */}
      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[50%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-20">
        <Link href="/login">
          <span className="text-sm font-medium text-slate-500 hover:text-primary cursor-pointer">Omitir</span>
        </Link>
      </div>

      {/* Image Slider */}
      <div className="flex-1 flex items-center justify-center relative mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.05, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm px-8"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 relative border border-white/50">
               <img 
                 src={slides[currentSlide].image} 
                 alt={slides[currentSlide].title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="px-8 pb-12 pt-8 z-10 bg-white/50 backdrop-blur-sm rounded-t-[2.5rem] border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>

        <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center mb-8"
        >
            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              {slides[currentSlide].desc}
            </p>
        </motion.div>

        {currentSlide === slides.length - 1 ? (
           <Link href="/login">
             <Button className="w-full h-14 rounded-2xl text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]">
                Comenzar Aventura
             </Button>
           </Link>
        ) : (
          <Button 
            onClick={nextSlide}
            className="w-full h-14 rounded-2xl text-lg font-medium bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200"
          >
            Siguiente <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
