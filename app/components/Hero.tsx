export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Restore Your Car’s Showroom Shine
        </h1>

        <p className="mt-6 text-xl text-[#93afbd]">
          Inside & out — Manawatū–Rangitīkei. Mobile or Marton based.
        </p>

        <a
          href="/booking"
          className="inline-block mt-10 bg-[#538e79] hover:bg-[#437564] text-white px-10 py-4 rounded-lg transition"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}
