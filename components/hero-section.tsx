"use client"

import { Play, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image - Uses natural image height */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url('/home-hero/image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Light Sea Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e8f4f8]/15" />

      {/* Vertical Sidebar Text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden md:block">
        <span
          className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll to explore
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center px-4 py-20">
        <p className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-semibold drop-shadow-lg">
          Best Beach Resort in Chirala, Andhra Pradesh
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold max-w-4xl leading-tight text-balance drop-shadow-lg">
          Experience Paradise at
          <br />
          <span className="text-[#87ceeb]">Rainbow Beach Resorts</span>
        </h1>
        <p className="text-white text-base md:text-lg mt-4 max-w-2xl font-medium drop-shadow-lg">
          Premium beach resort at Ramapuram Beach Road with private beach access, swimming pool & luxury sea-facing rooms
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="tel:7799111273"
            className="flex items-center gap-2 bg-[#5eb3d6] hover:bg-[#4a9cc3] text-white px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>Book Now: 7799111273</span>
          </a>
          <button
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center transition-all hover:scale-105 group backdrop-blur-sm shadow-lg"
            aria-label="Play video tour"
          >
            <Play
              className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 group-hover:scale-110 transition-transform"
              fill="white"
            />
          </button>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-white/20 shadow-lg">
          <div className="text-center text-white font-semibold">
            <span className="text-[8px] xl:text-[10px] uppercase tracking-wider block">Chirala</span>
            <span className="text-xs xl:text-sm font-bold">#1 Resort</span>
          </div>
        </div>
      </div>
    </section>
  )
}
