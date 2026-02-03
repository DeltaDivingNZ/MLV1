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
