import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sparkles,
  Wand2,
  Figma,
  Download,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiReact, SiFlutter } from "react-icons/si";

const features = [
  {
    icon: Wand2,
    title: "AI Asset Generation",
    description: "Generate stunning UI assets and illustrations with DALL-E powered AI in seconds",
  },
  {
    icon: Figma,
    title: "Figma Integration",
    description: "Create and update Figma frames programmatically via our intelligent agent",
  },
  {
    icon: Download,
    title: "NoCode Export",
    description: "Export to Bubble, FlutterFlow, WeWeb, and AppSmith with one click",
  },
  {
    icon: Zap,
    title: "Instant Rendering",
    description: "Real-time preview of your designs with live component rendering",
  },
  {
    icon: Shield,
    title: "Design Tokens",
    description: "Consistent design system with exportable tokens based on 8px grid",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Build once, deploy everywhere with cross-platform compatibility",
  },
];

const integrations = [
  { name: "React", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Figma", icon: Figma },
  { name: "Globe", icon: Globe },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">Figma Builder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Integrations
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" data-testid="button-login">Log in</Button>
            </Link>
            <Link href="/register">
              <Button data-testid="button-register">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="h-3 w-3 mr-1" />
              Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build Figma Designs with
              <span className="text-primary"> No-Code AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create stunning UI designs, generate assets with AI, and export to your favorite
              no-code platforms. All from one powerful interface.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="gap-2" data-testid="button-hero-cta">
                  Start Building Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" data-testid="button-demo">
                  View Demo
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="rounded-xl border bg-card p-2 shadow-2xl">
                <div className="rounded-lg bg-muted/50 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Figma className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-muted-foreground">Interactive Demo Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything you need to build faster
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From AI-powered asset generation to seamless no-code exports, we've got you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="integrations" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Export your designs to the platforms you love
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border bg-card hover-elevate"
                >
                  <integration.icon className="h-12 w-12 text-muted-foreground" />
                  <span className="font-medium">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start free and scale as you grow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Free</h3>
                  <div className="text-3xl font-bold mb-4">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    {["5 projects", "50 AI generations", "Basic exports", "Community support"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    {["Unlimited projects", "500 AI generations", "All export formats", "Priority support", "Figma integration"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-4">Custom</div>
                  <ul className="space-y-3 mb-6">
                    {["Everything in Pro", "Unlimited AI", "Custom integrations", "Dedicated support", "SLA guarantee"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of designers and developers building with Figma Builder.
            </p>
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Start Building Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Figma Builder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              2024 Figma Builder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
