import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/sections/CTASection";
import { SOLUTIONS, SOLUTION_DETAILS } from "@/constants";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: `${sol.title} — IYKE Chris Computers`,
    description: sol.description,
  };
}

const FEATURE_ICONS = [
  "M5 13l4 4L19 7",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
];

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) notFound();

  const detail = SOLUTION_DETAILS[slug];
  const others = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={sol.category}
        title={sol.title}
        description={sol.description}
        img={sol.heroImage}
        link1="/contact"
        link1_text="Request a Quote"
        link2="/solutions"
        link2_text="All Solutions"
      />

      {/* Overview + capabilities */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-slate-300" />
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Overview
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy lg:text-4xl">
              {sol.title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500">
              {sol.overview}
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-blue-600">
              What&apos;s included
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {sol.features.map((f, i) => (
                <div
                  key={f}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={FEATURE_ICONS[i % FEATURE_ICONS.length]} />
                    </svg>
                  </span>
                  <p className="text-[15px] font-semibold leading-snug text-navy">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="bg-white pb-8 lg:pb-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:px-10">
          {detail.highlights.map((h) => (
            <div
              key={h.title}
              className="group relative min-h-[490px] overflow-hidden rounded-3xl bg-slate-900 lg:min-h-[640px]"
            >
              <img
                src={h.image}
                alt={h.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
              <div className="relative flex h-full flex-col justify-between items-center p-8 lg:p-10">
                <h3 className="max-w-xs text-4xl font-bold leading-tight text-white lg:text-5xl text-center">
                  {h.title}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-white/80 text-center">
                  {h.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-[#f7f9fc] mx-2 rounded-3xl py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-3xl lg:h-80">
              <img
                src={detail.whyChoose.image}
                alt={detail.whyChoose.heading}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy lg:text-4xl">
                {detail.whyChoose.heading}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
                {detail.whyChoose.description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 border-t border-slate-200 pt-12 sm:grid-cols-3 sm:gap-10">
            {sol.benefits.map((b, i) => (
              <div key={b.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm font-bold tabular-nums text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-navy lg:text-3xl">
              Explore other solutions
            </h2>
            <Link
              href="/solutions"
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
                href={`/solutions/${o.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={o.heroImage}
                    alt={o.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur-sm">
                    {o.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <p className="text-[15px] font-semibold leading-snug text-navy">{o.title}</p>
                  <svg className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
