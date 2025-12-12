import React, { useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { ArrowLeft, Image as ImageIcon, MapPin, X } from 'lucide-react';

interface CreatePostScreenProps {
  onBack?: () => void;
  onPublish?: () => void;
}

export function CreatePostScreen({ onBack, onPublish }: CreatePostScreenProps) {
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleImageSelect = () => {
    // Simulate image selection
    setSelectedImage('https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=1080&fit=crop');
  };
  
  const handlePublish = () => {
    if (selectedImage && caption) {
      onPublish?.();
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors"
          >
            <ArrowLeft size={20} />
            Cancelar
          </button>
          <h3 className="text-[#0F172A]">Nueva publicación</h3>
          <Button 
            variant="primary" 
            size="sm"
            onClick={handlePublish}
            disabled={!selectedImage || !caption}
          >
            Publicar
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 max-w-md mx-auto w-full px-6 py-8">
        {/* Image Selection */}
        {!selectedImage ? (
          <Card 
            className="h-80 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8FAFC] transition-colors"
            onClick={handleImageSelect}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-3xl flex items-center justify-center mb-4">
              <ImageIcon size={40} className="text-white" />
            </div>
            <h3 className="text-[#0F172A] mb-2">Seleccionar foto</h3>
            <p className="text-[#64748B] text-center">
              Toca para elegir una imagen de tu galería
            </p>
          </Card>
        ) : (
          <Card className="p-0 overflow-hidden mb-6 relative">
            <img 
              src={selectedImage}
              alt="Selected"
              className="w-full h-80 object-cover"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
            >
              <X size={20} className="text-white" />
            </button>
          </Card>
        )}
        
        {/* Caption Input */}
        {selectedImage && (
          <div className="space-y-4 animate-slideUp">
            <div>
              <label className="block mb-2 text-[#0F172A]">
                Descripción
              </label>
              <textarea
                placeholder="Escribe algo sobre tu viaje..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all resize-none h-32"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-[#0F172A]">
                Ubicación (opcional)
              </label>
              <div className="relative">
                <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                <input
                  type="text"
                  placeholder="¿Dónde fue tomada?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
                />
              </div>
            </div>
            
            {/* Hashtag Suggestions */}
            <div>
              <p className="text-sm text-[#64748B] mb-2">Hashtags sugeridos</p>
              <div className="flex flex-wrap gap-2">
                {['#Travel', '#Adventure', '#Wanderlust', '#TravelPhotography', '#Explore'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setCaption(caption + ' ' + tag)}
                    className="px-3 py-1 bg-[#A5F3FC]/20 text-[#0F766E] text-sm rounded-full hover:bg-[#A5F3FC]/30 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
