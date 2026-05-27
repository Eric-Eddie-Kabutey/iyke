import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, PROJECT_DETAILS } from "@/constants";
import PageHero from "@/components/ui/PageHero";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — IYKE Chris Computers`,
    description: project.description,
  };
}

const DELIVERABLE_ICONS = [
  "M9 17v-6h13M9 11V5m0 0L4 8m5-3l5 3M3 21h18",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M3 13h2l2 5 4-12 3 7h4M3 17h2l2 4 4-10",
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = PROJECT_DETAILS[slug];
  const others = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  const titleWords = project.title.split(" ");
  const titleHead = titleWords.slice(0, -1).join(" ");
  const titleTail = titleWords[titleWords.length - 1];

  return (
    <div className="">
      <PageHero
        eyebrow={project.tag}
        title={titleHead}
        titleHighlight={titleTail}
        description={project.description}
        link1="/contact"
        link1_text="Request A Quote"
        link2="/solutions"
        link2_text="View Our Solutions"
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-10 text-center lg:pb-28">
        {/* Gradient glow */}
        {/* <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),rgba(56,189,248,0.12)_45%,transparent_70%)] blur-2xl" />

        <Sparkles /> */}

        {/* ── Creative image collage ── */}
        <div className="relative mx-auto mt-16 h-[360px] max-w-[1000px] lg:mt-20 lg:h-[480px]">
          {/* Side image — left, rotated */}
          <img
            src={detail.highlights[0].image}
            alt={detail.highlights[0].title}
            className="absolute left-0 top-10 hidden w-52 -rotate-6 rounded-2xl object-cover shadow-[0_24px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 md:block lg:w-72 lg:top-16"
            style={{ height: "62%" }}
          />
          {/* Side image — right, rotated */}
          <img
            src={detail.highlights[1].image}
            alt={detail.highlights[1].title}
            className="absolute right-0 top-10 hidden w-52 rotate-6 rounded-2xl object-cover shadow-[0_24px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5 md:block lg:w-72 lg:top-16"
            style={{ height: "62%" }}
          />
          {/* Main image — centered, elevated */}
          <div className="absolute left-1/2 top-0 h-full w-full max-w-md -translate-x-1/2 overflow-hidden rounded-3xl shadow-[0_40px_90px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5 lg:max-w-lg">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            {/* Floating stat badge */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 text-left shadow-xl backdrop-blur-sm">
              <p className="font-mono text-3xl font-bold text-blue-600">{project.stat}</p>
              <p className="mt-0.5 max-w-[160px] text-xs leading-snug text-slate-500">{project.statLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential Features (overlapping white card) ── */}
      <section className="relative m-2 h-full rounded-4xl bg-gray-50 hadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="mx-auto max-w-[1400px] py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Deliverables
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy lg:text-4xl">
                Essential systems for{" "}
                <span className="text-blue-600">{project.client}</span>
              </h2>
            </div>
            <p className="self-end text-[15px] leading-relaxed text-slate-500">
              {detail.approach}
            </p>
          </div>

          <div className="mt-12 grid gap-8 border-t border-slate-100 pt-12 sm:grid-cols-3 sm:gap-10">
            {detail.deliverables.map((d, i) => (
              <div key={d.title}>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={DELIVERABLE_ICONS[i % DELIVERABLE_ICONS.length]} />
                  </svg>
                </span>
                <h3 className="text-base font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standout Features ── */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Outcomes
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy lg:text-5xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
                Standout Results
              </span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left card — savings-goal analog: stat widget */}
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
              <div>
                <h3 className="text-xl font-bold text-navy lg:text-2xl">
                  {detail.highlights[0].title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                  {detail.highlights[0].description}
                </p>
              </div>
              <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">{detail.metrics[0].label}</p>
                      <p className="text-sm font-semibold text-navy">Verified result</p>
                    </div>
                  </div>
                  <p className="font-mono text-2xl font-bold text-blue-600">{detail.metrics[0].stat}</p>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                </div>
              </div>
            </div>

            {/* Right card — tracking analog: tech graphic */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-navy p-8 text-white lg:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <h3 className="text-xl font-bold lg:text-2xl">{detail.highlights[1].title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  {detail.highlights[1].description}
                </p>
              </div>
              <div className="relative mt-10 flex flex-wrap gap-2.5">
                {detail.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-sky-200 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More projects ── */}
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-navy lg:text-3xl">
              More projects
            </h2>
            <Link
              href="/projects"
              className="hidden text-sm font-semibold text-navy transition-colors hover:text-blue-600 sm:inline-flex sm:items-center sm:gap-1.5"
            >
              View all
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/projects/${o.slug}`}
                className="group relative h-56 overflow-hidden rounded-2xl"
              >
                <img
                  src={o.image}
                  alt={o.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-5">
                  <span className="mb-2 w-fit rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur-sm">
                    {o.tag}
                  </span>
                  <p className="text-[15px] font-semibold leading-snug text-white">{o.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Sparkles() {
  const dots = [
    "left-[12%] top-[18%]",
    "left-[22%] top-[42%]",
    "left-[8%] top-[60%]",
    "right-[14%] top-[20%]",
    "right-[24%] top-[48%]",
    "right-[10%] top-[64%]",
    "left-[44%] top-[10%]",
    "right-[40%] top-[14%]",
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {dots.map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} h-1 w-1 rounded-full bg-blue-400/60`}
          style={{ boxShadow: "0 0 8px 1px rgba(37,99,235,0.5)" }}
        />
      ))}
    </div>
  );
}
