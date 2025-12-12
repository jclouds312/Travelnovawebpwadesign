import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Search, Filter, TrendingUp, Star, MapPin, Heart } from 'lucide-react';

interface ExploreScreenProps {
  onNavigate?: (screen: string, destinationId?: number) => void;
}

const categories = ['Todos', 'Playa', 'Montaña', 'Ciudad', 'Cultural', 'Aventura'];

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhcmFkaXNlJTIwdHJvcGljYWx8ZW58MXx8fHwxNzY1NDYzNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 12453,
    category: 'Playa',
    description: 'Paraíso tropical con templos antiguos',
    trending: true,
  },
  {
    id: 2,
    name: 'Islandia',
    image: 'https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjU1MDE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 8932,
    category: 'Aventura',
    description: 'Auroras boreales y naturaleza salvaje',
    trending: true,
  },
  {
    id: 3,
    name: 'París, Francia',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTU0NjIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 15678,
    category: 'Ciudad',
    description: 'La ciudad del amor y la cultura',
    trending: false,
  },
  {
    id: 4,
    name: 'Tokyo, Japón',
    image: 'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvJTIwdHJhdmVsfGVufDF8fHx8MTc2NTU2NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 11234,
    category: 'Cultural',
    description: 'Tradición y modernidad en perfecta armonía',
    trending: true,
  },
  {
    id: 5,
    name: 'Roma, Italia',
    image: 'https://images.unsplash.com/photo-1629914265922-d62c1454b717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRyYXZlbCUyMGV1cm9wZXxlbnwxfHx8fDE3NjU1NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 13567,
    category: 'Cultural',
    description: 'Historia antigua en cada esquina',
    trending: false,
  },
  {
    id: 6,
    name: 'Nueva York, USA',
    image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjU0NTA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 14890,
    category: 'Ciudad',
    description: 'La gran manzana que nunca duerme',
    trending: false,
  },
];

export function ExploreScreen({ onNavigate }: ExploreScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === 'Todos' || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-white mb-6">Explorar destinos</h2>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Buscar destinos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-xl text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
          </div>
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-[#0D9488]'
                    : 'bg-white/20 backdrop-blur-xl text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Destinations */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Trending Section */}
        {selectedCategory === 'Todos' && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-[#0D9488]" />
              <h3 className="text-[#0F172A]">Tendencias</h3>
            </div>
            
            <div className="space-y-4">
              {destinations
                .filter(dest => dest.trending)
                .map((dest, index) => (
                  <Card 
                    key={dest.id} 
                    hover 
                    className="p-0 overflow-hidden animate-slideUp cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => onNavigate?.('destination-detail', dest.id)}
                  >
                    <div className="flex gap-4">
                      <div 
                        className="w-32 h-32 bg-cover bg-center flex-shrink-0 relative"
                        style={{ backgroundImage: `url(${dest.image})` }}
                      >
                        <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                          🔥 Trending
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <h4 className="text-[#0F172A] mb-1">{dest.name}</h4>
                        <p className="text-sm text-[#64748B] mb-3">{dest.description}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" fill="currentColor" />
                            <span className="text-sm text-[#0F172A]">{dest.rating}</span>
                          </div>
                          <span className="text-xs text-[#64748B]">({dest.reviews.toLocaleString()})</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}
        
        {/* All Destinations Grid */}
        <div className="mb-4">
          <h3 className="text-[#0F172A] mb-4">
            {selectedCategory === 'Todos' ? 'Todos los destinos' : selectedCategory}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {filteredDestinations.map((dest, index) => (
            <Card 
              key={dest.id} 
              hover 
              className="p-0 overflow-hidden animate-slideUp cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => onNavigate?.('destination-detail', dest.id)}
            >
              <div 
                className="h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                  <Heart size={16} className="text-[#0D9488]" />
                </button>
              </div>
              <div className="p-4">
                <h4 className="text-[#0F172A] mb-2">{dest.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500" fill="currentColor" />
                    <span className="text-sm text-[#0F172A]">{dest.rating}</span>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    ({(dest.reviews / 1000).toFixed(1)}k)
                  </span>
                </div>
                <p className="text-xs text-[#64748B] line-clamp-2">{dest.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
