import Layout from "@/components/layout";
import { Bell, Search, MapPin, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Assets
import avatar from "@assets/generated_images/modern_avatar_male.png";
import mapBg from "@assets/generated_images/abstract_map_background.png";
import mountainImg from "@assets/generated_images/cinematic_mountain_trip.png";
import cityImg from "@assets/generated_images/cyberpunk_city_trip.png";

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen pb-20 bg-slate-50">
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-12 pb-4 flex justify-between items-center bg-gradient-to-b from-white/90 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden">
               <img src={avatar} alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Hola,</p>
              <h2 className="text-lg font-bold text-slate-900 leading-none">Alex Traveler</h2>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-slate-600">
            <Bell size={20} />
          </Button>
        </div>

        {/* Map Area */}
        <div className="h-[45vh] w-full relative overflow-hidden rounded-b-[2.5rem] shadow-2xl shadow-slate-200 z-0">
           <img src={mapBg} alt="Map" className="w-full h-full object-cover opacity-80" />
           
           {/* Floating Map Card */}
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4"
           >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <MapPin size={24} />
              </div>
              <div className="flex-1">
                 <p className="text-xs text-slate-500 font-medium uppercase">Ubicación Actual</p>
                 <h3 className="font-bold text-slate-900">Kyoto, Japón</h3>
              </div>
              <Button size="sm" className="rounded-full bg-primary h-8 px-4 text-xs font-bold">Check-in</Button>
           </motion.div>
        </div>

        {/* Recent Activity / Content */}
        <div className="px-6 pt-8 space-y-8">
           
           {/* Section Header */}
           <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Tus Viajes Activos</h3>
              <span className="text-sm font-medium text-primary cursor-pointer">Ver todos</span>
           </div>

           {/* Cards Scroll */}
           <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6">
              
              {/* Card 1 */}
              <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="w-[280px] h-[340px] shrink-0 relative rounded-[2rem] overflow-hidden group shadow-lg"
              >
                 <img src={mountainImg} alt="Trip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                 
                 <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-xs font-bold text-white">
                       En curso
                    </div>
                 </div>

                 <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Alpes Suizos</h3>
                    <p className="text-white/80 text-sm mb-4">12 Oct - 24 Oct</p>
                    
                    <div className="flex items-center gap-2">
                       <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />
                       </div>
                       <span className="text-xs text-white/80 font-medium">+3 amigos</span>
                    </div>
                 </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="w-[280px] h-[340px] shrink-0 relative rounded-[2rem] overflow-hidden group shadow-lg"
              >
                 <img src={cityImg} alt="Trip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                 
                 <div className="absolute top-4 right-4">
                    <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-white">
                       Planeado
                    </div>
                 </div>

                 <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Tokyo Neon</h3>
                    <p className="text-white/80 text-sm mb-4">15 Nov - 30 Nov</p>
                    
                    <Button variant="secondary" size="sm" className="w-full rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30">
                       Ver Detalles
                    </Button>
                 </div>
              </motion.div>

           </div>

           {/* Stats Row */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                    <MapPin size={20} />
                 </div>
                 <span className="text-3xl font-bold text-slate-900">12</span>
                 <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Países Visitados</span>
              </div>
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mb-2">
                    <Map size={20} />
                 </div>
                 <span className="text-3xl font-bold text-slate-900">84%</span>
                 <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Mundo por Explorar</span>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
