"use client";

import { useRef, useState } from "react";
import GradientHeading from "@/components/ui/GradientHeading";

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="m-2 py-16 lg:py-24 bg-white">
      <div className="mx-auto">
        <GradientHeading
          from="#1a1a1e"
          to="#94a3b8"
          direction="to-r"
          className="text-3xl lg:text-5xl font-bold text-center mb-10"
        >
          We Don&apos;t Just Sell{" "}
          <br className="hidden sm:block" />
          Technology — We Engineer Outcomes
        </GradientHeading>

        <div className="relative rounded-3xl overflow-hidden aspect-4/2">
          <video
          autoPlay
            ref={videoRef}
            src="/vid1.mp4"
            className="w-full h-full object-cover"
            playsInline
            loop
            onEnded={() => setPlaying(false)}
          />

          {/* Overlay — hidden while playing */}
          {!playing && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* Play / Pause button */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            <span className="w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:border-white group-hover:scale-105 transition-all bg-black/10 backdrop-blur-sm">
              {playing ? (
                /* Pause icon */
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                /* Play icon */
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
