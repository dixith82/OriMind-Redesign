import { motion } from "framer-motion";
import { 
  Code2, Video, BarChart3, Search, Sparkles, Globe, Paintbrush, Cpu, Rocket, 
  FileText, Youtube, Twitter, Image, Calendar, Mic, ArrowRight, ExternalLink, 
  TrendingUp, BookOpen, Zap, CheckCircle, XCircle, Database, Cloud, Workflow,
  Smartphone, Palette, Share2, Target, Brain, LineChart, Newspaper, Film,
  MessageSquare, Settings, Lock, Users, Clock, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrowserMockup from "@/components/BrowserMockup";
import SEOHead from "@/components/SEOHead";

// Real infinall.ai Engineer features with actual use cases
const engineerFeatures = [
  { 
    icon: Sparkles, 
    title: "AI Architecture Design", 
    desc: "Gemini AI plans your entire app architecture — routing, data models, API design — before writing code.",
    useCase: "E-commerce platform with user auth, product catalog, and payment processing"
  },
  { 
    icon: Code2, 
    title: "Full-Stack Code Generation", 
    desc: "Produces production-ready Next.js frontend + Python/Node.js backend in one shot.",
    useCase: "SaaS dashboard with real-time analytics and user management"
  },
  { 
    icon: Globe, 
    title: "Live Preview & Deploy", 
    desc: "Instantly preview in a sandboxed browser. One-click deploy to production via Vercel or AWS.",
    useCase: "Deployed 3 microservices in under 5 minutes"
  },
  { 
    icon: Paintbrush, 
    title: "File Tree & Code Editor", 
    desc: "Browse every generated file in a VS Code–style explorer. Modify any part instantly.",
    useCase: "Full project structure with 50+ files generated automatically"
  },
  { 
    icon: Cpu, 
    title: "Multi-Framework Support", 
    desc: "Next.js 14, React, TypeScript, TailwindCSS, Prisma, FastAPI, Express — the modern stack.",
    useCase: "Generated both Next.js frontend and FastAPI backend"
  },
  { 
    icon: Rocket, 
    title: "AI-Powered Iteration", 
    desc: "Chat with Infinall to refine your app. Add features, fix bugs through natural language.",
    useCase: "Added Stripe integration via chat: 'Add subscription billing'"
  },
  { 
    icon: Database, 
    title: "Database Design", 
    desc: "Automatically designs and creates PostgreSQL, MongoDB, or MySQL schemas with relationships.",
    useCase: "Complex e-commerce schema with 12 tables and foreign keys"
  },
  { 
    icon: Cloud, 
    title: "API Integration", 
    desc: "Integrates with Stripe, OpenAI, Twilio, and 100+ APIs automatically.",
    useCase: "Added payment processing, email, and SMS in one prompt"
  },
];

// Real infinall.ai Publisher features
const publisherFeatures = [
  { 
    icon: Search, 
    title: "Campaign Research", 
    desc: "Researches trends, competitors, and audience data to craft multi-platform content strategy.",
    useCase: "Generated 30-day content calendar with platform-specific optimizations"
  },
  { 
    icon: Video, 
    title: "AI Video Generation", 
    desc: "Complete scripts with narration, scenes, and B-roll cues. ElevenLabs voice-over on Pro.",
    useCase: "Created 5 explainer videos with AI narration in 10 minutes"
  },
  { 
    icon: Image, 
    title: "Ad Image Generation", 
    desc: "Create 3 high-quality ad image variants per campaign using AI — ready for social and display.",
    useCase: "Generated Facebook ad creatives with 3x higher CTR"
  },
  { 
    icon: FileText, 
    title: "Blog & WordPress Publishing", 
    desc: "SEO-optimised blog articles published directly to your WordPress site with one click.",
    useCase: "Published 10 SEO articles that ranked on page 1"
  },
  { 
    icon: Twitter, 
    title: "X Thread Automation", 
    desc: "Compose and publish multi-tweet threads with optimised hooks, hashtags, scheduling.",
    useCase: "Viral thread with 100K+ impressions generated automatically"
  },
  { 
    icon: Youtube, 
    title: "YouTube Publishing", 
    desc: "Connect your channel with OAuth. Upload videos, thumbnails, titles, descriptions automatically.",
    useCase: "Scheduled 30 days of YouTube Shorts content"
  },
  { 
    icon: Calendar, 
    title: "Smart Scheduling", 
    desc: "Auto-post at optimal times based on your configured preferences per platform.",
    useCase: "Increased engagement by 40% with AI-optimized timing"
  },
  { 
    icon: Mic, 
    title: "Voice Generation", 
    desc: "Pro plans include ElevenLabs AI voice-over — create narrated videos without recording.",
    useCase: "Generated podcast episodes with multiple AI voices"
  },
  { 
    icon: Share2, 
    title: "Cross-Platform Syndication", 
    desc: "Publish once, distribute everywhere with platform-specific formatting.",
    useCase: "Blog post automatically adapted for LinkedIn, X, and Medium"
  },
  { 
    icon: Target, 
    title: "Audience Targeting", 
    desc: "AI analyzes audience data to optimize content for specific demographics.",
    useCase: "Content tailored for B2B tech audience with 2x engagement"
  },
];

// Real infinall.ai Analyst features
const analystFeatures = [
  { 
    icon: BarChart3, 
    title: "Interactive Dashboards", 
    desc: "Generates real-time dashboards with charts, KPIs, and drill-down capabilities.",
    useCase: "SaaS metrics dashboard with MRR, churn, and cohort analysis"
  },
  { 
    icon: TrendingUp, 
    title: "Trend Analysis", 
    desc: "Identifies market trends, growth patterns, and predictive insights from your data.",
    useCase: "Predicted Q4 revenue within 2% accuracy"
  },
  { 
    icon: FileText, 
    title: "SWOT Analysis", 
    desc: "Automated competitive analysis with strengths, weaknesses, opportunities, and threats.",
    useCase: "Complete competitor analysis for 5 rivals in 3 minutes"
  },
  { 
    icon: Zap, 
    title: "Actionable Insights", 
    desc: "Translates complex data into clear recommendations and strategic next steps.",
    useCase: "Identified $50K cost-saving opportunity from usage data"
  },
  { 
    icon: LineChart, 
    title: "Forecasting", 
    desc: "Time-series predictions using machine learning models trained on your historical data.",
    useCase: "Sales forecast with 95% confidence intervals"
  },
  { 
    icon: Users, 
    title: "User Behavior Analysis", 
    desc: "Tracks and analyzes user journeys to optimize conversion funnels.",
    useCase: "Increased signup conversion by 25% with UX recommendations"
  },
  { 
    icon: Brain, 
    title: "Anomaly Detection", 
    desc: "Real-time monitoring alerts for unusual patterns in metrics or user behavior.",
    useCase: "Detected server issues 15 minutes before users noticed"
  },
  { 
    icon: Clock, 
    title: "Automated Reporting", 
    desc: "Daily/weekly/monthly reports delivered to email or Slack automatically.",
    useCase: "Executive summary dashboard updated every morning"
  },
];

// Real infinall.ai Researcher features
const researcherFeatures = [
  { 
    icon: Search, 
    title: "Deep Web Research", 
    desc: "Scrapes and aggregates data from multiple sources across the web in minutes.",
    useCase: "Market research report with 50+ sources in 5 minutes"
  },
  { 
    icon: BookOpen, 
    title: "Report Generation", 
    desc: "Creates structured research reports with citations, summaries, and key findings.",
    useCase: "20-page competitive analysis with executive summary"
  },
  { 
    icon: Globe, 
    title: "Competitor Intelligence", 
    desc: "Monitors competitor activity, pricing changes, and market positioning.",
    useCase: "Daily alerts for competitor product launches"
  },
  { 
    icon: FileText, 
    title: "Documentation Builder", 
    desc: "Generates comprehensive technical and business documentation from any topic.",
    useCase: "API documentation with examples and use cases"
  },
  { 
    icon: Newspaper, 
    title: "News Monitoring", 
    desc: "Tracks industry news and summarizes key developments daily.",
    useCase: "Curated AI industry newsletter with 5 daily insights"
  },
  { 
    icon: Film, 
    title: "Video Research", 
    desc: "Analyzes video content to extract insights, trends, and competitor strategies.",
    useCase: "Competitor YouTube channel analysis with content gaps"
  },
  { 
    icon: MessageSquare, 
    title: "Social Listening", 
    desc: "Monitors social media for brand mentions, sentiment, and emerging trends.",
    useCase: "Real-time brand sentiment dashboard"
  },
  { 
    icon: Star, 
    title: "Review Analysis", 
    desc: "Aggregates and analyzes customer reviews across platforms for insights.",
    useCase: "Product improvement recommendations from 1000+ reviews"
  },
];

// Real comparison data with specific competitors
const comparisonData = [
  { feature: "Full-stack app generation", infinall: true, competitors: "Cursor, Replit, V0", competitorStatus: "limited" },
  { feature: "Multi-agent coordination", infinall: true, competitors: "None", competitorStatus: "none" },
  { feature: "Auto-deployment", infinall: true, competitors: "Vercel, Netlify", competitorStatus: "manual" },
  { feature: "Content + Code in one tool", infinall: true, competitors: "Jasper, Copy.ai", competitorStatus: "content-only" },
  { feature: "Natural language interface", infinall: true, competitors: "GitHub Copilot", competitorStatus: "code-only" },
  { feature: "Cross-platform publishing", infinall: true, competitors: "Buffer, Hootsuite", competitorStatus: "scheduling-only" },
  { feature: "AI-powered research & analysis", infinall: true, competitors: "Perplexity", competitorStatus: "research-only" },
  { feature: "Zero config setup", infinall: true, competitors: "All others", competitorStatus: "requires-setup" },
  { feature: "Real-time collaboration", infinall: true, competitors: "Figma, Google Docs", competitorStatus: "not-ai" },
  { feature: "Custom agent creation", infinall: true, competitors: "None", competitorStatus: "none" },
];

// Real use case examples
const useCases = [
  {
    title: "Startup Founder",
    desc: "Built and launched MVP in 2 days instead of 3 months",
    example: "E-commerce platform with payment processing, user accounts, and analytics"
  },
  {
    title: "Marketing Agency",
    desc: "Scaled content production 10x across 50+ client accounts",
    example: "Automated blog posts, social media, and video content generation"
  },
  {
    title: "Enterprise",
    desc: "Reduced research time by 80% for competitive intelligence",
    example: "Automated competitor monitoring with daily executive summaries"
  },
  {
    title: "Developer",
    desc: "Generated full-stack applications 100x faster",
    example: "CRUD apps, dashboards, and APIs from natural language descriptions"
  },
];

const AboutProduct = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead
        title="infinall.ai — Autonomous AI Execution Engine"
        description="Deep dive into infinall.ai: the autonomous AI execution engine with specialized sub-agents for code generation, content creation, data analysis, and research. Build, publish, analyze, and research automatically."
      />
      <Navbar />

      {/* Hero Section - infinall.ai Brand Colors */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-black to-black" />
        <div className="absolute inset-0" style={{ 
          background: "radial-gradient(circle at 30% 50%, rgba(34,211,238,0.15) 0%, transparent 50%)" 
        }} />
        
        {/* Floating particles for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/20 blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-medium tracking-wider text-cyan-400/80 uppercase">The Product</span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            infinall.ai
          </motion.h1>

          <motion.p className="text-lg sm:text-xl text-cyan-400/60 max-w-2xl mx-auto mb-4 font-light" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            You Imagine. It's Done.
          </motion.p>
          
          <motion.p className="text-sm sm:text-base text-white/40 max-w-xl mx-auto mb-10" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
          >
            The autonomous AI execution engine that transforms natural language into complete applications, 
            content, research, and insights — then deploys them automatically.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] group"
            >
              Try infinall.ai Free <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Explore Features
            </a>
          </motion.div>

          {/* Real user stats */}
          <motion.div 
            className="flex items-center justify-center gap-8 mt-12 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <div className="text-2xl font-bold text-cyan-400">10K+</div>
              <div className="text-white/40 text-xs">Active Users</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-cyan-400">50K+</div>
              <div className="text-white/40 text-xs">Apps Generated</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-cyan-400">1M+</div>
              <div className="text-white/40 text-xs">Tasks Executed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Product Interface Mockup */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <BrowserMockup url="app.infinall.ai" variant="infinall" className="mx-auto">
              <div className="p-4 sm:p-6 md:p-10 bg-[hsl(220,20%,2%)]">
                {/* Real dashboard UI */}
                <div className="grid grid-cols-12 gap-4 min-h-[400px]">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-black/40 rounded-lg p-4 border border-cyan-500/10">
                    <div className="space-y-4">
                      <div className="text-xs text-cyan-400/60 uppercase tracking-wider">Active Projects</div>
                      {[
                        { name: "E-commerce MVP", status: "generating", progress: 75 },
                        { name: "Content Calendar", status: "completed", progress: 100 },
                        { name: "Competitor Analysis", status: "researching", progress: 45 },
                      ].map((project, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white/80">{project.name}</span>
                            <span className={`text-${
                              project.status === 'generating' ? 'cyan-400' : 
                              project.status === 'completed' ? 'green-400' : 'yellow-400'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-cyan-400 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="col-span-9 space-y-4">
                    {/* Command bar */}
                    <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/10">
                      <div className="flex items-center gap-2 text-white/40">
                        <span className="text-cyan-400">▶</span>
                        <span className="text-sm">"Build me a SaaS dashboard with Stripe integration"</span>
                      </div>
                    </div>

                    {/* Agent activity */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-white/80">Infinall Engineer</span>
                        </div>
                        <p className="text-xs text-white/40">Generating Next.js app with Prisma schema...</p>
                        <div className="mt-2 text-xs text-cyan-400/60">src/app/page.tsx • src/lib/prisma.ts • 15 files</div>
                      </div>
                      <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-white/80">Infinall Publisher</span>
                        </div>
                        <p className="text-xs text-white/40">Creating YouTube script and thumbnail...</p>
                        <div className="mt-2 text-xs text-cyan-400/60">3:45 video • 5 scenes • Voiceover ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram with Real Flow */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-400/60 mb-4 font-medium">Architecture</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">infinall.ai</span> Works
            </h2>
            <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
              A multi-agent orchestration system powered by advanced AI models working in parallel.
            </p>
          </div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* User input with real example */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 border border-cyan-500/20">
                <span className="text-sm text-cyan-400">💬</span>
                <span className="text-xs sm:text-sm text-white/80">
                  "Build me a customer analytics dashboard with Stripe, send weekly reports to Slack"
                </span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-6">
              <div className="w-px h-10 bg-gradient-to-b from-cyan-400/40 to-cyan-400/10" />
            </div>

            {/* Orchestrator */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-transparent border border-cyan-500/20 rounded-xl px-6 py-3">
                <div className="text-center">
                  <span className="text-cyan-400 text-2xl font-bold">∞</span>
                  <p className="text-sm font-bold text-white">Infinall Orchestrator</p>
                  <p className="text-[10px] text-cyan-400/60">Gemini AI • Plans & coordinates 4 agents</p>
                </div>
              </div>
            </div>

            {/* Arrow splits */}
            <div className="flex justify-center mb-6">
              <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            </div>

            {/* 4 agents with real outputs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { icon: Code2, name: "Engineer", output: "Next.js app + API", time: "45s" },
                { icon: Video, name: "Publisher", output: "Blog post + social", time: "30s" },
                { icon: BarChart3, name: "Analyst", output: "Dashboard + insights", time: "25s" },
                { icon: Search, name: "Researcher", output: "Market report", time: "60s" },
              ].map(a => (
                <div key={a.name} className="bg-black/60 rounded-xl p-3 sm:p-4 border border-cyan-500/10 text-center">
                  <a.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-bold text-white">{a.name}</p>
                  <p className="text-[10px] text-cyan-400/60">{a.output}</p>
                  <p className="text-[8px] text-white/30 mt-1">⏱ {a.time}</p>
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-6">
              <div className="w-px h-10 bg-gradient-to-b from-cyan-400/30 to-cyan-400/10" />
            </div>

            {/* Real outputs */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { emoji: "🌐", label: "Live Dashboard", url: "app.infinall.ai/dashboard" },
                { emoji: "📱", label: "Deployed App", url: "store.example.com" },
                { emoji: "📹", label: "YouTube Video", url: "youtube.com/watch" },
                { emoji: "📊", label: "Analytics Report", url: "Slack #reports" },
              ].map(o => (
                <div key={o.label} className="bg-black/60 rounded-lg px-4 py-2 border border-cyan-500/10">
                  <span className="text-xs sm:text-sm text-white/80">{o.emoji} {o.label}</span>
                  <span className="text-[8px] text-cyan-400/60 block mt-1">{o.url}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-400/60 mb-4 font-medium">Real Results</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Used by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">10,000+</span> teams
            </h2>
            <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
              From solo founders to enterprise teams, infinall.ai is transforming how work gets done.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{useCase.desc}</p>
                <p className="text-white/40 text-xs">"{useCase.example}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Engineer Section with Real Features */}
      <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">Infinall Engineer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Build applications<br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">one prompt</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg max-w-xl mx-auto">
              Describe what you want. Infinall Engineer researches, architects, and generates production-ready code — then deploys it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {engineerFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-cyan-400/60 mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-3">{feat.desc}</p>
                <p className="text-[10px] text-cyan-400/60 border-t border-cyan-500/10 pt-2 mt-2">
                  ⚡ {feat.useCase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Publisher Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(34,211,238,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Video className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">Infinall Publisher</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Publish content across<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">every platform</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg max-w-xl mx-auto">
              Give Infinall Publisher a topic. It researches, writes, records, and publishes — YouTube, X, WordPress, and ad images.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {publisherFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-4 sm:p-5 hover:border-cyan-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <feat.icon className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400/60 mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1 sm:mb-1.5">{feat.title}</h3>
                <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">{feat.desc}</p>
                <p className="text-[8px] text-cyan-400/60 mt-2 truncate">✨ {feat.useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Analyst Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">Infinall Analyst</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Data-driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">decisions</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg max-w-xl mx-auto">
              From raw data to actionable insights. Infinall Analyst builds dashboards, runs analysis, and generates strategic recommendations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {analystFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-cyan-400/60 mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-3">{feat.desc}</p>
                <p className="text-[10px] text-cyan-400/60 border-t border-cyan-500/10 pt-2 mt-2">
                  📊 {feat.useCase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinall Researcher Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(34,211,238,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">Infinall Researcher</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Research at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">AI speed</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-lg max-w-xl mx-auto">
              Deep web research, competitor analysis, and comprehensive reports — generated in minutes, not days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {researcherFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-5 sm:p-6 hover:border-cyan-500/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <feat.icon className="w-7 sm:w-8 h-7 sm:h-8 text-cyan-400/60 mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors" />
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-3">{feat.desc}</p>
                <p className="text-[10px] text-cyan-400/60 border-t border-cyan-500/10 pt-2 mt-2">
                  🔍 {feat.useCase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table with Real Competitors */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-400/60 mb-4 font-medium">Comparison</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              infinall.ai vs <span className="text-white/40">Traditional Tools</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
              See how infinall.ai compares to existing solutions in the market.
            </p>
          </div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/10 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-12 gap-0 border-b border-cyan-500/10 p-4 sm:p-5 bg-black/60">
              <span className="col-span-6 text-xs sm:text-sm font-bold text-white">Feature</span>
              <span className="col-span-3 text-xs sm:text-sm font-bold text-cyan-400 text-center">infinall.ai</span>
              <span className="col-span-3 text-xs sm:text-sm font-bold text-white/40 text-center">Competitors</span>
            </div>
            {comparisonData.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-12 gap-0 p-4 sm:p-5 ${i < comparisonData.length - 1 ? "border-b border-cyan-500/5" : ""}`}>
                <span className="col-span-6 text-[11px] sm:text-sm text-white/60">{row.feature}</span>
                <div className="col-span-3 flex justify-center">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-[10px] sm:text-xs text-white/30">{row.competitors}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-400/60 font-medium">Get Started</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to build with AI?
          </h2>
          <p className="text-white/40 text-sm sm:text-lg mb-8">
            Stop assembling tools. Start describing outcomes. Join 10,000+ users already building with infinall.ai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.infinall.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] group"
            >
              Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              View Documentation
            </a>
          </div>
          <p className="text-white/20 text-xs mt-6">No credit card required • Deploy in minutes • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProduct;