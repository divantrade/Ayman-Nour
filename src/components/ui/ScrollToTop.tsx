"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange-dark text-white border-none cursor-pointer flex items-center justify-center text-lg z-[999] shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[3px] ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="العودة للأعلى"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
