import React from "react";
import Card from "./Card";
import cardMakeup from "@/public/assets/makeup-card-img.png";
import nailsCard from  "@/public/assets/nails-card.jpg";
import faceCard from  "@/public/assets/face-card.jpg";
import waxCard from  "@/public/assets/wax-card.webp";

function Services() {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        Services<span className="text-[#b76e78]">.</span>
      </h1>

      <div className="flex flex-col items-center md:grid md:grid-cols-4 gap-7 my-10">
        <Card title="Makeup 💄" image={cardMakeup} description="Professional makeup services for every occasion, from soft natural looks to bold, glamorous transformations." />
        <Card title="Nails  💅" image={nailsCard} description="Manicures, pedicures, and creative nail art to keep your nails healthy, polished, and stylish."/>
        <Card title="Waxing & Sugaring ✨" image={waxCard} description="Gentle hair removal treatments, offering both traditional waxing and natural sugaring for smooth, lasting results."/>
        <Card title="Facials  🧖‍♀️" image={faceCard} description="Customized facial treatments designed to rejuvenate your skin, leaving it refreshed, radiant, and glowing."/>
      
      </div>
    </div>
  );
}

export default Services;
