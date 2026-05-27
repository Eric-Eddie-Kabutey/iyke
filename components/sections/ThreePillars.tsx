import Link from "next/link";
import { PILLARS } from "@/constants";
import GradientHeading from "../ui/GradientHeading";

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

function PillarCard({
  pillar,
  large = false,
}: {
  pillar: (typeof PILLARS)[number];
  large?: boolean;
}) {
  return (
    <Link
      href={pillar.href}
      className={`group relative rounded-3xl overflow-hidden block ${
        large ? "min-h-[520px]" : "min-h-[360px]"
      }`}
    >
      <img
        src={pillar.image}
        alt={pillar.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

<div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
      {/* Gradient: strong bottom, light top */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

      {/* Arrow button — top right */}
      <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-white/20 transition-all">
        <ArrowIcon />
      </div>

      {/* Content — bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8 gap-3">
        <span className="self-start px-3 py-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold uppercase tracking-widest rounded-full">
          {pillar.tag}
        </span>
        <h3
          className={`text-white font-bold leading-tight font-serif ${
            large ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
          }`}
        >
          {pillar.title}
        </h3>
        {pillar.description && (
          <p className="text-slate-300 text-sm leading-relaxed">{pillar.description}</p>
        )}
      </div>
    </Link>
  );
}

export default function ThreePillars() {
  const [p1, p2, p3, p4, p5] = PILLARS;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <GradientHeading
            from="#1a1a1e"
            to="#94a3b8"
            direction="to-r"
            className="text-3xl lg:text-5xl font-bold"
            subHeading="What We Offer"
          >
            Three pillars of 
            <br className="hidden sm:block" />
            technology excellence
          </GradientHeading>
        </div>

        {/* Top row: wide left + narrower right */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 mb-4">
          <PillarCard pillar={p1} large />
          <PillarCard pillar={p2} large />
        </div>

        {/* Bottom row: three equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <PillarCard pillar={p3} />
          <PillarCard pillar={p4} />
          <PillarCard pillar={p5} />
        </div>
      </div>
    </section>
  );
}
