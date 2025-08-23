import Pricing from "@/app/components/Pricing";
import React from "react";

import FadeInSection from "@/app/components/FadeInSection";

function Makeup() {
  const makeupServices = [
    { name: "Дневен грим", price: 55 },
    { name: "Вечерен / официален грим", price: 65 },
    { name: "Абитуриентски грим", price: 80 },
    { name: "Булчински грим", price: 105 },
    { name: "Пробен грим", price: 65 },
    { name: "Добавка лентични мигли", price: 15 },
    { name: "Добавка снопчета/кичета", price: 25 },
  ];
  return (
    <FadeInSection>
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Грим 💄</h1>
        <p>
          Професионален грим за всеки повод – от нежна, естествена визия до
          дръзка и бляскава трансформация.
        </p>
        <Pricing title="Грим" services={makeupServices} />
      </div>
    </FadeInSection>
  );
}

export default Makeup;
