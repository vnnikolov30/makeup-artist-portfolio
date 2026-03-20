import React from "react";
import Image from "next/image";
import heroImage from "@/public/assets/hero-image.jpg";
import heroImage2 from "@/public/assets/hero-image2.jpg";
import heroImage3 from "@/public/assets/hero-image3.jpg";
import Carousel from "../components/Carousel";

import { useTranslations } from "next-intl";

function Header() {
  const heroImgs = [heroImage2, heroImage, heroImage3];
  const t = useTranslations("HeroSection");
  return (
    <>
      <section className="flex flex-col items-center justify-start px-6 lg:px-[8%] py-6 gap-6 h-100vh max-h-screen overflow-hidden">

        <Carousel
          images={heroImgs}
          className="w-full h-full object-cover object-[center_-45px]"
        />

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
