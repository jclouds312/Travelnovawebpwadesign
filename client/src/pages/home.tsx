import Layout from "@/components/layout";
import { Bell, MapPin, Globe, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Assets - Avatars
import adminAvatar from "@assets/generated_images/cool_male_traveler_avatar.png";
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/stylish_female_traveler_avatar.png";

// Assets - Destinations
import kyotoImg from "@assets/generated_images/kyoto_street_at_dusk.png";
import icelandImg from "@assets/generated_images/iceland_waterfall_landscape.png";
import santoriniImg from "@assets/generated_images/santorini_white_buildings.png";
import mapTexture from "@assets/generated_images/dark_stylish_map_texture.png";

const activeUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan, status: "Kyoto", hasStory: true },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance, status: "Paris", hasStory: false },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil, status: "Rio", hasStory: true },
];

const featuredTrips = [
  { 
    id: 1, 
    title: "Otoño en Kyoto", 
    location: "Japón", 
    image: kyotoImg, 
    days: "7 días", 
    price: "$2,400",
    likes: 1240 
  },
  { 
    id: 2, 
    title: "Ruta de Cascadas", 
    location: "Islandia", 
    image: icelandImg, 
    days: "5 días", 
    price: "$1,800",
    likes: 856 
  },
  { 
    id: 3, 
    title: "Sunset Luxury", 
    location: "Santorini", 
    image: santoriniImg, 
    days: "10 días", 
    price: "$3,200",
    likes: 2100 
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header */}
        <div className="px-6 pt-14 pb-4 flex justify-between items-center bg-white/80 backdrop-blur-xl sticky top-0 z-40 border-b border-slate-100/50">
          <div className="flex items-center gap-3">
             <div className="relative">
               <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                   <img src={adminAvatar} alt="Profile" className="w-full h-full object-cover" />
               </div>
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
             </div>
             <div>
                <h2 className="text-sm font-bold text-slate-900 leading-tight">Hola, Mateo</h2>
                <p className="text-[11px] text-slate-500 font-medium">¿A dónde vamos hoy?</p>
             </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">
             <Bell size={20} />
          </Button>
        </div>

        {/* Stories Section */}
        <div className="pt-6 pb-2 pl-6 overflow-x-auto hide-scrollbar flex gap-4">
            <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-[68px] h-[68px] rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-primary bg-white shadow-sm cursor-pointer hover:border-primary transition-colors">
                    <Plus size={24} />
                </div>
                <span className="text-[11px] font-medium text-slate-600">Tu Historia</span>
            </div>
            {activeUsers.map((user, i) => (
                <div key={user.id} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                    <div className={`w-[72px] h-[72px] rounded-full p-[3px] ${user.hasStory ? 'bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500' : 'bg-slate-200'}`}>
                        <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-600">{user.name}</span>
                </div>
            ))}
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Search size={20} />
                </div>
                <input 
                    type="text" 
                    placeholder="Buscar destinos, amigos..." 
                    className="w-full bg-white pl-10 pr-12 py-3.5 rounded-2xl shadow-sm border border-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400"
                />
                <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-slate-400 hover:text-slate-600">
                    <div className="border-l border-slate-200 pl-3 h-5 flex items-center">
                        <Filter size={18} />
                    </div>
                </div>
            </div>
        </div>

        {/* Hero Widget - Current Trip */}
        <div className="px-6 mb-8">
           <div className="flex justify-between items-end mb-4 px-1">
               <h3 className="font-bold text-slate-900 text-xl">Viaje Actual</h3>
               <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">Ver mapa</span>
           </div>
           
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="bg-slate-900 rounded-[2rem] p-1 shadow-2xl shadow-slate-900/20 overflow-hidden relative group cursor-pointer h-[320px]"
           >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                 <img src={kyotoImg} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Trip" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                 
                 {/* Map Texture Overlay for Tech feel */}
                 <img src={mapTexture} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" alt="Texture" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-7">
                 <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse box-shadow-glow" />
                       En curso
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2.5 text-white border border-white/20 shadow-lg">
                       <Globe size={20} />
                    </div>
                 </div>

                 <div>
                    <div className="mb-4">
                        <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                            <MapPin size={12} className="text-primary" /> Kyoto, Japón
                        </p>
                        <h1 className="text-4xl font-extrabold text-white leading-none tracking-tight">
                            Memorias<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">de Geisha</span>
                        </h1>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/10 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                           <div className="flex -space-x-2">
                              {[adminAvatar, userFrance].map((img, i) => (
                                 <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 overflow-hidden">
                                    <img src={img} className="w-full h-full object-cover" alt="User" />
                                 </div>
                              ))}
                           </div>
                           <div className="text-white/90 text-xs font-medium">
                               +2 amigos
                           </div>
                       </div>
                       <div className="h-8 w-[1px] bg-white/10" />
                       <div className="text-white text-right">
                          <p className="text-sm font-bold">Día 4</p>
                          <p className="text-[10px] text-white/50 uppercase">De 12</p>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Featured Destinations (Horizontal Scroll) */}
        <div className="mb-8">
           <div className="px-6 mb-5 flex justify-between items-end">
              <div>
                  <h3 className="font-bold text-slate-900 text-xl">Para ti</h3>
                  <p className="text-xs text-slate-400 mt-1">Basado en tus intereses</p>
              </div>
              <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">Ver todo</span>
           </div>

           <div className="flex gap-5 overflow-x-auto hide-scrollbar px-6 pb-8 snap-x snap-mandatory">
              {featuredTrips.map((trip, i) => (
                <motion.div 
                  key={trip.id}
                  className="min-w-[280px] snap-center bg-white rounded-[1.5rem] p-3 shadow-lg shadow-slate-200/50 border border-slate-100 group cursor-pointer"
                  whileTap={{ scale: 0.98 }}
                >
                   <div className="w-full h-48 rounded-[1.2rem] overflow-hidden relative mb-4">
                      <img src={trip.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={trip.title} />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                          {trip.price}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-medium text-white flex items-center gap-1">
                          <MapPin size={10} /> {trip.location}
                      </div>
                   </div>
                   <div className="px-2 pb-2">
                       <h4 className="font-bold text-slate-900 text-lg mb-1">{trip.title}</h4>
                       <div className="flex justify-between items-center mt-3">
                           <div className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                               {trip.days}
                           </div>
                           <div className="text-xs font-medium text-slate-400 flex items-center gap-1">
                               <span className="text-red-500">♥</span> {trip.likes}
                           </div>
                       </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </Layout>
  );
}
