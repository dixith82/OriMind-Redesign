import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Describe the Idea",
    desc: "Tell infinall.ai what you want to build using natural language. No technical expertise required — just describe your vision.",
    icon: Brain,
    details: [
      "Natural language input",
      "No coding required",
      "AI interprets intent"
    ]
  },
  {
    title: "AI Agents Coordinate",
    desc: "Specialized agents collaborate to design architecture, generate code, research topics, and create content in parallel.",
    icon: Zap,
    details: [
      "Multi-agent orchestration",
      "Parallel processing",
      "Intelligent coordination"
    ]
  },
  {
    title: "Execution & Deployment",
    desc: "Complete applications, reports, or content are generated and deployed to production automatically — ready to use.",
    icon: Rocket,
    details: [
      "Auto-deployment",
      "Production ready",
      "Instant results"
    ]
  }
];

const ExecutionFlowSection = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-[hsl(220,20%,2%)]">
      {/* OriMind black/white accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* OriMind section header - Black/White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
            OriMind Technology
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          From Idea to
          <span className="block text-4xl md:text-5xl text-white/40 mt-4 font-light">
            Autonomous Execution
          </span>
        </motion.h2>

        <motion.p
          className="text-white/50 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          infinall.ai transforms natural language into fully executed
          applications, research, and content workflows — automatically.
        </motion.p>

        {/* Flow Steps - Mixed: OriMind container, infinall.ai accents */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* OriMind black/white card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full">
                {/* Step number - infinall.ai brand color for product highlight */}
                <div className="text-cyan-400 text-5xl font-bold mb-4 opacity-50">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon - infinall.ai brand color */}
                <step.icon className="w-10 h-10 text-cyan-400 mb-6" />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  {step.desc}
                </p>

                {/* Details list - white/gray for OriMind */}
                <div className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/40">
                      <CheckCircle className="w-3 h-3 text-cyan-400/60" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector line between steps - infinall.ai brand color */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Real-world example - infinall.ai product showcase */}
        <motion.div
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-cyan-400/80 mb-3">REAL-WORLD EXAMPLE</p>
          <p className="text-white text-lg mb-2">
            "Build me a customer analytics dashboard with revenue tracking"
          </p>
          <div className="flex items-center gap-2 text-cyan-400/60 text-sm">
            <span>↓</span>
            <span>30 seconds later</span>
            <span>↓</span>
          </div>
          <p className="text-white/80 mt-2">
            ✅ Full-stack Next.js app generated • Database schema designed • API routes created • Deployed to production
          </p>
        </motion.div>

        {/* CTA - infinall.ai brand colors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.infinall.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] group"
          >
            Try infinall.ai Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-white/30 text-xs mt-4">
            Experience autonomous execution • No setup required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutionFlowSection;