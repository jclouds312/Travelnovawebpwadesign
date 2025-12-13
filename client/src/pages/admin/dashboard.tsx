import Layout from "@/components/layout";
import { useAuth } from "@/lib/use-mock-auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, BarChart3, ShieldAlert, Activity, Map, DollarSign, Calendar } from "lucide-react";
import dashImg from "@assets/generated_images/travel_analytics_dashboard_dark.png";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="min-h-screen bg-slate-900 text-white font-sans pb-24">
        {/* Header */}
        <div className="px-6 pt-14 pb-6 bg-slate-900 sticky top-0 z-30 border-b border-slate-800">
          <div className="flex justify-between items-center">
             <div>
                <h1 className="text-2xl font-bold">Admin Console</h1>
                <p className="text-slate-400 text-sm">Bienvenido, {user?.name}</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                <img src={user?.avatar} className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Analytics Hero */}
        <div className="px-6 mb-8">
            <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 relative h-48">
                <img src={dashImg} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <p className="text-xs text-teal-400 font-bold uppercase tracking-wider mb-1">Tráfico Global</p>
                    <h2 className="text-3xl font-bold">1.2M</h2>
                    <p className="text-slate-400 text-xs">Usuarios Activos Hoy</p>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 grid grid-cols-2 gap-4 mb-8">
            <Card className="bg-slate-800 border-slate-700 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                    <Users size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">85k</h3>
                <p className="text-slate-400 text-xs">Nuevos Usuarios</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                    <Map size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">12.5k</h3>
                <p className="text-slate-400 text-xs">Viajes Creados</p>
            </Card>
             <Card className="bg-slate-800 border-slate-700 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                    <Activity size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">98%</h3>
                <p className="text-slate-400 text-xs">Server Uptime</p>
            </Card>
             <Card className="bg-slate-800 border-slate-700 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-3">
                    <DollarSign size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">$45k</h3>
                <p className="text-slate-400 text-xs">Ingresos (Mes)</p>
            </Card>
        </div>

        {/* Recent Alerts */}
        <div className="px-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-400" /> Alertas del Sistema
            </h3>
            
            <div className="space-y-3">
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-slate-200">Pico de Tráfico inusual</h4>
                        <p className="text-xs text-slate-500 mt-1">Detectado en la región Asia-Pacífico hace 10 min.</p>
                    </div>
                </div>
                 <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-slate-200">Actualización Pendiente</h4>
                        <p className="text-xs text-slate-500 mt-1">Versión v2.4 lista para despliegue.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Layout>
  );
}
