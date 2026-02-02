export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-delta-blue/80 to-delta-green/60"></div>
      <div className="relative text-center px-6">
        <h1 className="text-5xl font-bold mb-4 text-white">Premium Car Detailing</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto text-white">
          Exceptional care for your vehicle inside and out — experience the Delta Detailing difference today.
        </p>
        <a href="#contact" className="bg-delta-green hover:bg-delta-blue text-white px-8 py-3 rounded-lg font-semibold transition">
          Book Now
        </a>
      </div>
    </section>
  );
}
