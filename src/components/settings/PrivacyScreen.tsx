import React, { useState } from 'react';
import { Card } from '../Card';
import { ArrowLeft, Lock, Eye, EyeOff, Users, MapPin } from 'lucide-react';

interface PrivacyScreenProps {
  onBack?: () => void;
}

export function PrivacyScreen({ onBack }: PrivacyScreenProps) {
  const [settings, setSettings] = useState({
    privateAccount: false,
    showLocation: true,
    showTrips: true,
    allowMessages: true,
    showStats: true,
  });
  
  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const privacyOptions = [
    {
      key: 'privateAccount' as keyof typeof settings,
      icon: Lock,
      title: 'Cuenta privada',
      description: 'Solo tus seguidores pueden ver tu contenido',
    },
    {
      key: 'showLocation' as keyof typeof settings,
      icon: MapPin,
      title: 'Mostrar ubicación',
      description: 'Permite que otros vean dónde estás viajando',
    },
    {
      key: 'showTrips' as keyof typeof settings,
      icon: Eye,
      title: 'Viajes públicos',
      description: 'Tus viajes son visibles para todos',
    },
    {
      key: 'allowMessages' as keyof typeof settings,
      icon: Users,
      title: 'Permitir mensajes',
      description: 'Cualquiera puede enviarte mensajes',
    },
    {
      key: 'showStats' as keyof typeof settings,
      icon: Eye,
      title: 'Estadísticas públicas',
      description: 'Muestra tus estadísticas de viaje',
    },
  ];
  
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
          <h2 className="text-white mb-2">Privacidad y seguridad</h2>
          <p className="text-white/80">Controla quién puede ver tu información</p>
        </div>
      </div>
      
      {/* Privacy Options */}
      <div className="max-w-md mx-auto px-6 py-8 space-y-4">
        {privacyOptions.map((option, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <option.icon size={24} className="text-[#0D9488]" />
              </div>
              <div className="flex-1">
                <h4 className="text-[#0F172A] mb-1">{option.title}</h4>
                <p className="text-sm text-[#64748B] mb-3">{option.description}</p>
              </div>
              <button
                onClick={() => toggleSetting(option.key)}
                className="flex-shrink-0"
              >
                <div className={`w-12 h-6 rounded-full relative transition-colors ${
                  settings[option.key] ? 'bg-[#0D9488]' : 'bg-[#E2E8F0]'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                    settings[option.key] ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </div>
              </button>
            </div>
          </Card>
        ))}
        
        {/* Change Password */}
        <Card hover className="cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center">
              <Lock size={24} className="text-[#38BDF8]" />
            </div>
            <div>
              <h4 className="text-[#0F172A] mb-1">Cambiar contraseña</h4>
              <p className="text-sm text-[#64748B]">Actualiza tu contraseña</p>
            </div>
          </div>
        </Card>
        
        {/* Info */}
        <Card className="bg-[#A5F3FC]/20 border-2 border-[#A5F3FC]">
          <h4 className="text-[#0F172A] mb-3">🔒 Tu privacidad es importante</h4>
          <p className="text-sm text-[#0F766E] leading-relaxed">
            TravelNova respeta tu privacidad. Puedes controlar quién ve tu información y cambiar estos ajustes en cualquier momento.
          </p>
        </Card>
      </div>
    </div>
  );
}
