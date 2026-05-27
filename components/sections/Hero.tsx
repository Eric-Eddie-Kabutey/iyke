import Link from "next/link";
import Button from "../ui/Button";
import { TICKER_ITEMS } from "@/constants";

export default function Hero() {
  const allTickers = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <section className="relative max-h-auto flex flex-col justify-between overflow-hidden m-2 rounded-3xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
      </div>

      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/6 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 w-full pt-32 md:pt-64">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Content 1280 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-light-blue text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Trusted Technology Partner in Nigeria</span>
            </div>

            <h1 className="max-w-4xl gradient-text text-4xl md:text-5xl lg:text-6xl font-normal text-white font-serif">
              Smart IoT, Reliable <br />
              <span className="text-light-blue">Hardware</span> & Scalable{" "}
              <br />
              <span className="text-light-blue">Software</span> Solutions
            </h1>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                href="/products"
                className="group px-8 py-3.5 text-md bg-blue-600"
              >
                Explore Products <span className="ml-2">→</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="px-8 py-3.5 text-md text-white hover:text-white bg-white/0 border-[0.5px] border-white/20 hover:bg-white/5"
              >
                Get a Quote
              </Button>
            </div>

            <p className="text-white/70 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              From intelligent IoT deployments and enterprise hardware to custom
              digital platforms — IYKE Chris Computers delivers end-to-end
              technology solutions that power your business forward.
            </p>
          </div>

          {/* Right Content - Floating Card */}
          <div className="hidden lg:flex lg:col-span-5 justify-end lg:justify-end">
            <div className="relative w-[320px]">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="relative">
                  <img
                    src="/server.jpg"
                    alt="Server rack"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
                </div>
                <div className="p-4">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                    Rack Server v2
                  </p>
                  <p className="text-white font-semibold text-sm mb-3">
                    Enterprise-grade 2U rack server with redundant PSU
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-bold">₦1.2M</span>
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar Carousel */}
      <div className="relative z-10 mt-16 border-t border-b border-white/5 bg-white/[0.02] py-3 overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap">
          {allTickers.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-5 text-slate-400 text-sm"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
