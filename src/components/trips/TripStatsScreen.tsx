import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, MapPin, Calendar, Camera, TrendingUp, DollarSign, Users } from 'lucide-react';

interface TripStatsScreenProps {
  onBack?: () => void;
}

export function TripStatsScreen({ onBack }: TripStatsScreenProps) {
  const stats = {
    duration: 7,
    cities: 3,
    photos: 156,
    distance: 450,
    activities: 24,
    budget: 2500,
  };
  
  const destinations = [
    { name: 'Tokyo', days: 4, percentage: 57 },
    { name: 'Kyoto', days: 2, percentage: 29 },
    { name: 'Osaka', days: 1, percentage: 14 },
  ];
  
  const categories = [
    { name: 'Hospedaje', amount: 800, color: '#0D9488' },
    { name: 'Comida', amount: 650, color: '#38BDF8' },
    { name: 'Transporte', amount: 400, color: '#A5F3FC' },
    { name: 'Actividades', amount: 450, color: '#0F766E' },
    { name: 'Otros', amount: 200, color: '#E2E8F0' },
  ];
  
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
          <h2 className="text-white">Estadísticas</h2>
          <p className="text-white/80 mt-2">Aventura en Japón</p>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="text-center">
            <Calendar size={32} className="mx-auto mb-3 text-[#0D9488]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.duration}</div>
            <p className="text-sm text-[#64748B]">Días</p>
          </Card>
          
          <Card className="text-center">
            <MapPin size={32} className="mx-auto mb-3 text-[#38BDF8]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.cities}</div>
            <p className="text-sm text-[#64748B]">Ciudades</p>
          </Card>
          
          <Card className="text-center">
            <Camera size={32} className="mx-auto mb-3 text-[#A5F3FC]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.photos}</div>
            <p className="text-sm text-[#64748B]">Fotos</p>
          </Card>
          
          <Card className="text-center">
            <TrendingUp size={32} className="mx-auto mb-3 text-[#0F766E]" />
            <div className="text-3xl text-[#0F172A] mb-1">{stats.distance}</div>
            <p className="text-sm text-[#64748B]">KM</p>
          </Card>
        </div>
        
        {/* Destinations Breakdown */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Distribución por ciudad</h3>
          <div className="space-y-4">
            {destinations.map((dest, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#0F172A]">{dest.name}</span>
                  <span className="text-sm text-[#64748B]">{dest.days} días</span>
                </div>
                <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#0D9488] to-[#38BDF8] rounded-full transition-all duration-1000"
                    style={{ width: `${dest.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Budget Breakdown */}
        <Card className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0F172A]">Presupuesto</h3>
            <div className="text-2xl text-[#0D9488]">${stats.budget}</div>
          </div>
          
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-[#0F172A]">{category.name}</span>
                </div>
                <span className="text-[#64748B]">${category.amount}</span>
              </div>
            ))}
          </div>
          
          {/* Pie Chart Visual */}
          <div className="mt-6 flex items-center gap-1 h-8 rounded-full overflow-hidden">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="h-full"
                style={{ 
                  backgroundColor: category.color,
                  width: `${(category.amount / stats.budget) * 100}%`,
                }}
              />
            ))}
          </div>
        </Card>
        
        {/* Highlights */}
        <Card>
          <h3 className="text-[#0F172A] mb-4">Highlights</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0D9488]/10 rounded-xl flex items-center justify-center">
                <TrendingUp size={20} className="text-[#0D9488]" />
              </div>
              <div>
                <p className="text-sm text-[#64748B]">Actividades completadas</p>
                <p className="text-[#0F172A]">{stats.activities} experiencias</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center">
                <DollarSign size={20} className="text-[#38BDF8]" />
              </div>
              <div>
                <p className="text-sm text-[#64748B]">Gasto promedio diario</p>
                <p className="text-[#0F172A]">${(stats.budget / stats.duration).toFixed(0)} por día</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
