import React from "react";
import Link from "next/link";
import Card from "./Card";
import cardMakeup from "@/public/assets/makeup-card-img.png";
import nailsCard from "@/public/assets/nails-card.jpg";
import faceCard from "@/public/assets/face-card.jpg";
import waxCard from "@/public/assets/wax-card.webp";
import selfMakeupCard from "@/public/assets/self-makeup.webp";
import packageCard from "@/public/assets/package-card.jpg";

function Services() {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        Услуги<span className="text-[#b76e78]">.</span>
      </h1>

      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-7 my-10">
        <Link href="/services/makeup" className="h-full w-full">
          <Card
            title="Грим 💄"
            image={cardMakeup}
            description="Професионален грим за всеки повод – от нежна, естествена визия до дръзка и бляскава трансформация."
          />
        </Link>

        <Link href="/services/waxing" className="h-full w-full">
          <Card
            title="Коламаска & Sugaring ✨"
            image={waxCard}
            description="Нежна епилация с традиционна кола маска или натурална захарна паста за копринено гладка кожа."
          />
        </Link>
        <Link href="/services/facials" className="h-full w-full">
          <Card
            title="Терапии за лице 🧖‍♀️"
            image={faceCard}
            description="Персонализирани терапии за лице, които ще освежат и възвърнат блясъка на твоята кожа."
          />
        </Link>
        <Link href="/services/self-makeup" className="h-full w-full">
          <Card
            title="Уроци по самогримиране 🎨"
            image={selfMakeupCard}
            description="Индивидуални уроци, в които ще се научиш как сама да подчертаваш красотата си, лесно и уверено."
          />
        </Link>
        <Link href="/services/packages" className="h-full w-full">
          <Card
            title="Пакети🎁"
            image={packageCard}
            description="Перфектното съчетание от услуги в удобни пакети, които подчертават твоята уникалност."
          />
        </Link>
      </div>
    </div>
  );
}

export default Services;
