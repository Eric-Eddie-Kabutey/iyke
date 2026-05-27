import PartnerLogos from "./PartnerLogos";

const STATS = [
  { value: "200+", label: "Projects Delivered", sub: "Across Nigeria" },
  { value: "12+",  label: "Years Operating",    sub: "Since 2012" },
  { value: "50+",  label: "Enterprise Clients", sub: "Active accounts" },
  { value: "6",    label: "States Covered",     sub: "Installation teams" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 m-2 rounded-3xl py-16 lg:py-20 relative overflow-hidden">
      {/* Perspective grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 420"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {[-420, -340, -260, -180, -100, -30, 30, 100, 180, 260, 340, 420].map((offset, i) => (
          <line
            key={`v${i}`}
            x1={450 + offset} y1={420}
            x2={450 + offset * 0.08} y2={0}
            stroke="rgba(99,140,255,0.09)" strokeWidth="0.8"
          />
        ))}
        {[380, 320, 260, 200, 145, 95, 50, 12].map((cy, i) => (
          <path
            key={`h${i}`}
            d={`M -20 ${cy} Q 450 ${cy - 28 + i * 3} 920 ${cy}`}
            stroke="rgba(99,140,255,0.08)" strokeWidth="0.8"
          />
        ))}
      </svg>

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-600/50 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-amber-500/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          {/* Left claim card */}
          <div className="bg-white/40 border border-white/8 rounded-3xl p-8">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">#1</p>
            <h3 className="text-navy text-2xl font-bold leading-snug mb-3">
              End-to-end tech partner in Ondo State
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We are Akure's most comprehensive technology integrator — from the sensor to the cloud, from the cable to the contract.
            </p>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="pl-5">
                <p className="text-4xl lg:text-5xl font-bold text-blue-600 leading-none mb-2">{stat.value}</p>
                <p className="text-slate-800 text-sm font-medium">{stat.label}</p>
                <p className="text-slate-600 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <PartnerLogos />
      </div>
    </section>
  );
}
