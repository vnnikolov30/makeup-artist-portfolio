"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = ({ images, optionalText }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 px-4">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 3500,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
        aria-label="Event photos gallery"
      >
        {images.map((img, index) => (
            
          <SplideSlide key={index}>
            <h1 className="text-center mb-10 text-4xl font-semibold">{optionalText}</h1>
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
