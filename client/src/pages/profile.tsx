import Layout from "@/components/layout";
import { Settings, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function Profile() {
  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="px-6 mb-8 text-center">
          <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Felix Traveler</h1>
          <p className="text-slate-500">felix@example.com</p>
        </div>

        <div className="px-6 space-y-6">
           <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <Bell size={20} />
                      </div>
                      <span className="font-medium text-slate-700">Notifications</span>
                   </div>
                   <Switch />
                </div>

                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                        <Settings size={20} />
                      </div>
                      <span className="font-medium text-slate-700">Preferences</span>
                   </div>
                   <ChevronRight className="text-slate-300" />
                </div>
              </div>
           </div>

           <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between cursor-pointer group">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <LogOut size={20} />
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-red-500 transition-colors">Log Out</span>
                   </div>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
