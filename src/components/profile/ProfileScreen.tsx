import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Settings, MapPin, Calendar, Camera, Award, TrendingUp, Edit, Share2 } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void;
}

const profilePhotos = [
  'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?w=400&fit=crop',
  'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&fit=crop',
  'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=400&fit=crop',
  'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=400&fit=crop',
  'https://images.unsplash.com/photo-1629914265922-d62c1454b717?w=400&fit=crop',
  'https://images.unsplash.com/photo-1597434429739-2574d7e06807?w=400&fit=crop',
];

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState<'photos' | 'trips'>('photos');
  
  const profile = {
    name: 'Juan Pérez',
    username: '@juanperez',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    cover: 'https://images.unsplash.com/photo-1642009071428-119813340e22?w=1080&fit=crop',
    bio: 'Viajero apasionado 🌍 | Fotografía | Explorando el mundo un país a la vez',
    location: 'Ciudad de México',
    joined: 'Enero 2023',
    followers: 1234,
    following: 567,
    trips: 23,
    countries: 12,
    photos: profilePhotos.length,
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Cover & Avatar */}
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.cover})` }}
        />
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => onNavigate?.('settings')}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <Settings size={20} className="text-white" />
          </button>
        </div>
        
        <div className="max-w-md mx-auto px-6 -mt-16 relative z-10">
          <div className="flex items-end gap-4 mb-4">
            <img 
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-xl"
            />
            <div className="flex-1 pb-2">
              <Button 
                variant="outline"
                size="sm"
                icon={<Edit size={18} />}
                onClick={() => onNavigate?.('edit-profile')}
              >
                Editar perfil
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="max-w-md mx-auto px-6 mb-6">
        <h2 className="text-[#0F172A] mb-1">{profile.name}</h2>
        <p className="text-[#64748B] mb-3">{profile.username}</p>
        <p className="text-[#0F172A] mb-4 leading-relaxed">{profile.bio}</p>
        
        <div className="flex items-center gap-4 text-sm text-[#64748B] mb-6">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>Desde {profile.joined}</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div>
            <p className="text-xl text-[#0F172A]">{profile.followers}</p>
            <p className="text-sm text-[#64748B]">Seguidores</p>
          </div>
          <div>
            <p className="text-xl text-[#0F172A]">{profile.following}</p>
            <p className="text-sm text-[#64748B]">Siguiendo</p>
          </div>
          <div>
            <p className="text-xl text-[#0F172A]">{profile.trips}</p>
            <p className="text-sm text-[#64748B]">Viajes</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <Card hover onClick={() => onNavigate?.('achievements')} className="text-center py-4">
            <Award size={28} className="mx-auto mb-2 text-[#0D9488]" />
            <p className="text-sm text-[#0F172A]">Logros</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('stats')} className="text-center py-4">
            <TrendingUp size={28} className="mx-auto mb-2 text-[#38BDF8]" />
            <p className="text-sm text-[#0F172A]">Stats</p>
          </Card>
          
          <Card hover onClick={() => onNavigate?.('map')} className="text-center py-4">
            <MapPin size={28} className="mx-auto mb-2 text-[#A5F3FC]" />
            <p className="text-sm text-[#0F172A]">Mapa</p>
          </Card>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#E2E8F0]">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex-1 py-3 text-center transition-colors relative ${
              activeTab === 'photos'
                ? 'text-[#0D9488]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <Camera size={20} className="inline mr-2" />
            Fotos ({profile.photos})
            {activeTab === 'photos' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('trips')}
            className={`flex-1 py-3 text-center transition-colors relative ${
              activeTab === 'trips'
                ? 'text-[#0D9488]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <MapPin size={20} className="inline mr-2" />
            Viajes ({profile.trips})
            {activeTab === 'trips' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488]"></div>
            )}
          </button>
        </div>
        
        {/* Content Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-3 gap-1">
            {profilePhotos.map((photo, index) => (
              <div 
                key={index}
                className="aspect-square bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>
        )}
        
        {activeTab === 'trips' && (
          <div className="space-y-3">
            {[1, 2, 3].map((trip) => (
              <Card key={trip} hover className="p-0 overflow-hidden cursor-pointer">
                <div className="flex gap-4">
                  <div 
                    className="w-24 h-24 bg-cover bg-center"
                    style={{ backgroundImage: `url(${profilePhotos[trip - 1]})` }}
                  />
                  <div className="flex-1 p-4">
                    <h4 className="text-[#0F172A] mb-1">Viaje {trip}</h4>
                    <p className="text-sm text-[#64748B] mb-2">Destino increíble</p>
                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <span>7 días</span>
                      <span>•</span>
                      <span>45 fotos</span>
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
