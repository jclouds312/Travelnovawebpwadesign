import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Search, MapPin, UserPlus, UserCheck } from 'lucide-react';

interface ExploreUsersScreenProps {
  onNavigate?: (screen: string, userId?: number) => void;
}

const users = [
  {
    id: 1,
    name: 'María González',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    location: 'Ciudad de México',
    trips: 23,
    countries: 12,
    followers: 1234,
    bio: 'Viajera apasionada 🌍 | Fotógrafa | Amante de las culturas',
    following: false,
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    location: 'Barcelona, España',
    trips: 18,
    countries: 15,
    followers: 892,
    bio: 'Nómada digital | Tech & Travel 💻✈️',
    following: true,
  },
  {
    id: 3,
    name: 'Ana Silva',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    location: 'Buenos Aires',
    trips: 31,
    countries: 18,
    followers: 2456,
    bio: 'Exploradora del mundo 🗺️ | Blogger de viajes',
    following: false,
  },
  {
    id: 4,
    name: 'Pedro López',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    location: 'Madrid, España',
    trips: 14,
    countries: 9,
    followers: 567,
    bio: 'Aventurero | Montañas y playas 🏔️🏖️',
    following: false,
  },
  {
    id: 5,
    name: 'Laura Martínez',
    avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop',
    location: 'Bogotá, Colombia',
    trips: 27,
    countries: 14,
    followers: 1678,
    bio: 'Travel vlogger 🎥 | Foodie',
    following: true,
  },
];

export function ExploreUsersScreen({ onNavigate }: ExploreUsersScreenProps) {
  const [following, setFollowing] = useState<Set<number>>(
    new Set(users.filter(u => u.following).map(u => u.id))
  );
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleFollow = (userId: number) => {
    const newFollowing = new Set(following);
    if (newFollowing.has(userId)) {
      newFollowing.delete(userId);
    } else {
      newFollowing.add(userId);
    }
    setFollowing(newFollowing);
  };
  
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-white mb-6">Descubre viajeros</h2>
          
          {/* Search */}
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Buscar viajeros..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-xl text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
          </div>
        </div>
      </div>
      
      {/* Users List */}
      <div className="max-w-md mx-auto px-6 py-8 space-y-4">
        {filteredUsers.map((user, index) => (
          <Card 
            key={user.id}
            hover
            className="animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex gap-4">
              <img 
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover cursor-pointer"
                onClick={() => onNavigate?.('user-profile', user.id)}
              />
              <div className="flex-1">
                <h4 
                  className="text-[#0F172A] mb-1 cursor-pointer hover:text-[#0D9488]"
                  onClick={() => onNavigate?.('user-profile', user.id)}
                >
                  {user.name}
                </h4>
                <div className="flex items-center gap-1 text-sm text-[#64748B] mb-2">
                  <MapPin size={12} />
                  <span>{user.location}</span>
                </div>
                <p className="text-sm text-[#64748B] mb-3">{user.bio}</p>
                <div className="flex items-center gap-4 text-sm text-[#64748B]">
                  <span><strong className="text-[#0F172A]">{user.trips}</strong> viajes</span>
                  <span><strong className="text-[#0F172A]">{user.countries}</strong> países</span>
                  <span><strong className="text-[#0F172A]">{user.followers}</strong> seguidores</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
              {following.has(user.id) ? (
                <Button 
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => toggleFollow(user.id)}
                  icon={<UserCheck size={18} />}
                >
                  Siguiendo
                </Button>
              ) : (
                <Button 
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => toggleFollow(user.id)}
                  icon={<UserPlus size={18} />}
                >
                  Seguir
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
