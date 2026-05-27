export interface Article {
  id: number;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  body: string;
}

export const FEATURED_ARTICLE: Article = {
  id: 1,
  slug: "nigerian-sme-iot-roadmap-2025",
  tag: "IoT · Strategy",
  title: "Why Every Nigerian SME Needs an IoT Roadmap in 2025",
  excerpt:
    "The cost of IoT sensors has fallen 80% since 2015. Cloud connectivity is now available in every Nigerian state capital. The barriers to implementing a meaningful IoT strategy have never been lower — yet most SMEs still treat it as a 'big company' problem. Here's why that's a mistake and how to build a practical roadmap.",
  author: "Emeka Okafor",
  authorRole: "Head of IoT Solutions",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  date: "May 12, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  body: `The phrase "IoT strategy" used to mean something only multinationals and large manufacturers worried about. Budgets of tens of millions of naira, dedicated engineering teams, months-long procurement cycles. That world no longer exists.

## The Economics Have Shifted Dramatically

A temperature and humidity sensor that cost ₦45,000 in 2017 now costs under ₦6,000 from local distributors. LoRaWAN gateways — which can cover an entire 50,000 sqm industrial estate — have dropped from ₦800,000 to under ₦200,000. Cloud platforms like AWS IoT Core offer a free tier generous enough to run a 10-device pilot for months.

This isn't incremental change. It's the difference between a strategy that required ₦15m to get off the ground versus one you can prototype for ₦400,000.

## Why SMEs Keep Waiting

When we survey small and medium businesses in Akure, Lagos, and Abuja, the barriers they cite are revealing:

- **"We don't have technical staff."** You don't need in-house IoT engineers to run a basic sensor network. Managed service providers (like us) handle deployment, monitoring, and maintenance.
- **"Our internet is unreliable."** LoRaWAN and NB-IoT operate on dedicated frequency bands — they don't compete with your office WiFi and work even in areas with poor 4G coverage.
- **"We don't know what to measure."** This is actually the right question, and it's where the roadmap starts.

## Building Your IoT Roadmap in Four Steps

### Step 1: Identify your most expensive unknowns

Every business has something it doesn't know but pays for anyway. A cold-chain logistics company doesn't know if their refrigerated trucks stay below 4°C throughout the journey. A manufacturing plant doesn't know which machines are running at suboptimal efficiency. A commercial building doesn't know which floors are air-conditioned when they're unoccupied.

Write down your top three "we assume but don't know" operational questions. These are your IoT use cases.

### Step 2: Start with one closed loop

The most common mistake is deploying sensors and stopping there. Data with no action is just overhead. Your first IoT project should create a complete loop: **measure → alert → act**.

For example: temperature sensor in server room → SMS alert when temp exceeds 28°C → automatic cooling unit activation. Simple. Measurable. Immediate ROI.

### Step 3: Choose infrastructure that grows with you

Don't buy a one-use sensor network. A LoRaWAN gateway installed for your energy monitoring project can also carry your access control data, your environmental sensors, and your asset tracking beacons. Design for expansion from day one.

### Step 4: Define your ROI metric before you start

Before signing a purchase order, write down the specific number you expect to move: energy costs reduced by 15%, equipment downtime reduced from 8 hours/month to under 2, fuel theft incidents reduced from 3/month to zero. This disciplines the project and gives you a clear success criterion.

## What a Realistic Budget Looks Like

For a medium-sized manufacturing facility (5,000 sqm, 30 employees):

| Component | Cost (₦) |
|---|---|
| LoRaWAN gateway (1 unit) | 180,000 |
| Temperature/humidity sensors × 10 | 60,000 |
| Energy monitoring clamps × 5 | 120,000 |
| Cloud platform setup + 12 months | 240,000 |
| Installation and commissioning | 150,000 |
| **Total** | **750,000** |

If that system prevents one compressor failure (₦600,000 repair cost) and reduces energy waste by 12% (saving ₦180,000/month), it pays for itself in under five months.

## The Window Won't Stay Open Forever

Nigerian mobile network operators are expanding NB-IoT coverage to cover all LGAs by 2027. When that happens, every competitor — including the large ones — will be deploying IoT at scale. The SMEs that have already built operational intelligence into their businesses will have an 18-month head start in process efficiency.

The question isn't whether to build an IoT roadmap. It's whether to build one now, while the early-adopter advantage still exists, or to build one when everyone else already has.`,
};

export const ALL_ARTICLES: Article[] = [
  {
    id: 2,
    slug: "ip-vs-analogue-cctv-nigeria",
    tag: "Security",
    title: "IP vs Analogue CCTV: What Actually Works in Nigeria",
    excerpt: "A practical guide comparing total cost of ownership, reliability in low-bandwidth environments, and maintenance burdens.",
    author: "Chidinma Eze",
    authorRole: "Security Systems Lead",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    date: "Apr 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=80",
    body: `The debate between IP and analogue CCTV is older than most people in the industry care to admit. But in the Nigerian context — with its specific mix of power instability, bandwidth constraints, and maintenance realities — the answer is more nuanced than global guides suggest.

## What IP Cameras Do Better

Resolution is the obvious one. A 4K IP camera captures a face from 40 metres. An analogue camera captures a blurry silhouette. For businesses where identification matters — retail theft, perimeter intrusion, access disputes — IP wins decisively.

IP cameras also enable remote monitoring over mobile networks. Your security team in Lagos can watch live feeds from a warehouse in Onitsha. With analogue, you need a physical DVR on site and a VPN tunnel that rarely works reliably on Nigerian residential-grade internet.

## Where Analogue Still Makes Sense

Analogue systems are simpler. Fewer points of failure. A coaxial cable run to a DVR is less likely to fail than a PoE switch, a CAT6 run, an NVR, and a firmware update cycle.

For businesses in areas with frequent power outages, a simple 4-camera analogue system running on a UPS is often more reliable day-to-day than an IP system that depends on a network switch that needs to reboot after every power cut.

## Our Recommendation

For new installations above 8 cameras: go IP. For legacy replacements or low-risk environments: hybrid (keep analogue backbone, add IP cameras at critical points). For budgets under ₦300,000: start analogue, design for upgrade.`,
  },
  {
    id: 3,
    slug: "hidden-costs-legacy-it-infrastructure",
    tag: "Cloud",
    title: "The Hidden Costs of Legacy IT Infrastructure",
    excerpt: "Aging servers and unmanaged switches aren't just slow — they're silently eating your budget. Here's how to calculate the true cost.",
    author: "Taiwo Adeyemi",
    authorRole: "Cloud Infrastructure Architect",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
    body: `Most CFOs can tell you what their server hardware cost when they bought it. Almost none can tell you what it costs them every year to keep running it. That gap — between purchase price and true cost of ownership — is where legacy IT quietly destroys business margins.

## The Components of Legacy IT Cost

**Energy consumption**: A 5-year-old server running 24/7 consumes 300–500W. A modern equivalent, or a cloud workload, consumes 40–120W for the same throughput. Multiply that delta by your electricity tariff and 8,760 annual hours.

**Maintenance and downtime**: Hardware failures increase exponentially after year three. A single server failure can cost ₦200,000–₦800,000 in emergency repair, replacement parts, and — critically — the revenue lost during downtime.

**Security exposure**: Unpatched systems are attack surfaces. The average cost of a ransomware incident in Nigerian SMEs in 2024 was ₦4.2m, including recovery costs and lost productivity.

**Staff time**: IT teams spend disproportionate time managing aging infrastructure — patching workarounds, replacing failed components, managing backup failures. That time has an opportunity cost.

## Running the Numbers

For a 10-server on-premises environment typical of a mid-size Nigerian business, the true annual cost including energy, maintenance, staff overhead, and risk-adjusted downtime cost is typically ₦8–14m per year — for infrastructure that was purchased for ₦12m.

The equivalent cloud workload costs ₦4–6m annually, with higher reliability and no capital expenditure cycle.`,
  },
  {
    id: 4,
    slug: "ndpr-compliance-it-checklist",
    tag: "Cybersecurity",
    title: "NDPR Compliance: A Practical IT Checklist for Nigerian Businesses",
    excerpt: "The Nigeria Data Protection Regulation has real teeth. This checklist covers the 12 IT controls most businesses still overlook.",
    author: "Ngozi Ikenna",
    authorRole: "Cybersecurity Consultant",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",
    body: `The Nigeria Data Protection Regulation (NDPR), now superseded by the Nigeria Data Protection Act 2023, is no longer a paper tiger. The Nigeria Data Protection Commission has issued fines, ordered audits, and published compliance enforcement actions against businesses across sectors. If you process personal data — and almost every Nigerian business does — you need an IT compliance posture that can withstand scrutiny.

## The 12 Controls Most Businesses Overlook

1. **Data inventory**: You cannot protect what you don't know you have. Map every database, spreadsheet, and application that holds personal data.

2. **Access controls**: Implement least-privilege access. Staff should only access the personal data their role requires.

3. **Encryption at rest**: Personal data stored on servers or workstations must be encrypted. FileVault, BitLocker, or equivalent.

4. **Encryption in transit**: All data transfers must use TLS 1.2 or higher. No plain HTTP for forms collecting personal data.

5. **Audit logs**: Maintain logs of who accessed, modified, or exported personal data for a minimum of 12 months.

6. **Incident response plan**: A documented, tested procedure for responding to data breaches within the 72-hour NDPA notification window.

7. **Data retention policy**: Personal data must not be kept longer than necessary. Document retention periods and enforce automated deletion.

8. **Vendor assessments**: Your data processors (cloud providers, SaaS tools, payment processors) must have adequate protections. Get their DPAs in writing.

9. **Staff training**: At least annual training for all staff who handle personal data.

10. **Privacy notices**: Clear, plain-language notices explaining what data you collect and why, presented at the point of collection.

11. **Data subject rights procedures**: A process for handling access, correction, and deletion requests within 30 days.

12. **DPO appointment**: Organisations processing personal data at scale must appoint a Data Protection Officer and register with the NDPC.`,
  },
  {
    id: 5,
    slug: "iot-building-energy-efficiency",
    tag: "Smart Building",
    title: "5 Quick Wins for Building Energy Efficiency with IoT",
    excerpt: "Before spending millions on a full BMS, these five low-cost IoT interventions can reduce your electricity bill by 20–30%.",
    author: "Emeka Okafor",
    authorRole: "Head of IoT Solutions",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    date: "Jan 30, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    body: `Full building management systems cost millions of naira and take months to deploy. But the 80/20 rule applies here: five targeted IoT interventions, costing a fraction of a full BMS, can deliver the majority of the energy savings.

## 1. Occupancy-Based HVAC Control

HVAC accounts for 40–60% of commercial building energy consumption in Nigeria. Smart occupancy sensors (PIR or ultrasonic) cost ₦8,000–₦15,000 each and can trigger AC systems to reduce setpoints when rooms are unoccupied. In a 20-room office building, this alone saves 15–25% on cooling costs.

## 2. Smart Metering by Zone

Sub-metering lets you see which floors, departments, or equipment are consuming the most power. Once you can see it, you can manage it. A 10-zone smart metering setup costs ₦300,000–₦500,000 installed and typically pays for itself within 4 months by identifying waste.

## 3. Generator Runtime Optimisation

Most Nigerian businesses run generators more than necessary due to poor visibility into PHCN supply reliability. IoT-enabled automatic transfer switches with runtime logging reveal patterns that allow smarter generator scheduling — typically reducing runtime by 20–35%.

## 4. Lighting Automation

Automated lighting controls (motion-triggered or scheduled) in low-traffic areas — corridors, bathrooms, parking — reduce lighting energy by 30–50% in those zones with minimal disruption to occupants.

## 5. Cold Storage Monitoring

For businesses with refrigeration (food storage, pharmaceuticals, data centres), temperature monitoring prevents both energy waste (doors left open, refrigerant leaks going undetected) and catastrophic stock losses. A ₦50,000 sensor deployment can protect ₦5m of stock.`,
  },
  {
    id: 6,
    slug: "sd-wan-vs-mpls-nigeria",
    tag: "Networking",
    title: "SD-WAN vs MPLS: Which is Right for Nigerian Multi-Site Businesses?",
    excerpt: "A direct cost and reliability comparison for businesses operating across multiple states, from connectivity to failover behaviour.",
    author: "Taiwo Adeyemi",
    authorRole: "Cloud Infrastructure Architect",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    date: "Jan 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=700&q=80",
    body: `Connecting multiple Nigerian offices — Lagos headquarters, Abuja branch, Port Harcourt operations centre — has historically meant one of two options: expensive MPLS from MTN Business or Airtel Business, or unreliable site-to-site VPNs over consumer internet. SD-WAN changes that calculus significantly.

## What MPLS Gets Right

MPLS is a private, dedicated network. Traffic between your sites never touches the public internet. Quality of service guarantees are contractual. For latency-sensitive applications — voice, video conferencing, real-time ERP transactions — MPLS delivers predictable performance.

For heavily regulated industries (banking, oil and gas) where data segregation is a compliance requirement, MPLS also provides a clear audit trail for traffic isolation.

## Why SD-WAN is Taking Over

The cost differential is stark. A three-site MPLS deployment in Nigeria typically costs ₦4–8m annually in circuit fees alone, plus ₦500k–₦1.5m in CPE hardware per site.

SD-WAN over broadband internet (4G/5G + fibre where available) cuts that to ₦1.5–3m annually, with centralised management, automatic failover between links, and application-aware routing that prioritises your critical traffic without a per-circuit QoS contract.

## The Nigerian-Specific Consideration

In Lagos and Abuja CBDs, fibre connectivity is reliable enough to serve as an SD-WAN primary link. In secondary cities, LTE from MTN or Airtel becomes the primary link, with a secondary SIM from a different operator for failover. This dual-SIM SD-WAN architecture is now the standard recommendation for Nigerian multi-site deployments.

Our verdict: MPLS for banking and oil and gas; SD-WAN for everyone else.`,
  },
  {
    id: 7,
    slug: "scalable-server-room-on-budget",
    tag: "Hardware",
    title: "How to Build a Scalable Server Room on a Budget",
    excerpt: "You don't need a Tier-3 data centre to run reliable enterprise workloads. Here's how to get 95% of the reliability at 40% of the cost.",
    author: "Chidinma Eze",
    authorRole: "Security Systems Lead",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    body: `A proper server room doesn't require a ₦50m budget and a facilities management team. With careful component selection and a disciplined approach to the fundamentals, a Nigerian SME can build a server room that delivers enterprise-grade reliability for under ₦8m.

## The Four Pillars

**Power**: Your server room is only as reliable as its power supply. This means a properly sized UPS (not undersized), an automatic transfer switch to generator, and — ideally — a dedicated circuit from your distribution board. Do not share server room power with high-draw equipment.

**Cooling**: IT equipment runs hot. Your cooling system must be sized for continuous operation at maximum load, not average load. A precision air conditioner (PAC) is preferred over a split unit for server rooms because it maintains lower humidity and operates at higher static pressure.

**Physical security**: A biometric or card-access door to the server room is non-negotiable. Your server room is your most sensitive physical asset.

**Cable management**: Structured cabling isn't just aesthetic. Proper cable management makes faults diagnosable in minutes rather than hours. Use a dedicated patch panel, label every cable at both ends, and keep power and data cables separated.

## What to Buy (and What to Skip)

You don't need enterprise-brand switches for your first rack. A managed Layer 2 switch from a reputable brand (Cisco SG series, HP Aruba instant-on) gives you VLANs and port security at 20% of full enterprise cost.

You do need enterprise UPS (APC or Eaton). Cheap UPS units fail silently — you discover the battery is dead when you need it most.`,
  },
  {
    id: 8,
    slug: "lorawan-smart-meter-network",
    tag: "IoT",
    title: "Building a Low-Cost Smart Meter Network with LoRaWAN",
    excerpt: "LoRaWAN lets you cover an entire industrial estate with IoT sensors for under ₦500k. Here's a step-by-step implementation guide.",
    author: "Emeka Okafor",
    authorRole: "Head of IoT Solutions",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    date: "Nov 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80",
    body: `LoRaWAN (Long Range Wide Area Network) is the technology behind most of the IoT deployments we've completed in industrial estates, farms, and multi-building campuses across Nigeria. Its core advantage: low power, long range, low cost — sensors that run for 5 years on two AA batteries while transmitting data across 5km.

## How LoRaWAN Works

Each sensor (end device) broadcasts data using the LoRa radio protocol on unlicensed frequency bands (915 MHz in Nigeria). A gateway receives these transmissions and forwards them over your internet connection to a network server (we use The Things Stack, an open-source LoRaWAN network server). From there, your application receives clean, structured JSON data.

One gateway covers 2–5km radius in urban areas, 10–15km in open terrain. A single ₦180,000 gateway can serve hundreds of sensors.

## Step-by-Step Implementation

**Step 1: Gateway installation**
Mount the gateway at the highest accessible point on your site. Connect it to your internet connection via Ethernet or 4G. Configure it to point to your network server.

**Step 2: Sensor deployment**
Commission each sensor — program the device EUI, join EUI, and application key. Place sensors at your measurement points. For electricity monitoring, clamp-on current transformers work without breaking the circuit.

**Step 3: Network server configuration**
Create your application on The Things Stack. Add your devices. Configure payload decoders to convert raw hex packets to human-readable values.

**Step 4: Dashboard setup**
Connect your network server to Grafana or a custom dashboard. Build alerts for threshold breaches.

The entire stack — gateway, 20 sensors, network server, and dashboard — can be operational in 3 days.`,
  },
  {
    id: 9,
    slug: "biometric-access-control-guide",
    tag: "Security",
    title: "Biometric Access Control: Choosing the Right System for Your Building",
    excerpt: "Fingerprint, facial recognition, or card? The answer depends on throughput, budget, and the nature of the spaces you're protecting.",
    author: "Ngozi Ikenna",
    authorRole: "Cybersecurity Consultant",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    date: "Oct 30, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=700&q=80",
    body: `The question "which biometric system should we use?" almost always gets asked too late — after a building has been designed, after contractors have been engaged, and after a budget has been fixed. Here's how to think about it before you're locked in.

## The Three Variables That Matter

**Throughput**: How many people need to pass through this point per minute at peak times? A fingerprint reader processes 1 person every 3–5 seconds. A facial recognition reader handles 30 people per minute without requiring them to stop. For a factory gate with 200 workers clocking in at 7am, this is not a minor consideration.

**Environment**: Fingerprint readers fail in high-humidity environments, on construction sites, and in manufacturing facilities where workers' hands are consistently dirty or calloused. Facial recognition fails in very bright direct sunlight and in spaces with low-quality lighting.

**Security tier**: For server rooms and executive areas, you want multi-factor (biometric + PIN or biometric + card). For general office access, single-factor biometric is sufficient.

## Our Recommendations by Use Case

| Use Case | Recommended Technology |
|---|---|
| Office entrance, <50 staff | Fingerprint |
| Factory gate, 100+ workers | Facial recognition |
| Server room / secure area | Fingerprint + PIN |
| Time attendance only | Fingerprint |
| Visitor management | Facial recognition |

## Integration Matters More Than Hardware

A ₦150,000 fingerprint reader that integrates with your HR system and payroll software delivers more value than a ₦400,000 reader that operates as a standalone island. When evaluating systems, lead with integration capability — specifically, whether it supports standard Wiegand output or has an open API.`,
  },
  {
    id: 10,
    slug: "aws-vs-azure-nigerian-enterprises",
    tag: "Cloud",
    title: "AWS vs Azure for Nigerian Enterprises: A Realistic Comparison",
    excerpt: "Latency to local regions, pricing in naira, and support responsiveness — the factors that actually matter when choosing a cloud provider.",
    author: "Taiwo Adeyemi",
    authorRole: "Cloud Infrastructure Architect",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    date: "Sep 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
    body: `Both AWS and Microsoft Azure have operated data centres in South Africa since 2019, giving Nigerian enterprises their first sub-50ms latency option for cloud workloads. The question of which to choose is no longer purely theoretical — it comes down to workload type, existing licensing, and practical operational experience.

## Latency: Roughly Equal from Nigeria

From Lagos, both AWS (af-south-1, Cape Town) and Azure (South Africa North, Johannesburg) deliver 40–65ms latency. Neither has a Nigerian data centre; both are dependent on the West Africa undersea cable systems. For latency-sensitive applications, this means neither provider has a decisive advantage.

## Pricing in Nigerian Context

AWS bills in USD. Azure bills in USD. Neither supports naira invoicing. This means your cloud costs are exposed to naira/dollar exchange rate fluctuations — a significant operational consideration for Nigerian CFOs.

Azure has a slight edge here for Microsoft-licensed organisations: Azure Hybrid Benefit allows existing Windows Server and SQL Server licences to be applied to cloud VMs, reducing costs by up to 40%. For businesses already paying Microsoft EA licensing fees, this can be decisive.

## Support Responsiveness

Both providers offer paid support tiers. Our experience, managing cloud environments for Nigerian clients since 2019: AWS Enterprise Support has faster initial response times. Azure's support quality varies significantly by the team you're assigned. For mission-critical workloads, budget for at least the Business support tier on either platform.

## The Practical Verdict

Choose **Azure** if: you have existing Microsoft infrastructure (Active Directory, Office 365, SQL Server), or your enterprise applications are Microsoft-stack.

Choose **AWS** if: you're building new, cloud-native workloads, or your team has stronger AWS skills.`,
  },
];

export const ALL_ARTICLES_WITH_FEATURED: Article[] = [FEATURED_ARTICLE, ...ALL_ARTICLES];

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES_WITH_FEATURED.find((a) => a.slug === slug);
}

export function getRelatedArticles(current: Article, count = 2): Article[] {
  const tag = current.tag.split(" · ")[0];
  const related = ALL_ARTICLES_WITH_FEATURED.filter(
    (a) => a.id !== current.id && (a.tag === current.tag || a.tag === tag || a.tag.startsWith(tag))
  );
  if (related.length >= count) return related.slice(0, count);
  const rest = ALL_ARTICLES_WITH_FEATURED.filter((a) => a.id !== current.id && !related.includes(a));
  return [...related, ...rest].slice(0, count);
}
