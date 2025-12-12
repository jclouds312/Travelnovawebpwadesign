import React from 'react';
import { Globe2, Compass } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

export function Logo({ size = 'md', variant = 'full', className = '' }: LogoProps) {
  const sizeConfig = {
    sm: { icon: 24, text: 'text-lg' },
    md: { icon: 32, text: 'text-2xl' },
    lg: { icon: 48, text: 'text-4xl' },
  };
  
  if (variant === 'icon') {
    return (
      <div className={`relative ${className}`}>
        <Globe2 
          size={sizeConfig[size].icon} 
          className="text-[#0D9488]" 
          strokeWidth={2.5}
        />
        <Compass 
          size={sizeConfig[size].icon * 0.6} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#38BDF8]" 
          strokeWidth={2.5}
        />
      </div>
    );
  }
  
  if (variant === 'text') {
    return (
      <span className={`${sizeConfig[size].text} tracking-tight ${className}`}>
        <span className="text-[#0D9488]">Travel</span>
        <span className="text-[#38BDF8]">Nova</span>
      </span>
    );
  }
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <Globe2 
          size={sizeConfig[size].icon} 
          className="text-[#0D9488]" 
          strokeWidth={2.5}
        />
        <Compass 
          size={sizeConfig[size].icon * 0.6} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#38BDF8]" 
          strokeWidth={2.5}
        />
      </div>
      <span className={`${sizeConfig[size].text} tracking-tight`}>
        <span className="text-[#0D9488]">Travel</span>
        <span className="text-[#38BDF8]">Nova</span>
      </span>
    </div>
  );
}
