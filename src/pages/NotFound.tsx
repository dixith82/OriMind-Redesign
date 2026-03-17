import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead title="404 - Page Not Found | OriMind" />
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                404
              </span>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10">
                <AlertCircle className="w-12 h-12 text-cyan-400" />
              </div>
            </div>

            {/* Message */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Oops! Page Not Found
            </h1>
            
            <p className="text-white/40 text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to a new location.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition-all group"
              >
                <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Return to Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/30 mb-4">Popular Pages</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/product" className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  infinall.ai
                </Link>
                <Link to="/blog" className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  Blog
                </Link>
                <Link to="/research" className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  Research
                </Link>
                <Link to="/careers" className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  Careers
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;