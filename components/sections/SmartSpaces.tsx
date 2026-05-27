import Link from "next/link";

export default function SmartSpaces() {
  return (
    <section className="bg-white m-2">
      <div className="relative h-fit min-h-[900px] rounded-3xl overflow-hidden bg-white group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/smart.jpg" 
              alt="Smart Living" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between z-10">
          <div className="max-w-[1400px] w-full mx-auto h-full p-8 md:p-16 flex flex-col justify-between">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start text-white/60 text-xs font-normal uppercase tracking-[0.2em]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Use Case</span>
              </div>
              <div className="hidden md:block">
                Smart Living · Connected Spaces
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end h-full">
              <div className="lg:col-span-7 space-y-6 h-full flex flex-col justify-end">
                {/* <div className="flex items-center space-x-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="opacity-60">◎</span>
                  <span>Seamless Connected Living</span>
                </div> */}
                <h2 className="max-w-2xl text-4xl md:text-6xl lg:text-8xl font-normal text-white font-serif">
                  Spaces that <br/> 
                  think, sense and adapt.
                </h2>
                <p className="text-white/70 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                  From smart homes to enterprise campuses — we engineer environments that respond to people, conserve energy and stay secure around the clock.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/solutions" 
                    className="inline-flex items-center space-x-3 text-blue-600 bg-white px-8 py-4 rounded-full font-light hover:bg-white/90 transition-all"
                  >
                    <span>See connected solutions</span>
                    <span className="w-6 h-6 rounded-full text-blue-600 flex items-center justify-center text-xs">↗</span>
                  </Link>
                </div>
              </div>

              {/* Right Side Stats Card */}
              <div className="lg:col-span-5 h-full flex flex-col justify-start items-center lg:items-end pt-8 md:pt-16">
                <div className="bg-white/5 backdrop-blur-xs border border-white/5 p-6 rounded-3xl w-full h-fit max-w-xs space-y-4">
                  <div className="text-white/60 text-[10px] font-medium uppercase tracking-widest">Energy Saving</div>
                  <div className="text-5xl font-bold text-white font-sans">-38%</div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[38%] rounded-full"></div>
                  </div>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    Average reduction in energy use after smart automation deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}
