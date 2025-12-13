import Layout from "@/components/layout";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "wouter";

export default function Notifications() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header */}
        <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Notificaciones</h1>
            </div>
        </div>

        {/* List */}
        <div className="px-6 py-6 space-y-4">
            
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 relative overflow-hidden">
                <div className="w-1 h-full bg-primary absolute left-0 top-0 bottom-0" />
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                    <Bell size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">¡Bienvenido a TravelNova!</h4>
                    <p className="text-xs text-slate-500 mt-1">Empieza a explorar destinos increíbles y comparte tus aventuras.</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">Hace 2 min</span>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <span className="font-bold">✈️</span>
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">Recordatorio de Viaje</h4>
                    <p className="text-xs text-slate-500 mt-1">Faltan 2 días para tu viaje a "Japón Esencial". ¿Tienes todo listo?</p>
                    <span className="text-[10px] text-slate-400 mt-2 block">Hace 2 horas</span>
                </div>
            </div>

        </div>

      </div>
    </Layout>
  );
}
