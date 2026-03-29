"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/biography", label: "المسيرة" },
  { href: "/books", label: "المؤلفات" },
  { href: "/media/elsharq", label: "الشرق" },
  { href: "/articles", label: "المقالات" },
  { href: "/political", label: "النضال السياسي" },
  { href: "/gallery", label: "معرض الصور" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-[1000] transition-all duration-300 border-b-2 border-orange ${
          isScrolled
            ? "bg-navy/[0.98] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "bg-navy/95"
        }`}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline text-white">
            <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center font-black text-lg text-white">
              ن
            </div>
            <div className="text-lg font-bold">
              د. أيمن <span className="text-orange">نور</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 no-underline ${
                    isActive(link.href)
                      ? "text-white bg-[rgba(232,116,42,0.15)]"
                      : "text-white/80 hover:text-white hover:bg-[rgba(232,116,42,0.15)]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-[2px] right-4 left-4 h-[2px] bg-orange rounded-sm" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mr-2 px-5 py-2 bg-gradient-to-br from-orange to-orange-dark text-white rounded-full text-sm font-semibold no-underline transition-all hover:-translate-y-0.5"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
            aria-label="القائمة"
          >
            <i className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-navy border-t-2 border-orange ${
            isMobileOpen ? "max-h-[500px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]" : "max-h-0"
          }`}
        >
          <div className="px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded-lg text-base font-medium no-underline transition-all ${
                  isActive(link.href)
                    ? "text-white bg-[rgba(232,116,42,0.15)]"
                    : "text-white/80 hover:text-white hover:bg-[rgba(232,116,42,0.15)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 text-center px-5 py-3 bg-gradient-to-br from-orange to-orange-dark text-white rounded-full font-semibold no-underline"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[70px]" />
    </>
  );
}
