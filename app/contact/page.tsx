"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";

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

const CONTACT_DETAILS = [
  {
    icon: "📍",
    label: "Office Address",
    value: "No. 14 Tech Avenue, Akure, Ondo State, Nigeria",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+234 803 000 0000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@iykechriscomputers.com",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM WAT",
  },
];

const FAQS = [
  {
    q: "How quickly can you respond to a quote request?",
    a: "We aim to respond to all enquiries within 3 business hours. Complex projects requiring a site survey may take 24–48 hours for a full proposal.",
  },
  {
    q: "Do you offer installation across Nigeria?",
    a: "Yes. Our installation teams cover all six geopolitical zones. For remote locations, we partner with pre-qualified local technicians we supervise directly.",
  },
  {
    q: "What warranty and after-sales support do you provide?",
    a: "All products come with the manufacturer warranty plus our in-house support SLA. Managed service clients get a dedicated account manager and 24/7 helpdesk access.",
  },
  {
    q: "Can I finance a large hardware purchase?",
    a: "Yes. We offer lease-to-own and instalment plans for qualifying businesses. Contact us for details on our financing partners.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's build something"
        titleHighlight="remarkable together"
        description="Whether you have a project in mind, need a quote, or just want to explore what's possible — our team is ready to help."
      />

      {/* Contact details strip */}
      {/* <section className="bg-[#1a1a1e] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_DETAILS.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{item.icon}</span>
              <div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-white text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Form + Map */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-slate-500">
                  Thank you for reaching out. A member of our team will be in touch within 3 business hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-navy font-bold text-2xl mb-2">Send us a message</h2>
                <p className="text-slate-400 text-sm mb-8">
                  Fill in your details below and we&apos;ll get back to you fast.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Work email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" disabled>What do you need help with?</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your project or question..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-navy placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/30 text-sm"
                  >
                    Send Message →
                  </button>
                  <p className="text-center text-slate-400 text-xs">
                    ⏱ Avg. response time: 3 hours during business hours
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Right: Map placeholder + FAQ */}
          <div className="space-y-8">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-56 relative border border-slate-100 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
                alt="Akure, Ondo State, Nigeria"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-navy/30" />
              <div className="relative z-10 text-center">
                <span className="text-3xl block mb-2">📍</span>
                <p className="text-white font-semibold text-sm">Akure, Ondo State</p>
                <p className="text-white/70 text-xs">Nigeria</p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-navy font-bold text-xl mb-5">Frequently asked questions</h3>
              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50"
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-navy text-sm font-medium pr-4">{faq.q}</span>
                      <svg
                        className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4">
                        <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
