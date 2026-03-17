import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content - Pure Black/White */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand - OriMind Black/White */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-white font-display font-bold text-sm">O</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">OriMind</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building autonomous intelligence systems for the execution age. 
              Research & innovation driving the future of AI.
            </p>
            
            {/* Social Links - White/Gray */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/orimind" target="_blank" rel="noopener noreferrer" 
                className="text-white/40 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/orimind" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/orimind" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links - Black/White */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-medium">Company</p>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#careers" className="text-sm text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products - Note: infinall.ai link but in OriMind style with arrow */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-medium">Products</p>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.infinall.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>infinall.ai</span>
                  <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-white/60" />
                </a>
                <p className="text-xs text-white/30 mt-1">Autonomous AI execution engine</p>
              </li>
              <li className="mt-4">
                <Link to="/research" className="text-sm text-white/60 hover:text-white transition-colors">
                  Research Lab
                </Link>
                <p className="text-xs text-white/30 mt-1">Advanced AI research initiatives</p>
              </li>
            </ul>
          </div>

          {/* Legal - Black/White */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-medium">Legal</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Pure Black/White */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} OriMind. All rights reserved. 
            <span className="block md:inline md:ml-2 text-white/30">
              Research & Innovation Company
            </span>
          </p>
          
          {/* Contact Email - White/Gray */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:mohan@orimind.com" 
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              mohan@orimind.com
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="https://www.infinall.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              infinall.ai <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;