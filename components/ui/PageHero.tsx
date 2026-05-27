import Button from "./Button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  img?: string;
  link1?: string;
  link1_text?: string;
  link2?: string;
  link2_text?: string;
}

export default function PageHero({
   eyebrow, 
   title, 
   titleHighlight, 
   description, 
   img = '/hero.jpeg', 
   link1 = '/products', 
   link1_text = 'Work With Us',
   link2 = '/contact' ,
   link2_text = 'Our Solutions',
  }: PageHeroProps) {
  return (
    <section className="m-2 relative pt-36 pb-20 rounded-3xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
      </div>

      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/6 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col justify-start items-start">
        <div className="w-fit inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-600/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-blue-300 text-xs font-medium tracking-wide">{eyebrow}</span>
        </div>
        <h1 className="text-4xl lg:text-6xl max-w-4xl font-bold text-white leading-tight mb-6 font-serif">
          {titleHighlight ? (
            <>
              {title}{" "}
              <span className="gradient-text">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
              <Button
                href={link1}
                className="px-8 py-3.5 text-md bg-blue-600 hover:bg-blue-600/80"
              >
                {link1_text} <span className="ml-2">→</span>
              </Button>
              <Button
                href={link2}
                className="px-8 py-3.5 text-md text-navy bg-white hover:bg-white/80"
              >
                {link2_text}
              </Button>
            </div>
      </div>
    </section>
  );
}
