import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import AboutProduct from "./pages/AboutProduct";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Research from "./pages/Research";
import Careers from "./pages/Careers";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostEditor from "./pages/admin/PostEditor";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>OriMind – Autonomous Intelligence for the Execution Age</title>
          <meta
            name="description"
            content="OriMind is a research and innovation company building autonomous AI systems. Powering infinall.ai – the autonomous AI execution engine that transforms natural language into real execution."
          />
          <meta name="keywords" content="AI, autonomous AI, artificial intelligence, machine learning, research, innovation, infinall.ai, execution engine" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://orimind.com" />
          <meta property="og:title" content="OriMind – Autonomous Intelligence Systems" />
          <meta
            property="og:description"
            content="Building autonomous intelligence systems for the execution age. Discover infinall.ai – the AI execution engine."
          />
          <meta property="og:image" content="https://orimind.com/og-image.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://orimind.com" />
          <meta property="twitter:title" content="OriMind – Autonomous Intelligence" />
          <meta
            property="twitter:description"
            content="Building autonomous intelligence systems for the execution age."
          />
          <meta property="twitter:image" content="https://orimind.com/og-image.png" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://orimind.com" />

          {/* Structured SEO Data */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OriMind",
              "url": "https://orimind.com",
              "logo": "https://orimind.com/logo.png",
              "description": "OriMind is a research and innovation company building autonomous AI systems like infinall.ai.",
              "sameAs": [
                "https://twitter.com/orimind",
                "https://linkedin.com/company/orimind",
                "https://github.com/orimind"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "email": "mohan@orimind.com",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Mohan Krishnan"
              },
              "knowsAbout": ["Artificial Intelligence", "Autonomous Systems", "Machine Learning", "AI Research"],
              "owns": {
                "@type": "Product",
                "name": "infinall.ai",
                "description": "Autonomous AI execution engine that transforms natural language into complete applications and content."
              }
            }
            `}
          </script>

          {/* Breadcrumb Structured Data */}
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://orimind.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Product",
                  "item": "https://orimind.com/product"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Blog",
                  "item": "https://orimind.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Research",
                  "item": "https://orimind.com/research"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Careers",
                  "item": "https://orimind.com/careers"
                }
              ]
            }
            `}
          </script>
        </Helmet>

        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<AboutProduct />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/posts/new" element={<PostEditor />} />
            <Route path="/admin/posts/:id" element={<PostEditor />} />
            
            {/* Redirect old admin path */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;