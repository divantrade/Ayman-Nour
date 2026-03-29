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
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-[1000] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(15, 30, 61, 0.98)" : "rgba(15, 30, 61, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "2px solid #E8742A",
          boxShadow: scrolled ? "var(--shadow-lg)" : "none",
        }}
      >
        <div className="container-main flex items-center justify-between" style={{ height: "70px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline text-white">
            <div
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white font-black text-lg"
              style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
            >
              ن
            </div>
            <div className="text-lg font-bold">
              د. أيمن <span className="text-orange">نور</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-1 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative no-underline transition-all duration-300 text-sm font-medium px-4 py-2 rounded-lg"
                  style={{
                    color: isActive(link.href) ? "#fff" : "rgba(255,255,255,0.8)",
                    background: isActive(link.href) ? "rgba(232, 116, 42, 0.15)" : "transparent",
                  }}
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
                className="no-underline text-white text-sm font-semibold px-5 py-2 rounded-full mr-2"
                style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul
            className="lg:hidden flex flex-col list-none px-5 py-5 gap-1"
            style={{
              background: "#0F1E3D",
              borderTop: "2px solid #E8742A",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 px-4 rounded-lg no-underline text-base font-medium"
                  style={{
                    color: isActive(link.href) ? "#fff" : "rgba(255,255,255,0.8)",
                    background: isActive(link.href) ? "rgba(232, 116, 42, 0.15)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block text-center text-white font-semibold py-3 rounded-full no-underline mt-3"
                style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[70px]" />
    </>
  );
}
