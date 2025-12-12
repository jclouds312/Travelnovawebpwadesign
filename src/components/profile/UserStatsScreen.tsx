import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, MapPin, Calendar, Camera, TrendingUp, Plane, DollarSign } from 'lucide-react';

interface UserStatsScreenProps {
  onBack?: () => void;
}

const monthlyTrips = [
  { month: 'Ene', trips: 2 },
  { month: 'Feb', trips: 1 },
  { month: 'Mar', trips: 3 },
  { month: 'Abr', trips: 2 },
  { month: 'May', trips: 1 },
  { month: 'Jun', trips: 2 },
  { month: 'Jul', trips: 3 },
  { month: 'Ago', trips: 2 },
  { month: 'Sep', trips: 1 },
  { month: 'Oct', trips: 2 },
  { month: 'Nov', trips: 3 },
  { month: 'Dic', trips: 1 },
];

const topDestinations = [
  { name: 'Japón', visits: 3, color: '#0D9488' },
  { name: 'Francia', visits: 2, color: '#38BDF8' },
  { name: 'Italia', visits: 2, color: '#A5F3FC' },
  { name: 'España', visits: 2, color: '#0F766E' },
  { name: 'USA', visits: 3, color: '#14B8A6' },
];

export function UserStatsScreen({ onBack }: UserStatsScreenProps) {
  const stats = {
    totalTrips: 23,
    countries: 12,
    cities: 45,
    photos: 1567,
    totalDays: 187,
    avgTripDuration: 8,
    totalDistance: 42500,
    thisYear: 8,
  };
  
  const maxTrips = Math.max(...monthlyTrips.map(m => m.trips));
  
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
          <h2 className="text-white mb-2">Tus estadísticas</h2>
          <p className="text-white/80">Resumen de tu aventura viajera</p>
        </div>
      </div>
      
      {/* Main Stats */}
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="text-center">
            <Plane size={32} className="mx-auto mb-3 text-[#0D9488]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.totalTrips}</div>
            <p className="text-sm text-[#64748B]">Viajes totales</p>
          </Card>
          
          <Card className="text-center">
            <MapPin size={32} className="mx-auto mb-3 text-[#38BDF8]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.countries}</div>
            <p className="text-sm text-[#64748B]">Países visitados</p>
          </Card>
          
          <Card className="text-center">
            <Camera size={32} className="mx-auto mb-3 text-[#A5F3FC]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.photos}</div>
            <p className="text-sm text-[#64748B]">Fotos subidas</p>
          </Card>
          
          <Card className="text-center">
            <Calendar size={32} className="mx-auto mb-3 text-[#0F766E]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.totalDays}</div>
            <p className="text-sm text-[#64748B]">Días viajando</p>
          </Card>
        </div>
        
        {/* This Year */}
        <Card className="mb-8 bg-gradient-to-br from-[#0D9488]/10 to-[#38BDF8]/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0F172A]">Este año</h3>
            <div className="flex items-center gap-2 text-[#0D9488]">
              <TrendingUp size={20} />
              <span className="text-2xl">{stats.thisYear}</span>
            </div>
          </div>
          <p className="text-sm text-[#64748B]">
            Has completado {stats.thisYear} viajes este año. ¡Sigue explorando!
          </p>
        </Card>
        
        {/* Monthly Activity */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Actividad mensual (2024)</h3>
          <div className="flex items-end justify-between gap-1 h-32 mb-4">
            {monthlyTrips.map((month, index) => (
              <div 
                key={index}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full bg-gradient-to-t from-[#0D9488] to-[#38BDF8] rounded-t"
                  style={{ height: `${(month.trips / maxTrips) * 100}%` }}
                />
                <span className="text-xs text-[#64748B]">{month.month}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-[#64748B]">
            <div className="w-3 h-3 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded"></div>
            <span>Viajes realizados</span>
          </div>
        </Card>
        
        {/* Top Destinations */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Destinos favoritos</h3>
          <div className="space-y-3">
            {topDestinations.map((dest, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#0F172A]">{dest.name}</span>
                  <span className="text-sm text-[#64748B]">{dest.visits} visitas</span>
                </div>
                <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${(dest.visits / 3) * 100}%`,
                      backgroundColor: dest.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Additional Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={20} className="text-[#0D9488]" />
              <p className="text-sm text-[#64748B]">Duración media</p>
            </div>
            <p className="text-2xl text-[#0F172A]">{stats.avgTripDuration} días</p>
          </Card>
          
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={20} className="text-[#38BDF8]" />
              <p className="text-sm text-[#64748B]">Distancia total</p>
            </div>
            <p className="text-2xl text-[#0F172A]">{(stats.totalDistance / 1000).toFixed(0)}k km</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
