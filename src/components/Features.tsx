import { Bot, Camera, Globe, MessageSquare, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Content Creation",
    description: "Generate stunning photos, videos, and posts tailored to your brand using advanced AI technology."
  },
  {
    icon: Globe,
    title: "Multi-Platform Integration", 
    description: "Connect Facebook, Instagram, WooCommerce and more. Manage all your platforms from one dashboard."
  },
  {
    icon: Bot,
    title: "Intelligent Auto-Reply Bots",
    description: "Train AI bots to automatically respond to comments, messages, and customer inquiries 24/7."
  },
  {
    icon: MessageSquare,
    title: "Smart Comment Management",
    description: "Automatically moderate, respond to, and engage with your audience across all platforms."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track engagement, monitor growth, and optimize your social media strategy with detailed insights."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Set up custom automation rules and let AI handle repetitive tasks while you focus on strategy."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate and scale your social media presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/20"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};