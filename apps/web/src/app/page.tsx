"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FragmentsSection } from "@/components/sections/FragmentsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  useEffect(() => {
    // 调用 health 接口检查服务状态
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Health check:", data);
      })
      .catch((err) => {
        console.warn("API health check failed:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 font-sans selection:bg-[#7C5CFF] selection:text-white relative overflow-hidden crt-overlay">
      <Navigation />
      <HeroSection />
      <WorksSection />
      <TechStackSection />
      <AboutSection />
      <FragmentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
