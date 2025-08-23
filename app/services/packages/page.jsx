import Pricing from "@/app/components/Pricing";
import React from "react";
import FadeInSection from "@/app/components/FadeInSection";

function Package() {
  const packageServices = [
    {
      name: "Пакет „Събитие“: Вечерен грим + лентични мигли ",
      price: 80,
      savingInfo: "спестявате 5 лв",
    },
    {
      name: "Булчински пакет: Пробен + сватбен + лентични ",
      price: 190,
      savingInfo: "вместо 205",
    },
    { name: "Абитуриентски комплект: Грим + лентични мигли", price: 90 },
    { name: "Мини facial glow преди грим (15 мин)", price: 20 },
  ];
  return (
    <FadeInSection>
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Пакети🎁</h1>
        <p>
          Перфектното съчетание от услуги в удобни пакети, които подчертават
          твоята уникалност.
        </p>
        <Pricing services={packageServices} />
      </div>
    </FadeInSection>
  );
}
export default Package;
