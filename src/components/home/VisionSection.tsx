import { motion } from "framer-motion";
import { Eye, Target, Zap, Globe, Rocket, Lightbulb } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">
      {/* OriMind black/white pattern */}
      <div className="absolute inset-0" style={{ 
        background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)" 
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header - Black/White */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <Eye className="w-3.5 h-3.5 text-white/60" />
            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Our Vision</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Execution Age
          </motion.h2>

          <motion.p
            className="text-white/40 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            OriMind believes the next phase of technology is defined by execution, not assistance.
            Intelligence should deliver outcomes, not just recommendations.
          </motion.p>
        </div>

        {/* Main vision content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Why Different */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">
                Why OriMind Is Different
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              A New Category<br />of AI Company
            </h3>

            <div className="space-y-5">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                OriMind is not focused on building tools that assist users. We build{" "}
                <strong className="text-white">intelligence systems that allow products to take full responsibility for execution.</strong>
              </p>
              
              <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                This approach shifts AI from <strong className="text-white">assistance to autonomy</strong> — enabling results, not just suggestions.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Target, label: "Autonomous", desc: "No human in loop" },
                { icon: Zap, label: "Real-time", desc: "Instant execution" },
                { icon: Globe, label: "Scalable", desc: "Any workload" },
                { icon: Rocket, label: "Production", desc: "Deploy instantly" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-white/30 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-white/30 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Vision Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pt-4"
          >
            <div className="mb-8">
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">
                Vision Snapshot
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              The Future of<br /><span className="text-white/40">Intelligence</span>
            </h3>

            <div className="space-y-5">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                OriMind believes the next phase of technology is defined by <strong className="text-white">execution.</strong>
              </p>
              
              <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                Intelligence should not stop at recommendations — <strong className="text-white">it should deliver outcomes.</strong>
              </p>
              
              <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                We are building the <strong className="text-white">intelligence infrastructure</strong> for this future.
              </p>
            </div>

            {/* Timeline/roadmap */}
            <div className="mt-10 p-6 border border-white/10 rounded-xl bg-white/5">
              <p className="text-xs uppercase text-white/40 mb-3 tracking-wider">The Roadmap</p>
              <div className="space-y-3">
                {[
                  { year: "2024", milestone: "Launch infinall.ai v1.0" },
                  { year: "2025", milestone: "Multi-agent orchestration" },
                  { year: "2026", milestone: "Fully autonomous execution" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-white/20 text-sm w-16">{item.year}</span>
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/60 text-sm">{item.milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-8 h-8 text-white/20 mx-auto mb-4" />
            <p className="text-xl sm:text-2xl text-white/60 italic">
              "The future doesn't belong to AI that helps you work — it belongs to AI that works for you."
            </p>
            <p className="text-white/30 text-sm mt-4">— OriMind Research Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;