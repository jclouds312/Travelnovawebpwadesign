import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, Cloud, Droplets, Wind, Sun, CloudRain } from 'lucide-react';

interface WeatherScreenProps {
  onBack?: () => void;
}

const weeklyForecast = [
  { day: 'Lun', temp: 28, icon: Sun, condition: 'Soleado', rain: 10 },
  { day: 'Mar', temp: 29, icon: Sun, condition: 'Soleado', rain: 5 },
  { day: 'Mié', temp: 27, icon: Cloud, condition: 'Nublado', rain: 20 },
  { day: 'Jue', temp: 26, icon: CloudRain, condition: 'Lluvia', rain: 80 },
  { day: 'Vie', temp: 27, icon: Cloud, condition: 'Nublado', rain: 30 },
  { day: 'Sáb', temp: 29, icon: Sun, condition: 'Soleado', rain: 15 },
  { day: 'Dom', temp: 30, icon: Sun, condition: 'Soleado', rain: 10 },
];

const monthlyAvg = [
  { month: 'Ene', temp: 26, rain: 340 },
  { month: 'Feb', temp: 26, rain: 280 },
  { month: 'Mar', temp: 27, rain: 220 },
  { month: 'Abr', temp: 27, rain: 110 },
  { month: 'May', temp: 27, rain: 90 },
  { month: 'Jun', temp: 27, rain: 70 },
  { month: 'Jul', temp: 26, rain: 50 },
  { month: 'Ago', temp: 26, rain: 40 },
  { month: 'Sep', temp: 27, rain: 60 },
  { month: 'Oct', temp: 27, rain: 90 },
  { month: 'Nov', temp: 27, rain: 150 },
  { month: 'Dic', temp: 27, rain: 290 },
];

export function WeatherScreen({ onBack }: WeatherScreenProps) {
  const currentTemp = 28;
  const maxRain = Math.max(...monthlyAvg.map(m => m.rain));
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0D9488] to-[#38BDF8] px-6 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h2 className="text-white mb-2">Clima en Bali</h2>
          <p className="text-white/80">Información meteorológica</p>
        </div>
      </div>
      
      {/* Current Weather */}
      <div className="max-w-md mx-auto px-6 -mt-4">
        <Card className="text-center py-8 mb-8 bg-gradient-to-br from-[#0D9488] to-[#38BDF8]">
          <Sun size={64} className="mx-auto mb-4 text-white" />
          <div className="text-5xl text-white mb-2">{currentTemp}°C</div>
          <p className="text-white/80">Soleado y cálido</p>
          <div className="flex items-center justify-center gap-8 mt-6 text-white/90">
            <div className="flex items-center gap-2">
              <Droplets size={16} />
              <span className="text-sm">Humedad 75%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind size={16} />
              <span className="text-sm">Viento 12 km/h</span>
            </div>
          </div>
        </Card>
        
        {/* Weekly Forecast */}
        <div className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Próximos 7 días</h3>
          <Card>
            <div className="space-y-4">
              {weeklyForecast.map((day, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-[#E2E8F0] last:border-0"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="w-12 text-[#64748B]">{day.day}</span>
                    <day.icon size={24} className="text-[#0D9488]" />
                    <span className="text-[#0F172A]">{day.condition}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#38BDF8]">
                      <Droplets size={14} />
                      <span className="text-sm">{day.rain}%</span>
                    </div>
                    <span className="text-[#0F172A] w-12 text-right">{day.temp}°C</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Monthly Average */}
        <div className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Clima anual</h3>
          <Card>
            <p className="text-sm text-[#64748B] mb-4">Precipitaciones mensuales (mm)</p>
            <div className="flex items-end justify-between gap-1 h-32 mb-4">
              {monthlyAvg.map((month, index) => (
                <div 
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full bg-gradient-to-t from-[#38BDF8] to-[#A5F3FC] rounded-t"
                    style={{ height: `${(month.rain / maxRain) * 100}%` }}
                  />
                  <span className="text-xs text-[#64748B]">{month.month}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E2E8F0]">
              <div className="text-center">
                <p className="text-sm text-[#64748B] mb-1">Mejor época</p>
                <p className="text-[#0D9488]">Abr - Oct</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#64748B] mb-1">Temp. media</p>
                <p className="text-[#0F172A]">26-28°C</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#64748B] mb-1">Estación seca</p>
                <p className="text-[#0F172A]">May - Sep</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Tips */}
        <Card className="bg-[#A5F3FC]/20 border-2 border-[#A5F3FC]">
          <h4 className="text-[#0F172A] mb-3">💡 Consejos</h4>
          <ul className="space-y-2 text-sm text-[#0F766E]">
            <li>• Lleva ropa ligera y protector solar</li>
            <li>• La temporada seca (Abr-Oct) es ideal para visitar</li>
            <li>• Prepárate para lluvias tropicales breves</li>
            <li>• Las temperaturas son constantes todo el año</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
