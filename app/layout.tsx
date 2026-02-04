// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "../components/ChatWidget"; // <-- Added chatbot
import { Playfair_Display, Montserrat } from "next/font/google";

// Configure Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-body bg-[#0b0b0b] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Chat widget added here so it appears on every page */}
        <ChatWidget />
      </body>
    </html>
  );
}
