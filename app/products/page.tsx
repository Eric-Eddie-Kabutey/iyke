"use client";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/ui/ProductCard";

const CATEGORIES = ["All", "Security", "Networking", "Servers", "Peripherals", "IoT"];
const PAGE_SIZE = 8;

const ALL_PRODUCTS = [
  { id: 1, category: "Security", name: "4K PTZ IP Camera", price: "₦41,000", badge: "New", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=500&q=80", description: "Full 4K pan-tilt-zoom IP camera with night vision and remote access." },
  { id: 2, category: "Security", name: "Biometric Fingerprint Terminal", price: "₦88,000", badge: "Popular", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80", description: "High-accuracy biometric attendance and access control terminal." },
  { id: 3, category: "Security", name: "8-Channel DVR Kit", price: "₦120,000", badge: null, image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80", description: "Complete 8-channel surveillance kit with 1TB storage and remote view." },
  { id: 4, category: "Servers", name: "Rack Server 2U", price: "₦1.2M", badge: null, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", description: "Enterprise-grade 2U rack server with dual PSU and RAID support." },
  { id: 5, category: "Servers", name: "NAS Storage 8-Bay", price: "₦480,000", badge: null, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", description: "8-bay network attached storage for centralised data management." },
  { id: 6, category: "Networking", name: "24-Port PoE Switch", price: "₦75,000", badge: null, image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&q=80", description: "Managed 24-port Gigabit PoE switch for IP cameras and VoIP." },
  { id: 7, category: "Networking", name: "Enterprise WiFi 6 AP", price: "₦58,000", badge: "New", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80", description: "Tri-band WiFi 6 access point for high-density environments." },
  { id: 8, category: "Peripherals", name: "Business Laptop Pro", price: "₦655,000", badge: null, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", description: "14\" business-class laptop with Intel Core i7 and 16GB RAM." },
  { id: 9, category: "Peripherals", name: "Laser Barcode Scanner", price: "₦22,000", badge: null, image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=500&q=80", description: "Wired 1D/2D barcode scanner for retail and warehouse use." },
  { id: 10, category: "IoT", name: "Smart Energy Meter", price: "₦35,000", badge: "Popular", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80", description: "IoT-enabled electricity meter with real-time consumption analytics." },
  { id: 11, category: "IoT", name: "Temperature & Humidity Sensor", price: "₦18,500", badge: null, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", description: "Industrial wireless sensor for cold chain and facility monitoring." },
  { id: 12, category: "Security", name: "Video Doorbell Pro", price: "₦52,000", badge: null, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", description: "1080p HD video doorbell with two-way audio and motion detection." },
];

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = active === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.category === active);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleCategoryChange(cat: string) {
    setActive(cat);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <PageHero
        eyebrow="Our Catalog"
        title="Top-selling"
        titleHighlight="products"
        description="Enterprise hardware, IoT devices, networking gear, and security systems — all backed by our expert installation and support teams."
        link1="/contact"
        link1_text="Request A Quote"
        link2="/solutions"
        link2_text="View Our Solutions"
      />

      {/* Filter tabs */}
      <section className="bg-white pt-10 pb-2 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex gap-2 overflow-x-auto no-scrollbar pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-50 text-navy hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-slate-500 text-sm mb-8">
            Showing {visible.length} of {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-200 text-navy text-sm font-semibold hover:bg-navy hover:text-white hover:border-navy transition-all"
              >
                Load more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {!hasMore && filtered.length > PAGE_SIZE && (
            <p className="mt-10 text-center text-slate-400 text-sm">All {filtered.length} products shown.</p>
          )}
        </div>
      </section>
    </>
  );
}
