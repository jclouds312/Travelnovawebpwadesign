import React, { useState } from 'react';
import { ArrowLeft, Download, Share2, Heart, X } from 'lucide-react';

interface TripPhotosScreenProps {
  onBack?: () => void;
}

const photos = [
  'https://images.unsplash.com/photo-1623566713971-1f7ad1dc7bfb?w=800&fit=crop',
  'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&fit=crop',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&fit=crop',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&fit=crop',
  'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&fit=crop',
  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&fit=crop',
  'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&fit=crop',
  'https://images.unsplash.com/photo-1548493603-8480f60c878e?w=800&fit=crop',
  'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&fit=crop',
  'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&fit=crop',
  'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&fit=crop',
  'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&fit=crop',
];

export function TripPhotosScreen({ onBack }: TripPhotosScreenProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  
  const toggleLike = (photo: string) => {
    const newLiked = new Set(likedPhotos);
    if (newLiked.has(photo)) {
      newLiked.delete(photo);
    } else {
      newLiked.add(photo);
    }
    setLikedPhotos(newLiked);
  };
  
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Header */}
      <div className="bg-[#0F172A] px-6 pt-12 pb-6 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Volver
            </button>
            <span className="text-white">{photos.length} fotos</span>
          </div>
        </div>
      </div>
      
      {/* Photo Grid */}
      <div className="max-w-md mx-auto px-3 py-6">
        <div className="grid grid-cols-3 gap-1">
          {photos.map((photo, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity animate-fadeIn"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <img 
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn">
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <X size={20} className="text-white" />
          </button>
          
          <div className="w-full max-w-4xl px-6">
            <img 
              src={selectedPhoto}
              alt="Selected"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => toggleLike(selectedPhoto)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Heart 
                  size={20} 
                  className={`${likedPhotos.has(selectedPhoto) ? 'text-red-500 fill-red-500' : 'text-white'}`}
                />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <Share2 size={20} className="text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                <Download size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
