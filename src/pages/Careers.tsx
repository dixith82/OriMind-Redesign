import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, DollarSign, Users, Globe, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const jobs = [
  {
    title: "Senior AI Research Scientist",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$180K - $250K",
    description: "Lead research in autonomous AI systems and multi-agent coordination.",
    requirements: ["PhD in CS/AI", "5+ years experience", "Published research"]
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$150K - $200K",
    description: "Build and deploy production AI systems for autonomous execution.",
    requirements: ["MS/PhD in ML", "PyTorch/TensorFlow", "Production experience"]
  },
  {
    title: "Full Stack Engineer",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    salary: "$140K - $180K",
    description: "Build the infinall.ai platform with Next.js, Python, and cloud technologies.",
    requirements: ["5+ years experience", "React/Node.js", "Cloud (AWS/GCP)"]
  },
  {
    title: "Product Manager - AI",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160K - $220K",
    description: "Drive product strategy for autonomous AI execution features.",
    requirements: ["5+ years PM experience", "AI/ML background", "Technical degree"]
  }
];

const benefits = [
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the US" },
  { icon: DollarSign, title: "Competitive Equity", desc: "Significant ownership in the company" },
  { icon: Users, title: "Top-Tier Team", desc: "Work with leading AI researchers" },
  { icon: Target, title: "Impact", desc: "Build the future of autonomous AI" }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="Careers — Join the OriMind Team"
        description="Build the future of autonomous AI at OriMind. We're hiring researchers, engineers, and product leaders."
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
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">
                Join the Team
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Shape the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                Autonomous AI
              </span>
            </h1>

            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              We're building the intelligence systems that will power the execution age. 
              Join us to work on cutting-edge AI research and products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Join <span className="text-cyan-400">OriMind</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-xs text-white/40">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              Open <span className="text-cyan-400">Positions</span>
            </h2>
            <span className="text-sm text-white/40">{jobs.length} openings</span>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1 text-cyan-400/60">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-white/40">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-white/40">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-white/40">
                        <DollarSign className="w-4 h-4" /> {job.salary}
                      </span>
                    </div>

                    <p className="text-white/60 text-sm mb-3">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Don't see the right role?</h3>
            <p className="text-white/40 mb-6">
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              Send General Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;