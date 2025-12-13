import Layout from "@/components/layout";
import { ArrowLeft, User, Shield, Moon, Bell, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header */}
        <div className="px-6 pt-12 pb-6">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/profile">
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <h1 className="text-2xl font-bold text-slate-900">Configuración</h1>
            </div>
        </div>

        {/* Sections */}
        <div className="px-6 space-y-6">
            
            <section>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Cuenta</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
                        <User size={20} className="text-slate-400" />
                        <span className="flex-1 font-medium text-slate-700">Editar Perfil</span>
                    </div>
                    <div className="p-4 border-b border-slate-50 flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
                        <Shield size={20} className="text-slate-400" />
                        <span className="flex-1 font-medium text-slate-700">Privacidad y Seguridad</span>
                    </div>
                </div>
            </section>

             <section>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Preferencias</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <Bell size={20} className="text-slate-400" />
                            <span className="font-medium text-slate-700">Notificaciones</span>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <Moon size={20} className="text-slate-400" />
                            <span className="font-medium text-slate-700">Modo Oscuro</span>
                        </div>
                        <Switch />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Ayuda</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
                        <HelpCircle size={20} className="text-slate-400" />
                        <span className="flex-1 font-medium text-slate-700">Soporte</span>
                    </div>
                </div>
            </section>

        </div>

      </div>
    </Layout>
  );
}
