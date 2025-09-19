import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text">EcomUp.ai</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Revolutionizing social media automation with the power of artificial intelligence.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for modern businesses</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 EcomUp.ai. All rights reserved.</p>
              <Link 
                to="/privacy-policy" 
                className="text-primary hover:text-primary-glow transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};