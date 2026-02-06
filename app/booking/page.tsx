// app/booking/page.tsx
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Detail | Delta Detailing",
  description: "Schedule your car detailing or send an enquiry...",
  openGraph: {
    title: "Book a Detail | Delta Detailing",
    description: "Reach out today to schedule your detail...",
    url: "https://www.deltadetailing.co.nz/booking",
    siteName: "Delta Detailing",
    images: [
      {
        url: "https://www.deltadetailing.co.nz/images/booking-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Delta Detailing Booking Page Hero",
      },
    ],
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <section className="w-full font-body text-[#d0d0d0]">

      {/* HERO BANNER */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/images/booking-bg.jpg"
          alt="Booking Page Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-4">
          <h1 className="
            font-title 
            text-4xl md:text-5xl lg:text-6xl 
            text-[#538e79] 
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]
          ">
            Talk To The Team!
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Reach out today to schedule your detail, or submit an enquiry if you're not sure which package is right for you.
          </p>
        </div>
      </div>

      {/* CONTACT & BOOKING FORM SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:gap-12 gap-8 items-start">

        {/* STICKY CONTACT CARD */}
        <div className="lg:w-1/3 lg:sticky lg:top-24 bg-[#1c1c1c] p-8 rounded-xl shadow-lg self-start">
          <Contact />
        </div>

        {/* BOOKING FORM */}
        <div className="lg:w-2/3 bg-[#1c1c1c] p-8 rounded-xl shadow-lg space-y-6">
          <BookingForm />
        </div>

      </div>

      {/* GOOGLE MAPS WIDGET */}
      <div className="max-w-7xl mx-auto px-6 mb-16 h-[400px] lg:h-[500px]">
        <iframe
          title="Delta Detailing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.015617880068!2d175.07100431519364!3d-40.06824487940412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b3b92fcb8a2b9%3A0x7f1b9e89f3c9f!2s12%20Kereru%20Court%2C%20Marton!5e0!3m2!1sen!2snz!4v1671234567890!5m2!1sen!2snz"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
