import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import PlatformsSection from "@/components/PlatformsSection";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/wordpress";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <PlatformsSection />
        <FAQ />
        <Blog posts={posts} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
//
Redeploy
trigger
