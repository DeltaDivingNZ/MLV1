"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
      
      {/* Background image */}
      <Image
        src="/images/hero-lawn.jpg"
        alt="Lush green lawn being mowed"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-800/30" />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-6">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Matt’s Lawns
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-white/90">
          Professional lawn care and gardening services to keep your property neat, healthy, and looking its best.
        </p>

        <div className="space-x-4">
          <Link
            href="/quote"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="inline-block bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>

    </section>
  );
}
