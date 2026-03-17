import { motion } from "framer-motion";
import { Brain, Target, Layers, Zap, Cpu, Network, CircuitBoard, Workflow } from "lucide-react";

const focusAreas = [
  { 
    icon: Brain, 
    title: "Intent Understanding", 
    desc: "Machines that comprehend human intent, context, and nuance at a deep level",
    research: "NLP models with 95% intent accuracy"
  },
  { 
    icon: Target, 
    title: "Reasoning", 
    desc: "Complex objective analysis, planning, and autonomous decision-making",
    research: "Multi-step planning with verification"
  },
  { 
    icon: Layers, 
    title: "Long-Term Memory", 
    desc: "Persistent context systems that remember, learn, and adapt over time",
    research: "Infinite context window with RAG"
  },
  { 
    icon: Zap, 
    title: "Action Coordination", 
    desc: "Multi-agent orchestration for independent task execution",
    research: "Parallel agent coordination with 99.9% reliability"
  },
  { 
    icon: Cpu, 
    title: "System Integration", 
    desc: "Seamless connection with APIs, databases, and external services",
    research: "100+ pre-built integrations"
  },
  { 
    icon: Network, 
    title: "Distributed Intelligence", 
    desc: "AI systems that scale across cloud and edge",
    research: "Global inference network with <100ms latency"
  },
  { 
    icon: CircuitBoard, 
    title: "Self-Optimization", 
    desc: "Systems that improve through usage and feedback",
    research: "Continuous learning without retraining"
  },
  { 
    icon: Workflow, 
    title: "Execution Engine", 
    desc: "Reliable task execution with monitoring and recovery",
    research: "99.99% task completion rate"
  },
];

const WhatIsSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Subtle white pattern */}
      <div className="absolute inset-0" style={{ 
        background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)" 
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - About OriMind */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* OriMind badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">The Parent Company</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              What is<br />OriMind?
            </h2>

            <div className="space-y-5">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                OriMind is a parent AI intelligence company. We do not offer a single tool or assistant.
              </p>
              
              <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                Instead, we build the <strong className="text-white">core intelligence systems</strong> that power autonomous AI products capable of real-world execution.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-10 p-6 border-l-2 border-white/20 bg-white/5 rounded-r-xl">
              <p className="text-xl sm:text-2xl font-light text-white/80 italic leading-relaxed">
                OriMind builds intelligence.
              </p>
              <p className="text-lg sm:text-xl text-white/40 mt-2">
                Products deliver results.
              </p>
            </div>

            {/* Research stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { label: "Research Papers", value: "50+" },
                { label: "Patents Pending", value: "25+" },
                { label: "R&D Years", value: "8" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/30 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pt-4"
          >
            <div className="mb-8">
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">
                Research Focus
              </span>
            </div>

            <p className="text-white text-base sm:text-lg mb-8">
              The building blocks for AI systems to execute work independently
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  className="group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:border-white/20">
                    <area.icon className="w-6 h-6 text-white/40 mb-3 group-hover:text-white/60 transition-colors" />
                    <h3 className="font-bold text-white text-sm mb-2">{area.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-2">{area.desc}</p>
                    <p className="text-[10px] text-white/20 border-t border-white/10 pt-2 mt-2">
                      {area.research}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research note */}
            <p className="text-white/20 text-xs mt-6 text-center">
              OriMind Research • 8 active labs • 50+ researchers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;