import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(136, 136, 136, ${0.3 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-6 py-24 text-white overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={particlesRef} className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Logo or Icon */}
        <div className="mb-6">
          <div className="h-12 mx-auto animate-fade-in flex items-center justify-center">
            <span className="font-poppins font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              STARTX
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight animate-fade-up font-poppins">
          <span className="text-indigo-500">STARTX</span> Your Next Big Thing
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 animate-fade-up delay-200 font-inter">
          We empower creators, makers, and visionaries to build, launch, and grow — faster than ever.
        </p>

        {/* Typewriter Prompt */}
        <p className="mt-4 text-sm sm:text-base text-gray-400 font-mono animate-typewriter">
          &gt;&gt; Are you ready to take off? ⏳
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-300">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-md transition hover:scale-105 h-auto">
            🚀 Join the Mission
          </Button>
          <Button 
            variant="outline" 
            className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white py-3 px-6 rounded-xl font-semibold text-lg transition hover:scale-105 h-auto bg-transparent"
          >
            👀 Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;