import { Link, useLocation } from "wouter";
import { Home, Map, PlusCircle, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: Map, label: "Mis Viajes", path: "/trips" },
    { icon: PlusCircle, label: "Crear", path: "/create-trip", isPrimary: true },
    { icon: Users, label: "Comunidad", path: "/community" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-slate-100">
      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-slate-100 max-w-md mx-auto pb-safe">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            if (item.isPrimary) {
                return (
                    <Link key={item.path} href={item.path}>
                        <div className="relative -top-6 cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/30 text-white transition-transform group-active:scale-95 border-[4px] border-slate-50">
                                <Icon size={32} strokeWidth={2} />
                            </div>
                        </div>
                    </Link>
                )
            }

            return (
              <Link key={item.path} href={item.path}>
                <a className="flex flex-col items-center justify-center w-full h-full space-y-1">
                  <div
                    className={cn(
                      "p-1.5 rounded-xl transition-all duration-300",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <Icon
                      size={26}
                      strokeWidth={isActive ? 2.5 : 2}
                      className="transition-all"
                    />
                  </div>
                  <span className={cn(
                      "text-[10px] font-medium transition-colors",
                      isActive ? "text-primary" : "text-slate-400"
                  )}>
                      {item.label}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
