import Layout from "@/components/layout";
import { Search, UserPlus, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Reuse assets
import userJapan from "@assets/generated_images/japanese_female_traveler_avatar.png";
import userFrance from "@assets/generated_images/french_male_traveler_avatar.png";
import userBrazil from "@assets/generated_images/brazilian_female_traveler_avatar.png";
import adminAvatar from "@assets/generated_images/colombian_male_traveler_avatar.png";

const allUsers = [
  { id: 1, name: "Yuki", country: "Japón", avatar: userJapan, status: "Explorando Kyoto", followers: 1240 },
  { id: 2, name: "Pierre", country: "Francia", avatar: userFrance, status: "En Paris", followers: 850 },
  { id: 3, name: "Ana", country: "Brasil", avatar: userBrazil, status: "Relax en Rio", followers: 2100 },
  { id: 4, name: "Mateo", country: "Colombia", avatar: adminAvatar, status: "Cartagena Trip", followers: 340 },
  { id: 5, name: "Sofia", country: "España", avatar: userBrazil, status: "Madrid Vibes", followers: 920 }, // Reusing avatar for mockup
  { id: 6, name: "Kenji", country: "Japón", avatar: userJapan, status: "Tokyo Night", followers: 1500 }, // Reusing avatar
];

export default function Community() {
  return (
    <Layout>
      <div className="pt-8 pb-24 px-6 min-h-screen bg-slate-50">
        <div className="mb-6">
           <h1 className="text-2xl font-bold text-slate-900 mb-2">Comunidad Global</h1>
           <p className="text-sm text-slate-500">Descubre viajeros de todo el mundo</p>
        </div>

        <div className="relative mb-8">
           <Search className="absolute left-3 top-3 text-slate-400" size={20} />
           <Input placeholder="Buscar viajeros, lugares..." className="pl-10 h-12 bg-white border-slate-200 rounded-xl focus-visible:ring-primary" />
        </div>

        <div className="space-y-4">
           {allUsers.map(user => (
             <div key={user.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100">
                      <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900">{user.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                         <MapPin size={10} /> {user.country}
                      </div>
                   </div>
                </div>
                <Button size="sm" variant="outline" className="rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-colors h-8 text-xs px-3">
                   <UserPlus size={14} className="mr-1" /> Seguir
                </Button>
             </div>
           ))}
        </div>
      </div>
    </Layout>
  )
}
