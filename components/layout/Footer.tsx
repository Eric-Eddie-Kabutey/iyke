import Link from "next/link";
import Image from "next/image";
import { FOOTER_SOLUTIONS, FOOTER_COMPANY, FOOTER_RESOURCES } from "@/constants";

const CONTACT_ITEMS = [
  { icon: MapPinIcon, text: "No. 14 Tech Avenue, Akure, Ondo State, Nigeria" },
  { icon: PhoneIcon, text: "+234 803 000 0000" },
  { icon: MailIcon, text: "hello@iykechriscomputers.com" },
  { icon: ClockIcon, text: "Mon – Fri: 8:00 AM – 6:00 PM WAT" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
];

export default function Footer() {
  return (
    <footer className="bg-white mx-2">
      {/* ── CTA card ── */}
      <div className="mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 lg:px-16 pt-16 pb-14 text-center"
          style={{ background: "linear-gradient(180deg, #07090f 0%, #0b1120 60%, #0d1a3a 100%)" }}
        >
          {/* ── Wave / perspective grid SVG ── */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 420"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            {/* Perspective converging lines from bottom-center */}
            {[-420,-340,-260,-180,-100,-30,30,100,180,260,340,420].map((offset, i) => (
              <line
                key={`v${i}`}
                x1={450 + offset} y1={420}
                x2={450 + offset * 0.08} y2={0}
                stroke="rgba(99,140,255,0.09)" strokeWidth="0.8"
              />
            ))}
            {/* Horizontal curved arcs — evenly spaced up the card */}
            {[380,320,260,200,145,95,50,12].map((cy, i) => (
              <path
                key={`h${i}`}
                d={`M -20 ${cy} Q 450 ${cy - 28 + i * 3} 920 ${cy}`}
                stroke="rgba(99,140,255,0.08)" strokeWidth="0.8"
              />
            ))}
            {/* Blue radial glow at bottom-center */}
            <ellipse cx="450" cy="460" rx="340" ry="180" fill="rgba(37,99,235,0.18)" />
          </svg>

          {/* Top-edge subtle border glow */}
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(99,140,255,0.4), transparent)" }}
          />

          {/* Avatars — middle one larger and raised */}
          <div className="relative z-10 flex items-end justify-center gap-2 mb-8">
            {AVATARS.map((src, i) => {
              const isCenter = i === 2;
              return (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className={`rounded-full border-2 border-white/30 object-cover transition-transform ${
                    isCenter
                      ? "w-16 h-16 -translate-y-3 border-white/60 shadow-lg shadow-blue-500/30"
                      : "w-10 h-10"
                  }`}
                />
              );
            })}
          </div>

          {/* Copy */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Transform Your Business with Smart Technology
            </h2>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-8">
              Whether you need IoT infrastructure, enterprise hardware, or a complete digital
              platform — our team architects the right solution for your budget and goals.
            </p>

            {/* Single dark pill CTA — matches PineConnector style */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              Get a Quote
              <span className="w-5 h-5 rounded-full  flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <p className="mt-5 text-slate-500 text-xs">
              ✓ No commitment required &nbsp;·&nbsp; ✓ Response within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">

          {/* Brand + contact */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-block mb-5">
              {/* invert turns the white logo dark for the light-theme footer */}
              <Image src="/logo.png" alt="IYKE Chris Computers" width={110} height={40} className="invert" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-[260px]">
              Your trusted end-to-end technology partner. We deliver intelligent IoT systems,
              enterprise-grade hardware, and scalable digital solutions across Nigeria.
            </p>
            <ul className="space-y-3">
              {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-slate-500 text-sm">
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Solutions */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-3">
              {FOOTER_SOLUTIONS.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              {FOOTER_RESOURCES.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © 2025 IYKE Chris Computers. All rights reserved. Designed with precision.
          </p>
          <div className="flex items-center gap-2">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Inline SVG icon components ── */
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
