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
    { id: "construction", image: cardMakeup, disabled: false },
    { id: "waxing", image: waxCard, disabled: true },
    { id: "facials", image: faceCard, disabled: true },
    { id: "self-makeup", image: selfMakeupCard, disabled: true },
    { id: "packages", image: packageCard, disabled: true },
  ];

  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        {t("title")}
        <span className="text-[#b76e78]">.</span>
      </h1>

      <div className="flex flex-col text-center md:grid md:grid-cols-3 gap-10 my-10">
        {cards.map(({ id, image, disabled }) => {
          const cardContent = (
            <Card
              title={t(`${id}.title`)}
              image={image}
              description={t(`${id}.description`)}
              disabled={disabled}
              comingSoonText={t("comingSoon")}
            />
          );

          return (
            <div key={id} className="w-full flex justify-center">
              {disabled ? (
                <div key={id} className="">
                  {cardContent}
                </div>
              ) : (
                <Link key={id} href={`/services/${id}`} className="">
                  {cardContent}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
