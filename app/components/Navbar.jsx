"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logoDark from "@/public/assets/logo-dark.png";
import headerBg from "@/public/assets/header-bg-color.png";
import menuBlack from "@/public/assets/menu-black.png";
import closeBlack from "@/public/assets/close-black.png";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("NavbarItems");
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [locale, setLocale] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}`;
    router.refresh();
  };

  const menuItems = ["about", "services", "gallery", "contact", "events"];

  const handleMobileNavClick = (e, id) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setMenuOpen(false);
      setTimeout(() => {
        if (window.location.pathname === "/") {
          document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
        } else {
          router.push(`/#${id}`);
        }
      });
    }
  };

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
        <Link
          href="/"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "instant" });
              } else {
                router.push("/");
              }
            }
          }}
        >
          <Image src={logoDark} alt="logo" className="w-28 mr-14" />
        </Link>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          {menuItems.map((id) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                className="transition duration-300 hover:text-[#b76e78] hover:drop-shadow-[0_0_6px_#f8c1b8]"
              >
                {t(id)}
              </Link>
            </li>
          ))}
        </ul>

        {!menuOpen && (
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => changeLocale("bg")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "bg" && "bg-black text-white"
              }`}
            >
              BG
            </button>
            <button
              onClick={() => changeLocale("en")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "en" && "bg-black text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLocale("fr")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "fr" && "bg-black text-white"
              }`}
            >
              FR
            </button>
          </div>
        )}

        <button
          onClick={() => setMenuOpen(true)}
          className={`block md:hidden ml-auto z-[60] transition-opacity duration-200 ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 delay-500"
          }`}
        >
          <Image
            src={menuBlack}
            alt="menu-black"
            className="w-7 h-7 cursor-pointer"
          />
        </button>

        {/* Mobile menu */}
        <ul
          ref={menuRef}
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

          {menuItems.map((id) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={(e) => handleMobileNavClick(e, id)}
              >
                {t(id)}
              </Link>
            </li>
          ))}

          <div className="flex items-center gap-3">
            <button
              onClick={() => changeLocale("bg")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "bg" && "bg-black text-white"
              }`}
            >
              BG
            </button>
            <button
              onClick={() => changeLocale("en")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "en" && "bg-black text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLocale("fr")}
              className={`border p-2 font-bold rounded-md text-sm ${
                locale === "fr" && "bg-black text-white"
              }`}
            >
              FR
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
