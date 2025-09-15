import FadeInSection from "@/app/components/FadeInSection";
import React from "react";
import Link from "next/link";

function ConstructionPage() {
  return (
    <>
      <FadeInSection>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            🚧Тук още подреждаме нещата...🚧
          </h1>
          <h2>Но скоро ще бъдем готови! 👍</h2>
          <Link
            href="/"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#000000] text-white font-semibold rounded-full shadow-md hover:bg-[#323232] transition-colors duration-300 my-10"
          >
            Начало
            
          </Link>
        </div>
      </FadeInSection>
    </>
  );
}

export default ConstructionPage;
