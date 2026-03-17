import { motion } from "framer-motion";
import { 
  Brain, Target, Layers, Zap, Cpu, Network, 
  CircuitBoard, Workflow, FileText, Users, 
  Clock, Award, ArrowRight, BookOpen, Microscope
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const researchAreas = [
  {
    icon: Brain,
    title: "Neural Architecture",
    desc: "Developing next-generation neural networks that can reason, plan, and execute tasks autonomously.",
    lead: "Dr. Sarah Chen",
    progress: 85,
    papers: 12
  },
  {
    icon: Target,
    title: "Multi-Agent Systems",
    desc: "Coordinating multiple AI agents to work together on complex tasks with minimal human oversight.",
    lead: "Dr. James Wilson",
    progress: 70,
    papers: 8
  },
  {
    icon: Layers,
    title: "Long-Term Memory",
    desc: "Building persistent memory systems that allow AI to learn and adapt over extended periods.",
    lead: "Dr. Emily Rodriguez",
    progress: 60,
    papers: 5
  },
  {
    icon: Zap,
    title: "Execution Engines",
    desc: "Creating reliable systems that can execute real-world tasks through APIs and tools.",
    lead: "Michael Chang",
    progress: 90,
    papers: 15
  },
  {
    icon: Cpu,
    title: "Tool Integration",
    desc: "Enabling AI to seamlessly interact with external tools, APIs, and services.",
    lead: "Alex Kumar",
    progress: 75,
    papers: 7
  },
  {
    icon: Network,
    title: "Distributed Intelligence",
    desc: "Scaling AI across distributed systems for faster, more reliable execution.",
    lead: "Dr. Patricia Lee",
    progress: 55,
    papers: 4
  }
];

const publications = [
  {
    title: "Autonomous Execution: Beyond LLM Assistance",
    authors: "Chen, S., Wilson, J., et al.",
    journal: "NeurIPS 2024",
    year: 2024,
    citations: 45
  },
  {
    title: "Multi-Agent Coordination for Complex Task Execution",
    authors: "Rodriguez, E., Kumar, A., et al.",
    journal: "ICML 2024",
    year: 2024,
    citations: 32
  },
  {
    title: "Memory-Augmented Neural Networks for Long-Term Learning",
    authors: "Chang, M., Lee, P., et al.",
    journal: "ICLR 2024",
    year: 2024,
    citations: 28
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of AI Research",
    area: "Neural Architecture",
    image: "/team/sarah.jpg"
  },
  {
    name: "Dr. James Wilson",
    role: "Senior Research Scientist",
    area: "Multi-Agent Systems",
    image: "/team/james.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Research Scientist",
    area: "Memory Systems",
    image: "/team/emily.jpg"
  }
];

const Research = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="Research — OriMind AI Labs"
        description="Exploring the frontiers of autonomous intelligence through cutting-edge AI research."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Microscope className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">
                OriMind Research Labs
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Advancing the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                Frontiers of AI
              </span>
            </h1>

            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Our research focuses on building the core intelligence systems that will power 
              the next generation of autonomous AI products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active Research Projects", value: "15+", icon: Brain },
              { label: "Published Papers", value: "50+", icon: FileText },
              { label: "Research Team", value: "25+", icon: Users },
              { label: "Years of Research", value: "8+", icon: Clock }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Core Research <span className="text-cyan-400">Areas</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <area.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-white/40 mb-4">{area.desc}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/30">Lead: {area.lead}</span>
                    <span className="text-cyan-400">{area.papers} papers</span>
                  </div>
                  
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              Recent <span className="text-cyan-400">Publications</span>
            </h2>
            <button className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-2">
              View All Papers <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <Award className="w-5 h-5 text-cyan-400 mb-3" />
                <h3 className="font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-xs text-white/40 mb-2">{pub.authors}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400/60">{pub.journal} {pub.year}</span>
                  <span className="text-white/30">{pub.citations} citations</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our <span className="text-cyan-400">Researchers</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Brain className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-sm text-cyan-400 mb-1">{member.role}</p>
                <p className="text-xs text-white/40">{member.area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Join Our Research</h3>
            <p className="text-white/40 mb-6">
              We're always looking for talented researchers to push the boundaries of AI.
            </p>
            <button className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;