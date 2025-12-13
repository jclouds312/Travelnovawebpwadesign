import Layout from "@/components/layout";
import { ArrowLeft, MoreHorizontal, Calendar, Clock, Image as ImageIcon, Share2, Heart, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Assets
import kyotoImg from "@assets/generated_images/kyoto_street_at_dusk.png";
import adminAvatar from "@assets/generated_images/cool_male_traveler_avatar.png";

export default function TripDetail() {
  const steps = [
    { id: 1, title: "Llegada a Gion", time: "10:00 AM", desc: "El distrito de las geishas nos recibió con sus farolillos encendidos y el encanto de la vieja madera.", img: kyotoImg },
    { id: 2, title: "Ceremonia del Té", time: "01:30 PM", desc: "Una experiencia espiritual en una casa de té tradicional. El matcha estaba exquisito.", img: null },
    { id: 3, title: "Templo Kinkaku-ji", time: "05:45 PM", desc: "El pabellón dorado reflejado en el estanque es una de las vistas más impresionantes que he visto.", img: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative font-sans">
        
        {/* Header Image Parallax */}
        <div className="h-[45vh] w-full relative">
            <img src={kyotoImg} className="w-full h-full object-cover" alt="Cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-50" />
            
            {/* Nav */}
            <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center text-white">
                <Link href="/">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-12 z-10">
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex justify-between items-start mb-5">
                        <div>
                            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1 block">Japón • 12 Días</span>
                            <h1 className="text-3xl font-bold text-slate-900 mb-1 leading-none">Otoño en Kyoto</h1>
                            <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                                <Calendar size={14} /> 12 Oct - 24 Oct
                            </div>
                        </div>
                        <div className="w-14 h-14 rounded-full border-[3px] border-white shadow-lg overflow-hidden -mt-2">
                            <img src={adminAvatar} className="w-full h-full object-cover" alt="User" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button className="flex-1 rounded-xl bg-slate-900 text-white font-bold h-12 shadow-lg shadow-slate-900/20 hover:bg-slate-800">
                            Ver Mapa
                        </Button>
                        <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-200 text-slate-600 p-0 flex items-center justify-center hover:bg-slate-50">
                            <Share2 size={20} />
                        </Button>
                        <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-200 text-slate-600 p-0 flex items-center justify-center hover:bg-slate-50">
                            <Map size={20} />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Timeline Content */}
        <div className="px-6 pt-16">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-slate-900 text-xl">Bitácora</h3>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 bg-white shadow-sm px-3 py-1.5 rounded-full border border-slate-100">Día 4</span>
                </div>
            </div>

            <div className="relative pl-4 space-y-10">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-slate-200 via-slate-200 to-transparent" />

                {steps.map((step, i) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="relative pl-8"
                    >
                        {/* Dot */}
                        <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center z-10">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-slate-900 text-lg">{step.title}</h4>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                                    {step.time}
                                </span>
                            </div>
                            
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                {step.desc}
                            </p>

                            {step.img && (
                                <div className="rounded-xl overflow-hidden h-48 w-full mb-4 relative group cursor-pointer shadow-sm">
                                    <img src={step.img} alt="Moment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            )}

                            <div className="flex gap-5 border-t border-slate-50 pt-3">
                                <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors text-xs font-bold group">
                                    <Heart size={16} className="group-hover:fill-red-500" /> 245
                                </button>
                                <button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold">
                                    <ImageIcon size={16} /> 12
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        
    </div>
  );
}
