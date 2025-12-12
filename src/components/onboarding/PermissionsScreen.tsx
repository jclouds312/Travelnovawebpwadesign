import React, { useState } from 'react';
import { Button } from '../Button';
import { ArrowRight, ArrowLeft, MapPin, Camera, Bell, Check } from 'lucide-react';

interface PermissionsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const permissions = [
  {
    icon: MapPin,
    title: 'Ubicación',
    description: 'Para registrar automáticamente los lugares que visitas',
    required: true,
  },
  {
    icon: Camera,
    title: 'Cámara y Fotos',
    description: 'Para capturar y compartir tus mejores momentos',
    required: true,
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Para recibir actualizaciones de amigos y recomendaciones',
    required: false,
  },
];

export function PermissionsScreen({ onNext, onBack }: PermissionsScreenProps) {
  const [granted, setGranted] = useState<{ [key: string]: boolean }>({});
  
  const handlePermission = (title: string) => {
    setGranted(prev => ({ ...prev, [title]: !prev[title] }));
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col p-6">
      {/* Header */}
      <div className="max-w-md w-full mx-auto mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
        >
          <ArrowLeft size={20} />
          Atrás
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 max-w-md w-full mx-auto">
        <div className="mb-12 animate-slideUp">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-3xl flex items-center justify-center mb-6 shadow-lg">
            <Check size={40} className="text-white" strokeWidth={3} />
          </div>
          <h2 className="text-[#0F172A] mb-4">
            Permisos necesarios
          </h2>
          <p className="text-[#64748B]">
            Para ofrecerte la mejor experiencia, TravelNova necesita algunos permisos
          </p>
        </div>
        
        {/* Permissions List */}
        <div className="space-y-4 mb-12">
          {permissions.map((permission, index) => (
            <div 
              key={index}
              onClick={() => handlePermission(permission.title)}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.15)] transition-all duration-300 cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <permission.icon size={24} className="text-[#0D9488]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-[#0F172A]">{permission.title}</h4>
                    {permission.required && (
                      <span className="text-xs px-2 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full">
                        Requerido
                      </span>
                    )}
                  </div>
                  <p className="text-[#64748B] text-sm">{permission.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  granted[permission.title] 
                    ? 'bg-[#0D9488] border-[#0D9488]' 
                    : 'border-[#E2E8F0]'
                }`}>
                  {granted[permission.title] && (
                    <Check size={14} className="text-white" strokeWidth={3} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info */}
        <div className="bg-[#A5F3FC]/20 rounded-2xl p-4 mb-8">
          <p className="text-[#0F766E] text-sm">
            💡 Puedes cambiar estos permisos en cualquier momento desde la configuración de tu dispositivo
          </p>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={onNext}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Permitir y Continuar
        </Button>
      </div>
    </div>
  );
}
