interface GradientHeadingProps {
  subHeading?: string;
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  direction?: "to-r" | "to-l" | "to-br" | "to-bl" | "to-tr" | "to-tl";
}

export default function GradientHeading({
  subHeading,
  children,
  className = "text-3xl lg:text-5xl font-bold text-center",
  from = "#1a1a1e",
  to = "#6b7280",
  direction = "to-r",
}: GradientHeadingProps) {  
  const dirMap: Record<string, string> = {
    "to-r": "to right",
    "to-l": "to left",
    "to-br": "to bottom right",
    "to-bl": "to bottom left",
    "to-tr": "to top right",
    "to-tl": "to top left",
  };

  return (
    <div>
      {
        subHeading && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-0.5 bg-slate-300" />
            <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              {subHeading}
            </span>
          </div>
        )
      }
      <h2
        className={`leading-tight capitalize ${className}`}
        style={{
          background: `linear-gradient(${dirMap[direction]}, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </h2>
    </div>

  );
}
