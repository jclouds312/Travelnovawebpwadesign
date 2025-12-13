import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Image as ImageIcon, Video, Mic, MapPin, X, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";

import abstractBg from "@assets/generated_images/abstract_neon_background_with_grape,_pineapple,_kiwi,_and_raspberry_colors.png";

export default function CreateTrip() {
  const [mediaType, setMediaType] = useState<"photo" | "video" | null>(null);

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
          <span className="text-white font-bold tracking-widest uppercase text-sm">Nuevo Post</span>
          <Button variant="ghost" className="text-neon-pineapple font-bold hover:bg-white/10 hover:text-neon-pineapple rounded-full">
             Publicar
          </Button>
       </div>

       {/* Main Content Area */}
       <div className="flex-1 relative z-10 flex flex-col">
          <div className="flex-1 m-6 bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border-2 border-dashed border-neon-silver/50 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_20px_theme(colors.neon.silver)]">
             
             {/* Placeholder for camera preview */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 pointer-events-none" />
             
             <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-neon-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_theme(colors.neon.gold)]">
                   <Camera size={40} className="text-white/50" />
                </div>
                <h3 className="text-white font-bold text-xl">Captura tu momento</h3>
                <p className="text-white/50 text-sm max-w-[200px] mx-auto">Comparte tus aventuras con fotos y videos increíbles</p>
             </div>

             {/* Tools Overlay */}
             <div className="absolute right-6 top-6 flex flex-col gap-4">
                <Button size="icon" className="rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border border-neon-silver/30">
                   <Mic size={20} />
                </Button>
                <Button size="icon" className="rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border border-neon-silver/30">
                   <MapPin size={20} />
                </Button>
             </div>
          </div>

          {/* Controls */}
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

             {/* Mode Selector */}
             <div className="flex justify-center mt-8 gap-8">
                <button className="text-white/50 font-medium text-sm hover:text-white transition-colors">HISTORIA</button>
                <button className="text-neon-pineapple font-bold text-sm shadow-[0_0_15px_theme(colors.neon.pineapple)]">POST</button>
                <button className="text-white/50 font-medium text-sm hover:text-white transition-colors">EN VIVO</button>
             </div>
          </div>
       </div>
    </div>
  );
}
