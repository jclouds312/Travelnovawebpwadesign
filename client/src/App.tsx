import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Toaster />
        <Router />
    </QueryClientProvider>
  );
}

export default App;
