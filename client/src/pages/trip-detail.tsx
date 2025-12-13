import Layout from "@/components/layout";
import { ArrowLeft, MoreHorizontal, MapPin, Calendar, Clock, Image as ImageIcon, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Assets
import cartagenaImg from "@assets/generated_images/cartagena_colombia_destination.png";
import adminAvatar from "@assets/generated_images/colombian_male_traveler_avatar.png";

export default function TripDetail() {
  const steps = [
    { id: 1, title: "Llegada a la Ciudad Amurallada", time: "10:00 AM", desc: "El calor húmedo nos recibió, pero la belleza de las calles coloniales lo compensa todo.", img: cartagenaImg },
    { id: 2, title: "Almuerzo en La Cevichería", time: "01:30 PM", desc: "Probamos el mejor ceviche de coco. Increíble experiencia gastronómica.", img: null },
    { id: 3, title: "Atardecer en Café del Mar", time: "05:45 PM", desc: "Vistas espectaculares del mar Caribe mientras el sol se pone.", img: null },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative">
        
        {/* Header Image Parallax */}
        <div className="h-[40vh] w-full relative">
            <img src={cartagenaImg} className="w-full h-full object-cover" alt="Cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-50" />
            
            {/* Nav */}
            <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center text-white">
                <Link href="/">
                    <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/30 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-black/30 transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-[2rem] p-6 shadow-xl"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 mb-1">Cartagena, Colombia</h1>
                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                <Calendar size={14} /> 12 Oct - 16 Oct
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
                            <img src={adminAvatar} className="w-full h-full object-cover" alt="User" />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button className="flex-1 rounded-xl bg-primary text-white font-bold h-12 shadow-lg shadow-primary/20 hover:bg-primary/90">
                            Seguir Viaje
                        </Button>
                        <Button variant="outline" className="w-12 h-12 rounded-xl border-slate-200 text-slate-600 p-0 flex items-center justify-center">
                            <Share2 size={20} />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Timeline Content */}
        <div className="px-6 pt-4">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 text-lg">Cronología</h3>
                <span className="text-xs font-medium text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">Día 1</span>
            </div>

            <div className="relative pl-4 space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-slate-200" />

                {steps.map((step, i) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-8"
                    >
                        {/* Dot */}
                        <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center z-10">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-slate-900">{step.title}</h4>
                                <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded flex items-center gap-1">
                                    <Clock size={10} /> {step.time}
                                </span>
                            </div>
                            
                            <p className="text-sm text-slate-500 leading-relaxed mb-3">
                                {step.desc}
                            </p>

                            {step.img && (
                                <div className="rounded-xl overflow-hidden h-40 w-full mb-3 relative group cursor-pointer">
                                    <img src={step.img} alt="Moment" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            )}

                            <div className="flex gap-4 border-t border-slate-50 pt-3">
                                <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors text-xs font-medium">
                                    <Heart size={14} /> 24
                                </button>
                                <button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors text-xs font-medium">
                                    <ImageIcon size={14} /> 3 fotos
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
