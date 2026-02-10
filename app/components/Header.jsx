import React from "react";
import Image from "next/image";
import heroImage from "@/public/assets/hero-image.jpg";

import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("HeroSection");
  return (
    <>
      <section className="flex flex-col items-center justify-start px-6 lg:px-[8%] py-6 gap-6 h-100vh max-h-screen overflow-hidden">
        

        <div className="w-full max-w-4x1 mx-auto relative rounded-4xl overflow-hidden">
          <Image
            src={heroImage}
            alt="hero-img"
            className="w-full h-full object-cover object-[center_-45px]"
          />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_100%)] rounded-4xl" />
        </div>

        <div className="w-full text-center flex flex-col justify-center grow">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("h1")}</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-russo_one">
            {t("p")}
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
