import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/lib/use-mock-auth";

// Pages
import Home from "@/pages/home";
import Explore from "@/pages/explore";
import Saved from "@/pages/saved";
import Profile from "@/pages/profile";
import Welcome from "@/pages/welcome";
import Login from "@/pages/login";
import Features from "@/pages/features";
import Interests from "@/pages/interests";
import Register from "@/pages/register";
import Trips from "@/pages/trips";
import CreateTrip from "@/pages/create-trip";
import Community from "@/pages/community";
import TripDetail from "@/pages/trip-detail";
import NotFound from "@/pages/not-found";

// New Pages
import AdminDashboard from "@/pages/admin/dashboard";
import ModeSelector from "@/pages/dev/mode-selector";
import PackingList from "@/pages/trip/packing-list";
import TripBudget from "@/pages/trip/budget";
import Notifications from "@/pages/notifications";
import SettingsPage from "@/pages/settings/account";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/features" component={Features} />
      <Route path="/interests" component={Interests} />
      <Route path="/register" component={Register} />
      
      <Route path="/trips" component={Trips} />
      <Route path="/trip/:id" component={TripDetail} />
      <Route path="/create-trip" component={CreateTrip} />
      <Route path="/community" component={Community} />
      
      <Route path="/explore" component={Explore} />
      <Route path="/saved" component={Saved} />
      <Route path="/profile" component={Profile} />
      
      {/* Dev / New Features */}
      <Route path="/dev/mode" component={ModeSelector} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/trip/:id/packing" component={PackingList} />
      <Route path="/trip/:id/budget" component={TripBudget} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/settings" component={SettingsPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
