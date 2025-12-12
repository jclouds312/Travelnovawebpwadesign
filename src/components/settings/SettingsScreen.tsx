import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, User, Lock, Bell, Globe, Moon, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

interface SettingsScreenProps {
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
}

const settingsSections = [
  {
    title: 'Cuenta',
    items: [
      { icon: User, label: 'Editar perfil', screen: 'edit-profile' },
      { icon: Lock, label: 'Privacidad y seguridad', screen: 'privacy' },
      { icon: Bell, label: 'Notificaciones', screen: 'notifications' },
    ],
  },
  {
    title: 'Preferencias',
    items: [
      { icon: Globe, label: 'Idioma', value: 'Español', screen: 'language' },
      { icon: Moon, label: 'Modo oscuro', toggle: true },
    ],
  },
  {
    title: 'Soporte',
    items: [
      { icon: HelpCircle, label: 'Ayuda y soporte', screen: 'help' },
    ],
  },
];

export function SettingsScreen({ onBack, onNavigate }: SettingsScreenProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h2 className="text-white">Configuración</h2>
        </div>
      </div>
      
      {/* Settings Sections */}
      <div className="max-w-md mx-auto px-6 py-8 space-y-8">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-[#64748B] text-sm mb-3 px-2">{section.title}</h3>
            <Card className="p-0 overflow-hidden">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => item.screen && onNavigate?.(item.screen)}
                  className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#F8FAFC] transition-colors border-b border-[#E2E8F0] last:border-0"
                >
                  <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-[#0D9488]" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[#0F172A]">{item.label}</p>
                    {item.value && (
                      <p className="text-sm text-[#64748B]">{item.value}</p>
                    )}
                  </div>
                  {item.toggle ? (
                    <div className="w-12 h-6 bg-[#E2E8F0] rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-transform"></div>
                    </div>
                  ) : (
                    <ChevronRight size={20} className="text-[#94A3B8]" />
                  )}
                </button>
              ))}
            </Card>
          </div>
        ))}
        
        {/* Logout */}
        <Card className="p-0 overflow-hidden">
          <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-50 transition-colors">
            <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
              <LogOut size={20} className="text-red-500" />
            </div>
            <p className="text-red-500">Cerrar sesión</p>
          </button>
        </Card>
        
        {/* App Info */}
        <div className="text-center pt-8">
          <p className="text-sm text-[#64748B] mb-1">TravelNova v1.0.0</p>
          <p className="text-xs text-[#94A3B8]">© 2024 Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
}
