import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, MapPin, Clock, DollarSign, Star } from 'lucide-react';

interface DestinationGuidesScreenProps {
  onBack?: () => void;
}

const guides = [
  {
    id: 1,
    title: 'Templos Sagrados de Bali',
    description: 'Ruta por los templos más impresionantes',
    duration: '1 día',
    cost: '$30',
    rating: 4.9,
    places: ['Tanah Lot', 'Uluwatu', 'Besakih'],
    image: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?w=800&fit=crop',
  },
  {
    id: 2,
    title: 'Playas del Sur',
    description: 'Las mejores playas para surfear y relajarse',
    duration: '2 días',
    cost: '$50',
    rating: 4.8,
    places: ['Kuta', 'Seminyak', 'Uluwatu'],
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=800&fit=crop',
  },
  {
    id: 3,
    title: 'Arrozales de Ubud',
    description: 'Trekking por los campos de arroz en terrazas',
    duration: '4 horas',
    cost: '$25',
    rating: 4.7,
    places: ['Tegallalang', 'Jatiluwih', 'Campuhan'],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&fit=crop',
  },
  {
    id: 4,
    title: 'Gastronomía Balinesa',
    description: 'Tour culinario por los mejores restaurantes',
    duration: '6 horas',
    cost: '$40',
    rating: 4.9,
    places: ['Ubud', 'Seminyak', 'Sanur'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&fit=crop',
  },
];

export function DestinationGuidesScreen({ onBack }: DestinationGuidesScreenProps) {
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
          <h2 className="text-white mb-2">Guías de viaje</h2>
          <p className="text-white/80">Descubre los mejores itinerarios</p>
        </div>
      </div>
      
      {/* Guides */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="space-y-4">
          {guides.map((guide, index) => (
            <Card 
              key={guide.id} 
              hover 
              className="p-0 overflow-hidden animate-slideUp cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${guide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white mb-1">{guide.title}</h3>
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-sm text-white">{guide.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-[#64748B] mb-4">{guide.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-[#0F172A]">
                    <Clock size={16} className="text-[#0D9488]" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#0F172A]">
                    <DollarSign size={16} className="text-[#38BDF8]" />
                    <span>{guide.cost}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-[#64748B] mb-2">Lugares incluidos:</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.places.map((place, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-[#A5F3FC]/20 text-[#0F766E] text-xs rounded-full"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
