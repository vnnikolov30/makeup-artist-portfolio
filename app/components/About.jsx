import React from "react";
import Image from "next/image";
import aboutPhoto from "@/public/assets/about-photo.jpg";
import { useTranslations } from "next-intl";
function About() {
  const t = useTranslations("WhoAmI");
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        {t("h1")}
        <span className="text-[#b76e78]">?</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto font-russo_one">
        {t("p")}
      </p>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={aboutPhoto}
            alt="about-photo"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="flex-1 max-w-xl bg-white shadow-md rounded-2xl p-6 text-center lg:text-left">
          <p className="mb-10 max-w-2x1 font-Ovo">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            aliquam a reprehenderit officia nobis nostrum, placeat eum! Ex illum
            consequuntur, iste dicta repudiandae doloremque nobis beatae
            suscipit nemo dignissimos ducimus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
