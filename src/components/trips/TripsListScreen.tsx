import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Plus, Calendar, MapPin, Image, Filter, Grid3x3, List } from 'lucide-react';

interface TripsListScreenProps {
  onNavigate?: (screen: string, tripId?: number) => void;
}

const trips = [
  {
    id: 1,
    title: 'Aventura en Japón',
    destination: 'Tokyo, Kyoto, Osaka',
    image: 'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvJTIwdHJhdmVsfGVufDF8fHx8MTc2NTU2NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    startDate: '15 Nov 2024',
    endDate: '22 Nov 2024',
    days: 7,
    photos: 156,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Romance en París',
    destination: 'París, Versalles',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTU0NjIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    startDate: '3 Oct 2024',
    endDate: '8 Oct 2024',
    days: 5,
    photos: 98,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Exploración NYC',
    destination: 'Nueva York',
    image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjU0NTA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    startDate: '20 Dic 2024',
    endDate: '25 Dic 2024',
    days: 4,
    photos: 0,
    status: 'planned',
  },
  {
    id: 4,
    title: 'Paraíso en Bali',
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhcmFkaXNlJTIwdHJvcGljYWx8ZW58MXx8fHwxNzY1NDYzNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    startDate: '1 Feb 2025',
    endDate: '10 Feb 2025',
    days: 9,
    photos: 0,
    status: 'planned',
  },
];

export function TripsListScreen({ onNavigate }: TripsListScreenProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'completed' | 'planned'>('all');
  
  const filteredTrips = filter === 'all' 
    ? trips 
    : trips.filter(trip => trip.status === filter);
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-white mb-6">Mis Viajes</h2>
          
          <Button 
            variant="dark" 
            size="lg" 
            fullWidth
            icon={<Plus size={20} />}
            onClick={() => onNavigate?.('create-trip')}
            className="bg-white text-[#0D9488] hover:bg-white/90"
          >
            Crear nuevo viaje
          </Button>
        </div>
      </div>
      
      {/* Filters & View Toggle */}
      <div className="max-w-md mx-auto px-6 py-6 bg-white border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-[#0D9488] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'completed'
                  ? 'bg-[#0D9488] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
              }`}
            >
              Completados
            </button>
            <button
              onClick={() => setFilter('planned')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'planned'
                  ? 'bg-[#0D9488] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
              }`}
            >
              Próximos
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#0D9488] text-white'
                  : 'text-[#64748B] hover:bg-[#F8FAFC]'
              }`}
            >
              <Grid3x3 size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#0D9488] text-white'
                  : 'text-[#64748B] hover:bg-[#F8FAFC]'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Trips Grid/List */}
      <div className="max-w-md mx-auto px-6 py-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredTrips.map((trip, index) => (
              <Card 
                key={trip.id} 
                hover 
                className="p-0 overflow-hidden animate-slideUp cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => onNavigate?.('trip-detail', trip.id)}
              >
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${trip.image})` }}
                >
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs bg-white/90 backdrop-blur-sm">
                    {trip.status === 'completed' ? '✓ Completado' : '📅 Próximo'}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[#0F172A] mb-2">{trip.title}</h4>
                  <div className="space-y-1 text-sm text-[#64748B]">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="truncate">{trip.destination}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{trip.days} días</span>
                    </div>
                    {trip.photos > 0 && (
                      <div className="flex items-center gap-1">
                        <Image size={14} />
                        <span>{trip.photos} fotos</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTrips.map((trip, index) => (
              <Card 
                key={trip.id} 
                hover 
                className="p-0 overflow-hidden animate-slideUp cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => onNavigate?.('trip-detail', trip.id)}
              >
                <div className="flex gap-4">
                  <div 
                    className="w-32 h-32 bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${trip.image})` }}
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#0F172A]">{trip.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-[#0D9488]/10 text-[#0D9488]">
                        {trip.status === 'completed' ? 'Completado' : 'Próximo'}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-[#64748B]">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{trip.destination}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{trip.startDate} - {trip.endDate}</span>
                      </div>
                      {trip.photos > 0 && (
                        <div className="flex items-center gap-1">
                          <Image size={14} />
                          <span>{trip.photos} fotos</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
