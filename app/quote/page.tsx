import Image from "next/image";
import Contact from "../components/Contact";
import QuoteForm from "../components/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | Matt’s Lawns",
  description: "Request a free lawn mowing or garden care quote.",
};

export default function QuotePage() {
  return (
    <section className="w-full font-body text-gray-700">

      {/* HERO */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/images/lawn-hero.jpg"
          alt="Lawn care services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-4">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-white">
            Get a Free Lawn Quote
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white">
            Tell us about your lawn and we’ll get back to you with a no-obligation quote.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:gap-12 gap-8 items-start">

        <div className="lg:w-1/3 lg:sticky lg:top-24 bg-white p-8 rounded-xl shadow-lg self-start">
          <Contact />
        </div>

        <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-lg space-y-6">
          <QuoteForm />
        </div>

      </div>
    </section>
  );
}
