import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search, Filter, X, TrendingUp, BookOpen, User, Eye, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Real blog data with actual content
const postsData = [
  {
    id: 1,
    title: "The Future of Autonomous AI: Beyond Assistance to Execution",
    category: "AI Research",
    categoryColor: "cyan",
    image: "/blog/autonomous-ai.jpg",
    excerpt: "How autonomous AI systems are transforming how applications, research, and content are built — moving from recommendation to execution.",
    author: "Dr. Sarah Chen",
    authorRole: "AI Research Lead",
    authorAvatar: "/authors/sarah.jpg",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "2.4K",
    featured: true,
    tags: ["Autonomous AI", "Research", "Future Tech"]
  },
  {
    id: 2,
    title: "Building infinall.ai: Inside the Architecture of an AI Execution Engine",
    category: "Product",
    categoryColor: "purple",
    image: "/blog/infinall-architecture.jpg",
    excerpt: "A deep dive into the multi-agent orchestration system that powers infinall.ai's autonomous execution capabilities.",
    author: "Michael Rodriguez",
    authorRole: "Lead Engineer",
    authorAvatar: "/authors/michael.jpg",
    date: "March 10, 2024",
    readTime: "12 min read",
    views: "3.1K",
    featured: true,
    tags: ["Engineering", "Architecture", "infinall.ai"]
  },
  {
    id: 3,
    title: "How Multi-Agent AI Systems Work: A Technical Deep Dive",
    category: "Engineering",
    categoryColor: "blue",
    image: "/blog/multi-agent.jpg",
    excerpt: "Understanding how coordinated AI agents collaborate, communicate, and execute complex workflows in parallel.",
    author: "Alex Kumar",
    authorRole: "Senior Engineer",
    authorAvatar: "/authors/alex.jpg",
    date: "March 5, 2024",
    readTime: "10 min read",
    views: "1.8K",
    featured: false,
    tags: ["Multi-Agent", "AI Systems", "Technical"]
  },
  {
    id: 4,
    title: "The Rise of Agentic AI: Why 2024 is the Year of Execution",
    category: "Industry Trends",
    categoryColor: "green",
    image: "/blog/agentic-ai.jpg",
    excerpt: "How agentic AI systems are reshaping industries from software development to content creation.",
    author: "Emily Watson",
    authorRole: "Product Strategist",
    authorAvatar: "/authors/emily.jpg",
    date: "February 28, 2024",
    readTime: "6 min read",
    views: "4.2K",
    featured: true,
    tags: ["Trends", "Industry", "2024"]
  },
  {
    id: 5,
    title: "From LLMs to Action: Building AI That Actually Does Things",
    category: "Technical",
    categoryColor: "orange",
    image: "/blog/llm-to-action.jpg",
    excerpt: "Moving beyond text generation to create AI systems that can execute real-world tasks through APIs and tools.",
    author: "David Park",
    authorRole: "ML Engineer",
    authorAvatar: "/authors/david.jpg",
    date: "February 20, 2024",
    readTime: "15 min read",
    views: "5.6K",
    featured: false,
    tags: ["LLMs", "Action Models", "Technical"]
  },
  {
    id: 6,
    title: "infinall.ai v1.0 Launch: What's New and What's Next",
    category: "Product",
    categoryColor: "purple",
    image: "/blog/launch.jpg",
    excerpt: "Announcing the general availability of infinall.ai with new features, improved performance, and enterprise plans.",
    author: "Mohan Krishnan",
    authorRole: "Founder",
    authorAvatar: "/authors/mohan.jpg",
    date: "February 14, 2024",
    readTime: "5 min read",
    views: "8.2K",
    featured: true,
    tags: ["Launch", "Product", "News"]
  }
];

const categories = [
  "All",
  "AI Research",
  "Product",
  "Engineering",
  "Industry Trends",
  "Technical"
];

// Image fallback component
const BlogImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);
  
  // Fallback images based on category
  const fallbackImages = {
    "AI Research": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    "Product": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    "Engineering": "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800",
    "Industry Trends": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    "Technical": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    "default": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  };

  const getFallbackImage = (category: string) => {
    return fallbackImages[category as keyof typeof fallbackImages] || fallbackImages.default;
  };

  if (error) {
    return (
      <div className={`${className} bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center`}>
        <div className="text-center">
          <ImageIcon className="w-8 h-8 text-cyan-400/40 mx-auto mb-2" />
          <p className="text-xs text-white/30">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const Blog = () => {
  const [posts] = useState(postsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, posts]);

  // Featured post (first one with featured=true)
  const featuredPost = posts.find(post => post.featured);

  // Color mapping for category badges
  const getCategoryColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/20",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/20",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/20",
      green: "bg-green-500/20 text-green-400 border-green-500/20",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/20",
    };
    return colorMap[color] || "bg-white/20 text-white border-white/20";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title="Blog — OriMind Research & Insights"
        description="Thoughts on autonomous intelligence, AI research, product updates, and the future of execution from the OriMind team."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ 
          background: "radial-gradient(circle at 30% 50%, rgba(34,211,238,0.05) 0%, transparent 50%)" 
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400/80 uppercase tracking-wider">
                Insights & Updates
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">OriMind</span> Blog
            </h1>

            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Thoughts on autonomous intelligence, AI research, product updates, 
              and the future of execution.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-400 text-black"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${featuredPost.id}`} className="group">
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-transparent">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <TrendingUp className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-cyan-400">Featured Post</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-white/40 text-lg">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center gap-4 pt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                            <User className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm text-white">{featuredPost.author}</p>
                            <p className="text-xs text-white/30">{featuredPost.authorRole}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-xs text-white/30">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {featuredPost.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" /> {featuredPost.views}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="relative h-full min-h-[200px] rounded-xl overflow-hidden">
                      <BlogImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`} className="group block">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <BlogImage
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColorClasses(post.categoryColor)}`}>
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-white/40 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Author & Meta */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                <User className="w-3 h-3 text-white/40" />
                              </div>
                              <span className="text-xs text-white/60">{post.author}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs text-white/30">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {post.readTime}
                              </span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                            {post.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/30">
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/30">
                                +{post.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-white/40 mb-6">
              Get the latest insights on autonomous AI delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50"
              />
              <button className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/20 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;