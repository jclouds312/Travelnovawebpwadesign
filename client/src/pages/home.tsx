import Layout from "@/components/layout";
import { Link } from "wouter";
import { Bell, MapPin, Search, Star, ArrowRight, Globe, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Assets - Avatars
import adminAvatar from "@assets/generated_images/colombian_male_traveler_avatar.png";
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/brazilian_female_traveler_avatar.png";

// Assets - Destinations
import cartagenaImg from "@assets/generated_images/cartagena_colombia_destination.png";
import kyotoImg from "@assets/generated_images/kyoto_japan_destination.png";
import parisImg from "@assets/generated_images/paris_france_destination.png";
import rioImg from "@assets/generated_images/rio_de_janeiro_destination.png";
import santoriniImg from "@assets/generated_images/santorini_greece_luxury.png";
import swissImg from "@assets/generated_images/swiss_alps_hiking.png";

const activeUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan, status: "Kyoto" },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance, status: "Paris" },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil, status: "Rio" },
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24">
        
        {/* Header Minimalista */}
        <div className="px-6 pt-14 pb-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-100">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                 <img src={adminAvatar} alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div>
                <h2 className="text-sm font-bold text-slate-900 leading-tight">Mateo Viajero</h2>
                <p className="text-[10px] text-primary font-medium uppercase tracking-wider flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/> En línea
                </p>
             </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100">
             <Bell size={20} />
          </Button>
        </div>

        {/* Hero Map Widget (Polarsteps Style) */}
        <div className="px-6 py-6">
           <div className="bg-slate-900 rounded-[2rem] p-1 shadow-2xl shadow-slate-200 overflow-hidden relative group cursor-pointer h-[280px]">
              <div className="absolute inset-0">
                 <img src={cartagenaImg} className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500" alt="Map bg" />
                 {/* Decorative Map Lines/Dots overlay could go here */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
              </div>

              <div className="relative h-full flex flex-col justify-between p-6">
                 <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                       Viaje Activo
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2 text-white border border-white/10">
                       <Globe size={18} />
                    </div>
                 </div>

                 <div>
                    <p className="text-slate-300 text-xs font-medium uppercase tracking-widest mb-1">Día 4 • Colombia</p>
                    <h1 className="text-3xl font-bold text-white mb-2 leading-tight">Explorando<br/>Cartagena</h1>
                    
                    <div className="flex items-center gap-4 mt-4">
                       <div className="flex -space-x-3">
                          {[adminAvatar, userFrance, userJapan].map((img, i) => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 overflow-hidden">
                                <img src={img} className="w-full h-full object-cover" alt="User" />
                             </div>
                          ))}
                       </div>
                       <div className="h-8 w-[1px] bg-white/20" />
                       <div className="text-white">
                          <p className="text-sm font-bold">342 km</p>
                          <p className="text-[10px] text-white/60">Recorridos</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Stats / Quick Actions */}
        <div className="px-6 mb-8 flex gap-4">
           <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                 <MapPin size={20} />
              </div>
              <div>
                 <p className="text-xl font-bold text-slate-900">12</p>
                 <p className="text-xs text-slate-400 font-medium">Países</p>
              </div>
           </div>
           <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                 <Globe size={20} />
              </div>
              <div>
                 <p className="text-xl font-bold text-slate-900">84%</p>
                 <p className="text-xs text-slate-400 font-medium">Mundo</p>
              </div>
           </div>
        </div>

        {/* Community Feed (Horizontal) */}
        <div className="mb-8">
           <div className="px-6 mb-4 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 text-lg">Viajeros que sigues</h3>
           </div>
           <div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-2">
              <Link href="/community">
                <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer">
                   <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors bg-white">
                      <Plus size={24} />
                   </div>
                   <span className="text-xs font-medium text-slate-500">Buscar</span>
                </div>
              </Link>
              {activeUsers.map((user, i) => (
                <motion.div 
                  key={user.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
                >
                   <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-primary to-transparent group-hover:from-primary group-hover:to-primary transition-all">
                      <div className="w-full h-full rounded-full border-2 border-white overflow-hidden relative">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                   </div>
                   <div className="text-center">
                      <span className="text-xs font-bold text-slate-700 block">{user.name}</span>
                      <span className="text-[10px] text-slate-400 block">{user.status}</span>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Inspirational Destinations */}
        <div className="px-6 space-y-6">
           <h3 className="font-bold text-slate-900 text-lg">Inspiración Semanal</h3>
           
           {[
             { title: "Escapada a Kyoto", loc: "Japón", img: kyotoImg, days: "7 días" },
             { title: "Alpes Suizos", loc: "Suiza", img: swissImg, days: "5 días" },
             { title: "Verano en Santorini", loc: "Grecia", img: santoriniImg, days: "10 días" },
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + i * 0.1 }}
               className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 flex gap-4 cursor-pointer hover:shadow-md transition-all group"
             >
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                </div>
                <div className="flex-1 py-1 flex flex-col justify-center">
                   <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                   <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                      <MapPin size={12} /> {item.loc}
                   </div>
                   <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium bg-slate-100 px-2 py-1 rounded-md text-slate-600">{item.days}</span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </Layout>
  );
}
