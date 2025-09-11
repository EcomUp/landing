import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Features } from "@/components/Features";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <Features />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
