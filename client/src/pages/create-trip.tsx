import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Image as ImageIcon, Video, Mic, MapPin, X, ArrowLeft, Star, PenTool, Plane } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import abstractBg from "@assets/generated_images/abstract_neon_background_with_grape,_pineapple,_kiwi,_and_raspberry_colors.png";

export default function CreateTrip() {
  const [activeTab, setActiveTab] = useState<"media" | "review" | "trip">("media");

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col">
       {/* Background */}
       <div className="absolute inset-0 z-0 opacity-40">
           <img src={abstractBg} className="w-full h-full object-cover blur-3xl" alt="bg" />
       </div>

       {/* Header */}
       <div className="relative z-20 px-6 pt-12 pb-4 flex justify-between items-center">
          <Link href="/">
             <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                <X size={24} />
             </Button>
          </Link>
          <div className="flex gap-2 p-1 bg-white/10 backdrop-blur-md rounded-full">
             <button 
               onClick={() => setActiveTab("media")}
               className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${activeTab === "media" ? "bg-neon-grape text-white shadow-lg" : "text-white/60 hover:text-white"}`}
             >
                Media
             </button>
             <button 
               onClick={() => setActiveTab("trip")}
               className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${activeTab === "trip" ? "bg-neon-pineapple text-slate-900 shadow-lg" : "text-white/60 hover:text-white"}`}
             >
                Viaje
             </button>
             <button 
               onClick={() => setActiveTab("review")}
               className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${activeTab === "review" ? "bg-neon-raspberry text-white shadow-lg" : "text-white/60 hover:text-white"}`}
             >
                Reseña
             </button>
          </div>
          <Button variant="ghost" className="text-neon-pineapple font-bold hover:bg-white/10 hover:text-neon-pineapple rounded-full">
             Publicar
          </Button>
       </div>

       {/* Main Content Area */}
       <div className="flex-1 relative z-10 flex flex-col">
          <AnimatePresence mode="wait">
             {activeTab === "media" && (
                <motion.div 
                  key="media"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex-1 m-6 bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border-2 border-dashed border-neon-silver/50 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_20px_theme(colors.neon.silver)]">
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 pointer-events-none" />
                     <div className="text-center space-y-6 relative z-10">
                        <div className="w-24 h-24 rounded-full bg-white/5 border border-neon-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_theme(colors.neon.gold)]">
                           <Camera size={40} className="text-white/50" />
                        </div>
                        <h3 className="text-white font-bold text-xl">Captura tu momento</h3>
                        <p className="text-white/50 text-sm max-w-[200px] mx-auto">Comparte tus aventuras con fotos y videos increíbles</p>
                     </div>
                     <div className="absolute right-6 top-6 flex flex-col gap-4">
                        <Button size="icon" className="rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border border-neon-silver/30">
                           <Mic size={20} />
                        </Button>
                        <Button size="icon" className="rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border border-neon-silver/30">
                           <MapPin size={20} />
                        </Button>
                     </div>
                  </div>
                  <div className="px-6 pb-12">
                     <div className="flex items-center justify-between gap-6">
                        <div className="flex-1 h-[80px] rounded-[2rem] bg-neon-grape/20 border border-neon-grape/50 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-neon-grape/30 transition-all shadow-[0_0_10px_theme(colors.neon.grape)]">
                           <ImageIcon className="text-neon-grape" size={24} />
                           <span className="text-xs font-bold text-neon-grape uppercase tracking-wider">Galería</span>
                        </div>
                        <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center relative cursor-pointer group shadow-[0_0_20px_theme(colors.white)]">
                           <div className="w-16 h-16 rounded-full bg-white group-hover:scale-90 transition-transform duration-200" />
                        </div>
                        <div className="flex-1 h-[80px] rounded-[2rem] bg-neon-raspberry/20 border border-neon-raspberry/50 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-neon-raspberry/30 transition-all shadow-[0_0_10px_theme(colors.neon.raspberry)]">
                           <Video className="text-neon-raspberry" size={24} />
                           <span className="text-xs font-bold text-neon-raspberry uppercase tracking-wider">Video</span>
                        </div>
                     </div>
                  </div>
                </motion.div>
             )}

             {activeTab === "trip" && (
                <motion.div 
                   key="trip"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="flex-1 px-6 pt-4 pb-12 overflow-y-auto"
                >
                   <div className="bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-6 border border-neon-pineapple/30 shadow-[0_0_15px_theme(colors.neon.pineapple)]">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-full bg-neon-pineapple/20 flex items-center justify-center text-neon-pineapple border border-neon-pineapple/50">
                            <Plane size={24} />
                         </div>
                         <div>
                            <h2 className="text-white font-bold text-xl">Nuevo Viaje</h2>
                            <p className="text-white/50 text-xs">Planifica tu próxima aventura</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-pineapple uppercase tracking-wider">Destino</label>
                            <Input placeholder="Ej: París, Francia" className="bg-black/30 border-white/10 text-white h-12 rounded-xl focus-visible:ring-neon-pineapple" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-pineapple uppercase tracking-wider">Título del Viaje</label>
                            <Input placeholder="Ej: Eurotrip 2024" className="bg-black/30 border-white/10 text-white h-12 rounded-xl focus-visible:ring-neon-pineapple" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                               <label className="text-xs font-bold text-neon-pineapple uppercase tracking-wider">Inicio</label>
                               <Input type="date" className="bg-black/30 border-white/10 text-white h-12 rounded-xl focus-visible:ring-neon-pineapple" />
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-bold text-neon-pineapple uppercase tracking-wider">Fin</label>
                               <Input type="date" className="bg-black/30 border-white/10 text-white h-12 rounded-xl focus-visible:ring-neon-pineapple" />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-pineapple uppercase tracking-wider">Descripción</label>
                            <Textarea placeholder="Cuéntanos sobre tus planes..." className="bg-black/30 border-white/10 text-white min-h-[100px] rounded-xl focus-visible:ring-neon-pineapple" />
                         </div>
                         
                         <Button className="w-full bg-neon-pineapple text-slate-900 hover:bg-neon-pineapple/90 font-bold h-12 rounded-xl mt-4">
                            Crear Itinerario
                         </Button>
                      </div>
                   </div>
                </motion.div>
             )}

             {activeTab === "review" && (
                <motion.div 
                   key="review"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="flex-1 px-6 pt-4 pb-12 overflow-y-auto"
                >
                   <div className="bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-6 border border-neon-raspberry/30 shadow-[0_0_15px_theme(colors.neon.raspberry)]">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-full bg-neon-raspberry/20 flex items-center justify-center text-neon-raspberry border border-neon-raspberry/50">
                            <PenTool size={24} />
                         </div>
                         <div>
                            <h2 className="text-white font-bold text-xl">Escribir Reseña</h2>
                            <p className="text-white/50 text-xs">Comparte tu experiencia</p>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-raspberry uppercase tracking-wider">Lugar</label>
                            <Input placeholder="Ej: Restaurante XYZ, Museo ABC" className="bg-black/30 border-white/10 text-white h-12 rounded-xl focus-visible:ring-neon-raspberry" />
                         </div>
                         
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-raspberry uppercase tracking-wider">Calificación</label>
                            <div className="flex gap-2">
                               {[1, 2, 3, 4, 5].map((star) => (
                                  <button key={star} className="text-neon-gold hover:scale-110 transition-transform">
                                     <Star size={32} fill={star <= 4 ? "currentColor" : "none"} />
                                  </button>
                               ))}
                            </div>
                         </div>

                         <div className="space-y-2">
                            <label className="text-xs font-bold text-neon-raspberry uppercase tracking-wider">Tu Opinión</label>
                            <Textarea placeholder="¿Qué te pareció este lugar? Detalles, consejos..." className="bg-black/30 border-white/10 text-white min-h-[150px] rounded-xl focus-visible:ring-neon-raspberry" />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 h-12 rounded-xl">
                               <ImageIcon size={18} className="mr-2" /> Agregar Fotos
                            </Button>
                            <Button className="bg-neon-raspberry text-white hover:bg-neon-raspberry/90 font-bold h-12 rounded-xl">
                               Publicar Reseña
                            </Button>
                         </div>
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>
       </div>
    </div>
  );
}
