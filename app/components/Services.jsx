"use client";
import React from "react";
import Link from "next/link";
import Card from "./Card";
import { useTranslations } from "next-intl";

import cardMakeup from "@/public/assets/makeup-card-img.png";
import waxCard from "@/public/assets/wax-card.webp";
import faceCard from "@/public/assets/face-card.jpg";
import selfMakeupCard from "@/public/assets/self-makeup.webp";
import packageCard from "@/public/assets/package-card.jpg";

function Services() {
  const t = useTranslations("Services");

  const cards = [

    { id: "construction", image: cardMakeup },
    { id: "waxing", image: waxCard },
    { id: "facials", image: faceCard },
    { id: "self-makeup", image: selfMakeupCard },
    { id: "packages", image: packageCard },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        {t("title")}<span className="text-[#b76e78]">.</span>
      </h1>

      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-7 my-10">
        {cards.map(({ id, image }) => (
          <Link key={id} href={`/services/${id}`} className="h-full w-full">
            <Card
              title={t(`${id}.title`)}
              image={image}
              description={t(`${id}.description`)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
