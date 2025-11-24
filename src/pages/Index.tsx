import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Download from "@/components/Download";
import Team from "@/components/Team";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Download />
      <Team />
      <Activities />
      <Footer />
    </div>
  );
};

export default Index;
