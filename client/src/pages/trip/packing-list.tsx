import Layout from "@/components/layout";
import { ArrowLeft, CheckCircle2, Circle, Plus, Wallet, Luggage } from "lucide-react";
import { Link } from "wouter";
import packingImg from "@assets/generated_images/packing_list_flatlay.png";

export default function PackingList() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-6 rounded-b-[2rem] shadow-sm border-b border-slate-100 mb-6">
            <div className="flex items-center gap-4 mb-4">
                <Link href="/trips">
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                        <ArrowLeft size={20} />
                    </button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Lista de Equipaje</h1>
            </div>
            
            <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                    <img src={packingImg} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="font-bold text-slate-900">Japón Esencial</h2>
                    <div className="flex items-center gap-2 mt-1">
                         <div className="h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                             <div className="h-full w-[60%] bg-primary rounded-full" />
                         </div>
                         <span className="text-xs font-bold text-primary">60%</span>
                    </div>
                </div>
            </div>
        </div>

        {/* List Groups */}
        <div className="px-6 space-y-6">
            
            {/* Ropa */}
            <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center justify-between">
                    Ropa
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-md text-slate-500">2/4</span>
                </h3>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    {[
                        { item: "Camisetas térmicas", checked: true },
                        { item: "Abrigo impermeable", checked: true },
                        { item: "Zapatos cómodos", checked: false },
                        { item: "Bufanda", checked: false },
                    ].map((i, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer">
                            {i.checked ? (
                                <CheckCircle2 className="text-green-500 fill-green-100" size={24} />
                            ) : (
                                <Circle className="text-slate-300" size={24} />
                            )}
                            <span className={`text-sm font-medium ${i.checked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                {i.item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

             {/* Documentos */}
            <div>
                <h3 className="font-bold text-slate-900 mb-3 flex items-center justify-between">
                    Documentos
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-md text-slate-500">1/3</span>
                </h3>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    {[
                        { item: "Pasaporte", checked: true },
                        { item: "JR Pass Voucher", checked: false },
                        { item: "Reservas Impresas", checked: false },
                    ].map((i, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer">
                            {i.checked ? (
                                <CheckCircle2 className="text-green-500 fill-green-100" size={24} />
                            ) : (
                                <Circle className="text-slate-300" size={24} />
                            )}
                            <span className={`text-sm font-medium ${i.checked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                {i.item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        {/* Floating Add Button */}
        <div className="fixed bottom-24 right-6">
            <button className="w-14 h-14 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 flex items-center justify-center hover:scale-105 transition-transform">
                <Plus size={24} />
            </button>
        </div>

      </div>
    </Layout>
  );
}
