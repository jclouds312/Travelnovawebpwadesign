import React, { useState } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Heart, MessageCircle, Share2, MapPin, MoreHorizontal, Plus } from 'lucide-react';

interface CommunityFeedScreenProps {
  onNavigate?: (screen: string, postId?: number) => void;
}

const posts = [
  {
    id: 1,
    user: {
      name: 'María González',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
      location: 'Bali, Indonesia',
    },
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=1080&fit=crop',
    caption: '¡Experiencia increíble en el paraíso! 🌴 7 días explorando templos, playas y cultura balinesa. #Bali #TravelGoals',
    likes: 234,
    comments: 45,
    time: 'Hace 2 horas',
    liked: false,
  },
  {
    id: 2,
    user: {
      name: 'Carlos Ruiz',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
      location: 'Londres, Reino Unido',
    },
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1080&fit=crop',
    caption: 'La magia de Londres nunca decepciona ✨ Cada rincón cuenta una historia. #London #Travel',
    likes: 156,
    comments: 28,
    time: 'Hace 5 horas',
    liked: true,
  },
  {
    id: 3,
    user: {
      name: 'Ana Silva',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
      location: 'Roma, Italia',
    },
    image: 'https://images.unsplash.com/photo-1629914265922-d62c1454b717?w=1080&fit=crop',
    caption: 'Historia en cada esquina 🏛️ Roma es un museo al aire libre. #Rome #Italy',
    likes: 189,
    comments: 32,
    time: 'Hace 1 día',
    liked: false,
  },
];

export function CommunityFeedScreen({ onNavigate }: CommunityFeedScreenProps) {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(
    new Set(posts.filter(p => p.liked).map(p => p.id))
  );
  
  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-6 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h2 className="text-[#0F172A]">Comunidad</h2>
          <Button 
            variant="primary" 
            size="sm"
            icon={<Plus size={18} />}
            onClick={() => onNavigate?.('create-post')}
          >
            Publicar
          </Button>
        </div>
      </div>
      
      {/* Feed */}
      <div className="max-w-md mx-auto">
        {posts.map((post, index) => (
          <div 
            key={post.id}
            className="bg-white mb-4 animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* User Header */}
            <div className="px-6 py-4 flex items-center gap-3">
              <img 
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-[#0F172A]">
                  <strong>{post.user.name}</strong>
                </p>
                <div className="flex items-center gap-1 text-sm text-[#64748B]">
                  <MapPin size={12} />
                  <span>{post.user.location}</span>
                </div>
              </div>
              <button className="text-[#64748B] hover:text-[#0D9488]">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            {/* Image */}
            <div 
              className="w-full h-96 bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${post.image})` }}
              onClick={() => onNavigate?.('post-detail', post.id)}
            />
            
            {/* Actions */}
            <div className="px-6 py-4">
              <div className="flex items-center gap-6 mb-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
                >
                  <Heart 
                    size={24}
                    className={likedPosts.has(post.id) ? 'text-red-500 fill-red-500' : ''}
                  />
                  <span>{post.likes + (likedPosts.has(post.id) && !post.liked ? 1 : 0)}</span>
                </button>
                <button 
                  onClick={() => onNavigate?.('post-detail', post.id)}
                  className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
                >
                  <MessageCircle size={24} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors ml-auto">
                  <Share2 size={20} />
                </button>
              </div>
              
              {/* Caption */}
              <p className="text-[#0F172A] mb-2">
                <strong className="mr-2">{post.user.name}</strong>
                {post.caption}
              </p>
              
              <button 
                onClick={() => onNavigate?.('post-detail', post.id)}
                className="text-[#64748B] text-sm hover:text-[#0D9488]"
              >
                Ver los {post.comments} comentarios
              </button>
              
              <p className="text-sm text-[#94A3B8] mt-2">{post.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
