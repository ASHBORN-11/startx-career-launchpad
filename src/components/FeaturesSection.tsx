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
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.08),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-white mb-6 animate-fade-up">
            Everything you need to 
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> accelerate</span> your career
          </h2>
          <p className="text-xl text-gray-300 font-inter leading-relaxed animate-fade-up delay-200">
            Join thousands of professionals who've transformed their careers with STARTX's powerful features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-poppins font-semibold text-xl text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Glowing edge effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 font-inter mb-8 animate-fade-up">
            Trusted by professionals from leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix'].map((company, index) => (
              <div 
                key={company} 
                className="font-poppins font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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