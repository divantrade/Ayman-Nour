"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#timeline", label: "المسيرة" },
  { href: "#books", label: "المؤلفات" },
  { href: "#sharq", label: "الشرق" },
  { href: "#articles", label: "المقالات" },
  { href: "#political", label: "النضال السياسي" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      const scrollY = window.scrollY + 100;
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(`#${id}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(15, 30, 61, 0.98)" : "rgba(15, 30, 61, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "2px solid #E8742A",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 70,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #E8742A, #D05E18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "#fff",
            }}
          >
            ن
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            د. أيمن <span style={{ color: "#E8742A" }}>نور</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul
          className={`nav-links ${mobileOpen ? "open" : ""}`}
          id="navLinks"
          style={{
            display: "flex",
            gap: 4,
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={activeSection === link.href ? "active" : ""}
                style={{
                  color:
                    activeSection === link.href
                      ? "#fff"
                      : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  position: "relative",
                  display: "inline-block",
                  background:
                    activeSection === link.href
                      ? "rgba(232, 116, 42, 0.15)"
                      : "transparent",
                }}
              >
                {link.label}
                {activeSection === link.href && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 2,
                      right: 16,
                      left: 16,
                      height: 2,
                      background: "#E8742A",
                      borderRadius: 2,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
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
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>
    </nav>
  );
}
