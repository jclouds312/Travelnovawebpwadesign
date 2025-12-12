import React, { useState } from 'react';
import { Button } from '../Button';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

interface CreateTripStep2Props {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function CreateTripStep2({ onNext, onBack }: CreateTripStep2Props) {
  const [dates, setDates] = useState({
    startDate: '',
    endDate: '',
  });
  
  const handleNext = () => {
    onNext(dates);
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
          Atrás
        </button>
        
        {/* Progress */}
        <div className="flex gap-2 mb-6">
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-[#0D9488] mb-2">Paso 2 de 4</p>
          <h2 className="text-[#0F172A] mb-2">Fechas del viaje</h2>
          <p className="text-[#64748B]">
            ¿Cuándo comienza y termina tu aventura?
          </p>
        </div>
      </div>
      
      {/* Date Selection */}
      <div className="flex-1 max-w-md w-full mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-[#0F172A]">
              Fecha de inicio
            </label>
            <div className="relative">
              <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="date"
                value={dates.startDate}
                onChange={(e) => setDates({ ...dates, startDate: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-[#0F172A]">
              Fecha de fin
            </label>
            <div className="relative">
              <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="date"
                value={dates.endDate}
                onChange={(e) => setDates({ ...dates, endDate: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                required
              />
            </div>
          </div>
          
          {dates.startDate && dates.endDate && (
            <div className="bg-[#A5F3FC]/20 rounded-2xl p-4 animate-fadeIn">
              <p className="text-[#0F766E] text-center">
                📅 Duración: {Math.ceil((new Date(dates.endDate).getTime() - new Date(dates.startDate).getTime()) / (1000 * 60 * 60 * 24))} días
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={handleNext}
          disabled={!dates.startDate || !dates.endDate}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
