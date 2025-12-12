import React, { useState } from 'react';
import { Card } from '../Card';
import { ArrowLeft, Plane, Car, Train, Ship, DollarSign, Clock } from 'lucide-react';

interface TransportScreenProps {
  onBack?: () => void;
}

const transportOptions = [
  {
    id: 1,
    type: 'Vuelo',
    icon: Plane,
    from: 'Ciudad de México',
    to: 'Denpasar, Bali',
    duration: '24h (con escalas)',
    price: '$800 - $1,500',
    companies: ['Aeromexico', 'United', 'Qatar Airways'],
    color: '#0D9488',
  },
  {
    id: 2,
    type: 'Alquiler de auto',
    icon: Car,
    from: 'Aeropuerto',
    to: 'Cualquier destino',
    duration: 'Flexible',
    price: '$25 - $50/día',
    companies: ['Hertz', 'Budget', 'Local rentals'],
    color: '#38BDF8',
  },
  {
    id: 3,
    type: 'Taxi/Grab',
    icon: Car,
    from: 'Punto a punto',
    to: 'Dentro de la isla',
    duration: 'Variable',
    price: '$5 - $30',
    companies: ['Grab', 'Gojek', 'Blue Bird'],
    color: '#A5F3FC',
  },
  {
    id: 4,
    type: 'Fast Boat',
    icon: Ship,
    from: 'Bali',
    to: 'Gili Islands',
    duration: '1.5 - 2 horas',
    price: '$25 - $40',
    companies: ['BlueWater Express', 'Scoot Fast Cruises'],
    color: '#0F766E',
  },
];

const tips = [
  'Descarga la app Grab para transporte confiable',
  'Negocia el precio antes de tomar un taxi sin medidor',
  'Alquilar scooter es económico pero requiere licencia',
  'Los ferrys a islas cercanas salen temprano',
];

export function TransportScreen({ onBack }: TransportScreenProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
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
          <h2 className="text-white mb-2">Transporte</h2>
          <p className="text-white/80">Cómo llegar y moverse en Bali</p>
        </div>
      </div>
      
      {/* Transport Options */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-4 mb-8">
          {transportOptions.map((option, index) => (
            <Card 
              key={option.id}
              hover
              className={`animate-slideUp cursor-pointer transition-all ${
                selectedType === option.type ? 'ring-2 ring-[#0D9488]' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedType(option.type)}
            >
              <div className="flex gap-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${option.color}20` }}
                >
                  <option.icon size={28} style={{ color: option.color }} />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-[#0F172A] mb-2">{option.type}</h4>
                  
                  <div className="space-y-1 text-sm text-[#64748B] mb-3">
                    <p>📍 {option.from} → {option.to}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-[#0F172A]">
                      <Clock size={14} className="text-[#0D9488]" />
                      <span>{option.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#0F172A]">
                      <DollarSign size={14} className="text-[#38BDF8]" />
                      <span>{option.price}</span>
                    </div>
                  </div>
                  
                  {selectedType === option.type && (
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] animate-fadeIn">
                      <p className="text-xs text-[#64748B] mb-2">Operadores:</p>
                      <div className="flex flex-wrap gap-2">
                        {option.companies.map((company, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-[#A5F3FC]/20 text-[#0F766E] text-xs rounded-full"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Getting Around Tips */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Consejos de transporte</h3>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#0D9488]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#0D9488]">{index + 1}</span>
                </div>
                <p className="text-[#64748B] text-sm flex-1">{tip}</p>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Distance Map Info */}
        <Card className="bg-gradient-to-br from-[#A5F3FC]/20 to-[#38BDF8]/20">
          <h3 className="text-[#0F172A] mb-4">Distancias aproximadas</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#64748B]">Aeropuerto → Ubud</span>
              <span className="text-[#0F172A]">~1.5h (35km)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748B]">Aeropuerto → Seminyak</span>
              <span className="text-[#0F172A]">~30min (12km)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748B]">Ubud → Uluwatu</span>
              <span className="text-[#0F172A]">~2h (60km)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748B]">Sanur → Nusa Dua</span>
              <span className="text-[#0F172A]">~40min (18km)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
