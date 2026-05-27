import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

const VALUES: { label: string; description: string; icon: ReactNode }[] = [
  {
    label: "Precision Engineering",
    description: "Every solution is designed with exacting standards — from rack layout to software architecture diagrams. We don't cut corners on the details that matter.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Partnership First",
    description: "We act as your in-house technology team without the overhead — staying long after commissioning to ensure every system performs as promised.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Built for Nigeria",
    description: "Our systems are designed around local realities — power volatility, bandwidth constraints, NDPR compliance, and the unique demands of Nigerian enterprise environments.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Reliability & Security",
    description: "Uptime and data protection are non-negotiable. Our systems are stress-tested for the most demanding environments before a single cable is pulled on-site.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Continuous Support",
    description: "Our relationship doesn't end at commissioning. We provide ongoing maintenance, remote monitoring, and dedicated account management for every client.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: "Transparent Delivery",
    description: "No hidden costs, no scope creep surprises. Every project begins with a detailed scope, fixed timeline, and a clear acceptance criteria before work starts.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="What Drives Us"
          title="Our core"
          titleHighlight="values"
          description="Principles that have shaped every project, partnership, and client relationship since 2012."
          className="mb-12"
        />

        {/* Mobile: single column. Tablet: 2 cols. Desktop: asymmetric rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[VALUES[0], VALUES[1], VALUES[2]].map((v, i) => (
            <div
              key={v.label}
              className={`group bg-slate-50 rounded-2xl p-7 transition-all duration-300 ${i === 0 ? "sm:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-6 transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{v.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[VALUES[3], VALUES[4], VALUES[5]].map((v, i) => (
            <div
              key={v.label}
              className={`group bg-slate-50 rounded-2xl p-7 transition-all duration-300 ${i === 2 ? "sm:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-6  transition-colors duration-300">
                {v.icon}
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{v.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
