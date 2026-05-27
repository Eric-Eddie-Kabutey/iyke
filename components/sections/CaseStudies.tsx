import Link from "next/link";
import { CASE_STUDIES, INSIGHTS } from "@/constants";

export default function CaseStudies() {
  const [large, ...small] = CASE_STUDIES;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Case Studies */}
          <div>
            <SectionHeader eyebrow="Case Studies" title="Real projects. Measurable impact." href="/projects" />

            <div className="grid gap-5 mt-10">
              {/* Large card */}
              <CaseCard study={large} large />

              {/* Small cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {small.map((study) => (
                  <CaseCard key={study.id} study={study} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Insights */}
          <div>
            <SectionHeader eyebrow="Insights" title="Technology perspectives" href="/insights" />

            <div className="flex flex-col gap-5 mt-10">
              {INSIGHTS.map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-end justify-between">
      <div className="max-w-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-slate-300" />
          <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">{eyebrow}</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1e] leading-tight">{title}</h2>
      </div>
      <Link
        href={href}
        className="hidden sm:inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline"
      >
        View all
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

function CaseCard({
  study,
  large = false,
}: {
  study: (typeof CASE_STUDIES)[number];
  large?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
        large ? "h-64 lg:h-80" : "h-52"
      }`}
    >
      <img
        src={study.image}
        alt={study.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-between p-5 lg:p-6">
        <span className="self-start px-2.5 py-1 bg-black/30 backdrop-blur-sm text-white/70 text-xs rounded-full border border-white/15">
          {study.tag}
        </span>
        <div>
          <p className="text-white font-semibold text-sm lg:text-base leading-snug mb-2">{study.title}</p>
          <p className="text-blue-300 font-bold text-2xl">
            {study.stat} <span className="text-white/60 text-sm font-normal">{study.statLabel}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ insight }: { insight: (typeof INSIGHTS)[number] }) {
  return (
    <div className="group flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
      <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={insight.image}
          alt={insight.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
            {insight.tag}
          </span>
          <span className="text-slate-400 text-xs">{insight.date}</span>
        </div>
        <p className="text-[#1a1a1e] font-semibold text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
          {insight.title}
        </p>
      </div>
    </div>
  );
}
