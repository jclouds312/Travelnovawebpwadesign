import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { ArrowLeft, User, Mail, MapPin, Link as LinkIcon, Camera } from 'lucide-react';

interface EditProfileScreenProps {
  onBack?: () => void;
  onSave?: () => void;
}

export function EditProfileScreen({ onBack, onSave }: EditProfileScreenProps) {
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    username: 'juanperez',
    email: 'juan@email.com',
    bio: 'Viajero apasionado 🌍 | Fotografía | Explorando el mundo un país a la vez',
    location: 'Ciudad de México',
    website: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave?.();
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
          <h3 className="text-[#0F172A]">Editar perfil</h3>
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleSubmit}
          >
            Guardar
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 max-w-md mx-auto w-full px-6 py-8">
        {/* Avatar Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <img 
              src="https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?w=200&h=200&fit=crop"
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#0D9488] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0F766E] transition-colors">
              <Camera size={20} />
            </button>
          </div>
          <p className="text-sm text-[#64748B]">Toca para cambiar foto</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nombre"
            type="text"
            placeholder="Tu nombre"
            icon={<User size={20} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          
          <Input
            label="Nombre de usuario"
            type="text"
            placeholder="@usuario"
            icon={<User size={20} />}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="tu@email.com"
            icon={<Mail size={20} />}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          
          <div>
            <label className="block mb-2 text-[#0F172A]">
              Biografía
            </label>
            <textarea
              placeholder="Cuéntanos sobre ti..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all resize-none h-32"
              maxLength={150}
            />
            <p className="text-xs text-[#64748B] mt-1 text-right">
              {formData.bio.length}/150
            </p>
          </div>
          
          <Input
            label="Ubicación"
            type="text"
            placeholder="Ciudad, País"
            icon={<MapPin size={20} />}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          
          <Input
            label="Sitio web (opcional)"
            type="url"
            placeholder="https://tuwebsite.com"
            icon={<LinkIcon size={20} />}
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </form>
      </div>
    </div>
  );
}
