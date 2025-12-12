import React, { useState } from 'react';
import { MapPin, Search, Filter, X } from 'lucide-react';
import { Card } from '../Card';
import { Button } from '../Button';

interface MapViewScreenProps {
  onBack?: () => void;
}

const visitedLocations = [
  { id: 1, name: 'Tokyo', country: 'Japón', lat: 35.6762, lng: 139.6503, trips: 2 },
  { id: 2, name: 'París', country: 'Francia', lat: 48.8566, lng: 2.3522, trips: 1 },
  { id: 3, name: 'Nueva York', country: 'USA', lat: 40.7128, lng: -74.0060, trips: 3 },
  { id: 4, name: 'Londres', country: 'Reino Unido', lat: 51.5074, lng: -0.1278, trips: 1 },
  { id: 5, name: 'Barcelona', country: 'España', lat: 41.3851, lng: 2.1734, trips: 2 },
];

export function MapViewScreen({ onBack }: MapViewScreenProps) {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4 sticky top-0 z-50">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0F172A]">Mapa Global</h3>
            <button className="text-[#64748B] hover:text-[#0D9488]">
              <Filter size={20} />
            </button>
          </div>
          
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Buscar destino..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
            />
          </div>
        </div>
      </div>
      
      {/* Map Area - Simulated with gradient and pins */}
      <div className="relative h-[400px] bg-gradient-to-br from-[#A5F3FC]/30 via-[#38BDF8]/20 to-[#0D9488]/30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1642009071428-119813340e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3b3JsZCUyMG1hcHxlbnwxfHx8fDE3NjU1NDYyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
          }}
        />
        
        {/* Map Pins */}
        {visitedLocations.map((location, index) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocation(location.id)}
            className="absolute animate-fadeIn"
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 18}%`,
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative group">
              <div className="w-10 h-10 bg-[#0D9488] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform border-4 border-white">
                <MapPin size={20} className="text-white" fill="white" />
              </div>
              {selectedLocation === location.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-xl p-3 border border-[#E2E8F0]">
                    <p className="text-sm text-[#0F172A] mb-1">{location.name}</p>
                    <p className="text-xs text-[#64748B]">{location.trips} viaje{location.trips > 1 ? 's' : ''}</p>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
        
        {/* Map Stats Overlay */}
        <div className="absolute top-4 left-4 right-4 max-w-md mx-auto">
          <Card glass className="flex items-center justify-around py-3">
            <div className="text-center">
              <div className="text-xl text-white">{visitedLocations.length}</div>
              <div className="text-xs text-white/80">Ciudades</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl text-white">12</div>
              <div className="text-xs text-white/80">Países</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl text-white">23</div>
              <div className="text-xs text-white/80">Viajes</div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Locations List */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#0F172A]">Lugares visitados</h3>
          <span className="text-sm text-[#64748B]">{visitedLocations.length} destinos</span>
        </div>
        
        <div className="space-y-3">
          {visitedLocations.map((location) => (
            <Card 
              key={location.id} 
              hover
              onClick={() => setSelectedLocation(location.id)}
              className={`${selectedLocation === location.id ? 'ring-2 ring-[#0D9488]' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#0F172A] mb-1">{location.name}</h4>
                  <p className="text-sm text-[#64748B]">{location.country}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#0D9488]">{location.trips}</div>
                  <p className="text-xs text-[#64748B]">viaje{location.trips > 1 ? 's' : ''}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
