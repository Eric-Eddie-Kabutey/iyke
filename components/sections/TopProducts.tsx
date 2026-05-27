"use client";
import { useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/constants";
import GradientHeading from "../ui/GradientHeading";
import ProductCard from "../ui/ProductCard";

export default function TopProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <GradientHeading
            from="#1a1a1e"
            to="#94a3b8"
            direction="to-l"
            className="text-3xl lg:text-5xl font-bold mb-10"
            subHeading="Our Catalog"
          >
            our Top-selling <br className="hidden sm:block" />
            products
          </GradientHeading>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center text-slate-400 transition-all"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center text-slate-400 transition-all"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable product list */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 lg:-mx-10 lg:px-10"
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="shrink-0 w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 text-sm font-medium rounded-full"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

