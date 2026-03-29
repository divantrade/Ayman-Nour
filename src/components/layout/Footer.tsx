"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { AtSign, Globe, Video, Mail } from "lucide-react";

const quickLinks = [
  { href: "/biography", label: "السيرة الذاتية" },
  { href: "/books", label: "المؤلفات" },
  { href: "/articles", label: "المقالات" },
  { href: "/media", label: "الإعلام" },
  { href: "/political", label: "النضال السياسي" },
  { href: "/contact", label: "تواصل معنا" },
];

const projects = [
  { href: "/political/ghad", label: "حزب غد الثورة" },
  { href: "/political/ena", label: "اتحاد القوى الوطنية" },
  { href: "/political/adafp", label: "التحالف الديمقراطي الأفريقي" },
  { href: "/media/elsharq", label: "قناة الشرق" },
];

const externalLinks = [
  { href: "https://ghadnews.net", label: "أخبار الغد" },
  { href: "https://egyna.org", label: "اتحاد القوى الوطنية" },
  { href: "https://arabcouncil.foundation", label: "المجلس العربي" },
  { href: "https://elsharq.tv", label: "قناة الشرق" },
];

const socialLinks = [
  { href: "https://twitter.com/AymanNour", icon: AtSign, label: "تويتر" },
  { href: "https://facebook.com/dr.Aymannour", icon: Globe, label: "فيسبوك" },
  { href: "#", icon: Video, label: "يوتيوب" },
  { href: "mailto:contact@aymannour.com", icon: Mail, label: "البريد" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-gradient-to-l from-orange to-orange-dark" />

      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white font-bold text-lg">
                ن
              </div>
              <span className="font-bold text-lg">د. أيمن نور</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              سياسي مصري معارض ومفكر ليبرالي. رئيس حزب غد الثورة ورئيس اتحاد
              القوى الوطنية المصرية. يناضل من أجل حرية مصر وديمقراطيتها.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-lg mb-4">المشاريع</h3>
            <ul className="space-y-2">
              {projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">مواقع مهمة</h3>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} د. أيمن نور
          </p>
          <p className="text-gray-500 text-sm">
            من أجل حرية مصر وكرامة شعبها
          </p>
        </Container>
      </div>
    </footer>
  );
}
