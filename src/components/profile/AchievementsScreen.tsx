import React from 'react';
import { Card } from '../Card';
import { ArrowLeft, Award, Lock } from 'lucide-react';

interface AchievementsScreenProps {
  onBack?: () => void;
}

const achievements = [
  {
    id: 1,
    title: 'Primer Viaje',
    description: 'Completa tu primer viaje',
    icon: '🎉',
    progress: 100,
    unlocked: true,
    date: 'Enero 2023',
  },
  {
    id: 2,
    title: 'Explorador',
    description: 'Visita 5 países diferentes',
    icon: '🌍',
    progress: 100,
    unlocked: true,
    date: 'Marzo 2023',
  },
  {
    id: 3,
    title: 'Fotógrafo',
    description: 'Sube 100 fotos',
    icon: '📸',
    progress: 100,
    unlocked: true,
    date: 'Mayo 2023',
  },
  {
    id: 4,
    title: 'Trotamundos',
    description: 'Visita 10 países',
    icon: '✈️',
    progress: 100,
    unlocked: true,
    date: 'Agosto 2023',
  },
  {
    id: 5,
    title: 'Social',
    description: 'Consigue 1000 seguidores',
    icon: '🤝',
    progress: 123,
    unlocked: true,
    date: 'Noviembre 2023',
  },
  {
    id: 6,
    title: 'Aventurero',
    description: 'Completa 20 viajes',
    icon: '🏔️',
    progress: 115,
    unlocked: true,
    date: 'Diciembre 2023',
  },
  {
    id: 7,
    title: 'Ciudadano Global',
    description: 'Visita 20 países',
    icon: '🌏',
    progress: 60,
    unlocked: false,
    required: 20,
    current: 12,
  },
  {
    id: 8,
    title: 'Leyenda Viajera',
    description: 'Visita 50 países',
    icon: '👑',
    progress: 24,
    unlocked: false,
    required: 50,
    current: 12,
  },
  {
    id: 9,
    title: 'Maestro Fotógrafo',
    description: 'Sube 1000 fotos',
    icon: '🎨',
    progress: 15,
    unlocked: false,
    required: 1000,
    current: 156,
  },
];

export function AchievementsScreen({ onBack }: AchievementsScreenProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  
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
          <h2 className="text-white mb-2">Logros</h2>
          <p className="text-white/80">{unlockedCount} de {achievements.length} desbloqueados</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="max-w-md mx-auto px-6 -mt-4 mb-8">
        <Card className="bg-white">
          <div className="flex items-center gap-4 mb-3">
            <Award size={32} className="text-[#0D9488]" />
            <div className="flex-1">
              <p className="text-sm text-[#64748B] mb-1">Progreso total</p>
              <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0D9488] to-[#38BDF8] rounded-full transition-all duration-1000"
                  style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-2xl text-[#0D9488]">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </span>
          </div>
        </Card>
      </div>
      
      {/* Achievements List */}
      <div className="max-w-md mx-auto px-6">
        {/* Unlocked */}
        <div className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Desbloqueados</h3>
          <div className="space-y-4">
            {achievements
              .filter(a => a.unlocked)
              .map((achievement, index) => (
                <Card 
                  key={achievement.id}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0D9488] to-[#38BDF8] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#0F172A] mb-1">{achievement.title}</h4>
                      <p className="text-sm text-[#64748B] mb-2">{achievement.description}</p>
                      <p className="text-xs text-[#0D9488]">
                        ✓ Desbloqueado {achievement.date}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
        
        {/* Locked */}
        <div className="mb-8">
          <h3 className="text-[#0F172A] mb-4">Por desbloquear</h3>
          <div className="space-y-4">
            {achievements
              .filter(a => !a.unlocked)
              .map((achievement, index) => (
                <Card 
                  key={achievement.id}
                  className="opacity-60 animate-slideUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#E2E8F0] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative">
                      {achievement.icon}
                      <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                        <Lock size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#0F172A] mb-1">{achievement.title}</h4>
                      <p className="text-sm text-[#64748B] mb-3">{achievement.description}</p>
                      {achievement.current !== undefined && achievement.required !== undefined && (
                        <>
                          <div className="flex items-center justify-between text-sm text-[#64748B] mb-2">
                            <span>{achievement.current} / {achievement.required}</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#0D9488] to-[#38BDF8] rounded-full"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
