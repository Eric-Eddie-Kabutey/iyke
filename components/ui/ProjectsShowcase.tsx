import Link from "next/link";
import { PROJECTS } from "@/constants";
import SectionHeader from "./SectionHeader";


function GridArrowGeo() {
  return (
    <svg
      viewBox="0 0 300 120"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Dot grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 18 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 16}
            cy={12 + row * 14}
            r="1.2"
            fill={
              Math.random() > 0.6
                ? "rgba(37,99,235,0.4)"
                : "rgba(148,163,184,0.3)"
            }
          />
        )),
      )}
      {/* Route line */}
      <polyline
        points="20,54 52,54 52,26 100,26 100,82 164,82 164,40 228,40 260,40"
        stroke="rgba(37,99,235,0.55)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Nodes on route */}
      {[
        [20, 54],
        [52, 54],
        [52, 26],
        [100, 26],
        [100, 82],
        [164, 82],
        [164, 40],
        [228, 40],
        [260, 40],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3.5"
          fill={i === 8 ? "rgba(37,99,235,0.9)" : "rgba(37,99,235,0.25)"}
          stroke="rgba(37,99,235,0.6)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/* ── Arrow button ── */
function ArrowBtn() {
  return (
    <div className="w-9 h-9 rounded-full border border-current/20 bg-current/5 flex items-center justify-center flex-shrink-0 transition-colors">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 17L17 7M17 7H7M17 7v10"
        />
      </svg>
    </div>
  );
}

/* ── Main component ── */
export default function ProjectsShowcase() {
  const [p1, p2, p3, p4, p5] = PROJECTS;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Projects"
          title="Follow our"
          titleHighlight="Latest Projects"
          className="mb-14"
        />

        {/*
          Bento: 3-col × 2-row explicit grid
          Row 1: [P1 photo tall] [P2 geo light] [P3 geo light]
          Row 2: [P1 continues] [P4 dark geo — col-span-2]
          Row 3: [P5 light geo — col-span-3]
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* ── P1: Photo card, tall (2-row) ── */}
          <Link
            href="/projects"
            className="group relative rounded-3xl overflow-hidden lg:row-span-2 min-h-[360px] lg:min-h-0 cursor-pointer"
          >
            <img
              src={p1.image}
              alt={p1.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <div className="relative z-10 h-full flex flex-col justify-between p-7 min-h-[360px]">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white/75 text-[10px] font-medium rounded-full border border-white/10">
                  {p1.tag}
                </span>
                <div className="text-white">
                  <ArrowBtn />
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-2">{p1.client}</p>
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  {p1.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                  {p1.description}
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-blue-300 font-bold text-4xl">
                    {p1.stat}
                  </span>
                  <span className="text-white/45 text-xs max-w-[140px] leading-snug">
                    {p1.statLabel}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* ── P2: Top image / bottom text split ── */}
          <Link
            href="/projects"
            className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col min-h-[280px] cursor-pointer transition-all"
          >
            {/* Image band — top 55% */}
            <div className="relative h-[160px] overflow-hidden flex-shrink-0">
              <img
                src={p2.image}
                alt={p2.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Light blue tint — not dark, distinguishes from P1 */}
              <div className="absolute inset-0 bg-blue-900/20" />
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-600 text-[10px] font-medium rounded-full">
                  {p2.tag}
                </span>
                <div className="text-white">
                  <ArrowBtn />
                </div>
              </div>
            </div>
            {/* Text area — white bg */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-slate-400 text-[10px] mb-1.5">{p2.client}</p>
                <h3 className="text-navy font-bold text-base leading-snug">{p2.title}</h3>
              </div>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-blue-600 font-bold text-3xl">{p2.stat}</span>
                <span className="text-slate-400 text-xs">{p2.statLabel}</span>
              </div>
            </div>
          </Link>

          {/* ── P3: Horizontal split — image right, text left ── */}
          <Link
            href="/projects"
            className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col min-h-[280px] cursor-pointer transition-all"
          >
            {/* Image band — top 55% */}
            <div className="relative h-[160px] overflow-hidden flex-shrink-0">
              <img
                src={p3.image}
                alt={p3.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Light blue tint — not dark, distinguishes from P1 */}
              <div className="absolute inset-0 bg-blue-900/20" />
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-600 text-[10px] font-medium rounded-full">
                  {p3.tag}
                </span>
                <div className="text-white">
                  <ArrowBtn />
                </div>
              </div>
            </div>
            {/* Text area — white bg */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-slate-400 text-[10px] mb-1.5">{p2.client}</p>
                <h3 className="text-navy font-bold text-base leading-snug">{p2.title}</h3>
              </div>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-blue-600 font-bold text-3xl">{p2.stat}</span>
                <span className="text-slate-400 text-xs">{p2.statLabel}</span>
              </div>
            </div>
          </Link>

          {/* ── P4: Image bleeds right, frosted text panel left ── */}
          <Link
            href="/projects"
            className="group lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[280px] cursor-pointer"
          >
            {/* Full-bleed image */}
            <img
              src={p4.image}
              alt={p4.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Warm amber-tinted overlay — not the same dark of P1 */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />

            <div className="relative z-10 h-full flex flex-col justify-between p-7 min-h-[280px]">
              <div className="flex items-start justify-between">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-medium rounded-full border border-white/15">
                  {p4.tag}
                </span>
                <div className="text-white">
                  <ArrowBtn />
                </div>
              </div>
              {/* Text pinned to left half only */}
              <div className="max-w-[60%]">
                <p className="text-white/50 text-xs mb-2">{p4.client}</p>
                <h3 className="text-white font-bold text-2xl leading-snug mb-3">{p4.title}</h3>
                {/* <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-2">{p4.description}</p> */}
                <div className="flex items-end gap-2">
                  <span className="text-amber-300 font-bold text-4xl">{p4.stat}</span>
                  <span className="text-white/45 text-xs max-w-[140px] leading-snug">{p4.statLabel}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* ── P5: Full-width — image left strip + text right ── */}
          <Link
            href="/projects"
            className="group lg:col-span-3 bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[180px] cursor-pointer transition-all"
          >
            {/* Left image strip */}
            <div className="relative lg:w-[40%] h-48 lg:h-auto flex-shrink-0 overflow-hidden">
              <img
                src={p5.image}
                alt={p5.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white hidden lg:block" />
            </div>
            {/* Right text */}
            <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
              <div>
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-medium rounded-full">
                    {p5.tag}
                  </span>
                  <div className="text-slate-700">
                    <ArrowBtn />
                  </div>
                </div>
                <p className="text-slate-400 text-[10px] mt-4 mb-1">{p5.client}</p>
                <h3 className="text-navy font-bold text-xl leading-snug mb-2">{p5.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 max-w-xl">{p5.description}</p>
              </div>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="text-blue-600 font-bold text-3xl">{p5.stat}</span>
                <span className="text-slate-400 text-xs">{p5.statLabel}</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center py-8">
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            All projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
