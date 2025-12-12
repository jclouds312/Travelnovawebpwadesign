import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Explore from "@/pages/explore";
import Saved from "@/pages/saved";
import Profile from "@/pages/profile";
import Welcome from "@/pages/welcome";
import Features from "@/pages/features";
import Interests from "@/pages/interests";
import Register from "@/pages/register";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/features" component={Features} />
      <Route path="/interests" component={Interests} />
      <Route path="/register" component={Register} />
      
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
