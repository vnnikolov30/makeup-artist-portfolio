import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  
  subsets: ["latin"], weight:["400", "500","600", "700"],
});

const ovo = Ovo({
  
  subsets: ["latin"], weight:["400"],
});

export const metadata = {
  title: "Beauty by Kris",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
