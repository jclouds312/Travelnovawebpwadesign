import Layout from "@/components/layout";
import { Settings, Bell, LogOut, ChevronRight, Map, Award, Globe, Heart } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import adminAvatar from "@assets/generated_images/cool_male_traveler_avatar.png";
import mapTexture from "@assets/generated_images/world_map_with_travel_routes.png";
import stamp1 from "@assets/generated_images/travel_passport_stamp_collage.png";

export default function Profile() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header / Stats Card */}
        <div className="relative bg-slate-900 text-white rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20 mb-8 pb-8">
            <div className="absolute inset-0 opacity-40">
                <img src={mapTexture} className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 px-6 pt-12">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-lg font-bold">Perfil</h2>
                    <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                        <Settings size={20} />
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 rounded-full border-4 border-white/10 shadow-xl overflow-hidden">
                        <img src={adminAvatar} className="w-full h-full object-cover" alt="Profile" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-0.5">Mateo Viajero</h1>
                        <p className="text-slate-400 text-sm mb-2">@mateo_explorer</p>
                        <div className="flex gap-2">
                             <span className="px-2 py-0.5 bg-primary/20 text-primary border border-primary/20 rounded text-[10px] font-bold uppercase tracking-wide">
                                 Pro Traveler
                             </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                    <div className="text-center flex-1 border-r border-white/10">
                        <span className="block text-2xl font-bold">12</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Países</span>
                    </div>
                    <div className="text-center flex-1 border-r border-white/10">
                        <span className="block text-2xl font-bold">14.5k</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Km</span>
                    </div>
                    <div className="text-center flex-1">
                        <span className="block text-2xl font-bold">342</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Fotos</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="px-6 space-y-6">
           
           {/* Travel Map Preview */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-[2rem] p-1 shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden"
           >
               <div className="bg-slate-50 rounded-[1.8rem] h-48 relative overflow-hidden group cursor-pointer">
                   <img src={mapTexture} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 group-hover:scale-110 transition-transform">
                            <Map size={16} /> Ver Mapa Mundial
                        </button>
                   </div>
               </div>
           </motion.div>

           {/* Passport / Achievements */}
           <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                        <Award size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm">Logros</h3>
                        <p className="text-xs text-slate-500">12 Desbloqueados</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                     <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                        <Globe size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm">Pasaporte</h3>
                        <p className="text-xs text-slate-500">Ver Estampas</p>
                    </div>
                </div>
           </div>

           {/* Menu */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <Bell size={20} />
                        </div>
                        <span className="font-bold text-slate-700">Notificaciones</span>
                    </div>
                    <Switch />
                </div>
                <div className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <Heart size={20} />
                        </div>
                        <span className="font-bold text-slate-700">Favoritos</span>
                    </div>
                    <ChevronRight size={20} className="text-slate-300" />
                </div>
                <div className="p-4 hover:bg-red-50 cursor-pointer flex items-center justify-between group">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                            <LogOut size={20} />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-red-500 transition-colors">Cerrar Sesión</span>
                    </div>
                </div>
           </div>

        </div>
      </div>
    </Layout>
  );
}
