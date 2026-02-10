// app/page.tsx
export const metadata = {
  title: "Matt’s Lawns – Reliable Lawn Mowing & Garden Care",
  description:
    "Professional lawn mowing and garden maintenance. One-off jobs or regular care you can rely on.",
  openGraph: {
    title: "Matt’s Lawns – Reliable Lawn Care",
    description:
      "Professional lawn mowing and garden maintenance. Get a free quote today.",
    url: "https://www.mattslawns.co.nz",
    images: [
      {
        url: "https://www.mattslawns.co.nz/images/home-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Matt’s Lawns – Lawn Mowing Services",
      },
    ],
    type: "website",
  },
};

import Hero from "./components/Hero";
import ServiceGrid from "./components/ServiceGrid";
import WhyChoose from "./components/WhyChoose";
import TestimonialsSlider from "./components/TestimonialsSlider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <WhyChoose />
      <TestimonialsSlider />
    </>
  );
}
