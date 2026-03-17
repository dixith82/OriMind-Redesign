import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Calendar, Tag, Clock, User, Eye, Heart, 
  Share2, Bookmark, Twitter, Linkedin, Facebook, Link2,
  ChevronUp, MessageCircle, ThumbsUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Mock data - replace with actual Supabase query
const postsData = {
  "1": {
    id: 1,
    title: "The Future of Autonomous AI: Beyond Assistance to Execution",
    slug: "future-of-autonomous-ai",
    category: "AI Research",
    categoryColor: "cyan",
    image: "/blog/autonomous-ai.jpg",
    excerpt: "How autonomous AI systems are transforming how applications, research, and content are built — moving from recommendation to execution.",
    content: `
      <h2>The Evolution of AI Assistance</h2>
      <p>For the past decade, AI has primarily served as an assistant — recommending content, suggesting replies, and helping humans make decisions. But the next evolution of AI isn't about assistance; it's about execution.</p>
      
      <h3>From Recommendation to Action</h3>
      <p>Traditional AI models excel at pattern recognition and generation. They can tell you what to do, but they can't do it for you. This is where autonomous AI systems like infinall.ai are different.</p>
      
      <blockquote>
        "The future of AI isn't in telling humans what to do — it's in doing it for them."
      </blockquote>
      
      <h3>The Multi-Agent Architecture</h3>
      <p>At the core of autonomous execution is a multi-agent system where specialized AI agents collaborate. Each agent has a specific role:</p>
      <ul>
        <li><strong>The Planner:</strong> Breaks down complex goals into executable steps</li>
        <li><strong>The Executor:</strong> Carries out specific tasks using tools and APIs</li>
        <li><strong>The Validator:</strong> Ensures outputs meet quality standards</li>
        <li><strong>The Orchestrator:</strong> Coordinates all agents for maximum efficiency</li>
      </ul>
      
      <h3>Real-World Applications</h3>
      <p>This architecture enables entirely new capabilities:</p>
      <ul>
        <li>Generate and deploy full-stack applications from a single prompt</li>
        <li>Research, write, and publish content across multiple platforms</li>
        <li>Analyze data and generate actionable insights automatically</li>
        <li>Monitor competitors and produce intelligence reports</li>
      </ul>
      
      <h3>The Road Ahead</h3>
      <p>As AI models become more capable and tool-use becomes more sophisticated, we're moving toward a future where describing what you want is enough. The AI handles the rest — from planning to execution to deployment.</p>
    `,
    author: {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      avatar: "/authors/sarah.jpg",
      bio: "Dr. Sarah Chen leads AI research at OriMind, focusing on autonomous systems and multi-agent coordination. She holds a PhD in Computer Science from Stanford and has published 20+ papers on AI systems."
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "2.4K",
    likes: 342,
    comments: 56,
    tags: ["Autonomous AI", "Research", "Future Tech"],
    related: [2, 3, 5]
  },
  "2": {
    id: 2,
    title: "Building infinall.ai: Inside the Architecture of an AI Execution Engine",
    slug: "building-infinall-ai",
    category: "Product",
    categoryColor: "purple",
    image: "/blog/infinall-architecture.jpg",
    excerpt: "A deep dive into the multi-agent orchestration system that powers infinall.ai's autonomous execution capabilities.",
    content: "...",
    author: {
      name: "Michael Rodriguez",
      role: "Lead Engineer",
      avatar: "/authors/michael.jpg",
      bio: "Michael is the Lead Engineer at infinall.ai, architecting the core execution engine. Previously at Google AI and Meta."
    },
    date: "March 10, 2024",
    readTime: "12 min read",
    views: "3.1K",
    likes: 289,
    comments: 43,
    tags: ["Engineering", "Architecture", "infinall.ai"],
    related: [1, 3, 6]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate fetching post
    setTimeout(() => {
      if (id && postsData[id]) {
        setPost(postsData[id]);
      }
      setLoading(false);
    }, 500);

    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Show scroll to top button after scrolling
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post?.title;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
    setShowShareMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-6 bg-white/5 rounded w-1/4" />
            <div className="h-12 bg-white/5 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-1/2" />
            <div className="h-64 bg-white/5 rounded" />
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-white/5 rounded" />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-white/40 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        ogType="article"
        ogImage={post.image}
      />
      <Navbar />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300"
          style={{ scaleX: 0, transformOrigin: '0%' }}
          animate={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-300 transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </button>

          {/* Category & Meta */}
          <div className="flex items-center flex-wrap gap-3 mb-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-${post.categoryColor}-500/20 text-${post.categoryColor}-400 border border-${post.categoryColor}-500/20`}>
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            
            <span className="flex items-center gap-1 text-xs text-white/30">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            
            <span className="flex items-center gap-1 text-xs text-white/30">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            
            <span className="flex items-center gap-1 text-xs text-white/30">
              <Eye className="w-3 h-3" /> {post.views} views
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-white/40 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center justify-between mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center">
                <User className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/40">{post.author.role}</p>
              </div>
            </div>

            {/* Engagement Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-lg transition-colors ${
                  liked ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  bookmarked ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 p-2 bg-black border border-white/10 rounded-lg shadow-xl z-10"
                  >
                    <div className="flex flex-col gap-1">
                      <button onClick={() => handleShare('twitter')} className="flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Twitter className="w-4 h-4" /> Twitter
                      </button>
                      <button onClick={() => handleShare('linkedin')} className="flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </button>
                      <button onClick={() => handleShare('facebook')} className="flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Facebook className="w-4 h-4" /> Facebook
                      </button>
                      <button onClick={() => handleShare('copy')} className="flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Link2 className="w-4 h-4" /> Copy Link
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}

          {/* Author Bio */}
          <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sm text-white/60 italic">
              "{post.author.bio}"
            </p>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-cyan max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-sm font-medium text-white/40 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="mt-8 flex items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" /> {post.likes} likes
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> {post.comments} comments
            </span>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-6">Discussion ({post.comments})</h3>
            
            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50"
                rows="3"
              />
              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center">
                    <User className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">Reader {i + 1}</span>
                      <span className="text-xs text-white/30">2 hours ago</span>
                    </div>
                    <p className="text-sm text-white/60">
                      Great article! Really insightful perspective on the future of AI.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;