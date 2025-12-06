"use client";
import React, { use } from "react";
import { useContactForm } from "../hooks/useContactForm";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Contact() {
  const { result, handleSubmit, loading } = useContactForm();
  const t = useTranslations("ContactForm");

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        {t("h1")}
        <span className="text-[#b76e78]">.</span>
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="max-w-2x1 mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
            <input
              name="name"
              type="text"
              placeholder={t("name")}
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <textarea
              name="message"
              rows="6"
              placeholder={t("message")}
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 w-max flex items-center justify-between  bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
            >
              {loading ? t("sending") : t("send")}
            </button>
          </div>
        </form>
        {result && <p className="text-lg mt-4 text-gray-700">{result}</p>}
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 tracking-wider  mb-8">
       {t("findMe")}
      </h1>
      <div className="flex items-center  justify-evenly my-10 flex-auto">
        <Link
          href="https://www.instagram.com/glowbykrisi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 md:w-10 transition duration-300 md:hover:scale-110 md:hover:drop-shadow-[0_2px_4px_#ec4899]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-12 h-12 text-pink-500"
          >
            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
          </svg>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100075947871981"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 md:w-10 transition duration-300 md:hover:scale-110 md:hover:drop-shadow-[0_2px_4px_#3b82f6]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-12 h-12 text-blue-500"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
          </svg>
        </Link>
        <Link
          href="https://www.tiktok.com/@kddimitrova"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 md:w-12 transition duration-300 md:hover:scale-110 md:hover:drop-shadow-[0_2px_4px_#000] overflow-visible"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-full h-full text-black"
            aria-hidden="true"
          >
            <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
          </svg>
        </Link>

        <Link
          href="https://www.linkedin.com/in/kristina-dimitrova-500222211/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 md:w-10 transition duration-300 md:hover:scale-110 md:hover:drop-shadow-[0_2px_4px_#0a66c2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-12 h-12 text-blue-600"
            fill="currentColor"
          >
            <path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.8 0c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.4V302.4c0-34.7-12.4-58.3-43.5-58.3-23.7 0-37.9 16-44.1 31.4-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.9s1.2-269.4 0-299.1h92.9v42.4c12.3-19 34.3-46.1 83.4-46.1 60.9 0 106.6 39.8 106.6 125.3V448z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
