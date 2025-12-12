import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { ArrowLeft, ArrowRight, Type, MapPin } from 'lucide-react';

interface CreateTripStep1Props {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function CreateTripStep1({ onNext, onBack }: CreateTripStep1Props) {
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    description: '',
  });
  
  const handleNext = () => {
    onNext(formData);
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col p-6">
      {/* Header */}
      <div className="max-w-md w-full mx-auto mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Cancelar
        </button>
        
        {/* Progress */}
        <div className="flex gap-2 mb-6">
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-[#0D9488] mb-2">Paso 1 de 4</p>
          <h2 className="text-[#0F172A] mb-2">Información básica</h2>
          <p className="text-[#64748B]">
            Dale un nombre y describe tu viaje
          </p>
        </div>
      </div>
      
      {/* Form */}
      <div className="flex-1 max-w-md w-full mx-auto">
        <div className="space-y-6">
          <Input
            label="Título del viaje"
            type="text"
            placeholder="Ej: Aventura en Japón"
            icon={<Type size={20} />}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          
          <Input
            label="Destino principal"
            type="text"
            placeholder="Ej: Tokyo, Japón"
            icon={<MapPin size={20} />}
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            required
          />
          
          <div>
            <label className="block mb-2 text-[#0F172A]">
              Descripción (opcional)
            </label>
            <textarea
              placeholder="Cuenta un poco sobre este viaje..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all resize-none h-32"
            />
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={handleNext}
          disabled={!formData.title || !formData.destination}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
