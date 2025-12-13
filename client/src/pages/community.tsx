import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { MapPin, Heart, MessageCircle, Share2, MoreHorizontal, UserPlus } from "lucide-react";
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/stylish_female_traveler_avatar.png";
import santoriniImg from "@assets/generated_images/santorini_white_buildings.png";
import icelandImg from "@assets/generated_images/iceland_waterfall_landscape.png";
import resortImg from "@assets/generated_images/tropical_beach_luxury_resort.png";

const feedItems = [
  {
    id: 1,
    user: "Ana Silva",
    avatar: userBrazil,
    location: "Maldivas",
    time: "Hace 2 horas",
    image: resortImg,
    caption: "Despertar aquí es como vivir en un sueño. 🌊✨ La tranquilidad de las Maldivas no tiene comparación.",
    likes: 1240,
    comments: 45
  },
  {
    id: 2,
    user: "Pierre Dubois",
    avatar: userFrance,
    location: "Islandia",
    time: "Hace 5 horas",
    image: icelandImg,
    caption: "La fuerza de la naturaleza en su máxima expresión. Islandia te roba el aliento en cada esquina. 🇮🇸🏔️ #Adventure #Nature",
    likes: 892,
    comments: 32
  },
  {
    id: 3,
    user: "Yuki Tanaka",
    avatar: userJapan,
    location: "Santorini, Grecia",
    time: "Ayer",
    image: santoriniImg,
    caption: "Azul y blanco hasta donde alcanza la vista. 🇬🇷💙 Un atardecer que nunca olvidaré.",
    likes: 2100,
    comments: 120
  }
];

export default function Community() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        {/* Header */}
        <div className="px-6 pt-14 pb-4 sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-100/50">
            <h1 className="text-2xl font-bold text-slate-900">Comunidad</h1>
            <p className="text-sm text-slate-500">Inspírate con viajeros de todo el mundo</p>
        </div>

        {/* Stories/Featured Users - Horizontal Scroll */}
        <div className="py-6 border-b border-slate-100 bg-white mb-4">
             <div className="px-6 flex gap-4 overflow-x-auto hide-scrollbar">
                {[userBrazil, userFrance, userJapan, userBrazil, userFrance].map((avatar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
                        <div className="w-[68px] h-[68px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                                <img src={avatar} className="w-full h-full object-cover" alt="User" />
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">Traveler {i+1}</span>
                    </div>
                ))}
             </div>
        </div>

        {/* Feed */}
        <div className="px-4 space-y-6">
            {feedItems.map((item, i) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100"
                >
                    {/* Post Header */}
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-slate-100 overflow-hidden">
                                <img src={item.avatar} className="w-full h-full object-cover" alt={item.user} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">{item.user}</h3>
                                <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                                    <MapPin size={10} /> {item.location}
                                </p>
                            </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    {/* Image */}
                    <div className="w-full aspect-[4/5] bg-slate-100 relative group cursor-pointer">
                        <img src={item.image} className="w-full h-full object-cover" alt="Post" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-8 text-white/90">
                             <div className="flex flex-col items-center gap-1">
                                 <Heart size={32} fill="white" />
                                 <span className="font-bold">{item.likes}</span>
                             </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                                <button className="text-slate-900 hover:text-red-500 transition-colors">
                                    <Heart size={24} />
                                </button>
                                <button className="text-slate-900 hover:text-blue-500 transition-colors">
                                    <MessageCircle size={24} />
                                </button>
                                <button className="text-slate-900 hover:text-green-500 transition-colors">
                                    <Share2 size={24} />
                                </button>
                            </div>
                            <button className="text-slate-900 hover:opacity-70 transition-opacity">
                                <UserPlus size={24} />
                            </button>
                        </div>
                        
                        <div className="mb-2">
                             <span className="text-sm font-bold text-slate-900">{item.likes} Me gusta</span>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed mb-2">
                            <span className="font-bold mr-2">{item.user}</span>
                            {item.caption}
                        </p>

                        <p className="text-[10px] text-slate-400 uppercase font-medium mt-3">
                            {item.time}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
