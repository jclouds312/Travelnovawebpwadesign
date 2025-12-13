import Layout from "@/components/layout";
import { Settings, CreditCard, Bell, LogOut, ChevronRight, MapPin, Camera, Heart, Globe, Award, Shield, Plane, BookOpen, Star, User, Image as ImageIcon, Video } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import abstractBg from "@assets/generated_images/abstract_neon_background_with_grape,_pineapple,_kiwi,_and_raspberry_colors.png";
import modernAvatar from "@assets/generated_images/modern_3d_style_profile_avatar_of_a_cool_traveler.png";
import cartagenaImg from "@assets/generated_images/cartagena_colombia_destination.png";
import kyotoImg from "@assets/generated_images/kyoto_japan_destination.png";
import parisImg from "@assets/generated_images/paris_france_destination.png";
import swissImg from "@assets/generated_images/swiss_alps_hiking.png";

const myTrips = [
  { id: 1, title: "Cartagena Escape", location: "Colombia", date: "Oct 2024", image: cartagenaImg, status: "En curso" },
  { id: 2, title: "Sueño Japonés", location: "Japón", date: "Sep 2023", image: kyotoImg, status: "Completado" },
  { id: 3, title: "Eurotrip Clásico", location: "Francia, Suiza", date: "Jul 2023", image: parisImg, status: "Completado" },
];

const myPosts = [
  { id: 1, image: swissImg, likes: 234, comments: 12 },
  { id: 2, image: cartagenaImg, likes: 543, comments: 45 },
  { id: 3, image: kyotoImg, likes: 890, comments: 89 },
  { id: 4, image: parisImg, likes: 120, comments: 5 },
];

export default function Profile() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    // In a real app, we would clear auth tokens here
    // For mockup, we redirect to login
    setLocation("/login");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 relative pb-32">
        {/* Header Background */}
        <div className="h-48 relative overflow-hidden rounded-b-[2.5rem] shadow-xl shadow-neon-grape/10">
           <img src={abstractBg} className="w-full h-full object-cover" alt="Cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>

        {/* Profile Card */}
        <div className="px-6 relative -top-16 mb-4">
           <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-grape via-neon-raspberry to-neon-pineapple" />
              
              <div className="flex flex-col items-center">
                 <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-tr from-neon-gold to-neon-silver shadow-lg mb-4 relative">
                    <img src={modernAvatar} className="w-full h-full rounded-full border-4 border-white object-cover" alt="Profile" />
                    <div className="absolute bottom-1 right-1 bg-neon-kiwi border-2 border-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                       <Award size={16} className="text-slate-900" />
                    </div>
                 </div>
                 
                 <h1 className="text-3xl font-bold text-slate-900 mb-1">Mateo Viajero</h1>
                 <p className="text-slate-500 text-sm mb-4 font-medium flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                    <MapPin size={12} className="text-neon-raspberry" /> Bogota, Colombia
                 </p>
                 
                 <p className="text-center text-slate-600 text-sm mb-6 max-w-xs leading-relaxed">
                    Explorando el mundo un café a la vez ☕️ | Fotografía & Aventura 📸 | Próximo destino: Islandia 🧊
                 </p>

                 <div className="flex gap-4 w-full justify-center mb-6">
                    <div className="flex-1 bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                       <span className="block text-xl font-bold text-slate-900">12</span>
                       <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Países</span>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                       <span className="block text-xl font-bold text-slate-900">342</span>
                       <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Fotos</span>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                       <span className="block text-xl font-bold text-slate-900">8.5k</span>
                       <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Seguidores</span>
                    </div>
                 </div>

                 <div className="flex gap-3 w-full">
                    <Button className="flex-1 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold shadow-lg shadow-slate-900/20 h-12">
                       Editar Perfil
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl border-slate-200 h-12 w-12 text-slate-700">
                       <Share2 size={20} />
                    </Button>
                 </div>
              </div>
           </div>
        </div>

        {/* My Content Section - Expanded */}
        <div className="px-6 mb-8 space-y-8">
           
           {/* My Trips */}
           <div>
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <Plane size={20} className="text-neon-pineapple" /> Mis Viajes
                 </h3>
                 <button className="text-xs font-bold text-neon-grape hover:underline">Ver todo</button>
              </div>
              
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                 <div className="min-w-[140px] h-[180px] rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400 cursor-pointer hover:border-neon-pineapple hover:text-neon-pineapple hover:bg-neon-pineapple/5 transition-all shrink-0">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                       <PlusIcon />
                    </div>
                    <span className="text-xs font-bold">Nuevo Viaje</span>
                 </div>
                 
                 {myTrips.map(trip => (
                    <div key={trip.id} className="min-w-[260px] bg-white p-3 rounded-2xl shadow-sm border border-neon-silver flex gap-4 hover:shadow-md transition-shadow cursor-pointer shrink-0">
                       <div className="w-20 h-full rounded-xl overflow-hidden shrink-0">
                          <img src={trip.image} className="w-full h-full object-cover" alt={trip.title} />
                       </div>
                       <div className="flex-1 flex flex-col justify-center py-1">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="font-bold text-slate-900 line-clamp-1">{trip.title}</h4>
                          </div>
                          <Badge variant="secondary" className={`text-[10px] w-fit mb-2 h-5 ${trip.status === "En curso" ? "bg-neon-kiwi/20 text-green-700" : "bg-slate-100 text-slate-500"}`}>{trip.status}</Badge>
                          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                             <MapPin size={10} /> {trip.location}
                          </p>
                          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{trip.date}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* My Posts Grid */}
           <div>
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <ImageIcon size={20} className="text-neon-raspberry" /> Publicaciones
                 </h3>
                 <div className="flex gap-2">
                    <button className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">
                       <ImageIcon size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
                       <Video size={14} />
                    </button>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                 {myPosts.map(post => (
                    <div key={post.id} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
                       <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Post" />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                          <div className="flex items-center gap-1 font-bold">
                             <Heart size={16} fill="white" /> {post.likes}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Menu Sections */}
        <div className="px-6 space-y-6">
           <div className="bg-white rounded-[1.5rem] p-2 shadow-sm border border-neon-silver">
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-neon-grape/10 flex items-center justify-center text-neon-grape">
                        <Bell size={20} />
                      </div>
                      <span className="font-bold text-slate-700">Notificaciones</span>
                   </div>
                   <Switch />
              </div>
              <div className="h-[1px] bg-slate-100 mx-4" />
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-neon-pineapple/20 flex items-center justify-center text-yellow-600">
                        <Shield size={20} />
                      </div>
                      <span className="font-bold text-slate-700">Privacidad</span>
                   </div>
                   <ChevronRight className="text-slate-300 group-hover:text-neon-pineapple transition-colors" />
              </div>
           </div>

           <div className="bg-white rounded-[1.5rem] p-2 shadow-sm border border-neon-gold">
              <div 
                  onClick={handleLogout}
                  className="flex items-center justify-between p-4 hover:bg-red-50 rounded-2xl transition-colors cursor-pointer group"
              >
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-neon-raspberry/10 flex items-center justify-center text-neon-raspberry group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                        <LogOut size={20} />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-red-600 transition-colors">Cerrar Sesión</span>
                   </div>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}

function PlusIcon() {
   return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
         <line x1="12" y1="5" x2="12" y2="19"></line>
         <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
   )
}
