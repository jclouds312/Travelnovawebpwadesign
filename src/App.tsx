import React, { useState } from 'react';
import { Logo } from './components/Logo';

// Onboarding
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { FeatureScreen } from './components/onboarding/FeatureScreen';
import { PermissionsScreen } from './components/onboarding/PermissionsScreen';
import { InterestsScreen } from './components/onboarding/InterestsScreen';
import { CreateAccountScreen } from './components/onboarding/CreateAccountScreen';

// Auth
import { LoginScreen } from './components/auth/LoginScreen';
import { SignupScreen } from './components/auth/SignupScreen';
import { ForgotPasswordScreen } from './components/auth/ForgotPasswordScreen';
import { OTPVerificationScreen } from './components/auth/OTPVerificationScreen';

// Dashboard
import { HomeScreen } from './components/dashboard/HomeScreen';
import { MapViewScreen } from './components/dashboard/MapViewScreen';
import { ActivityFeedScreen } from './components/dashboard/ActivityFeedScreen';

// Trips
import { TripsListScreen } from './components/trips/TripsListScreen';
import { TripDetailScreen } from './components/trips/TripDetailScreen';
import { TripTimelineScreen } from './components/trips/TripTimelineScreen';
import { TripStatsScreen } from './components/trips/TripStatsScreen';
import { TripPhotosScreen } from './components/trips/TripPhotosScreen';
import { CreateTripStep1 } from './components/trips/CreateTripStep1';
import { CreateTripStep2 } from './components/trips/CreateTripStep2';
import { CreateTripStep3 } from './components/trips/CreateTripStep3';
import { CreateTripStep4 } from './components/trips/CreateTripStep4';

// Destinations
import { ExploreScreen } from './components/destinations/ExploreScreen';
import { DestinationDetailScreen } from './components/destinations/DestinationDetailScreen';
import { DestinationGuidesScreen } from './components/destinations/DestinationGuidesScreen';
import { WeatherScreen } from './components/destinations/WeatherScreen';
import { TransportScreen } from './components/destinations/TransportScreen';

// Community
import { CommunityFeedScreen } from './components/community/CommunityFeedScreen';
import { PostDetailScreen } from './components/community/PostDetailScreen';
import { CreatePostScreen } from './components/community/CreatePostScreen';
import { GroupsScreen } from './components/community/GroupsScreen';
import { ExploreUsersScreen } from './components/community/ExploreUsersScreen';

// Profile
import { ProfileScreen } from './components/profile/ProfileScreen';
import { AchievementsScreen } from './components/profile/AchievementsScreen';
import { UserStatsScreen } from './components/profile/UserStatsScreen';
import { EditProfileScreen } from './components/profile/EditProfileScreen';

// Settings
import { SettingsScreen } from './components/settings/SettingsScreen';
import { PrivacyScreen } from './components/settings/PrivacyScreen';
import { NotificationsScreen } from './components/settings/NotificationsScreen';

