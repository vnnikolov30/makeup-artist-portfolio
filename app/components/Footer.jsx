import React from "react";
import Image from "next/image";
import logoLight from "@/public/assets/logo1.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-900 px-4 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
        <div>
          <Link href="/">
            <Image
              src={logoLight}
              alt="logo"
              className="w-24 sm:w-28 md:w-32"
            />
          </Link>
          <p className="text-gray-300 italic text-sm">
            Glow Boldly, Shine Brightly!
          </p>
        </div>
        <div className="border-l border-gray-300 pl-2">
          <h2 className="text-lg font-bold mb-4 text-gray-300"> Услуги</h2>
          <ul>
            <li>
              <Link
                href="/services/construction"
                className="hover:underline text-gray-300"
              >
                Грим
              </Link>
            </li>
            <li>
              <Link
                href="/services/waxing"
                className="hover:underline text-gray-300"
              >
                Коламаска & Sugaring
              </Link>
            </li>

            <li>
              <Link
                href="/services/facials"
                className="hover:underline text-gray-300"
              >
                Терапии за лице
              </Link>
            </li>

            <li>
              <Link
                href="/services/self-makeup"
                className="hover:underline text-gray-300"
              >
                Уроци по самогримиране
              </Link>
            </li>

            <li>
              <Link
                href="/services/packages"
                className="hover:underline text-gray-300"
              >
                Пакети
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-l border-gray-300 pl-2">
          <h2 className="text-lg font-bold mb-4 text-gray-300"> Socials</h2>
          <ul>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/glowbykrisi/"
                className="hover:underline text-gray-300"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100075947871981"
                className="hover:underline text-gray-300"
              >
                Facebook
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@kddimitrova"
                className="hover:underline text-gray-300"
              >
                TikTok
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kristina-dimitrova-500222211/"
                className="hover:underline text-gray-300"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-300  text-center p-5  ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vnnikolov30"
        >
          DESIGN AND BUILD: VIKTOR NIKOLOV
        </a>
      </div>
    </footer>
  );
}

export default Footer;
