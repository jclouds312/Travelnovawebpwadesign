import Layout from "@/components/layout";
import { Plus, Calendar, MapPin, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

// Assets
import img1 from "@assets/generated_images/cinematic_mountain_trip.png";
import img2 from "@assets/generated_images/cyberpunk_city_trip.png";
import img3 from "@assets/generated_images/aerial_beach_trip.png";
import img4 from "@assets/generated_images/cultural_temple.png";

const trips = [
  { id: 1, title: "Eurotrip Verano", date: "Jul 2024", location: "Europa", status: "completed", img: img1 },
  { id: 2, title: "Aventura en Japón", date: "Nov 2024", location: "Japón", status: "planned", img: img2 },
  { id: 3, title: "Caribe Relax", date: "Dic 2024", location: "México", status: "active", img: img3 },
  { id: 4, title: "Templo Perdido", date: "Ene 2025", location: "Camboya", status: "planned", img: img4 },
];

export default function Trips() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pt-12 px-6">
        
        <div className="flex justify-between items-end mb-8">
           <div>
             <h1 className="text-3xl font-bold text-slate-900">Mis Viajes</h1>
             <p className="text-slate-500">4 aventuras registradas</p>
           </div>
           <Button size="icon" className="rounded-full h-12 w-12 bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-slate-50">
             <Plus size={24} />
           </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-3 mb-8">
           <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <Input placeholder="Buscar viaje..." className="pl-11 h-12 rounded-2xl bg-white border-slate-200 shadow-sm" />
           </div>
           <Button size="icon" className="h-12 w-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 shrink-0">
             <Filter size={20} />
           </Button>
        </div>

        {/* Trips List */}
        <div className="space-y-6 pb-24">
           {trips.map((trip, index) => (
             <motion.div 
               key={trip.id}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: index * 0.1 }}
               className="bg-white p-3 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-md transition-all"
             >
                <div className="flex gap-4">
                   <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 relative">
                      <img src={trip.img} alt={trip.title} className="w-full h-full object-cover" />
                      {trip.status === "active" && (
                        <div className="absolute inset-0 bg-primary/20 ring-2 ring-inset ring-primary animate-pulse" />
                      )}
                   </div>
                   
                   <div className="flex-1 py-1 pr-2 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-1">
                         <h3 className="font-bold text-slate-900 text-lg leading-tight">{trip.title}</h3>
                         {trip.status === "active" && (
                           <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                         )}
                      </div>
                      
                      <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                         <MapPin size={14} className="text-primary" />
                         {trip.location}
                      </div>

                      <div className="flex items-center gap-2 mt-auto">
                         <div className="bg-slate-50 px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-100 flex items-center gap-1">
                            <Calendar size={12} /> {trip.date}
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </Layout>
  );
}
