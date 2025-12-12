import React from 'react';
import { Card } from '../Card';
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

interface ActivityFeedScreenProps {
  onNavigate?: (screen: string) => void;
}

const activities = [
  {
    id: 1,
    user: {
      name: 'María González',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    action: 'completó un viaje a',
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhcmFkaXNlJTIwdHJvcGljYWx8ZW58MXx8fHwxNzY1NDYzNzk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: '¡Experiencia increíble en el paraíso! 🌴 7 días explorando templos, playas y cultura balinesa.',
    likes: 234,
    comments: 45,
    time: 'Hace 2 horas',
  },
  {
    id: 2,
    user: {
      name: 'Carlos Ruiz',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    action: 'visitó',
    destination: 'Londres, Reino Unido',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1080&fit=crop',
    caption: 'La magia de Londres nunca decepciona ✨',
    likes: 156,
    comments: 28,
    time: 'Hace 5 horas',
  },
  {
    id: 3,
    user: {
      name: 'Ana Silva',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    action: 'está explorando',
    destination: 'Roma, Italia',
    image: 'https://images.unsplash.com/photo-1629914265922-d62c1454b717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRyYXZlbCUyMGV1cm9wZXxlbnwxfHx8fDE3NjU1NjcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Historia en cada esquina 🏛️',
    likes: 189,
    comments: 32,
    time: 'Hace 1 día',
  },
];

export function ActivityFeedScreen({ onNavigate }: ActivityFeedScreenProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-6 sticky top-0 z-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-[#0F172A]">Actividad de amigos</h2>
        </div>
      </div>
      
      {/* Feed */}
      <div className="max-w-md mx-auto">
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className="bg-white mb-4 animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* User Header */}
            <div className="px-6 py-4 flex items-center gap-3">
              <img 
                src={activity.user.avatar}
                alt={activity.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-[#0F172A]">
                  <strong>{activity.user.name}</strong>
                </p>
                <p className="text-sm text-[#64748B]">
                  {activity.action} <span className="text-[#0D9488]">{activity.destination}</span>
                </p>
              </div>
              <button className="text-[#64748B] hover:text-[#0D9488]">
                <Share2 size={20} />
              </button>
            </div>
            
            {/* Image */}
            <div 
              className="w-full h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${activity.image})` }}
            />
            
            {/* Actions */}
            <div className="px-6 py-4">
              <div className="flex items-center gap-6 mb-3">
                <button className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors">
                  <Heart size={24} />
                  <span>{activity.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors">
                  <MessageCircle size={24} />
                  <span>{activity.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors ml-auto">
                  <MapPin size={20} />
                </button>
              </div>
              
              {/* Caption */}
              <p className="text-[#0F172A] mb-2">
                <strong>{activity.user.name}</strong> {activity.caption}
              </p>
              
              <p className="text-sm text-[#64748B]">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
