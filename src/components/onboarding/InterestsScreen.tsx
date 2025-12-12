import React, { useState } from 'react';
import { Button } from '../Button';
import { ArrowRight, ArrowLeft, Mountain, Palmtree, Building2, Utensils, Camera, Heart, Plane, Map } from 'lucide-react';

interface InterestsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const interests = [
  { icon: Mountain, label: 'Aventura', color: '#0D9488' },
  { icon: Palmtree, label: 'Playa', color: '#38BDF8' },
  { icon: Building2, label: 'Ciudades', color: '#0F766E' },
  { icon: Utensils, label: 'Gastronomía', color: '#A5F3FC' },
  { icon: Camera, label: 'Fotografía', color: '#0D9488' },
  { icon: Heart, label: 'Romántico', color: '#38BDF8' },
  { icon: Plane, label: 'Mochilero', color: '#0F766E' },
  { icon: Map, label: 'Cultural', color: '#A5F3FC' },
];

export function InterestsScreen({ onNext, onBack }: InterestsScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);
  
  const toggleInterest = (label: string) => {
    if (selected.includes(label)) {
      setSelected(selected.filter(item => item !== label));
    } else {
      setSelected([...selected, label]);
    }
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
          <h2 className="text-[#0F172A] mb-4">
            ¿Qué te apasiona?
          </h2>
          <p className="text-[#64748B]">
            Selecciona tus intereses para personalizar tu experiencia y recibir recomendaciones
          </p>
        </div>
        
        {/* Interests Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {interests.map((interest, index) => {
            const isSelected = selected.includes(interest.label);
            return (
              <button
                key={index}
                onClick={() => toggleInterest(interest.label)}
                className={`p-6 rounded-2xl transition-all duration-300 animate-slideUp ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#0D9488] to-[#38BDF8] shadow-lg scale-105'
                    : 'bg-white shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:shadow-[0_10px_30px_rgba(15,23,42,0.15)] hover:scale-102'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <interest.icon 
                  size={32} 
                  className={`mx-auto mb-3 ${isSelected ? 'text-white' : 'text-[#0D9488]'}`}
                  strokeWidth={2}
                />
                <p className={`${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                  {interest.label}
                </p>
              </button>
            );
          })}
        </div>
        
        {/* Selected count */}
        {selected.length > 0 && (
          <div className="text-center mb-8 animate-fadeIn">
            <p className="text-[#0D9488]">
              {selected.length} {selected.length === 1 ? 'interés seleccionado' : 'intereses seleccionados'}
            </p>
          </div>
        )}
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={onNext}
          disabled={selected.length === 0}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Continuar
        </Button>
        <button 
          className="w-full mt-4 text-[#64748B] hover:text-[#0D9488] transition-colors"
          onClick={onNext}
        >
          Omitir por ahora
        </button>
      </div>
    </div>
  );
}
