import Layout from "@/components/layout";
import { Search, UserPlus, MapPin, Star, MessageSquare, Heart, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Reuse assets
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/brazilian_female_traveler_avatar.png";
import adminAvatar from "@assets/generated_images/colombian_male_traveler_avatar.png";
import santoriniImg from "@assets/generated_images/santorini_greece_luxury.png";
import kyotoImg from "@assets/generated_images/kyoto_japan_destination.png";
import swissImg from "@assets/generated_images/swiss_alps_hiking.png";

const allUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan, status: "Explorando Kyoto", followers: 1240 },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance, status: "En Paris", followers: 850 },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil, status: "Relax en Rio", followers: 2100 },
  { id: 4, name: "Mateo", country: "Colombia", avatar: adminAvatar, status: "Cartagena Trip", followers: 340 },
];

const communityTrips = [
   {
      id: 1,
      title: "Japón: Tradición y Modernidad",
      author: { name: "Yuki", avatar: userJapan },
      image: kyotoImg,
      location: "Kyoto, Japón",
      rating: 5,
      likes: 124,
      review: "Un viaje inolvidable por los templos antiguos y las calles vibrantes de Tokyo. La comida es espectacular y la gente muy amable.",
      tags: ["Cultura", "Gastronomía", "Historia"]
   },
   {
      id: 2,
      title: "Senderismo en los Alpes",
      author: { name: "Pierre", avatar: userFrance },
      image: swissImg,
      location: "Zermatt, Suiza",
      rating: 4.8,
      likes: 89,
      review: "Las vistas del Matterhorn son impresionantes. Recomiendo ir en verano para disfrutar de las rutas de senderismo sin nieve extrema.",
      tags: ["Naturaleza", "Aventura", "Montaña"]
   },
   {
      id: 3,
      title: "Atardeceres en Oia",
      author: { name: "Ana", avatar: userBrazil },
      image: santoriniImg,
      location: "Santorini, Grecia",
      rating: 4.9,
      likes: 210,
      review: "El lugar más romántico del mundo. Los atardeceres son mágicos, aunque hay mucha gente en temporada alta.",
      tags: ["Romántico", "Playa", "Relax"]
   }
];

export default function Community() {
  return (
    <Layout>
      <div className="pt-8 pb-24 px-6 min-h-screen bg-slate-50">
        <div className="mb-6">
           <h1 className="text-2xl font-bold text-slate-900 mb-2">Comunidad Global</h1>
           <p className="text-sm text-slate-500">Descubre viajes y reseñas de otros viajeros</p>
        </div>

        <div className="relative mb-8">
           <Search className="absolute left-3 top-3 text-slate-400" size={20} />
           <Input placeholder="Buscar viajes, reseñas, personas..." className="pl-10 h-12 bg-white border-slate-200 rounded-xl focus-visible:ring-primary shadow-sm" />
        </div>

        <h2 className="text-lg font-bold text-slate-800 mb-4">Viajeros Destacados</h2>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 mb-6">
           {allUsers.map(user => (
             <div key={user.id} className="min-w-[140px] bg-white p-3 rounded-2xl shadow-sm border border-neon-silver flex flex-col items-center gap-2 hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-grape to-neon-pineapple opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 p-0.5">
                   <img src={user.avatar} className="w-full h-full object-cover rounded-full" alt={user.name} />
                </div>
                <div className="text-center">
                   <h3 className="font-bold text-sm text-slate-900">{user.name}</h3>
                   <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500">
                      <MapPin size={8} /> {user.country}
                   </div>
                </div>
                <Button size="sm" variant="outline" className="w-full rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-colors h-7 text-[10px] px-2">
                   Seguir
                </Button>
             </div>
           ))}
        </div>

        <h2 className="text-lg font-bold text-slate-800 mb-4">Reseñas Recientes</h2>
        <div className="space-y-6">
           {communityTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-neon-gold hover:shadow-md transition-shadow cursor-pointer group">
                 <div className="relative h-48">
                    <img src={trip.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={trip.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                       <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none text-[10px] h-5">
                             {trip.location}
                          </Badge>
                          <div className="flex items-center text-neon-gold">
                             <Star size={12} fill="currentColor" />
                             <span className="text-xs font-bold ml-1">{trip.rating}</span>
                          </div>
                       </div>
                       <h3 className="text-lg font-bold leading-tight">{trip.title}</h3>
                    </div>
                 </div>
                 
                 <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                       <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                             <img src={trip.author.avatar} className="w-full h-full object-cover" alt={trip.author.name} />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{trip.author.name}</span>
                       </div>
                       <span className="text-xs text-slate-400">Hace 2 días</span>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{trip.review}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                       {trip.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-600">
                             #{tag}
                          </span>
                       ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                       <div className="flex gap-4">
                          <button className="flex items-center gap-1 text-slate-400 hover:text-neon-raspberry transition-colors">
                             <Heart size={16} />
                             <span className="text-xs font-medium">{trip.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-slate-400 hover:text-neon-grape transition-colors">
                             <MessageSquare size={16} />
                             <span className="text-xs font-medium">Comentar</span>
                          </button>
                       </div>
                       <button className="text-slate-400 hover:text-neon-pineapple transition-colors">
                          <Share2 size={16} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </Layout>
  )
}
