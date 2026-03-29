"use client";
import Container from "@/components/ui/Container";

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
        style={{
          position: "fixed", top: 0, right: 0, left: 0, zIndex: 1000,
          background: scrolled ? "rgba(15, 30, 61, 0.98)" : "rgba(15, 30, 61, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "2px solid #E8742A",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", boxSizing: "border-box" as const, display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff" }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              background: "linear-gradient(135deg, #E8742A, #D05E18)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 18, color: "#fff",
            }}>ن</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              د. أيمن <span style={{ color: "#E8742A" }}>نور</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul style={{ display: "flex", gap: 4, listStyle: "none", alignItems: "center" }} className="hidden lg:!flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive(link.href) ? "#fff" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block",
                    background: isActive(link.href) ? "rgba(232, 116, 42, 0.15)" : "transparent",
                  }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span style={{
                      position: "absolute", bottom: 2, right: 16, left: 16,
                      height: 2, background: "#E8742A", borderRadius: 2,
                    }} />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                style={{
                  background: "linear-gradient(135deg, #E8742A, #D05E18)",
                  color: "#fff",
                  padding: "8px 20px",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  marginRight: 8,
                }}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{ background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer" }}
          >
            <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul
            className="lg:hidden"
            style={{
              display: "flex", flexDirection: "column", listStyle: "none",
              padding: 20, background: "#0F1E3D",
              borderTop: "2px solid #E8742A",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "block", padding: "12px 16px", borderRadius: 8,
                    textDecoration: "none", fontSize: 16, fontWeight: 500,
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
                style={{
                  display: "block", textAlign: "center",
                  background: "linear-gradient(135deg, #E8742A, #D05E18)",
                  color: "#fff", padding: "12px 20px", borderRadius: 50,
                  fontWeight: 600, textDecoration: "none", marginTop: 12,
                }}
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: 70 }} />
    </>
  );
}
