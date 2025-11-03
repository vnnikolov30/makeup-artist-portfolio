import { Outfit, Ovo, Russo_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  const locale = (await getLocale()) || "bg";
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${russo.className}  antialiased leading-8 overflow-x-hidden`}
      >
        <Preloader />
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
