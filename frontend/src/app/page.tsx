import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import ProblemSection from "@/components/landing/ProblemSection";
import KeyBenefits from "@/components/landing/KeyBenefits";
import Features from "@/components/landing/Features";
import Integrations from "@/components/landing/Integrations";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-primary">
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Clients />
        <ProblemSection />
        <KeyBenefits />
        <Features />
         <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
