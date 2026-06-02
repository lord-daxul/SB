import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import PlatformsSection from "@/components/PlatformsSection";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <PlatformsSection />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
