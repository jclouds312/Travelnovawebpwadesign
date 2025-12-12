import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', glass = false, hover = false, onClick }: CardProps) {
  const baseStyles = 'rounded-3xl p-6 transition-all duration-300';
  const glassStyles = glass 
    ? 'bg-white/10 backdrop-blur-xl border border-white/20' 
    : 'bg-white shadow-[0_4px_12px_rgba(15,23,42,0.1)]';
  const hoverStyles = hover ? 'hover:shadow-[0_10px_30px_rgba(15,23,42,0.15)] hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
