import { Brain, FileText, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Job Matching",
    description: "AI-powered recommendations based on your skills, interests, and goals.",
    gradient: "from-startx-royal to-blue-500"
  },
  {
    icon: FileText,
    title: "Smart Resume Builder", 
    description: "Create and share beautifully designed, ATS-friendly resumes in minutes.",
    gradient: "from-startx-green to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Employer Insights",
    description: "See who's hiring, company ratings, and insider feedback.",
    gradient: "from-startx-coral to-red-500"
  },
  {
    icon: Users,
    title: "Network That Works",
    description: "Connect with peers, mentors, recruiters — anytime, anywhere.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Everything you need to 
            <span className="bg-gradient-to-r from-startx-royal to-startx-green bg-clip-text text-transparent"> accelerate</span> your career
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed">
            Join thousands of professionals who've transformed their careers with START's powerful features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-startx-royal to-startx-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground font-inter mb-8">
            Trusted by professionals from leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix'].map((company) => (
              <div key={company} className="font-poppins font-semibold text-lg text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;