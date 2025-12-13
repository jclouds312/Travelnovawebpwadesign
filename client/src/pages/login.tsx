import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import logo from "@assets/generated_images/travelnova_globe_logo.png"; 
import mapBg from "@assets/generated_images/abstract_map_background.png";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

// Community avatars for the login screen "Join X users"
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/brazilian_female_traveler_avatar.png";

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically validate credentials
    // For now, redirect to the main app (home)
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img src={mapBg} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/60 relative"
        >
          {/* Decorative glowing orb */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-neon-grape/30 rounded-full blur-xl pointer-events-none" />

          <div className="flex justify-center mb-6 relative">
             <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/30 transform -rotate-3 border-4 border-white">
                <img src={logo} alt="Logo" className="w-12 h-12 brightness-0 invert" />
             </div>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Bienvenido de nuevo</h1>
            <p className="text-slate-500">Tu pasaporte a nuevas aventuras</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                  <Mail size={20} />
                </div>
                <Input 
                   type="email" 
                   defaultValue="viajero@travelnova.com"
                   placeholder="hola@travelnova.com" 
                   className="pl-12 h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between ml-1">
                 <label className="text-sm font-medium text-slate-700">Contraseña</label>
                 <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">¿Olvidaste?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                  <Lock size={20} />
                </div>
                <Input 
                   type={showPassword ? "text" : "password"} 
                   defaultValue="password123"
                   placeholder="••••••••" 
                   className="pl-12 pr-12 h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-14 rounded-2xl font-bold text-lg bg-gradient-brand hover:opacity-90 shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]">
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/0 text-slate-400">O continúa con</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
               <button className="h-14 flex items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors bg-white">
                  <span className="font-bold text-lg">G</span>
               </button>
               <button className="h-14 flex items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors bg-white">
                  <span className="font-bold text-xl"></span>
               </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Community Teaser */}
      <div className="p-6 text-center z-10">
        <div className="flex items-center justify-center -space-x-3 mb-3">
           {[userJapan, userFrance, userBrazil].map((img, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 overflow-hidden">
                 <img src={img} className="w-full h-full object-cover" alt="User" />
              </div>
           ))}
           <div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
             +2k
           </div>
        </div>
        <p className="text-slate-500 mb-1">
          Únete a nuestra comunidad global
        </p>
        <p className="text-slate-500 text-sm">
          ¿No tienes cuenta? <Link href="/register"><a className="font-bold text-primary hover:underline">Regístrate</a></Link>
        </p>
      </div>
    </div>
  );
}
