"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  "IoT & Smart Devices",
  "CCTV & Surveillance",
  "Biometric Systems",
  "Enterprise Hardware",
  "Network Infrastructure",
  "Cloud Services",
  "Custom Digital Platform",
  "Cybersecurity",
  "General Enquiry",
];

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [form, setForm] = useState({ name: "", contact: "", service: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[480px] p-8 z-10">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="w-14 h-14 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-navy text-xl font-bold mb-2">Request Received!</h3>
            <p className="text-slate-500 text-sm">We&apos;ll send you a detailed quote within 24 hours.</p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-navy text-2xl font-bold mb-1">Request a Quote</h2>
            <p className="text-slate-500 text-sm mb-7 leading-relaxed">
              Tell us what you need and we&apos;ll send a detailed no-obligation quote within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  Full Name <span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  Email or Phone <span className="text-blue-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Email or phone number"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  What do you need?
                </label>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-navy text-sm font-semibold mb-1.5">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Units, site size, budget, timeline..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-600/25 text-sm"
              >
                Submit Request →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
