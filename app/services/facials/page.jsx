import Pricing from "@/app/components/Pricing";
import React from "react";
import FadeInSection from "@/app/components/FadeInSection";

function Facials() {
  const facialServices = [
    { name: "Класическо почистване на лице ", price: 70 },
    { name: "Класическо + маска/ампула ", price: 80 },
    { name: "Масаж на лице (лице/шия/деколте) ", price: 40 },
  ];
  return (
    <FadeInSection>
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Терапии за лице 🧖‍♀️</h1>
        <p>
          Персонализирани терапии за лице, които освежават и възвръщат блясъка
          на твоята кожа.
        </p>
        <Pricing services={facialServices} />
      </div>
    </FadeInSection>
  );
}

export default Facials;
