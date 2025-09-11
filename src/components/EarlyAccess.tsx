import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
      });
    }, 1000);
  };

  return (
    <section id="early-access" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Social Strategy?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already on the waitlist. Be the first to experience 
            the future of AI-powered social media automation.
          </p>
          
          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Get Early Access</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 bg-background/50 border-border focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg"
                    className="group whitespace-nowrap"
                    disabled={!email}
                  >
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  🚀 Early access members get <span className="text-primary font-semibold">50% off</span> for the first 6 months
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mb-4 p-3 bg-accent/20 rounded-full w-fit mx-auto">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                <p className="text-muted-foreground">
                  Thanks for joining our early access list. We'll notify you as soon as ecomup.ai is ready.
                </p>
              </div>
            )}
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">1,200+</div>
              <div className="text-muted-foreground">Businesses on waitlist</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50%</div>
              <div className="text-muted-foreground">Early access discount</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">Q1 2024</div>
              <div className="text-muted-foreground">Expected launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};