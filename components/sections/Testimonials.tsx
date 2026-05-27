import GradientHeading from "@/components/ui/GradientHeading";

const TESTIMONIALS_A = [
  {
    quote: "IYKE Chris Computers transformed our entire IT setup. The structured cabling and server deployment were done flawlessly — zero downtime during the migration.",
    name: "Adebayo Ogundimu",
    role: "IT Manager, First Bank Regional Office",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    quote: "Their IoT smart building solution cut our energy costs by 34% in the first quarter. The dashboard gives us real-time visibility we never had before.",
    name: "Ngozi Eze",
    role: "Facilities Director, Ondo State University",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    quote: "The CCTV and biometric access system across our three branches is rock-solid. Support response is always within hours.",
    name: "Emeka Nwosu",
    role: "Head of Security, Zenith Petroleum",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    quote: "We needed a custom web portal to manage logistics operations. IYKE delivered on time and the system has handled everything we've thrown at it.",
    name: "Taiwo Adeyemi",
    role: "COO, SwiftRoute Logistics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    quote: "Their penetration testing uncovered three critical vulnerabilities our previous vendor missed entirely.",
    name: "Chukwuemeka Obi",
    role: "CISO, Harmony Insurance Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  },
];

const TESTIMONIALS_B = [
  {
    quote: "From fibre installation to cloud migration on AWS — they handled the full stack. Our network throughput tripled and we haven't had an outage since.",
    name: "Funmi Afolabi",
    role: "CTO, Novatek Nigeria",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  },
  {
    quote: "Professional, punctual, and genuinely knowledgeable. They ensured our team was fully trained before handover.",
    name: "Segun Olawale",
    role: "Operations Manager, PrimeCare Hospital",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
  },
  {
    quote: "We've worked with four IT vendors in Akure — none come close to IYKE's quality. They're our exclusive technology partner now.",
    name: "Blessing Okoro",
    role: "CEO, Delta Properties",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80",
  },
  {
    quote: "The smart campus system they deployed has dramatically improved student safety and reduced our admin overhead by 40%.",
    name: "Dr. Rotimi Badmus",
    role: "Provost, Heritage Polytechnic",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
  },
  {
    quote: "Incredible attention to detail on the server room build. Clean cable management, proper cooling layout, and complete documentation handed over.",
    name: "Yetunde Adesanya",
    role: "Infrastructure Lead, Transsion Holdings NG",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
  },
];

const TESTIMONIALS_C = [
  {
    quote: "They redesigned our entire network topology for our new HQ. Zero packet loss, seamless VLAN segmentation — the engineers clearly knew their stuff.",
    name: "Babatunde Lawal",
    role: "Network Admin, Oando Energy",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80",
  },
  {
    quote: "IYKE's managed IT support means I sleep better at night. Our SLA is 4-hour response and they've never missed it in 18 months.",
    name: "Adaeze Nwachukwu",
    role: "MD, Meridian Healthcare",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
  },
  {
    quote: "The ERP integration they built connected our warehouse, finance, and HR systems for the first time. Reporting that used to take days now takes seconds.",
    name: "Oluwaseun Fagbemi",
    role: "Finance Director, Goldbridge Manufacturing",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
  },
  {
    quote: "Outstanding work on our disaster recovery plan. They tested it live and we passed the audit with full marks — first time ever.",
    name: "Kingsley Amadi",
    role: "CIO, Niger Delta Development Corp",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&q=80",
  },
];

function Card({ quote, name, role, avatar }: { quote: string; name: string; role: string; avatar: string }) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-[#f4f4f5] rounded-2xl p-6 mx-3 flex flex-col justify-between gap-10">
      <p className="text-slate-600 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
        <div>
          <p className="text-[#1a1a1e] font-semibold text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Row({
  items,
  direction,
  duration,
}: {
  items: typeof TESTIMONIALS_A;
  direction: "left" | "right";
  duration: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((t, i) => (
          <Card key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      {/* <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-7 h-0.5 bg-slate-200" />
          <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">
            Client Stories
          </span>
          <div className="w-7 h-0.5 bg-slate-200" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1e] leading-tight">
          Trusted by businesses <span className="text-blue-600">across Nigeria</span>
        </h2>
      </div> */}

      <GradientHeading
        from="#1a1a1e"
        to="#94a3b8"
        direction="to-r"
        className="text-3xl lg:text-5xl font-bold text-center mb-10"
      >
        Trusted by businesses <br></br> across Africa
      </GradientHeading>

      {/* Constrained + faded viewport */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-42 lg:w-58 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-42 lg:w-58 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div className="space-y-4 overflow-hidden">
          <Row items={TESTIMONIALS_A} direction="left" duration={38} />
          <Row items={TESTIMONIALS_B} direction="right" duration={45} />
          {/* <Row items={TESTIMONIALS_C} direction="left"  duration={32} /> */}
        </div>
      </div>
    </section>
  );
}
