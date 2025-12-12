import React from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D9488] via-[#38BDF8] to-[#0F172A] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A5F3FC] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-md w-full text-center animate-fadeIn">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-8 shadow-2xl">
            <Logo size="lg" variant="icon" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-white mb-4">
          Bienvenido a TravelNova
        </h1>
        
        {/* Tagline */}
        <p className="text-white/90 text-xl mb-12">
          Explora. Registra. Comparte tu mundo.
        </p>
        
        {/* Description */}
        <p className="text-white/80 mb-12 leading-relaxed">
          La plataforma definitiva para documentar tus aventuras, conectar con viajeros de todo el mundo y descubrir destinos increíbles.
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="dark" 
          size="lg" 
          fullWidth 
          onClick={onNext}
          icon={<ArrowRight size={20} />}
          iconPosition="right"
          className="bg-white text-[#0D9488] hover:bg-white/90"
        >
          Comenzar
        </Button>
        
        {/* Skip option */}
        <button 
          className="mt-6 text-white/70 hover:text-white transition-colors"
          onClick={onNext}
        >
          Ya tengo una cuenta
        </button>
      </div>
    </div>
  );
}
