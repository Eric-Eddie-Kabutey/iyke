import Link from "next/link";
import { SOLUTIONS } from "@/constants";

const IMAGES = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-12 px-6 lg:grid-cols-[340px_1fr] lg:px-10">

        {/* Sticky intro */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-slate-300" />
            <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Our Solutions
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy lg:text-4xl">
            Six pillars of technology, one accountable partner.
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
            From surveillance and smart devices to cloud, networking, and
            cybersecurity — we design, deploy, and maintain systems that work
            together and scale cleanly.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Start a project
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </aside>

        {/* Solution list */}
        <div className="">
          {SOLUTIONS.map((sol, i) => (
            <article key={sol.id} className="group py-8 first:pt-0 lg:py-10">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_2fr] lg:gap-8">

                {/* Thumbnail */}
                <div className="relative h-70 overflow-hidden rounded-xl bg-slate-100 lg:h-full lg:min-h-[300px]">
                  <img
                    src={IMAGES[i]}
                    alt={sol.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-sm font-bold tabular-nums text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-navy lg:text-2xl">
                    {sol.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">
                    {sol.description}
                  </p>

                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm leading-snug text-slate-600">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-blue-600"
                  >
                    Explore {sol.category}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
