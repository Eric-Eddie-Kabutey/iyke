import Link from "next/link";

export default function About() {
  return (
    // <section className="bg-white py-20 lg:py-28">
    //   <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
    //     <p className="text-[#1a1a1e] text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium max-w-4xl mx-auto">
    //       We are an{" "}
    //       <span className="text-blue-600 font-semibold">end-to-end technology solutions</span>{" "}
    //       provider — blending hardware precision, IoT intelligence, and digital craftsmanship to
    //       help Nigeria&apos;s businesses compete at the highest level.
    //     </p>
    //     <div className="mt-12">
    //       <Link
    //         href="/about"
    //         className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25"
    //       >
    //         Our Story
    //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //         </svg>
    //       </Link>
    //     </div>
    //   </div>
    // </section>

    <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-normal text-navy">
        We are an <span className="text-blue-600">end-to-end technology solutions</span> provider — blending <br className="hidden md:block" />
        <span className="text-blue-600">hardware precision, IoT intelligence, and digital craftsmanship</span> to <br className="hidden md:block" />
        help <span className="text-blue-600">Gambia’s businesses</span> compete at the highest level.
      </h2>
      
      <div className="mt-12">
        <Link 
          href="/about" 
          className="inline-flex items-center space-x-3 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy/90 transition-all group"
        >
          <span>Our Story</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  </section>
  );
}
