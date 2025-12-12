import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { ArrowLeft, Heart, Share2, MapPin, Star, Users, DollarSign, Calendar, Thermometer } from 'lucide-react';

interface DestinationDetailScreenProps {
  destinationId?: number;
  onBack?: () => void;
  onNavigate?: (screen: string) => void;
}

export function DestinationDetailScreen({ destinationId, onBack, onNavigate }: DestinationDetailScreenProps) {
  const [saved, setSaved] = useState(false);
  
  const destination = {
    id: destinationId || 1,
    name: 'Bali, Indonesia',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc2NTUyNzkwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 12453,
    description: 'Bali es un paraíso tropical conocido por sus templos antiguos, playas de ensueño, arrozales en terrazas y una cultura vibrante. La isla ofrece desde retiros espirituales hasta aventuras acuáticas.',
    bestTime: 'Abril - Octubre',
    avgTemp: '28°C',
    avgBudget: '$50-100/día',
    popular: 'Playa, Cultura, Spa',
  };
  
  const highlights = [
    'Templos sagrados milenarios',
    'Playas paradisíacas',
    'Arrozales en terrazas',
    'Gastronomía balinesa',
    'Retiros de yoga y bienestar',
    'Surf de clase mundial',
  ];
  
  const quickInfo = [
    { icon: Calendar, label: 'Mejor época', value: destination.bestTime },
    { icon: Thermometer, label: 'Temperatura', value: destination.avgTemp },
    { icon: DollarSign, label: 'Presupuesto', value: destination.avgBudget },
    { icon: Users, label: 'Popular para', value: destination.popular },
  ];
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero Image */}
      <div className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
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
            <button
              onClick={() => setSaved(!saved)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <Heart 
                size={20} 
                className={saved ? 'text-red-500 fill-red-500' : 'text-white'} 
              />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
              <Share2 size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-white mb-2">{destination.name}</h2>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Star size={16} fill="currentColor" />
                <span>{destination.rating}</span>
              </div>
              <span>•</span>
              <span>{destination.reviews.toLocaleString()} reseñas</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quickInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <info.icon size={24} className="mx-auto mb-2 text-[#0D9488]" />
              <p className="text-xs text-[#64748B] mb-1">{info.label}</p>
              <p className="text-sm text-[#0F172A]">{info.value}</p>
            </Card>
          ))}
        </div>
        
        {/* Description */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-3">Sobre este destino</h3>
          <p className="text-[#64748B] leading-relaxed">
            {destination.description}
          </p>
        </Card>
        
        {/* Highlights */}
        <Card className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Qué hacer</h3>
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0D9488] rounded-full"></div>
                <p className="text-[#0F172A]">{highlight}</p>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <Card hover onClick={() => onNavigate?.('guides')} className="text-center py-6">
            <MapPin size={28} className="mx-auto mb-2 text-[#0D9488]" />
            <p className="text-sm text-[#0F172A]">Guías</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('weather')} className="text-center py-6">
            <Thermometer size={28} className="mx-auto mb-2 text-[#38BDF8]" />
            <p className="text-sm text-[#0F172A]">Clima</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('transport')} className="text-center py-6">
            <MapPin size={28} className="mx-auto mb-2 text-[#A5F3FC]" />
            <p className="text-sm text-[#0F172A]">Transporte</p>
          </Card>
        </div>
        
        {/* CTA */}
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth
          onClick={() => onNavigate?.('create-trip')}
        >
          Planificar viaje a {destination.name}
        </Button>
      </div>
    </div>
  );
}
