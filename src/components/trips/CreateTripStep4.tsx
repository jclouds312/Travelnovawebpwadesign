import React from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { ArrowLeft, Check, MapPin, Calendar, Image } from 'lucide-react';

interface CreateTripStep4Props {
  tripData: any;
  onComplete: () => void;
  onBack: () => void;
}

export function CreateTripStep4({ tripData, onComplete, onBack }: CreateTripStep4Props) {
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
          <div className="h-1 flex-1 bg-[#0D9488] rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-[#0D9488] mb-2">Paso 4 de 4</p>
          <h2 className="text-[#0F172A] mb-2">Revisa tu viaje</h2>
          <p className="text-[#64748B]">
            Confirma que todo esté correcto
          </p>
        </div>
      </div>
      
      {/* Preview */}
      <div className="flex-1 max-w-md w-full mx-auto space-y-6">
        {/* Main Info Card */}
        <Card className="space-y-4">
          <div>
            <p className="text-sm text-[#64748B] mb-1">Título</p>
            <h3 className="text-[#0F172A]">{tripData?.step1?.title || 'Sin título'}</h3>
          </div>
          
          <div className="h-px bg-[#E2E8F0]"></div>
          
          <div className="flex items-center gap-3 text-[#0F172A]">
            <MapPin size={20} className="text-[#0D9488]" />
            <div>
              <p className="text-sm text-[#64748B]">Destino</p>
              <p>{tripData?.step1?.destination || 'Sin destino'}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-[#0F172A]">
            <Calendar size={20} className="text-[#0D9488]" />
            <div>
              <p className="text-sm text-[#64748B]">Fechas</p>
              <p>
                {tripData?.step2?.startDate && tripData?.step2?.endDate
                  ? `${new Date(tripData.step2.startDate).toLocaleDateString()} - ${new Date(tripData.step2.endDate).toLocaleDateString()}`
                  : 'Sin fechas'}
              </p>
            </div>
          </div>
          
          {tripData?.step3?.photos?.length > 0 && (
            <div className="flex items-center gap-3 text-[#0F172A]">
              <Image size={20} className="text-[#0D9488]" />
              <div>
                <p className="text-sm text-[#64748B]">Fotos</p>
                <p>{tripData.step3.photos.length} imágenes</p>
              </div>
            </div>
          )}
          
          {tripData?.step1?.description && (
            <>
              <div className="h-px bg-[#E2E8F0]"></div>
              <div>
                <p className="text-sm text-[#64748B] mb-2">Descripción</p>
                <p className="text-[#0F172A]">{tripData.step1.description}</p>
              </div>
            </>
          )}
        </Card>
        
        {/* Photos Preview */}
        {tripData?.step3?.photos?.length > 0 && (
          <Card>
            <p className="text-sm text-[#64748B] mb-3">Vista previa de fotos</p>
            <div className="grid grid-cols-4 gap-2">
              {tripData.step3.photos.slice(0, 4).map((photo: string, index: number) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={photo} 
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {tripData.step3.photos.length > 4 && (
              <p className="text-sm text-[#64748B] text-center mt-2">
                +{tripData.step3.photos.length - 4} más
              </p>
            )}
          </Card>
        )}
        
        {/* Success Message */}
        <div className="bg-gradient-to-br from-[#0D9488]/10 to-[#38BDF8]/10 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-white" strokeWidth={3} />
          </div>
          <p className="text-[#0F172A]">
            ¡Todo listo para crear tu viaje!
          </p>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-md w-full mx-auto">
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={onComplete}
          icon={<Check size={20} />}
        >
          Crear viaje
        </Button>
      </div>
    </div>
  );
}
