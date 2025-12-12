import React from 'react';
import { Card } from '../Card';
import { Logo } from '../Logo';
import { Home, Compass, Users, User, Plus, MapPin, Calendar, TrendingUp, Heart } from 'lucide-react';
import { Button } from '../Button';

interface HomeScreenProps {
  onNavigate?: (screen: string) => void;
}

const recentTrips = [
  {
    id: 1,
    destination: 'Tokyo, Japón',
    image: 'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvJTIwdHJhdmVsfGVufDF8fHx8MTc2NTU2NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    days: 7,
    date: 'Nov 2024',
  },
  {
    id: 2,
    destination: 'París, Francia',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTU0NjIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    days: 5,
    date: 'Oct 2024',
  },
  {
    id: 3,
    destination: 'Nueva York, USA',
    image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjU0NTA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    days: 4,
    date: 'Sep 2024',
  },
];

const friendActivity = [
  {
    id: 1,
    name: 'María González',
    action: 'visitó',
    destination: 'Bali, Indonesia',
    time: 'Hace 2h',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    action: 'completó viaje a',
    destination: 'Londres, Reino Unido',
    time: 'Hace 5h',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Ana Silva',
    action: 'está explorando',
    destination: 'Roma, Italia',
    time: 'Hace 1d',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
  },
];

const stats = [
  { icon: MapPin, label: 'Países', value: '12' },
  { icon: Calendar, label: 'Viajes', value: '23' },
  { icon: TrendingUp, label: 'Este año', value: '5' },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A5F3FC] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Logo size="sm" className="text-white" />
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
              <User size={20} className="text-white" />
            </button>
          </div>
          
          <h2 className="text-white mb-2">
            ¡Hola, viajero! 👋
          </h2>
          <p className="text-white/80">
            ¿Listo para tu próxima aventura?
          </p>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="max-w-md mx-auto px-6 -mt-20 relative z-20 mb-8">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <Card key={index} glass className="text-center">
              <stat.icon size={24} className="text-white mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto px-6 pb-24">
        {/* Quick Actions */}
        <div className="mb-8">
          <Button 
            variant="primary" 
            size="lg" 
            fullWidth
            icon={<Plus size={20} />}
            onClick={() => onNavigate?.('create-trip')}
          >
            Crear nuevo viaje
          </Button>
        </div>
        
        {/* Recent Trips */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0F172A]">Tus viajes recientes</h3>
            <button className="text-sm text-[#0D9488] hover:underline">
              Ver todos
            </button>
          </div>
          
          <div className="space-y-4">
            {recentTrips.map((trip) => (
              <Card key={trip.id} hover className="overflow-hidden p-0">
                <div className="flex gap-4">
                  <div 
                    className="w-24 h-24 bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${trip.image})` }}
                  />
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h4 className="text-[#0F172A] mb-1">{trip.destination}</h4>
                    <div className="flex items-center gap-3 text-sm text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {trip.days} días
                      </span>
                      <span>{trip.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Friend Activity */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#0F172A]">Actividad de amigos</h3>
            <button className="text-sm text-[#0D9488] hover:underline">
              Ver todo
            </button>
          </div>
          
          <div className="space-y-3">
            {friendActivity.map((activity) => (
              <Card key={activity.id} className="flex items-center gap-4">
                <img 
                  src={activity.avatar}
                  alt={activity.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-[#0F172A]">
                    <strong>{activity.name}</strong> {activity.action}{' '}
                    <span className="text-[#0D9488]">{activity.destination}</span>
                  </p>
                  <p className="text-xs text-[#64748B] mt-1">{activity.time}</p>
                </div>
                <button className="text-[#64748B] hover:text-[#0D9488]">
                  <Heart size={20} />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-6 py-4 shadow-[0_-4px_12px_rgba(15,23,42,0.1)]">
        <div className="max-w-md mx-auto flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-[#0D9488]">
            <Home size={24} />
            <span className="text-xs">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#64748B] hover:text-[#0D9488]">
            <Compass size={24} />
            <span className="text-xs">Explorar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#64748B] hover:text-[#0D9488]">
            <Users size={24} />
            <span className="text-xs">Comunidad</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#64748B] hover:text-[#0D9488]">
            <User size={24} />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
