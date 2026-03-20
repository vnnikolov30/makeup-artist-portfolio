import React from "react";
import Image from "next/image";

function Card({
  title,
  image,
  description,
  alt = "Card image",
  disabled = false,
  comingSoonText = "Coming soon",
}) {
  return (
    <div
      className={`
        relative w-full h-full flex flex-col rounded-2xl overflow-hidden shadow-lg 
        transition-all duration-300
        ${!disabled && "md:hover:scale-105 md:hover:shadow-[#b76e78]/25 md:hover:shadow-x1 md:cursor-pointer md:hover:[&>div>p]:opacity-100"}
        ${disabled && "grayscale opacity-70 cursor-not-allowed"}
      `}
    >
      {/* Image */}
      <Image className="w-full h-70 object-cover" src={image} alt={alt} />

      {/* Coming Soon Overlay */}
      {disabled && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center
                        opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-white text-lg font-semibold tracking-wider uppercase text-center px-4">
            {comingSoonText}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="px-6 py-4">
        <div className="text-xl mb-2">{title}</div>

        {description && (
          <p
            className={`
              text-gray-500 text-base transition-opacity duration-300 ease-in-out
              ${disabled ? "opacity-0" : "md:opacity-0"}
            `}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
