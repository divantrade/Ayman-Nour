"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/biography", label: "السيرة الذاتية" },
  { href: "/books", label: "المؤلفات" },
  { href: "/articles", label: "المقالات" },
  { href: "/media", label: "الإعلام" },
  { href: "/political", label: "النضال السياسي" },
  { href: "/gallery", label: "معرض الصور" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                ن
              </div>
              <div className="hidden sm:block">
                <span className="text-text-primary font-bold text-lg">
                  د. أيمن نور
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-orange"
                      : "text-text-secondary hover:text-orange"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-orange rounded-full" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mr-4 px-5 py-2 bg-gradient-to-l from-orange to-orange-dark text-white rounded-lg text-sm font-semibold hover:from-orange-light hover:to-orange transition-all hover:-translate-y-0.5"
              >
                تواصل معنا
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-text-primary hover:text-orange transition-colors"
              aria-label="القائمة"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Orange accent line */}
        <div className="h-[3px] bg-gradient-to-l from-orange to-orange-dark" />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            isMobileOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <Container className="py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-base font-medium border-b border-gray-100 last:border-0 ${
                  isActive(link.href)
                    ? "text-orange"
                    : "text-text-secondary hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 text-center px-5 py-3 bg-gradient-to-l from-orange to-orange-dark text-white rounded-lg font-semibold"
            >
              تواصل معنا
            </Link>
          </Container>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
      <div className="h-[3px]" />
    </>
  );
}
