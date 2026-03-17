import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/product" },
  { label: "Blog", path: "/blog" },
  { label: "Research", path: "/research" },
  { label: "Careers", path: "/careers" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - OriMind Black/White */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
            <span className="text-white font-display font-bold text-sm">O</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-lg tracking-tight leading-none">
              OriMind
            </span>
            <span className="text-[10px] text-white/30 tracking-wider">
              Research & Innovation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Black/White */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side - Only infinall.ai CTA (removed duplicate Research link) */}
        <div className="flex items-center gap-4">
          {/* infinall.ai CTA - Uses brand colors for distinction */}
          <a
            href="https://www.infinall.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Try infinall.ai</span>
          </a>

          {/* Mobile menu button - White */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Black/White with infinall.ai CTA distinction */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-4 space-y-1">
              {/* Navigation Links - White/Gray */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="my-3 border-t border-white/10" />
              
              {/* infinall.ai CTA - Brand colors in mobile */}
              <a
                href="https://www.infinall.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all mt-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Try infinall.ai</span>
              </a>
              
              {/* Contact - White/Gray */}
              <a
                href="mailto:mohan@orimind.com"
                className="block px-4 py-3 text-center text-white/40 hover:text-white/60 text-xs mt-2"
              >
                mohan@orimind.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;