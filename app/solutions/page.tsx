import PageHero from "@/components/ui/PageHero";
import SolutionsSection from "@/components/ui/SolutionsSection";

export const metadata = {
  title: "Solutions — IYKE Chris Computers",
  description:
    "Explore our full range of technology solutions: security, IoT, IT infrastructure, networking, digital platforms, and cybersecurity.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Six pillars of"
        titleHighlight="technology excellence"
        description="From physical hardware to cloud-native software, we cover the full technology stack — so you never have to juggle multiple vendors."
      />
      <SolutionsSection />
    </>
  );
}
