import { motion } from "framer-motion";
import { ArrowRight, Code2, BarChart3, Search, Video, Sparkles, Globe, Zap, Cpu } from "lucide-react";
import BrowserMockup from "@/components/BrowserMockup";

// Real infinall.ai agent data
const agents = [
  {
    icon: Code2,
    title: "Infinall Engineer",
    desc: "Generates production-ready applications from a single prompt. Full-stack code generation with Next.js, Python, and Node.js.",
    features: ["Full-stack apps", "API integration", "Database design", "1-click deploy"]
  },
  {
    icon: Video,
    title: "Infinall Publisher",
    desc: "Creates and publishes blogs, videos, and marketing campaigns automatically across YouTube, X, WordPress, and ad platforms.",
    features: ["Video generation", "Blog posts", "Social threads", "Ad creatives"]
  },
  {
    icon: BarChart3,
    title: "Infinall Analyst",
    desc: "Transforms data into interactive dashboards, insights, and strategic recommendations with real-time analytics.",
    features: ["Live dashboards", "Trend analysis", "SWOT reports", "Predictive insights"]
  },
  {
    icon: Search,
    title: "Infinall Researcher",
    desc: "Performs deep web research and produces structured reports with citations, competitor intelligence, and market analysis.",
    features: ["Deep research", "Competitor intel", "Market reports", "Citation tracking"]
  }
];

const ProductShowcase = () => {
  return (
    <section className="relative py-32 px-6 bg-[hsl(220,20%,2%)] overflow-hidden">
      {/* infinall.ai brand gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ 
        background: "radial-gradient(circle at 30% 50%, rgba(34,211,238,0.1) 0%, transparent 50%)" 
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER - infinall.ai brand colors */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">
              The Product
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            INFINALL.AI
          </motion.h2>

          <motion.p
            className="text-cyan-400/60 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The autonomous AI execution engine that builds, publishes, analyzes, and researches — automatically.
          </motion.p>
        </div>

        {/* MAIN PRODUCT SCREENSHOT - Real infinall.ai interface mockup */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BrowserMockup url="app.infinall.ai" variant="infinall" className="max-w-5xl mx-auto">
            <div className="bg-[hsl(220,20%,3%)] p-6 rounded-lg">
              {/* Real dashboard UI mockup */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 bg-[hsl(220,20%,5%)] rounded-lg p-3 border border-cyan-500/10">
                  <div className="space-y-2">
                    <p className="text-cyan-400/60 text-xs uppercase">Active Agents</p>
                    <p className="text-white text-2xl font-bold">4</p>
                    <p className="text-cyan-400/40 text-xs">Engineer • Publisher • Analyst • Researcher</p>
                  </div>
                </div>
                <div className="col-span-5 bg-[hsl(220,20%,5%)] rounded-lg p-3 border border-cyan-500/10">
                  <p className="text-cyan-400/60 text-xs mb-2">Current Task</p>
                  <p className="text-white text-sm">Building e-commerce dashboard with real-time analytics...</p>
                  <div className="w-full bg-cyan-500/10 h-1 mt-2 rounded-full">
                    <div className="w-3/4 bg-cyan-400 h-1 rounded-full" />
                  </div>
                </div>
                <div className="col-span-4 bg-[hsl(220,20%,5%)] rounded-lg p-3 border border-cyan-500/10">
                  <p className="text-cyan-400/60 text-xs mb-2">Time Saved</p>
                  <p className="text-white text-2xl font-bold">47h</p>
                </div>
              </div>
            </div>
          </BrowserMockup>
        </motion.div>

        {/* FEATURE SCREENSHOTS - Real product visuals */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl" />
            <div className="relative bg-[hsl(220,20%,4%)] rounded-xl border border-cyan-500/20 p-4">
              <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/10 pb-3">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400/80 text-sm">Infinall Engineer - Code Generation</span>
              </div>
              <pre className="text-xs text-cyan-400/60 font-mono">
                {`// Generated Next.js 14 API Route
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const analytics = await prisma.analytics.findMany({
    where: { createdAt: { gte: new Date('2024-01-01') } },
    orderBy: { timestamp: 'desc' }
  });
  
  return NextResponse.json({
    metrics: {
      totalUsers: analytics.reduce((acc, curr) => acc + curr.users, 0),
      revenue: analytics.reduce((acc, curr) => acc + curr.revenue, 0),
      trends: calculateTrends(analytics)
    }
  });
}`}
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent blur-3xl" />
            <div className="relative bg-[hsl(220,20%,4%)] rounded-xl border border-cyan-500/20 p-4">
              <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/10 pb-3">
                <Video className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400/80 text-sm">Infinall Publisher - Content Calendar</span>
              </div>
              <div className="space-y-2">
                {[
                  { platform: "YouTube", title: "AI Revolution 2024", time: "2h ago", status: "Published" },
                  { platform: "X (Twitter)", title: "Thread: Building with AI", time: "5h ago", status: "Live" },
                  { platform: "WordPress", title: "The Future of Development", time: "1d ago", status: "Scheduled" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-cyan-400/60">{item.platform}</span>
                    <span className="text-white/80">{item.title}</span>
                    <span className="text-cyan-400/40">{item.time}</span>
                    <span className="text-cyan-400">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* AGENT GRID - With real features */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[hsl(220,20%,4%)] p-8 rounded-xl border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <agent.icon className="text-cyan-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{agent.title}</h3>
                </div>
                
                <p className="text-cyan-400/60 text-sm mb-4">
                  {agent.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {agent.features.map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400/80 border border-cyan-500/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - infinall.ai brand colors */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black rounded-lg font-semibold hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all group"
            >
              <span>Try infinall.ai Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-cyan-400/40 text-xs mt-4">No credit card required • Deploy in minutes</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;