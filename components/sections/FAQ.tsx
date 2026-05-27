"use client";

import { useState } from "react";
import GradientHeading from "../ui/GradientHeading";

const FAQS = [
  {
    q: "What types of businesses do you work with?",
    a: "We serve enterprises, government institutions, hospitals, universities, and fast-growing SMEs across Nigeria. Whether you need a five-camera CCTV install or a full smart-campus IoT deployment across multiple sites — our engineering team is scoped for both.",
  },
  {
    q: "Do you handle projects outside Ondo State?",
    a: "Yes. We have active deployments in Lagos, Abuja, Port Harcourt, Benin City, and Ibadan. Our site-survey team travels for projects above a certain scale, and we have trusted local installation partners in most states for smaller engagements.",
  },
  {
    q: "How long does a typical project take from quote to go-live?",
    a: "Small installations (CCTV, structured cabling, workstations) typically take 5–15 working days. Mid-scale infrastructure or IoT deployments run 4–10 weeks. Enterprise-grade projects or custom software platforms are scoped individually — we provide a detailed project timeline before you sign anything.",
  },
  {
    q: "Can you take over an existing setup another vendor installed?",
    a: "Absolutely. We do full technology audits of inherited infrastructure, identify risks and gaps, and produce a prioritised remediation plan. We have inherited and upgraded networks, server rooms, and security systems from over a dozen previous vendors.",
  },
  {
    q: "What does post-installation support look like?",
    a: "All projects include a 90-day warranty period with free on-site support. After that, we offer tiered managed service contracts — from remote monitoring-only up to a 4-hour on-site SLA. We also offer ad-hoc callout rates for clients who prefer pay-as-you-go.",
  },
  {
    q: "Do you offer financing or payment plans?",
    a: "For enterprise and institutional clients we offer milestone-based billing (deposit → delivery → sign-off). We are also working with select financing partners to offer equipment leasing for qualifying businesses. Speak to our sales team for details.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-24 lg:pb-32 overflow-hidden relative">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <GradientHeading
          from="#1a1a1e"
          to="#94a3b8"
          direction="to-r"
          className="text-3xl lg:text-5xl font-bold text-center mb-10"
        >
          Everything You Need <br className="hidden sm:block" />
          to Know
        </GradientHeading>
        {/* Accordion */}
        <div className="space-y-0 divide-y divide-navy/5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-6 py-7 text-left"
                >
                  {/* Number */}
                  <span
                    className={`text-md font-bold tabular-nums transition-colors shrink-0 ${
                      isOpen
                        ? "text-blue-400"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-md text-navy lg:text-lg font-medium leading-snug transition-colors`}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? "border-blue-500/50 bg-transparent rotate-45 text-blue-400"
                        : "border-white/15 text-slate-500 group-hover:border-white/30"
                    }`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div className="pl-12 pr-10 pb-7">
                    <p className="text-blue-600 text-sm lg:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
