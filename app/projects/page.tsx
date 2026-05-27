import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { PROJECTS } from "@/constants";

export const metadata = {
  title: "Projects — IYKE Chris Computers",
  description: "Real-world case studies from across Nigeria — security, IoT, infrastructure, and digital platforms.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real projects."
        titleHighlight="Measurable impact."
        description="Every engagement we take on is driven by a single question: what outcome does the client need? Here's what we've delivered."
      />

      {/* Projects grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative rounded-3xl overflow-hidden cursor-pointer min-h-[440px] lg:min-h-[480px] block"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-between p-7 lg:p-9">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white/80 text-xs rounded-full border border-white/15">
            {project.tag}
          </span>
          <span className="text-white/40 text-xs">{project.duration}</span>
        </div>

        <div>
          <p className="text-white/50 text-xs mb-2">{project.client}</p>
          <h3 className="text-white font-bold leading-snug mb-3 text-xl lg:text-2xl">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3 max-w-xl">
            {project.description}
          </p>
          <div className="flex items-baseline gap-2 border-t border-white/15 pt-5">
            <span className="text-blue-300 font-bold text-4xl">{project.stat}</span>
            <span className="text-white/60 text-sm">{project.statLabel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
