import Pricing from "@/app/components/Pricing";
import React from "react";
import Card from "@/app/components/Card";
import FadeInSection from "@/app/components/FadeInSection";
import Link from "next/link";

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
        {/* <Pricing title="Грим" services={makeupServices} /> */}
       <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-7 my-10">
          <Link href="/services/makeup" className="h-full w-full">
            <Card 
              title={"Булчински грим"}
              image={""}
              description={"Елегантен и траен грим за сватбения ден."}

            /> 
          </Link>
          <Link href="/services/makeup" className="h-full w-full">
            <Card 
              title={"Дневен грим"}
              image={""}
              description={"Лек и естествен грим за ежедневие."}

            /> 
          </Link>
          <Link href="/services/makeup" className="h-full w-full">
            <Card 
              title={"Вечерен / официален грим"}
              image={""}
              description={"По-силен и дълготраен грим за вечерни събития."}

            /> 
          </Link>
          <Link href="/services/makeup" className="h-full w-full">
            <Card 
              title={"Абитуриентски грим"}
              image={""}
              description={"Стилен грим, подходящ за бал и специални поводи."}

            /> 
          </Link>
          <Link href="/services/makeup" className="h-full w-full">
            <Card 
              title={"Пробен грим"}
              image={""}
              description={"Тестов грим преди важен повод."}

            /> 
          </Link>
       </div>
      </div>
    </FadeInSection>
  );
}

export default Makeup;
