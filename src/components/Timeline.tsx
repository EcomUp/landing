import { CheckCircle, Clock, Rocket } from "lucide-react";

const timelineItems = [
  {
    phase: "Phase 1",
    title: "AI Content Generation",
    description: "Generate high-quality photos, videos, and social media posts using advanced AI models",
    status: "completed",
    features: ["Photo generation", "Video creation", "Post templates", "Brand consistency"]
  },
  {
    phase: "Phase 2", 
    title: "Platform Integration",
    description: "Seamlessly connect and manage multiple social media platforms and e-commerce sites",
    status: "completed",
    features: ["Facebook integration", "Instagram connectivity", "WooCommerce sync", "Multi-platform posting"]
  },
  {
    phase: "Phase 3",
    title: "AI Bot Training",
    description: "Train intelligent bots for automated responses, comments, and customer engagement",
    status: "current",
    features: ["Auto-reply system", "Comment automation", "Customer support bots", "Engagement optimization"]
  },
  {
    phase: "Phase 4",
    title: "Advanced Analytics",
    description: "Deep insights and performance analytics to optimize your social media strategy",
    status: "upcoming",
    features: ["Performance tracking", "ROI analysis", "Competitor insights", "Growth recommendations"]
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Product Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize social media automation for businesses
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-px" />
          
          {timelineItems.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-1/2 z-10 glow-effect" />
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      item.status === 'completed' ? 'bg-accent/20 text-accent' :
                      item.status === 'current' ? 'bg-primary/20 text-primary' :
                      'bg-muted/20 text-muted-foreground'
                    }`}>
                      {item.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                       item.status === 'current' ? <Clock className="w-5 h-5" /> :
                       <Rocket className="w-5 h-5" />}
                    </div>
                    <span className="text-sm font-semibold text-primary">{item.phase}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};