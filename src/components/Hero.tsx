import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Social Media Automation</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">ecomup.ai</span>
          <br />
          <span className="text-foreground">Automates Your</span>
          <br />
          <span className="text-foreground">Social Presence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Generate stunning photos, videos, and posts. Connect Facebook, Instagram, and WooCommerce. 
          Train intelligent bots for auto-replies and engagement. All powered by AI.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToEarlyAccess}
            className="group"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-muted-foreground">
          Join <span className="text-primary font-semibold">1,200+</span> businesses already on the waitlist
        </div>
      </div>
    </section>
  );
};