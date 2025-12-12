import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, MapPin, Camera, Utensils, Hotel, Coffee } from 'lucide-react';

interface TripTimelineScreenProps {
  onBack?: () => void;
}

const timelineEvents = [
  {
    id: 1,
    day: 'Día 1',
    date: '15 Nov',
    events: [
      {
        time: '09:00',
        type: 'flight',
        title: 'Llegada a Tokyo',
        description: 'Aeropuerto Internacional de Narita',
        icon: MapPin,
        color: '#0D9488',
      },
      {
        time: '12:30',
        type: 'hotel',
        title: 'Check-in Hotel',
        description: 'Park Hyatt Tokyo, Shinjuku',
        icon: Hotel,
        color: '#38BDF8',
      },
      {
        time: '15:00',
        type: 'activity',
        title: 'Templo Senso-ji',
        description: 'Visita al templo más antiguo de Tokyo',
        icon: Camera,
        color: '#A5F3FC',
      },
      {
        time: '19:00',
        type: 'food',
        title: 'Cena en Shibuya',
        description: 'Ramen tradicional',
        icon: Utensils,
        color: '#0F766E',
      },
    ],
  },
  {
    id: 2,
    day: 'Día 2',
    date: '16 Nov',
    events: [
      {
        time: '08:00',
        type: 'breakfast',
        title: 'Desayuno',
        description: 'Café local',
        icon: Coffee,
        color: '#0D9488',
      },
      {
        time: '10:00',
        type: 'activity',
        title: 'Mercado Tsukiji',
        description: 'Tour gastronómico',
        icon: Camera,
        color: '#38BDF8',
      },
      {
        time: '14:00',
        type: 'activity',
        title: 'Torre de Tokyo',
        description: 'Vista panorámica',
        icon: MapPin,
        color: '#A5F3FC',
      },
      {
        time: '20:00',
        type: 'food',
        title: 'Cena en Roppongi',
        description: 'Sushi premium',
        icon: Utensils,
        color: '#0F766E',
      },
    ],
  },
  {
    id: 3,
    day: 'Día 3',
    date: '17 Nov',
    events: [
      {
        time: '09:00',
        type: 'activity',
        title: 'Jardín Imperial',
        description: 'Paseo matutino',
        icon: Camera,
        color: '#0D9488',
      },
      {
        time: '13:00',
        type: 'food',
        title: 'Almuerzo',
        description: 'Tempura tradicional',
        icon: Utensils,
        color: '#38BDF8',
      },
    ],
  },
];

export function TripTimelineScreen({ onBack }: TripTimelineScreenProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8 sticky top-0 z-50">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h2 className="text-white">Timeline del viaje</h2>
          <p className="text-white/80 mt-2">Aventura en Japón</p>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0D9488] via-[#38BDF8] to-[#A5F3FC]"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((day) => (
              <div key={day.id} className="animate-slideUp">
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                    <div className="text-center">
                      <div className="text-white text-xs">{day.day}</div>
                      <div className="text-white">{day.date}</div>
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-[#E2E8F0]"></div>
                </div>
                
                {/* Events */}
                <div className="ml-20 space-y-4">
                  {day.events.map((event, index) => (
                    <Card 
                      key={index} 
                      hover
                      className="animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${event.color}20` }}
                        >
                          <event.icon size={20} style={{ color: event.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="text-[#0F172A]">{event.title}</h4>
                            <span className="text-sm text-[#64748B]">{event.time}</span>
                          </div>
                          <p className="text-sm text-[#64748B]">{event.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
