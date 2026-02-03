const services = [
  { title: "Exterior Detailing", image: "/services/exterior.jpg", href: "/detailing#exterior" },
  { title: "Interior Detailing", image: "/services/interior.jpg", href: "/detailing#interior" },
  { title: "Paint Correction", image: "/services/paint.jpg", href: "/paint-correction" },
  { title: "Ceramic Coating", image: "/services/ceramic.jpg", href: "/paint-correction" },
  { title: "Headlight Restoration", image: "/services/headlights.jpg", href: "/other-services" },
  { title: "Other Services", image: "/services/other.jpg", href: "/other-services" },
];

export default function ServiceGrid() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center text-[#538e79] mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map(s => (
          <a key={s.title} href={s.href} className="group">
            <div className="overflow-hidden rounded-lg">
              <img src={s.image} className="h-72 w-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">{s.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
