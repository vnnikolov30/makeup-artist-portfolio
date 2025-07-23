import React from "react";
import Image from "next/image";

function Card({ title, image, description, alt = "Card image" }) {
  return (
    <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-[#b76e78]/25 md:hover:shadow-x1 md:cursor-pointer md:hover:[&>div>p]:opacity-100">

      <Image className="w-full h-70 object-cover" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {description && (
          <p className="text-gray-700 text-base md:opacity-0 transition-opacity duration-300 ease-in-out">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
export default Card;
