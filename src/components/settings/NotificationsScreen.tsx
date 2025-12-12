import React, { useState } from 'react';
import { Card } from '../Card';
import { ArrowLeft, Bell, Heart, MessageCircle, Users, MapPin, TrendingUp } from 'lucide-react';

interface NotificationsScreenProps {
  onBack?: () => void;
}

export function NotificationsScreen({ onBack }: NotificationsScreenProps) {
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    newFollowers: true,
    messages: true,
    tripUpdates: true,
    recommendations: false,
    newsletter: false,
  });
  
  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const notificationTypes = [
    {
      key: 'likes' as keyof typeof notifications,
      icon: Heart,
      title: 'Me gusta',
      description: 'Cuando alguien le da me gusta a tu publicación',
      color: '#0D9488',
    },
    {
      key: 'comments' as keyof typeof notifications,
      icon: MessageCircle,
      title: 'Comentarios',
      description: 'Cuando alguien comenta en tus publicaciones',
      color: '#38BDF8',
    },
    {
      key: 'newFollowers' as keyof typeof notifications,
      icon: Users,
      title: 'Nuevos seguidores',
      description: 'Cuando alguien comienza a seguirte',
      color: '#A5F3FC',
    },
    {
      key: 'messages' as keyof typeof notifications,
      icon: MessageCircle,
      title: 'Mensajes',
      description: 'Cuando recibes un nuevo mensaje',
      color: '#0F766E',
    },
    {
      key: 'tripUpdates' as keyof typeof notifications,
      icon: MapPin,
      title: 'Actualizaciones de viajes',
      description: 'Recordatorios sobre tus viajes próximos',
      color: '#14B8A6',
    },
    {
      key: 'recommendations' as keyof typeof notifications,
      icon: TrendingUp,
      title: 'Recomendaciones',
      description: 'Sugerencias de destinos y viajeros',
      color: '#38BDF8',
    },
    {
      key: 'newsletter' as keyof typeof notifications,
      icon: Bell,
      title: 'Newsletter',
      description: 'Noticias y actualizaciones de TravelNova',
      color: '#A5F3FC',
    },
  ];
  
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
          <h2 className="text-white mb-2">Notificaciones</h2>
          <p className="text-white/80">Controla qué notificaciones recibes</p>
        </div>
      </div>
      
      {/* Notification Options */}
      <div className="max-w-md mx-auto px-6 py-8 space-y-4">
        {notificationTypes.map((type, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${type.color}20` }}
              >
                <type.icon size={24} style={{ color: type.color }} />
              </div>
              <div className="flex-1">
                <h4 className="text-[#0F172A] mb-1">{type.title}</h4>
                <p className="text-sm text-[#64748B]">{type.description}</p>
              </div>
              <button
                onClick={() => toggleNotification(type.key)}
                className="flex-shrink-0"
              >
                <div className={`w-12 h-6 rounded-full relative transition-colors ${
                  notifications[type.key] ? 'bg-[#0D9488]' : 'bg-[#E2E8F0]'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform ${
                    notifications[type.key] ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </div>
              </button>
            </div>
          </Card>
        ))}
        
        {/* Push Notifications */}
        <Card className="bg-[#A5F3FC]/20 border-2 border-[#A5F3FC]">
          <h4 className="text-[#0F172A] mb-3">📱 Notificaciones Push</h4>
          <p className="text-sm text-[#0F766E] mb-4 leading-relaxed">
            Asegúrate de tener las notificaciones push activadas en la configuración de tu dispositivo para recibir actualizaciones en tiempo real.
          </p>
          <button className="text-sm text-[#0D9488] hover:underline">
            Ir a configuración del dispositivo
          </button>
        </Card>
      </div>
    </div>
  );
}
