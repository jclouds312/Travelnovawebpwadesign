import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Search, Users, Lock, Globe, Plus } from 'lucide-react';

interface GroupsScreenProps {
  onNavigate?: (screen: string, groupId?: number) => void;
}

const groups = [
  {
    id: 1,
    name: 'Viajeros Mochileros',
    members: 12453,
    type: 'public' as const,
    image: 'https://images.unsplash.com/photo-1666037381264-41b4f85ac647?w=400&fit=crop',
    description: 'Comunidad para viajeros de bajo presupuesto',
    posts: 1250,
    joined: true,
  },
  {
    id: 2,
    name: 'Fotografía de Viaje',
    members: 8932,
    type: 'public' as const,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&fit=crop',
    description: 'Comparte y mejora tus fotos de viaje',
    posts: 3240,
    joined: true,
  },
  {
    id: 3,
    name: 'Asia Travel Club',
    members: 15678,
    type: 'public' as const,
    image: 'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?w=400&fit=crop',
    description: 'Todo sobre viajar por Asia',
    posts: 2890,
    joined: false,
  },
  {
    id: 4,
    name: 'Nómadas Digitales',
    members: 6234,
    type: 'private' as const,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&fit=crop',
    description: 'Para trabajadores remotos que viajan',
    posts: 890,
    joined: false,
  },
  {
    id: 5,
    name: 'Solo Travelers',
    members: 9876,
    type: 'public' as const,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&fit=crop',
    description: 'Comunidad de viajeros solitarios',
    posts: 1560,
    joined: true,
  },
];

const categories = ['Todos', 'Mis grupos', 'Públicos', 'Privados'];

export function GroupsScreen({ onNavigate }: GroupsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredGroups = groups.filter(group => {
    const matchesCategory =
      selectedCategory === 'Todos' ||
      (selectedCategory === 'Mis grupos' && group.joined) ||
      (selectedCategory === 'Públicos' && group.type === 'public') ||
      (selectedCategory === 'Privados' && group.type === 'private');
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-white mb-6">Grupos</h2>
          
          {/* Search */}
          <div className="relative mb-6">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Buscar grupos..."
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
      
      {/* Create Group CTA */}
      <div className="max-w-md mx-auto px-6 py-6">
        <Card 
          hover
          className="bg-gradient-to-br from-[#A5F3FC]/20 to-[#38BDF8]/20 cursor-pointer"
          onClick={() => onNavigate?.('create-group')}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-2xl flex items-center justify-center">
              <Plus size={24} className="text-white" />
            </div>
            <div>
              <h4 className="text-[#0F172A] mb-1">Crear nuevo grupo</h4>
              <p className="text-sm text-[#64748B]">Reúne viajeros con tus intereses</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Groups List */}
      <div className="max-w-md mx-auto px-6 space-y-4 mb-8">
        {filteredGroups.map((group, index) => (
          <Card 
            key={group.id}
            hover
            className="p-0 overflow-hidden animate-slideUp cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onNavigate?.('group-detail', group.id)}
          >
            <div className="flex gap-4">
              <div 
                className="w-24 h-24 bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${group.image})` }}
              />
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-[#0F172A]">{group.name}</h4>
                  {group.type === 'private' ? (
                    <Lock size={16} className="text-[#64748B]" />
                  ) : (
                    <Globe size={16} className="text-[#0D9488]" />
                  )}
                </div>
                <p className="text-sm text-[#64748B] mb-3">{group.description}</p>
                <div className="flex items-center gap-4 text-sm text-[#64748B]">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{(group.members / 1000).toFixed(1)}k</span>
                  </div>
                  <span>•</span>
                  <span>{group.posts} publicaciones</span>
                </div>
              </div>
            </div>
            {group.joined && (
              <div className="px-4 py-2 bg-[#A5F3FC]/10 border-t border-[#E2E8F0]">
                <p className="text-xs text-[#0F766E]">✓ Miembro</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
