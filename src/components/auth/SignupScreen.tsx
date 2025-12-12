import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface SignupScreenProps {
  onSignup: () => void;
  onLogin: () => void;
}

export function SignupScreen({ onSignup, onLogin }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center p-6">
      <div className="max-w-md w-full mx-auto">
        <div className="mb-8 text-center animate-slideUp">
          <Logo size="md" className="justify-center mb-6" />
          <h2 className="text-[#0F172A] mb-4">
            Crea tu cuenta
          </h2>
          <p className="text-[#64748B]">
            Comienza tu viaje con TravelNova
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <Input
            label="Nombre completo"
            type="text"
            placeholder="Juan Pérez"
            icon={<User size={20} />}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          
          <div className="relative">
            <Input
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              placeholder="Mínimo 8 caracteres"
              icon={<Lock size={20} />}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[52px] text-[#64748B] hover:text-[#0D9488]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="mt-1 w-4 h-4 text-[#0D9488] rounded border-[#E2E8F0] focus:ring-[#0D9488]"
              required
            />
            <label htmlFor="terms" className="text-sm text-[#64748B]">
              Acepto los{' '}
              <a href="#" className="text-[#0D9488] hover:underline">términos y condiciones</a>
              {' '}y la{' '}
              <a href="#" className="text-[#0D9488] hover:underline">política de privacidad</a>
            </label>
          </div>
          
          <Button 
            type="submit"
            variant="primary" 
            size="lg" 
            fullWidth
            className="mt-6"
          >
            Crear cuenta
          </Button>
        </form>
        
        {/* Social Signup */}
        <div className="space-y-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#F8FAFC] text-[#64748B]">O regístrate con</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="md" 
            fullWidth
            onClick={onSignup}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          
          <Button 
            variant="outline" 
            size="md" 
            fullWidth
            onClick={onSignup}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Apple
          </Button>
        </div>
        
        {/* Login link */}
        <div className="text-center">
          <p className="text-[#64748B]">
            ¿Ya tienes cuenta?{' '}
            <button 
              onClick={onLogin}
              className="text-[#0D9488] hover:underline"
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
