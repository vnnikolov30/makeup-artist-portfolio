import { Outfit, Ovo, Russo_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import Preloader from "./components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const russo = Russo_One({
  subsets: ["cyrillic"],
  weight: ["400"],
});
export const metadata = {
  title: "Glow By Krisi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${russo.className}  antialiased leading-8 overflow-x-hidden`}
      >
        <Preloader />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
