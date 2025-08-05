import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(47,128,237,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-startx-royal/10 to-startx-green/10 border border-startx-royal/20">
              <span className="text-sm font-medium text-startx-royal">🚀 Now Live</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="text-foreground">Launch Your</span>
              <br />
              <span className="bg-gradient-to-r from-startx-royal to-startx-green bg-clip-text text-transparent">
                Career
              </span>
              <br />
              <span className="text-foreground">with START</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The smarter, faster, and more connected way to discover jobs, build your network, and showcase your skills — all in one place.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="h-14 px-8 text-lg font-poppins"
              >
                Get Started — It's Free
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="h-14 px-8 text-lg font-poppins"
              >
                Explore Jobs
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-startx-royal">35K+</div>
                <div className="text-sm text-muted-foreground">Jobs Listed</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-startx-green">150K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="font-poppins font-bold text-2xl text-startx-coral">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="START - Modern job discovery platform" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-startx-royal/10 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-startx-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Active Job Search</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-startx-royal to-startx-green rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Smart Matching</div>
                  <div className="text-xs text-muted-foreground">95% Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;