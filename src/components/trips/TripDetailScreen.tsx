import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Image as ImageIcon, TrendingUp, Users, Edit, MoreVertical } from 'lucide-react';

interface TripDetailScreenProps {
  tripId?: number;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
}

export function TripDetailScreen({ tripId, onBack, onNavigate }: TripDetailScreenProps) {
  const [liked, setLiked] = useState(false);
  
  // Mock trip data
  const trip = {
    id: tripId || 1,
    title: 'Aventura en Japón',
    destination: 'Tokyo, Kyoto, Osaka',
    image: 'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvJTIwdHJhdmVsfGVufDF8fHx8MTc2NTU2NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    startDate: '15 Nov 2024',
    endDate: '22 Nov 2024',
    days: 7,
    description: 'Una experiencia increíble explorando la cultura, tecnología y tradición de Japón. Visitamos templos antiguos, disfrutamos de la gastronomía local y nos maravillamos con la arquitectura moderna.',
    photos: 156,
    likes: 234,
    status: 'completed',
    stats: {
      cities: 3,
      activities: 24,
      distance: '450 km',
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero Image */}
      <div className="relative h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trip.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
              <Share2 size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
              <MoreVertical size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-md mx-auto">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-xs text-white mb-3">
              ✓ Completado
            </span>
            <h2 className="text-white mb-2">{trip.title}</h2>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <MapPin size={16} />
                {trip.destination}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {trip.days} días
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 -mt-8 relative z-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card glass className="text-center py-3">
            <div className="text-xl text-white mb-1">{trip.stats.cities}</div>
            <div className="text-xs text-white/80">Ciudades</div>
          </Card>
          <Card glass className="text-center py-3">
            <div className="text-xl text-white mb-1">{trip.stats.activities}</div>
            <div className="text-xs text-white/80">Actividades</div>
          </Card>
          <Card glass className="text-center py-3">
            <div className="text-xl text-white mb-1">{trip.stats.distance}</div>
            <div className="text-xs text-white/80">Recorrido</div>
          </Card>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all ${
              liked
                ? 'bg-red-500 text-white'
                : 'bg-white text-[#64748B] hover:bg-[#F8FAFC]'
            }`}
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
            <span>{trip.likes + (liked ? 1 : 0)}</span>
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-[#0D9488] hover:bg-[#F8FAFC] transition-all">
            <Edit size={20} />
          </button>
        </div>
        
        {/* Description */}
        <Card className="mb-6">
          <h3 className="text-[#0F172A] mb-3">Sobre este viaje</h3>
          <p className="text-[#64748B] leading-relaxed">
            {trip.description}
          </p>
        </Card>
        
        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card hover onClick={() => onNavigate?.('timeline')} className="text-center py-6">
            <Calendar size={32} className="mx-auto mb-2 text-[#0D9488]" />
            <h4 className="text-[#0F172A] mb-1">Timeline</h4>
            <p className="text-sm text-[#64748B]">Ver cronología</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('map')} className="text-center py-6">
            <MapPin size={32} className="mx-auto mb-2 text-[#38BDF8]" />
            <h4 className="text-[#0F172A] mb-1">Mapa</h4>
            <p className="text-sm text-[#64748B]">Ver ruta</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('photos')} className="text-center py-6">
            <ImageIcon size={32} className="mx-auto mb-2 text-[#A5F3FC]" />
            <h4 className="text-[#0F172A] mb-1">Fotos</h4>
            <p className="text-sm text-[#64748B]">{trip.photos} imágenes</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('stats')} className="text-center py-6">
            <TrendingUp size={32} className="mx-auto mb-2 text-[#0F766E]" />
            <h4 className="text-[#0F172A] mb-1">Estadísticas</h4>
            <p className="text-sm text-[#64748B]">Ver datos</p>
          </Card>
        </div>
        
        {/* Dates */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B] mb-1">Fecha de inicio</p>
              <p className="text-[#0F172A]">{trip.startDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#64748B] mb-1">Fecha de fin</p>
              <p className="text-[#0F172A]">{trip.endDate}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
