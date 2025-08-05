import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none" />
      
      {/* CTA Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-6 animate-fade-up">
              Still thinking? Don't just find jobs — 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> build your future.</span>
            </h2>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-14 px-8 text-lg font-poppins rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl animate-fade-up delay-200">
              Join STARTX Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-poppins font-bold text-2xl">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                STARTX
              </span>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed">
              The smarter way to launch your career and connect with opportunities that matter.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Product</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Job Search</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Resume Builder</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Company Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Networking</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-inter text-sm">
            © 2024 STARTX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              𝕏
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;