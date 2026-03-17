import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroEarth from "@/assets/hero-earth.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Black Overlay (OriMind Black Theme) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <img
          src={heroEarth}
          alt="Earth from space"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark overlay for black/white theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </motion.div>

      {/* Animated Gradient - Subtle White/Gray for OriMind */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* OriMind - Pure Black/White */}
          <div className="mb-6">
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
              Research & Innovation
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-white">OriMind</span>
            <span className="block text-2xl md:text-3xl text-white/40 mt-4 font-light tracking-wide">
              Autonomous Intelligence for the Execution Age
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
            OriMind is a research & innovation company building next-generation
            autonomous intelligence systems. Our flagship platform transforms 
            natural language into real execution — building software, research, 
            and content automatically.
          </p>

          {/* Product Mention - Only here we use infinall.ai colors for distinction */}
          <div className="mb-8">
            <span className="text-sm text-white/40">Flagship Product</span>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mt-2">
              infinall.ai
            </div>
            <p className="text-white/40 text-sm mt-2">You Imagine. It's Done.</p>
          </div>

          {/* CTA Buttons - infinall.ai button uses its brand colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Explore infinall.ai
            </a>
            <a
              href="/product"
              className="px-8 py-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Learn More About OriMind
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator - White for OriMind theme */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-1 bg-white/60 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;