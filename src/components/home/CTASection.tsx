import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">
      {/* OriMind black/white gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ 
        background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)" 
      }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* OriMind section - Black/White */}
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
              OriMind Innovation
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to build with
            <span className="block text-3xl sm:text-4xl text-white/40 mt-4 font-light">
              autonomous intelligence?
            </span>
          </h2>

          <p className="text-white/60 text-sm sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the next generation of creators who describe what they want 
            and let AI handle the execution. Powered by OriMind's research in 
            autonomous systems.
          </p>

          {/* Product highlight - infinall.ai brand colors for distinction */}
          <div className="mb-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs uppercase tracking-wider text-cyan-400/80 font-medium">
                Flagship Product
              </span>
            </div>
            <p className="text-cyan-400 text-xl sm:text-2xl font-semibold mb-2">
              infinall.ai
            </p>
            <p className="text-white/40 text-sm">
              The autonomous AI execution engine
            </p>
          </div>

          {/* CTA Buttons - infinall.ai button uses brand colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] group"
            >
              Get Started with infinall.ai
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Learn More About OriMind
            </a>
          </div>

          {/* Trust indicator - Black/White */}
          <p className="text-white/30 text-xs mt-8">
            Join innovators building the future of autonomous execution
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;