import React from 'react';
import { Button } from '../Button';
import { ArrowRight, ArrowLeft, MapPin, Camera, Users, TrendingUp } from 'lucide-react';

interface FeatureScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const features = [
  {
    icon: MapPin,
    title: 'Mapea tus Viajes',
    description: 'Registra cada destino que visitas en un mapa interactivo global',
    color: '#0D9488',
  },
  {
    icon: Camera,
    title: 'Captura Momentos',
    description: 'Guarda fotos, videos y recuerdos de cada experiencia única',
    color: '#38BDF8',
  },
  {
    icon: Users,
    title: 'Conecta con Viajeros',
    description: 'Comparte historias e inspírate con una comunidad global',
    color: '#A5F3FC',
  },
  {
    icon: TrendingUp,
    title: 'Estadísticas Personales',
    description: 'Visualiza tu progreso: países visitados, kilómetros recorridos y más',
    color: '#0F766E',
  },
];

export function FeatureScreen({ onNext, onBack }: FeatureScreenProps) {
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
          <h2 className="text-[#0F172A] mb-4">
            Todo lo que necesitas para<br />viajar y compartir
          </h2>
          <p className="text-[#64748B]">
            TravelNova combina las mejores funcionalidades en una experiencia fluida y moderna
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.15)] transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon size={24} style={{ color: feature.color }} />
                </div>
                <div>
                  <h4 className="text-[#0F172A] mb-2">{feature.title}</h4>
                  <p className="text-[#64748B] text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
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
          Continuar
        </Button>
      </div>
    </div>
  );
}
