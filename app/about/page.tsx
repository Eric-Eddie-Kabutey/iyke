import PageHero from "@/components/ui/PageHero";
import TeamCarousel from "./TeamCarousel";
import StatsSection from "@/components/ui/StatsSection";
import ValuesSection from "@/components/ui/ValuesSection";
import ProjectsShowcase from "@/components/ui/ProjectsShowcase";
import ManifestoSection from "@/components/ui/ManifestoSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "About — IYKE Chris Computers",
  description:
    "Learn about IYKE Chris Computers — Nigeria's trusted end-to-end technology partner since 2012.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Technology built for"
        titleHighlight="real-world impact"
        description="Founded in Akure, Ondo State, IYKE Chris Computers has grown from a hardware reseller into Nigeria's leading end-to-end technology integrator — delivering IoT systems, enterprise infrastructure, and custom digital platforms."
      />

      <StatsSection />

      <ManifestoSection />

      <ProjectsShowcase />

      {/* ── 3. Bento — numbers + photos ── */}
      {/* <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-7 h-0.5 bg-slate-300" />
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">
                By The Numbers
              </span>
              <div className="w-7 h-0.5 bg-slate-300" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy font-serif leading-tight">
              Proven at scale.
              <br />
              <span className="text-blue-600">Built for the long run.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[220px] border border-slate-200/60">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Projects Delivered
              </p>
              <div>
                <p className="text-7xl lg:text-8xl font-bold text-navy font-serif leading-none">
                  200<span className="text-blue-600">+</span>
                </p>
                <p className="text-slate-400 text-sm mt-3 max-w-[200px] leading-relaxed">
                  From single-site deployments to campus-wide integrations
                  across six states.
                </p>
                <div className="mt-4 h-0.5 w-full bg-slate-100 relative">
                  <div className="absolute left-0 top-0 h-full w-3/4 bg-blue-600 rounded-full" />
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[220px] lg:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="IYKE Chris Computers office"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                  Akure, Ondo State
                </p>
                <p className="text-white font-semibold text-sm">
                  Headquarters & Engineering Hub
                </p>
              </div>
            </div>
            <div className="bg-[#111113] rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                Enterprise Clients
              </p>
              <div>
                <p className="text-7xl lg:text-8xl font-bold text-white font-serif leading-none">
                  50<span className="text-blue-400">+</span>
                </p>
                <p className="text-slate-400 text-sm mt-3 max-w-[200px] leading-relaxed">
                  Businesses that trust us to run their critical technology
                  infrastructure.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80"
                alt="Network infrastructure"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30" />
            </div>
            <div className="bg-blue-600 rounded-3xl p-8 flex flex-col justify-between min-h-[220px] col-span-2 lg:col-span-1">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                Years in Operation
              </p>
              <div>
                <p className="text-7xl lg:text-8xl font-bold text-white font-serif leading-none">
                  12<span className="text-blue-300">+</span>
                </p>
                <p className="text-blue-100/70 text-sm mt-3 max-w-[200px] leading-relaxed">
                  Continuously serving Nigerian businesses since 2012 — through
                  every infrastructure challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <ValuesSection /> */}
      <TeamCarousel />
      <Testimonials />
      <FAQ />
    </>
  );
}
