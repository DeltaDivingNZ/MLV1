export default function Footer() {
  return (
    <footer className="bg-green-900 text-white/80 text-center p-6 mt-10 space-y-3">
      <p className="font-semibold text-white">
        &copy; {new Date().getFullYear()} Matt’s Lawns. All rights reserved.
      </p>

      <p>
        Phone:{" "}
        <a href="tel:0210000000" className="underline hover:text-white">
          021 000 0000
        </a>{" "}
        | Email:{" "}
        <a
          href="mailto:mattslawns@gmail.com"
          className="underline hover:text-white"
        >
          mattslawns@gmail.com
        </a>
      </p>

      <p>Serving Orewa to Army Bay</p>

      <p>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/mattslawns"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          facebook.com/mattslawns
        </a>
      </p>
    </footer>
  );
}
