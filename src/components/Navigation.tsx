import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-poppins font-bold text-2xl">
              <span className="bg-gradient-to-r from-startx-royal to-startx-green bg-clip-text text-transparent">
                STARTX
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-inter text-foreground hover:text-startx-royal transition-colors">
              Features
            </a>
            <a href="#jobs" className="font-inter text-foreground hover:text-startx-royal transition-colors">
              Browse Jobs
            </a>
            <a href="#about" className="font-inter text-foreground hover:text-startx-royal transition-colors">
              About
            </a>
            <a href="#contact" className="font-inter text-foreground hover:text-startx-royal transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-inter">
              Sign In
            </Button>
            <Button variant="default" className="font-inter">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="font-inter text-foreground hover:text-startx-royal transition-colors">
                Features
              </a>
              <a href="#jobs" className="font-inter text-foreground hover:text-startx-royal transition-colors">
                Browse Jobs
              </a>
              <a href="#about" className="font-inter text-foreground hover:text-startx-royal transition-colors">
                About
              </a>
              <a href="#contact" className="font-inter text-foreground hover:text-startx-royal transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start font-inter">
                  Sign In
                </Button>
                <Button variant="default" className="justify-start font-inter">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;