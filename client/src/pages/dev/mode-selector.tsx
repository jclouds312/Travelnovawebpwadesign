import Layout from "@/components/layout";
import { useAuth } from "@/lib/use-mock-auth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ModeSelector() {
  const { loginAsUser, loginAsAdmin, logout, role, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl relative z-10">
        
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Modo Desarrollador</h1>
            <p className="text-slate-400">Selecciona un rol para simular la experiencia de la App.</p>
        </div>

        <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group" onClick={loginAsUser}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                        U
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">Usuario</h3>
                        <p className="text-slate-500 text-xs">Experiencia estándar de viajero</p>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group" onClick={loginAsAdmin}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
                        A
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">Admin</h3>
                        <p className="text-slate-500 text-xs">Panel de control y gestión</p>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group" onClick={logout}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-xl border border-slate-600">
                        G
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-slate-300 transition-colors">Invitado</h3>
                        <p className="text-slate-500 text-xs">Navegación sin sesión activa</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-slate-500 text-xs mb-4">Estado Actual: <span className="text-white font-bold uppercase">{role}</span></p>
            <Link href="/">
                <Button className="w-full h-12 rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-bold">
                    Ir a la App
                </Button>
            </Link>
        </div>

      </div>
    </div>
  );
}
