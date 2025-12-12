import Layout from "@/components/layout";
import { Bell, MapPin, Search, Star, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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

const featuredDestinations = [
  {
    id: 1,
    title: "Cartagena Mágica",
    location: "Colombia",
    rating: 4.9,
    price: "$120",
    image: cartagenaImg,
    category: "Cultura",
    isHot: true
  },
  {
    id: 2,
    title: "Kyoto Zen",
    location: "Japón",
    rating: 4.8,
    price: "$180",
    image: kyotoImg,
    category: "Historia",
    isHot: false
  },
  {
    id: 3,
    title: "Paris Romántico",
    location: "Francia",
    rating: 4.7,
    price: "$250",
    image: parisImg,
    category: "Ciudad",
    isHot: true
  }
];

const exploreDestinations = [
  { id: 4, title: "Rio Vibrante", location: "Brasil", image: rioImg, likes: 2340 },
  { id: 5, title: "Santorini Blue", location: "Grecia", image: santoriniImg, likes: 1890 },
  { id: 6, title: "Alpes Suizos", location: "Suiza", image: swissImg, likes: 3100 },
];

const activeUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil },
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-20">
        
        {/* Top Header */}
        <div className="px-6 pt-12 pb-6 flex justify-between items-center bg-white sticky top-0 z-30 shadow-sm border-b border-slate-100/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden ring-2 ring-primary/10">
                 <img src={adminAvatar} alt="Admin" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Bienvenido</p>
              <h2 className="text-lg font-bold text-slate-900 leading-none font-serif">Mateo Viajero</h2>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>

        {/* Hero Search Section */}
        <div className="px-6 py-6">
           <h1 className="text-4xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
             Descubre lo <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 italic font-bold">Inexplorado</span>
           </h1>
           
           <div className="relative shadow-xl shadow-slate-200/50 rounded-2xl">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <Input 
               placeholder="¿A dónde quieres ir hoy?" 
               className="pl-12 h-14 rounded-2xl border-none bg-white font-medium text-slate-600 focus-visible:ring-1 focus-visible:ring-primary/50" 
             />
             <div className="absolute right-2 top-2 h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                <MapPin size={20} />
             </div>
           </div>
        </div>

        {/* Active Travelers Section */}
        <div className="pl-6 mb-8">
           <div className="flex justify-between items-center pr-6 mb-4">
              <h3 className="font-bold text-slate-800 text-lg">Viajeros Activos</h3>
              <span className="text-xs font-bold text-primary cursor-pointer">Ver todos</span>
           </div>
           
           <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 pr-6">
              {activeUsers.map((user, i) => (
                <motion.div 
                  key={user.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 shrink-0"
                >
                   <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-primary to-blue-400">
                      <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                   </div>
                   <span className="text-xs font-medium text-slate-600">{user.country}</span>
                </motion.div>
              ))}
              <div className="flex flex-col items-center gap-2 shrink-0">
                 <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 bg-slate-50">
                    <span className="text-xs font-bold">+12</span>
                 </div>
                 <span className="text-xs font-medium text-slate-400">Más</span>
              </div>
           </div>
        </div>

        {/* Featured Destinations (Carousel) */}
        <div className="mb-10">
           <div className="px-6 mb-4 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Tendencias</h3>
                <p className="text-sm text-slate-500">Los destinos más populares ahora</p>
              </div>
           </div>

           <div className="flex gap-5 overflow-x-auto hide-scrollbar px-6 pb-8 snap-x">
              {featuredDestinations.map((dest, i) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="relative w-[280px] h-[380px] shrink-0 rounded-[2rem] overflow-hidden shadow-xl snap-center group cursor-pointer"
                >
                   <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                   
                   <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/20 text-white font-normal">
                         {dest.category}
                      </Badge>
                      {dest.isHot && (
                        <Badge className="bg-orange-500 text-white border-none animate-pulse">
                           🔥 Hot
                        </Badge>
                      )}
                   </div>

                   <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                         <Heart size={20} />
                      </button>
                   </div>

                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex justify-between items-end mb-2">
                         <h3 className="text-2xl font-bold font-serif leading-none">{dest.title}</h3>
                         <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold">{dest.rating}</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                         <MapPin size={16} />
                         {dest.location}
                      </div>
                      <div className="flex items-center justify-between">
                         <div>
                            <span className="text-xs text-white/60 block">Desde</span>
                            <span className="text-xl font-bold">{dest.price}</span>
                         </div>
                         <Button size="sm" className="rounded-full bg-white text-slate-900 hover:bg-white/90 font-bold px-6">
                            Ver
                         </Button>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Explore Grid (Masonry-ish) */}
        <div className="px-6">
           <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
             Explora el Mundo <ArrowRight size={20} className="text-slate-400" />
           </h3>
           
           <div className="grid grid-cols-2 gap-4">
              {exploreDestinations.map((item, i) => (
                 <motion.div
                   key={item.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 + i * 0.1 }}
                   className={`relative rounded-3xl overflow-hidden shadow-md group ${i === 2 ? 'col-span-2 aspect-[2/1]' : 'aspect-[3/4]'}`}
                 >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 left-4 text-white">
                       <h4 className="font-bold text-lg drop-shadow-md">{item.title}</h4>
                       <p className="text-xs text-white/90 flex items-center gap-1 drop-shadow-sm">
                          <MapPin size={12} /> {item.location}
                       </p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

      </div>
    </Layout>
  );
}
