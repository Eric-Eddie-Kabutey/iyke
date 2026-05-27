"use client";
import { useState } from "react";
import Link from "next/link";

const CHECK_ITEMS = [
  "No obligation quote — free consultation",
  "Response within 24 business hours",
  "Certified technicians & engineers",
  "Nationwide deployment coverage",
];

const SERVICES = [
  "IoT & Smart Devices",
  "CCTV & Surveillance",
  "Biometric Systems",
  "Enterprise Hardware",
  "Network Infrastructure",
  "Cloud Services",
  "Digital Platform",
];

export default function CTASection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
  });

  return (
    <section className="relative bg-[#111113] py-20 lg:py-28 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-[-100px] left-48 w-96 h-96 rounded-full bg-blue-700/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-36 w-80 h-80 rounded-full bg-blue-800/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-600/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Transform Your Business with Smart Technology
            </h2>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              Whether you need IoT infrastructure, enterprise hardware, or a complete digital
              platform — our team architects the right solution for your budget and goals.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                Schedule a Call
              </Link>
              <Link
                href="/products"
                className="px-7 py-3.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white rounded-full transition-all"
              >
                Browse Catalog
              </Link>
            </div>

            <ul className="space-y-3">
              {CHECK_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full border border-blue-500 bg-blue-600/8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
            <h3 className="text-white font-bold text-xl mb-2">Get a Fast Quote</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Fill in your details and receive a detailed quote within 24 hours — no commitment required.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Work email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />

              <div className="relative">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                >
                  <option value="" disabled>What do you need?</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#1a1a1e] text-white">
                      {s}
                    </option>
                  ))}
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 text-sm">
                Send Quote Request →
              </button>

              <p className="text-center text-slate-500 text-xs">
                ⏱ Avg. response time: 3 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
