import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/generated_images/travelnova_globe_logo.png";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-brand text-white relative overflow-hidden">
      {/* Background overlay/decoration could go here */}
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center justify-center w-full px-6 text-center z-10"
      >
        <div className="w-24 h-24 mb-8 bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-xl border border-white/30">
          <img src={logo} alt="Travelnova Logo" className="w-full h-full object-contain brightness-0 invert" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Bienvenido a <br/>
          <span className="font-serif italic">TravelNova</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-xs mx-auto leading-relaxed mb-12 drop-shadow-sm">
          Explora. Registra. Comparte tu mundo.
          <br/>
          <span className="text-sm opacity-80 mt-2 block font-light">
            La plataforma definitiva para documentar tus aventuras, conectar con viajeros de todo el mundo y descubrir destinos increíbles.
          </span>
        </p>

        <div className="w-full max-w-sm space-y-4">
           <Link href="/features">
             <div className="w-full bg-white text-teal-700 hover:bg-white/90 font-bold py-4 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center justify-center">
                Ya tengo una cuenta
             </div>
           </Link>
           {/* The "Comenzar" button wasn't explicitly text in screenshot but implied as main action, but "Ya tengo una cuenta" is the white bar. 
               Wait, usually the Filled button is the primary action (Register) and the outlined/text is secondary (Login). 
               In the screenshot, "Ya tengo una cuenta" is the big white input/button. 
               Let's assume the flow leads to Onboarding/Register first. 
           */}
           <Link href="/features">
              <span className="block text-sm text-white/80 hover:text-white mt-4 underline underline-offset-4 cursor-pointer">
                Crear una cuenta nueva
              </span>
           </Link>
        </div>
      </motion.div>
    </div>
  );
}
