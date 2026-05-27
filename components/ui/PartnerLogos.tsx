import Image from "next/image";

const PARTNERS = [
  { name: "Cisco",     src: "/partners/cisco.svg",     w: 80 },
  { name: "Dell",      src: "/partners/dell.svg",      w: 64 },
  { name: "HP",        src: "/partners/hp.svg",        w: 78 },
  { name: "Microsoft", src: "/partners/microsoft.svg", w: 110 },
  { name: "AWS",       src: "/partners/aws.svg",       w: 56 },
  { name: "Fortinet",  src: "/partners/Fortinet.svg",  w: 96 },
  { name: "Airtel",    src: "/partners/Airtel.svg",    w: 72 },
];

interface PartnerLogosProps {
  eyebrow?: string;
  className?: string;
}

export default function PartnerLogos({
  eyebrow = "Trusted Partners & Vendors",
  className = "",
}: PartnerLogosProps) {
  return (
    <div className={`pt-10 pb-4 ${className}`}>
      <p className="text-center text-slate-400 text-[11px] font-semibold uppercase tracking-[0.2em] mb-8">
        {eyebrow}
      </p>

      <div className="relative">
        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-14 lg:gap-x-30 lg:gap-y-24 px-8">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex items-center justify-center" title={p.name}>
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={36}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
