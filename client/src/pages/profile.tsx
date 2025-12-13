import Layout from "@/components/layout";
import { Settings, CreditCard, Bell, LogOut, ChevronRight, MapPin, Camera, Heart, Globe, Award, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import abstractBg from "@assets/generated_images/abstract_neon_background_with_grape,_pineapple,_kiwi,_and_raspberry_colors.png";
import adminAvatar from "@assets/generated_images/colombian_male_traveler_avatar.png";

export default function Profile() {
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
                 <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-neon-gold to-neon-silver shadow-lg mb-4 relative">
                    <img src={adminAvatar} className="w-full h-full rounded-full border-4 border-white object-cover" alt="Profile" />
                    <div className="absolute bottom-1 right-1 bg-neon-kiwi border-2 border-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                       <Award size={12} className="text-slate-900" />
                    </div>
                 </div>
                 
                 <h1 className="text-2xl font-bold text-slate-900 mb-1">Mateo Viajero</h1>
                 <p className="text-slate-500 text-sm mb-4 font-medium flex items-center gap-1">
                    <MapPin size={12} className="text-neon-raspberry" /> Bogota, Colombia
                 </p>

                 <div className="flex gap-6 w-full justify-center mb-6">
                    <div className="text-center">
                       <span className="block text-xl font-bold text-slate-900">12</span>
                       <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Países</span>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-200" />
                    <div className="text-center">
                       <span className="block text-xl font-bold text-slate-900">342</span>
                       <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Fotos</span>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-200" />
                    <div className="text-center">
                       <span className="block text-xl font-bold text-slate-900">8.5k</span>
                       <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Seguidores</span>
                    </div>
                 </div>

                 <Button className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold shadow-lg shadow-slate-900/20 h-12">
                    Editar Perfil
                 </Button>
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
              <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-neon-raspberry/10 flex items-center justify-center text-neon-raspberry">
                        <LogOut size={20} />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-neon-raspberry transition-colors">Cerrar Sesión</span>
                   </div>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
