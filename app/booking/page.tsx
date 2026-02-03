import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold text-[#538e79] mb-6">Book a Detail</h1>
        <p>Chris van Rossum</p>
        <p>021 0629 237</p>
        <p>deltadetailingnz@gmail.com</p>
        <p>12 Kereru Court, Marton</p>
      </div>

      <BookingForm />

      <iframe
        className="md:col-span-2 mt-16 rounded-lg"
        src="https://www.google.com/maps?q=12%20Kereru%20Court%20Marton&output=embed"
        height="400"
        loading="lazy"
      />
    </section>
  );
}
