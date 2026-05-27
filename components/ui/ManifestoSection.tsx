import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { SOLUTIONS } from "@/constants";

export default function ManifestoSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <SectionHeader
        eyebrow="Our Solutions"
        title="Smart Technology."
        titleHighlight="Seamless Solutions."
        className="mb-10"
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-8 items-start">

        {/* Left: visual card composition */}
        <div className="col-span-2 grid grid-cols-2 gap-3 h-full">

          {/* Blue square card */}
          <div className="h-full flex flex-col items-center justify-center">
            <div className="rounded-3xl bg-blue-600 p-6 flex flex-col justify-between aspect-square relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-35 -right-15 z-0">
                <span className="text-navy/40 text-[700px] text-bold leading-none">*</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl leading-snug mb-2">End-to-end tech.</h3>
                <p className="text-blue-100/75 text-xs leading-relaxed">
                  From the sensor on the factory floor to the cloud dashboard on your phone — we own the full stack.
                </p>
              </div>
            </div>
          </div>

          {/* Stacked texture cards */}
          <div className="flex flex-col gap-3">
            {/* Card 1 — fan / shell lines */}
            <div className="rounded-3xl bg-slate-100 overflow-hidden flex-1 min-h-[160px] relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 220 200"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M ${110 + (i - 9) * 14} -10 Q ${55 - i * 3} 100 ${110 + (i - 9) * 14} 210`}
                    stroke="rgba(148,163,184,0.35)"
                    strokeWidth="1.2"
                  />
                ))}
                <circle cx="110" cy="100" r="60" fill="rgba(255,255,255,0.25)" />
              </svg>
            </div>

            {/* Card 2 — diagonal stripe lines */}
            <div className="rounded-3xl bg-slate-100 overflow-hidden flex-1 min-h-[120px] relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 220 160"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
              >
                {Array.from({ length: 22 }).map((_, i) => (
                  <line
                    key={i}
                    x1={i * 18 - 60} y1={0}
                    x2={i * 18 + 60} y2={160}
                    stroke="rgba(148,163,184,0.35)"
                    strokeWidth="1.2"
                  />
                ))}
                <circle cx="110" cy="80" r="45" fill="rgba(255,255,255,0.2)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: service list */}
        <div className="col-span-3">
          <div className="divide-y divide-slate-100">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.label}
                href={`/solutions/${s.slug}`}
                className="group flex items-center justify-between py-5 hover:pl-2 transition-all duration-200"
              >
                <div>
                  <p className="text-navy font-semibold text-base group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5 leading-snug">{s.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
