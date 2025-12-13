import Layout from "@/components/layout";
import { Bell, MapPin, Search, Star, ArrowRight, Globe, Plus, Camera, Video, Image as ImageIcon, Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
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
import abstractBg from "@assets/generated_images/abstract_neon_background_with_grape,_pineapple,_kiwi,_and_raspberry_colors.png";

import { Link } from "wouter";

const activeUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan, status: "Kyoto" },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance, status: "Paris" },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil, status: "Rio" },
];

const feedItems = [
  {
    id: 1,
    user: { name: "Ana Silva", avatar: userBrazil, location: "Rio de Janeiro, Brasil" },
    image: rioImg,
    caption: "Sunset vibes at Copacabana! 🌅✨ #Brasil #Travel",
    likes: 342,
    comments: 28,
    time: "2h ago"
  },
  {
    id: 2,
    user: { name: "Pierre Dubois", avatar: userFrance, location: "Paris, France" },
    image: parisImg,
    caption: "Coffee and croissants by the Seine. 🥐☕️",
    likes: 892,
    comments: 54,
    time: "5h ago"
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 relative overflow-hidden">
        
        {/* Neon Abstract Background Blob */}
        <div className="absolute top-0 left-0 w-full h-[500px] z-0 opacity-20 pointer-events-none">
           <img src={abstractBg} className="w-full h-full object-cover mask-gradient-b" alt="bg" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50" />
        </div>

        {/* Header Minimalista */}
        <div className="px-6 pt-14 pb-4 flex justify-between items-center bg-white/60 backdrop-blur-xl sticky top-0 z-30 border-b border-white/20">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-neon-grape shadow-lg shadow-neon-grape/20">
                 <img src={adminAvatar} alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div>
                <h2 className="text-sm font-bold text-slate-900 leading-tight">Mateo Viajero</h2>
                <p className="text-[10px] text-neon-grape font-bold uppercase tracking-wider flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-neon-grape animate-pulse"/> En línea
                </p>
             </div>
          </div>
          <Button size="icon" variant="ghost" className="rounded-full text-slate-500 hover:text-neon-raspberry hover:bg-neon-raspberry/10 transition-colors">
             <Bell size={20} />
          </Button>
        </div>

        {/* Stories / Quick Actions */}
        <div className="mt-6 mb-8 px-6">
           <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              <Link href="/create-trip">
                <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                   <div className="w-16 h-16 rounded-[1.5rem] border-2 border-dashed border-neon-grape/50 flex items-center justify-center text-neon-grape bg-neon-grape/5 group-hover:bg-neon-grape/10 transition-colors">
                      <Plus size={24} />
                   </div>
                   <span className="text-xs font-bold text-slate-600">Crear</span>
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
                   <div className="w-16 h-16 rounded-[1.5rem] p-[2px] bg-gradient-to-tr from-neon-kiwi to-neon-pineapple group-hover:shadow-lg group-hover:shadow-neon-kiwi/30 transition-all">
                      <div className="w-full h-full rounded-[1.4rem] border-2 border-white overflow-hidden relative">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                   </div>
                   <span className="text-xs font-medium text-slate-500">{user.name}</span>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Featured Hero Card */}
        <div className="px-6 mb-8 relative z-10">
           <div className="bg-slate-900 rounded-[2.5rem] p-1 shadow-2xl shadow-neon-grape/20 overflow-hidden relative group cursor-pointer h-[320px]">
              <div className="absolute inset-0">
                 <img src={cartagenaImg} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Map bg" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-between p-6">
                 <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs font-bold text-white border border-white/10 flex items-center gap-2 shadow-lg">
                       <div className="w-2 h-2 rounded-full bg-neon-kiwi animate-pulse shadow-[0_0_10px_theme(colors.neon.kiwi)]" />
                       Viaje Activo
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2 text-white border border-white/10 hover:bg-white/20 transition-colors">
                       <Globe size={18} />
                    </div>
                 </div>

                 <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="px-2 py-0.5 rounded-md bg-neon-raspberry text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-neon-raspberry/40">
                         Día 4
                       </span>
                       <span className="text-white/80 text-xs font-medium uppercase tracking-widest">Colombia</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-white mb-4 leading-[0.9] tracking-tight">
                      Explorando<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pineapple to-neon-kiwi">Cartagena</span>
                    </h1>
                    
                    <div className="flex items-center gap-4">
                       <div className="flex -space-x-3">
                          {[adminAvatar, userFrance, userJapan].map((img, i) => (
                             <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-900 overflow-hidden ring-1 ring-white/20">
                                <img src={img} className="w-full h-full object-cover" alt="User" />
                             </div>
                          ))}
                       </div>
                       <div className="h-8 w-[1px] bg-white/20" />
                       <div className="text-white">
                          <p className="text-sm font-bold font-mono text-neon-pineapple">342 km</p>
                          <p className="text-[10px] text-white/60">Recorridos</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feed Section */}
        <div className="px-6 space-y-8">
           <h3 className="font-bold text-slate-900 text-xl flex items-center gap-2">
             <span className="w-2 h-8 rounded-full bg-neon-raspberry" />
             Tu Feed
           </h3>

           {feedItems.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
             >
                <div className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-neon-grape to-neon-raspberry">
                         <img src={item.user.avatar} className="w-full h-full rounded-full border-2 border-white object-cover" alt={item.user.name} />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm text-slate-900">{item.user.name}</h4>
                         <p className="text-xs text-slate-500 flex items-center gap-1">
                           <MapPin size={10} className="text-neon-grape" /> {item.user.location}
                         </p>
                      </div>
                   </div>
                   <Button variant="ghost" size="icon" className="text-slate-400">
                      <MoreHorizontal size={20} />
                   </Button>
                </div>
                
                <div className="aspect-[4/5] relative bg-slate-100">
                   <img src={item.image} className="w-full h-full object-cover" alt="Post" />
                </div>

                <div className="p-4">
                   <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                         <button className="text-slate-800 hover:text-neon-raspberry transition-colors">
                            <Heart size={24} />
                         </button>
                         <button className="text-slate-800 hover:text-neon-grape transition-colors">
                            <MessageCircle size={24} />
                         </button>
                         <button className="text-slate-800 hover:text-neon-pineapple transition-colors">
                            <Share2 size={24} />
                         </button>
                      </div>
                      <button className="text-slate-800">
                         <span className="text-sm font-bold">{item.likes} likes</span>
                      </button>
                   </div>
                   <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-bold mr-2">{item.user.name}</span>
                      {item.caption}
                   </p>
                   <p className="text-xs text-slate-400 mt-2 uppercase tracking-wide font-medium">{item.time}</p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </Layout>
  );
}
