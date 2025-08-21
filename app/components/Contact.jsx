"use client";
import React from "react";
import { useState } from "react";
import { useContactForm } from "../hooks/useContactForm";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Contact() {
  const { result, handleSubmit, loading } = useContactForm();
  
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-black text-gray-900 tracking-wider uppercase mb-8">
        Свържи се с мен<span className="text-[#b76e78]">.</span>
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
              placeholder="Име"
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
              placeholder="Въведете своето съобщение..."
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 w-max flex items-center justify-between  bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
            >
              {loading ? "Изпращане…" : "Изпрати ᯓ➤"}
            </button>
          </div>
        </form>
        {result && <p className="text-lg mt-4 text-gray-700">{result}</p>}
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-3xl font-black text-gray-900 tracking-wider  mb-8">
        Или ме намери тук{" "}
      </h1>
      <div className="flex items-center  justify-evenly my-10 flex-auto">
        <a
          href="https://www.instagram.com/kddimitrova/"
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
        </a>
        <a
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
        </a>
      </div>
    </div>
  );
}

export default Contact;
