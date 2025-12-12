import React, { useState, useRef } from 'react';
import { Button } from '../Button';
import { ArrowLeft } from 'lucide-react';

interface OTPVerificationScreenProps {
  onVerify: () => void;
  onBack: () => void;
  email?: string;
}

export function OTPVerificationScreen({ onVerify, onBack, email = 'tu@email.com' }: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move to next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify();
  };
  
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
        
        <div className="mb-12 text-center animate-slideUp">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-[#0F172A] mb-4">
            Verifica tu email
          </h2>
          <p className="text-[#64748B]">
            Ingresa el código de 6 dígitos que enviamos a<br />
            <strong>{email}</strong>
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex gap-3 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-2xl rounded-2xl border-2 border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 transition-all"
              />
            ))}
          </div>
          
          <Button 
            type="submit"
            variant="primary" 
            size="lg" 
            fullWidth
            disabled={otp.some(digit => !digit)}
          >
            Verificar
          </Button>
          
          <div className="text-center">
            <p className="text-[#64748B] mb-2">
              ¿No recibiste el código?
            </p>
            <button 
              type="button"
              className="text-[#0D9488] hover:underline"
            >
              Reenviar código
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
