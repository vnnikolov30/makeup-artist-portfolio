import Pricing from "@/app/components/Pricing";
import React from "react";
import FadeInSection from "@/app/components/FadeInSection";

function Waxing() {
  const waxingServices = [
    { name: "Горна устна  ", price: 9 },
    { name: "Брадичка ", price: 9 },
    { name: "Цяло лице ", price: 22 },
    { name: "Подмишници  устна  ", price: 13 },
    { name: "Ръце 1/2 ", price: 22 },
    { name: "Ръце цели", price: 28 },
    { name: "Крака 1/2 ", price: 28 },
    { name: "Крака цели ", price: 45 },
    { name: "Външни бикини (линия)  ", price: 20 },
    { name: "Пълен интим ", price: 36 },
    { name: "Седалище  ", price: 13 },
  ];
  return (
    <FadeInSection>
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Коламаска & Sugaring ✨</h1>
        <p>
          Нежна епилация с традиционна кола маска или натурална захарна паста за
          копринено гладка кожа.
        </p>
        <Pricing services={waxingServices} />
      </div>
    </FadeInSection>
  );
}

export default Waxing;
