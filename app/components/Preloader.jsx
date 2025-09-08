"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoDark from "@/public/assets/logo-dark.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let minTimePassed = false;
    let pageLoaded = false;

    const timer = setTimeout(() => {
      minTimePassed = true;
      if (pageLoaded) setLoading(false);
    }, 1500);

    const handleLoad = () => {
      pageLoaded = true;
      if (minTimePassed) setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <style>{`
        @keyframes zoom {
          0%, 100% { transform: scale(1); opacity: 0.5;  }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>

      <Image
        src={logoDark}
        alt="logo"
        priority
        className="w-24 sm:w-28 md:w-32"
        style={{ animation: "zoom 2s ease-in-out infinite" }}
      />
    </div>
  );
}
