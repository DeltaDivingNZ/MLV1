export default function Navbar() {
  return (
    <nav className="bg-delta-dark text-white p-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Delta Detailing</div>
      <div className="space-x-6">
        <a href="#services" className="hover:text-delta-green">Services</a>
        <a href="#contact" className="hover:text-delta-green">Contact</a>
      </div>
    </nav>
  );
}
