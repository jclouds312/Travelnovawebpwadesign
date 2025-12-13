import { Link, useLocation } from "wouter";
import { Home, Map, Plus, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: Map, label: "Viajes", path: "/trips" },
    { icon: Plus, label: "Crear", path: "/create-trip", isPrimary: true },
    { icon: Users, label: "Social", path: "/community" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-slate-100">
      <main className="flex-1 overflow-y-auto pb-24 hide-scrollbar font-sans">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-100/50 max-w-md mx-auto pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
        <div className="flex justify-around items-center h-[5.5rem] px-2 pb-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            if (item.isPrimary) {
                return (
                    <Link key={item.path} href={item.path}>
                        <div className="relative -top-8 cursor-pointer group">
                            <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-900/30 text-white transition-all group-active:scale-95 border-[6px] border-slate-50">
                                <Icon size={28} strokeWidth={2.5} />
                            </div>
                        </div>
                    </Link>
                )
            }

            return (
              <Link key={item.path} href={item.path}>
                <a className="flex flex-col items-center justify-center w-full h-full space-y-1.5 cursor-pointer group">
                  <div
                    className={cn(
                      "p-1.5 rounded-xl transition-all duration-300 relative",
                      isActive
                        ? "text-primary"
                        : "text-slate-400 group-hover:text-slate-600"
                    )}
                  >
                    <Icon
                      size={26}
                      strokeWidth={isActive ? 2.5 : 2}
                      className="transition-all"
                    />
                    {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
