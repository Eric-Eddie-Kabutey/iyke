"use client";

import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const TEAM = [
  {
    name: "Emeka Okafor",
    role: "CEO & Founder",
    bio: "15 years building enterprise technology infrastructure across Nigeria. Led deployments for clients in oil & gas, finance, and public sector.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Chidinma Eze",
    role: "Head of Engineering",
    bio: "Leads all hardware deployment and systems integration projects. Expert in structured cabling, server room design, and field commissioning.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Taiwo Adeyemi",
    role: "IoT Solutions Lead",
    bio: "Architect behind IYKE's LoRaWAN and cloud IoT deployments. Specialises in industrial sensor networks and smart building automation.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ngozi Ikenna",
    role: "Cybersecurity Consultant",
    bio: "NDPR compliance specialist and certified ethical hacker. Leads penetration testing, endpoint protection, and incident response planning.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Seun Balogun",
    role: "Cloud Infrastructure Lead",
    bio: "AWS and Azure certified architect managing multi-site cloud migrations and hybrid infrastructure for enterprise clients across Nigeria.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header row */}
        <SectionHeader
          eyebrow="Our team"
          title="Explore our"
          titleHighlight="engineering team"
          align="center"
        />
        {/* <div className="flex items-end justify-between mb-10">
          <SectionHeader
            eyebrow="Our team"
            title="Explore our"
            titleHighlight="engineering team"
            align="center"
          />

        </div> */}

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="relative flex gap-4 overflow-x-auto no-scrollbar pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group flex-shrink-0 w-72 rounded-3xl overflow-hidden relative cursor-pointer"
                style={{ minHeight: 400, scrollSnapAlign: "start" }}
              >
                {/* Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Permanent dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Default name/role — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <p className="text-white font-bold text-lg leading-snug">
                    {member.name}
                  </p>
                  <p className="text-white/60 text-sm">{member.role}</p>
                </div>

                {/* Hover overlay — slides up from below */}
                <div className="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <div className="bg-blue-600/95 backdrop-blur-sm p-6 m-3 rounded-2xl">
                    <p className="text-white font-bold text-base mb-0.5">
                      {member.name}
                    </p>
                    <p className="text-blue-200 text-xs mb-3">{member.role}</p>
                    <p className="text-blue-100/80 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={member.linkedin}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center justify-center transition-colors"
                      >
                        in
                      </a>
                      <a
                        href={member.twitter}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center justify-center transition-colors"
                      >
                        𝕏
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-end gap-3 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full text-gray-600 border border-gray-600 hover:text-blue-600 hover:border-blue-600 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full text-gray-600 border border-gray-600 hover:text-blue-600 hover:border-blue-600 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
