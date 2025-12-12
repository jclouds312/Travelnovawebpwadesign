import { Link, useLocation } from "wouter";
import { Home, Compass, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: Heart, label: "Saved", path: "/saved" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-border">
      <main className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-border max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path}>
                <a className="flex flex-col items-center justify-center w-full h-full space-y-1">
                  <div
                    className={cn(
                      "p-1.5 rounded-full transition-all duration-300",
                      isActive
                        ? "bg-primary/10 text-primary scale-110"
                        : "text-muted-foreground hover:text-primary/60"
                    )}
                  >
                    <Icon
                      size={24}
                      strokeWidth={isActive ? 2.5 : 2}
                      className="transition-all"
                    />
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-medium text-primary animate-in fade-in slide-in-from-bottom-1 duration-300">
                      {item.label}
                    </span>
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