type Screen =
  | 'welcome'
  | 'features'
  | 'permissions'
  | 'interests'
  | 'create-account'
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'otp'
  | 'home'
  | 'map-view'
  | 'activity-feed'
  | 'trips-list'
  | 'trip-detail'
  | 'trip-timeline'
  | 'trip-stats'
  | 'trip-photos'
  | 'create-trip-1'
  | 'create-trip-2'
  | 'create-trip-3'
  | 'create-trip-4'
  | 'explore'
  | 'destination-detail'
  | 'guides'
  | 'weather'
  | 'transport'
  | 'community-feed'
  | 'post-detail'
  | 'create-post'
  | 'groups'
  | 'explore-users'
  | 'profile'
  | 'achievements'
  | 'stats'
  | 'edit-profile'
  | 'settings'
  | 'privacy'
  | 'notifications';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [tripData, setTripData] = useState<any>({});

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleCreateTripStep = (step: number, data: any) => {
    setTripData((prev: any) => ({ ...prev, [`step${step}`]: data }));
    if (step < 4) {
      navigate(`create-trip-${step + 1}` as Screen);
    }
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      // Onboarding
      case 'welcome':
        return <WelcomeScreen onNext={() => navigate('features')} />;
      case 'features':
        return <FeatureScreen onNext={() => navigate('permissions')} onBack={() => navigate('welcome')} />;
      case 'permissions':
        return <PermissionsScreen onNext={() => navigate('interests')} onBack={() => navigate('features')} />;
      case 'interests':
        return <InterestsScreen onNext={() => navigate('create-account')} onBack={() => navigate('permissions')} />;
      case 'create-account':
        return (
          <CreateAccountScreen
            onComplete={() => navigate('home')}
            onBack={() => navigate('interests')}
            onLogin={() => navigate('login')}
          />
        );

      // Auth
      case 'login':
        return (
          <LoginScreen
            onLogin={() => navigate('home')}
            onSignup={() => navigate('signup')}
            onForgotPassword={() => navigate('forgot-password')}
          />
        );
      case 'signup':
        return <SignupScreen onSignup={() => navigate('home')} onLogin={() => navigate('login')} />;
      case 'forgot-password':
        return <ForgotPasswordScreen onBack={() => navigate('login')} onSent={() => navigate('login')} />;
      case 'otp':
        return <OTPVerificationScreen onVerify={() => navigate('home')} onBack={() => navigate('login')} />;

      // Dashboard
      case 'home':
        return <HomeScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'map-view':
        return <MapViewScreen onBack={() => navigate('home')} />;
      case 'activity-feed':
        return <ActivityFeedScreen onNavigate={(screen) => navigate(screen as Screen)} />;

      // Trips
      case 'trips-list':
        return <TripsListScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'trip-detail':
        return (
          <TripDetailScreen
            onBack={() => navigate('trips-list')}
            onNavigate={(screen) => navigate(screen as Screen)}
          />
        );
      case 'trip-timeline':
        return <TripTimelineScreen onBack={() => navigate('trip-detail')} />;
      case 'trip-stats':
        return <TripStatsScreen onBack={() => navigate('trip-detail')} />;
      case 'trip-photos':
        return <TripPhotosScreen onBack={() => navigate('trip-detail')} />;
      case 'create-trip-1':
        return (
          <CreateTripStep1
            onNext={(data) => handleCreateTripStep(1, data)}
            onBack={() => navigate('home')}
          />
        );
      case 'create-trip-2':
        return (
          <CreateTripStep2
            onNext={(data) => handleCreateTripStep(2, data)}
            onBack={() => navigate('create-trip-1')}
          />
        );
      case 'create-trip-3':
        return (
          <CreateTripStep3
            onNext={(data) => handleCreateTripStep(3, data)}
            onBack={() => navigate('create-trip-2')}
          />
        );
      case 'create-trip-4':
        return (
          <CreateTripStep4
            tripData={tripData}
            onComplete={() => navigate('home')}
            onBack={() => navigate('create-trip-3')}
          />
        );

      // Destinations
      case 'explore':
        return <ExploreScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'destination-detail':
        return (
          <DestinationDetailScreen
            onBack={() => navigate('explore')}
            onNavigate={(screen) => navigate(screen as Screen)}
          />
        );
      case 'guides':
        return <DestinationGuidesScreen onBack={() => navigate('destination-detail')} />;
      case 'weather':
        return <WeatherScreen onBack={() => navigate('destination-detail')} />;
      case 'transport':
        return <TransportScreen onBack={() => navigate('destination-detail')} />;

      // Community
      case 'community-feed':
        return <CommunityFeedScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'post-detail':
        return <PostDetailScreen onBack={() => navigate('community-feed')} />;
      case 'create-post':
        return <CreatePostScreen onBack={() => navigate('community-feed')} onPublish={() => navigate('community-feed')} />;
      case 'groups':
        return <GroupsScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'explore-users':
        return <ExploreUsersScreen onNavigate={(screen) => navigate(screen as Screen)} />;

      // Profile
      case 'profile':
        return <ProfileScreen onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'achievements':
        return <AchievementsScreen onBack={() => navigate('profile')} />;
      case 'stats':
        return <UserStatsScreen onBack={() => navigate('profile')} />;
      case 'edit-profile':
        return <EditProfileScreen onBack={() => navigate('profile')} onSave={() => navigate('profile')} />;

      // Settings
      case 'settings':
        return <SettingsScreen onBack={() => navigate('profile')} onNavigate={(screen) => navigate(screen as Screen)} />;
      case 'privacy':
        return <PrivacyScreen onBack={() => navigate('settings')} />;
      case 'notifications':
        return <NotificationsScreen onBack={() => navigate('settings')} />;

      default:
        return <WelcomeScreen onNext={() => navigate('features')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {renderScreen()}
      
      {/* Screen Navigation Helper (Development Only) */}
      <div className="fixed bottom-4 right-4 z-50">
        <details className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden">
          <summary className="px-4 py-3 cursor-pointer hover:bg-[#F8FAFC] flex items-center gap-2">
            <Logo size="sm" variant="icon" />
            <span className="text-sm text-[#0F172A]">Navegación ({currentScreen})</span>
          </summary>
          <div className="max-h-96 overflow-y-auto p-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => navigate('welcome')} className="px-3 py-2 text-xs bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E]">
                Onboarding
              </button>
              <button onClick={() => navigate('login')} className="px-3 py-2 text-xs bg-[#38BDF8] text-white rounded-lg hover:bg-[#0EA5E9]">
                Login
              </button>
              <button onClick={() => navigate('home')} className="px-3 py-2 text-xs bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E]">
                Home
              </button>
              <button onClick={() => navigate('trips-list')} className="px-3 py-2 text-xs bg-[#38BDF8] text-white rounded-lg hover:bg-[#0EA5E9]">
                Viajes
              </button>
              <button onClick={() => navigate('explore')} className="px-3 py-2 text-xs bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E]">
                Destinos
              </button>
              <button onClick={() => navigate('community-feed')} className="px-3 py-2 text-xs bg-[#38BDF8] text-white rounded-lg hover:bg-[#0EA5E9]">
                Comunidad
              </button>
              <button onClick={() => navigate('profile')} className="px-3 py-2 text-xs bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E]">
                Perfil
              </button>
              <button onClick={() => navigate('settings')} className="px-3 py-2 text-xs bg-[#38BDF8] text-white rounded-lg hover:bg-[#0EA5E9]">
                Settings
              </button>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
