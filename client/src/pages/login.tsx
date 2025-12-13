import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import logo from "@assets/generated_images/travelnova_globe_logo.png";
import mapBg from "@assets/generated_images/world_map_with_travel_routes.png";
import loginBg from "@assets/generated_images/cinematic_travel_collage_login_background.png";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex relative overflow-hidden font-sans">
      
      {/* Split Layout: Image Side (Desktop) */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={loginBg} 
            alt="Travel Collage" 
            className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-12 left-12 right-12 z-20">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Tu viaje comienza<br/>antes de despegar.</h2>
            <p className="text-slate-300 text-lg max-w-md">Únete a la comunidad de viajeros más grande del mundo y comparte tus aventuras.</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 relative z-20 bg-slate-50 lg:bg-white">
        
        {/* Mobile Background (Subtle) */}
        <div className="lg:hidden absolute inset-0 z-0 opacity-10 pointer-events-none">
             <img src={mapBg} className="w-full h-full object-cover" />
        </div>

        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="relative z-10"
        >
          <div className="mb-8">
             <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-900/20 mb-6">
                <img src={logo} alt="Logo" className="w-8 h-8 brightness-0 invert" />
             </div>
             <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenido de nuevo</h1>
             <p className="text-slate-500 text-lg">Ingresa para continuar tu aventura</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900 transition-colors">
                  <Mail size={20} />
                </div>
                <Input 
                   type="email" 
                   placeholder="tu@email.com" 
                   className="pl-12 h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between ml-1">
                 <label className="text-sm font-semibold text-slate-700">Contraseña</label>
                 <a href="#" className="text-sm font-semibold text-slate-900 hover:underline">¿Olvidaste?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900 transition-colors">
                  <Lock size={20} />
                </div>
                <Input 
                   type={showPassword ? "text" : "password"} 
                   placeholder="••••••••" 
                   className="pl-12 pr-12 h-14 rounded-2xl border-slate-200 bg-white shadow-sm focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-14 rounded-2xl font-bold text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all hover:scale-[1.01] flex justify-between px-6 items-center group">
              <span>Iniciar Sesión</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight size={18} />
              </div>
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative flex justify-center text-sm mb-6">
              <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative px-4 bg-slate-50 lg:bg-white text-slate-400 font-medium">O continúa con</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <button className="h-14 flex items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all bg-white font-semibold text-slate-700 gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
               </button>
               <button className="h-14 flex items-center justify-center rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all bg-white font-semibold text-slate-700 gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.06 2.77.59 3.57 1.74-3.24 1.93-2.66 6.31.52 7.73-.65 1.55-1.52 3.09-2.68 3.56zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  Apple
               </button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-slate-500">
            ¿No tienes cuenta? <Link href="/register"><a className="font-bold text-slate-900 hover:underline">Regístrate</a></Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
