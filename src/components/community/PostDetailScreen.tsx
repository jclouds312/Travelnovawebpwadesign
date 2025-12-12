import React, { useState } from 'react';
import { Card } from '../Card';
import { ArrowLeft, Heart, Share2, MapPin, Send } from 'lucide-react';

interface PostDetailScreenProps {
  postId?: number;
  onBack?: () => void;
}

const comments = [
  {
    id: 1,
    user: {
      name: 'Pedro López',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    text: '¡Qué fotos tan increíbles! 😍',
    likes: 12,
    time: 'Hace 1h',
  },
  {
    id: 2,
    user: {
      name: 'Laura Martínez',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    text: 'Bali está en mi lista de pendientes. ¿Algún consejo?',
    likes: 8,
    time: 'Hace 45min',
  },
  {
    id: 3,
    user: {
      name: 'María González',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
      isAuthor: true,
    },
    text: '@Laura Martínez ¡Claro! Te recomiendo visitar Ubud primero y no te pierdas el Templo Uluwatu 🌅',
    likes: 5,
    time: 'Hace 30min',
  },
  {
    id: 4,
    user: {
      name: 'Diego Ramírez',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
    },
    text: 'Definitivamente mi próximo destino 🛫',
    likes: 3,
    time: 'Hace 15min',
  },
];

export function PostDetailScreen({ postId, onBack }: PostDetailScreenProps) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  
  const post = {
    id: postId || 1,
    user: {
      name: 'María González',
      avatar: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=100&h=100&fit=crop',
      location: 'Bali, Indonesia',
    },
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=1080&fit=crop',
    caption: '¡Experiencia increíble en el paraíso! 🌴 7 días explorando templos, playas y cultura balinesa. Cada momento fue mágico, desde los amaneceres en la playa hasta las puestas de sol en Uluwatu. #Bali #TravelGoals #Paradise',
    likes: 234,
    comments: comments.length,
    time: 'Hace 2 horas',
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // Handle comment submission
      setComment('');
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <button className="text-[#64748B] hover:text-[#0D9488]">
            <Share2 size={20} />
          </button>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="max-w-md mx-auto bg-white">
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
        </div>
        
        {/* Image */}
        <div 
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        
        {/* Actions */}
        <div className="px-6 py-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-6 mb-4">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
            >
              <Heart 
                size={28}
                className={liked ? 'text-red-500 fill-red-500' : ''}
              />
              <span className="text-lg">{post.likes + (liked ? 1 : 0)}</span>
            </button>
            <div className="flex items-center gap-2 text-[#64748B]">
              <span className="text-lg">{post.comments} comentarios</span>
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-[#0F172A] leading-relaxed">
            <strong className="mr-2">{post.user.name}</strong>
            {post.caption}
          </p>
          
          <p className="text-sm text-[#94A3B8] mt-3">{post.time}</p>
        </div>
      </div>
      
      {/* Comments */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 animate-fadeIn">
            <img 
              src={comment.user.avatar}
              alt={comment.user.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-white rounded-2xl px-4 py-3">
                <p className="text-[#0F172A] mb-1">
                  <strong className="mr-2">
                    {comment.user.name}
                    {comment.user.isAuthor && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-[#0D9488]/10 text-[#0D9488] rounded-full">
                        Autor
                      </span>
                    )}
                  </strong>
                </p>
                <p className="text-[#0F172A]">{comment.text}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 px-4 text-sm text-[#64748B]">
                <span>{comment.time}</span>
                <button className="hover:text-[#0D9488]">
                  {comment.likes} Me gusta
                </button>
                <button className="hover:text-[#0D9488]">Responder</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Comment Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-6 py-4 shadow-[0_-4px_12px_rgba(15,23,42,0.1)]">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              placeholder="Agregar un comentario..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-2 border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="w-12 h-12 rounded-full bg-[#0D9488] disabled:bg-[#E2E8F0] flex items-center justify-center text-white disabled:text-[#94A3B8] transition-all"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
