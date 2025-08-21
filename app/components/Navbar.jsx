"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import logoDark from "@/public/assets/logo-dark.png";
import headerBg from "@/public/assets/header-bg-color.png";
import moonIcon from "@/public/assets/moon_icon.png";
import sunIcon from "@/public/assets/sun_icon.png";
import menuBlack from "@/public/assets/menu-black.png";
import closeBlack from "@/public/assets/close-black.png";
import closeWhite from "@/public/assets/close-white.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const toggleDarkmode = () => {
    setIsLight((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={headerBg} alt="header-bg" className="w-full" />
      </div>
      <nav
        className={`top-0 sticky w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="/#">
          <Image
            src={logoDark}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 rounded-full px-12 py-3${
            isScroll ? "" : " bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a
              className=" transition duration-300 hover:text-[#b76e78] hover:drop-shadow-[0_0_6px_#f8c1b8]"
              href="/#about"
            >
              За мен
            </a>
          </li>
          <li>
            <a
              className=" transition duration-300 hover:text-[#b76e78] hover:drop-shadow-[0_0_6px_#f8c1b8]"
              href="/#services"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              className=" transition duration-300 hover:text-[#b76e78] hover:drop-shadow-[0_0_6px_#f8c1b8]"
              href="/#work"
            >
              Моята работа
            </a>
          </li>
          <li>
            <a
              className=" transition duration-300 hover:text-[#b76e78] hover:drop-shadow-[0_0_6px_#f8c1b8]"
              href="/#contact"
            >
              Контакт
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="md:cursor-pointer" onClick={toggleDarkmode}>
            {isLight ? (
              <Image src={moonIcon} alt="moon-icon" className="w-6" />
            ) : (
              <Image src={sunIcon} alt="moon-icon" className="w-6" />
            )}
          </button>

          
    

          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden ml-3"
          >
            <Image
              src={menuBlack}
              alt="menu-black"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 ${
            menuOpen ? "right-0" : "-right-64"
          }`}
        >
          <div className="absolute right-6 top-6">
            <Image
              src={closeBlack}
              alt="close-black"
              className="w-5 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <li onClick={() => setMenuOpen(false)}>
            <a href="/#about">About me</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/#services">Services</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/#work">My Work</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
