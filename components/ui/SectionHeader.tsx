import GradientHeading from "./GradientHeading";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  const lineColor = isDark ? "bg-slate-700" : "bg-slate-200";
  const eyebrowColor = isDark ? "text-slate-400" : "text-slate-500";
  const titleColor = isDark ? "text-white" : "text-navy";
  const descColor = isDark ? "text-slate-400" : "text-slate-400";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <div
        className={`flex items-center gap-3 mb-3 ${isCenter ? "justify-center" : ""}`}
      >
        <div className={`w-7 h-0.5 ${lineColor}`} />
        <span
          className={`${eyebrowColor} text-xs font-semibold uppercase tracking-[0.2em]`}
        >
          {eyebrow}
        </span>
        <div className={`w-7 h-0.5 ${lineColor}`} />
      </div>
      <h2
        className={`text-4xl lg:text-5xl font-bold ${titleColor} font-serif leading-tight`}
      >
        {/* {title}
        {titleHighlight && (
          <>
            <br />
            <span className="text-blue-600">{titleHighlight}</span>
          </>
        )} */}
        <GradientHeading
          from="#1a1a1e"
          to="#94a3b8"
          direction="to-r"
          className="text-3xl lg:text-5xl font-bold text-center mb-10"
        >
          {title}
          {titleHighlight && (
          <>
            <br />
            <span>{titleHighlight}</span>
          </>
        )}
        </GradientHeading>
      </h2>
      {description && (
        <p
          className={`${descColor} text-sm mt-4 leading-relaxed ${isCenter ? "max-w-md mx-auto" : "max-w-md"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
