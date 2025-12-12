import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Mail, ArrowLeft, Check } from 'lucide-react';

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onSent: () => void;
}

export function ForgotPasswordScreen({ onBack, onSent }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => onSent(), 2000);
  };
  
  if (sent) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center p-6">
        <div className="max-w-md w-full mx-auto text-center animate-fadeIn">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Check size={40} className="text-white" strokeWidth={3} />
          </div>
          <h2 className="text-[#0F172A] mb-4">
            ¡Email enviado!
          </h2>
          <p className="text-[#64748B] mb-8">
            Hemos enviado las instrucciones para restablecer tu contraseña a <strong>{email}</strong>
          </p>
          <p className="text-sm text-[#64748B]">
            Revisa tu bandeja de entrada y spam
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center p-6">
      <div className="max-w-md w-full mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#64748B] hover:text-[#0D9488] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Volver
        </button>
        
        <div className="mb-8 animate-slideUp">
          <div className="w-16 h-16 bg-[#0D9488]/10 rounded-2xl flex items-center justify-center mb-6">
            <Mail size={32} className="text-[#0D9488]" />
          </div>
          <h2 className="text-[#0F172A] mb-4">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="text-[#64748B]">
            No te preocupes, ingresa tu email y te enviaremos instrucciones para restablecerla
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="tu@email.com"
            icon={<Mail size={20} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Button 
            type="submit"
            variant="primary" 
            size="lg" 
            fullWidth
          >
            Enviar instrucciones
          </Button>
        </form>
      </div>
    </div>
  );
}
