import Layout from "@/components/layout";
import { ArrowLeft, Plus, DollarSign, PieChart, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import budgetImg from "@assets/generated_images/travel_budget_coins.png";

export default function TripBudget() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 pt-12 pb-12 rounded-b-[2.5rem] shadow-xl shadow-slate-900/10 mb-6 relative overflow-hidden">
            <img src={budgetImg} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/trips">
                        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20">
                            <ArrowLeft size={20} />
                        </button>
                    </Link>
                    <h1 className="text-xl font-bold">Presupuesto</h1>
                </div>

                <div className="text-center mb-6">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Total Gastado</p>
                    <h2 className="text-5xl font-bold tracking-tight">$1,240<span className="text-2xl text-slate-500">.50</span></h2>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                        <span className="text-xs text-slate-400 block mb-1">Presupuesto</span>
                        <span className="font-bold text-lg">$3,500</span>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                        <span className="text-xs text-slate-400 block mb-1">Restante</span>
                        <span className="font-bold text-lg text-emerald-400">$2,259</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Expenses List */}
        <div className="px-6">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Recientes</h3>
            
            <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
                {[
                    { title: "Cena en Gion", date: "Hoy, 8:30 PM", cat: "Comida", amount: -45.00, icon: "🍜" },
                    { title: "Ticket Metro", date: "Hoy, 2:15 PM", cat: "Transporte", amount: -2.50, icon: "🚇" },
                    { title: "Hotel Kyoto", date: "Ayer", cat: "Alojamiento", amount: -120.00, icon: "🏨" },
                    { title: "Souvenirs", date: "Ayer", cat: "Compras", amount: -35.00, icon: "🎁" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 text-2xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                <p className="text-xs text-slate-400">{item.date}</p>
                            </div>
                        </div>
                        <span className="font-bold text-slate-900">${Math.abs(item.amount).toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </Layout>
  );
}
