import React, { useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { ArrowLeft, ArrowRight, Upload, X, Plus } from 'lucide-react';

interface CreateTripStep3Props {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function CreateTripStep3({ onNext, onBack }: CreateTripStep3Props) {
  const [photos, setPhotos] = useState<string[]>([]);
  
  const handleAddPhoto = () => {
    // Simulate adding photo
    const newPhoto = `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1623566713971-1f7ad1dc7bfb' : '1431274172761-fca41d930114'}?w=400&h=400&fit=crop`;
    setPhotos([...photos, newPhoto]);
  };
  
  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };
  
  const handleNext = () => {
    onNext({ photos });
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col p-6">
      {/* Header */}
      <div className="max-w-md w-full mx-auto mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Atrás
        </button>
        
        {/* Progress */}
        <div className="flex gap-2 mb-6">
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
          <div className="h-1 flex-1 bg-[#E2E8F0] rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-[#0D9488] mb-2">Paso 3 de 4</p>
          <h2 className="text-[#0F172A] mb-2">Agrega fotos</h2>
          <p className="text-[#64748B]">
            Sube las mejores imágenes de tu viaje
          </p>
        </div>
      </div>
      
      {/* Photo Grid */}
      <div className="flex-1 max-w-md w-full mx-auto">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Upload Button */}
          <button
            onClick={handleAddPhoto}
            className="aspect-square rounded-2xl border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0D9488] hover:bg-[#0D9488]/5 transition-all flex flex-col items-center justify-center gap-2"
          >
            <Plus size={24} className="text-[#0D9488]" />
            <span className="text-xs text-[#64748B]">Agregar</span>
          </button>
          
          {/* Photos */}
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={14} className="text-white" />
              </button>
            </div>
          ))}
        </div>
        
        {photos.length === 0 && (
          <Card className="text-center py-12">
            <Upload size={48} className="mx-auto mb-4 text-[#64748B]" />
            <p className="text-[#64748B] mb-2">No has agregado fotos aún</p>
            <p className="text-sm text-[#94A3B8]">
              Las fotos harán tu viaje más memorable
            </p>
          </Card>
        )}
        
        {photos.length > 0 && (
          <div className="bg-[#A5F3FC]/20 rounded-2xl p-4 animate-fadeIn">
            <p className="text-[#0F766E] text-center">
              📸 {photos.length} {photos.length === 1 ? 'foto agregada' : 'fotos agregadas'}
            </p>
          </div>
        )}
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto space-y-3">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={handleNext}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Continuar
        </Button>
        <button 
          onClick={handleNext}
          className="w-full text-center text-[#64748B] hover:text-[#0D9488] transition-colors"
        >
          Omitir por ahora
        </button>
      </div>
    </div>
  );
}
