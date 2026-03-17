import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhatIsSection from "@/components/home/WhatIsSection";
import ExecutionFlowSection from "@/components/home/ExecutionFlowSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import VisionSection from "@/components/home/VisionSection";
import CTASection from "@/components/home/CTASection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OriMind",
    url: "https://orimind.com",
    description: "OriMind builds autonomous intelligence systems for the execution age, powering infinall.ai.",
    sameAs: ["https://linkedin.com/company/orimind", "https://x.com/orimind"],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead structuredData={structuredData} />
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <ExecutionFlowSection />
      <ProductShowcase />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;