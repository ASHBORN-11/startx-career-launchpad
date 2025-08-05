import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-startx-charcoal text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-6">
              Still thinking? Don't just find jobs — 
              <span className="bg-gradient-to-r from-startx-green to-blue-400 bg-clip-text text-transparent"> build your future.</span>
            </h2>
            <Button variant="hero" size="lg" className="h-14 px-8 text-lg font-poppins">
              Join START Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-poppins font-bold text-2xl">
              <span className="bg-gradient-to-r from-startx-green to-blue-400 bg-clip-text text-transparent">
                START
              </span>
            </div>
            <p className="text-white/70 font-inter">
              The smarter way to launch your career and connect with opportunities that matter.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Job Search</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Company Insights</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Networking</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 font-inter text-sm">
            © 2024 START. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              𝕏
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
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