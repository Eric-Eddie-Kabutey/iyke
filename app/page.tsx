import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SmartSpaces from "@/components/sections/SmartSpaces";
import ThreePillars from "@/components/sections/ThreePillars";
import TopProducts from "@/components/sections/TopProducts";
import VideoBanner from "@/components/sections/VideoBanner";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CaseStudies from "@/components/sections/CaseStudies";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SmartSpaces />
      <ThreePillars />
      <TopProducts />
      <VideoBanner />
      <Testimonials />
      <FAQ />
      {/* <CaseStudies /> */}
      {/* <CTASection /> */}
    </>
  );
}
