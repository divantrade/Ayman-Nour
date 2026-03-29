"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/biography", label: "المسيرة" },
  { href: "/books", label: "المؤلفات" },
  { href: "/articles", label: "المقالات" },
];

const projects = [
  { href: "/political/ghad", label: "حزب غد الثورة" },
  { href: "/political/ena", label: "اتحاد القوى الوطنية" },
  { href: "/media/elsharq", label: "قناة الشرق" },
  { href: "/political/adafp", label: "التحالف الأفريقي" },
];

const externalLinks = [
  { href: "https://ghadnews.net", label: "ghadnews.net" },
  { href: "https://egyna.org", label: "egyna.org" },
  { href: "https://elsharq.tv", label: "elsharq.tv" },
  { href: "https://arabcouncil.foundation", label: "arabcouncil.foundation" },
];

const socialLinks = [
  { href: "https://twitter.com/AymanNour", icon: "fa-x-twitter" },
  { href: "https://facebook.com/dr.Aymannour", icon: "fa-facebook-f" },
  { href: "#", icon: "fa-youtube" },
  { href: "#", icon: "fa-telegram" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-12 pb-6 border-t-[3px] border-orange">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline text-white mb-2">
              <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center font-black text-lg text-white">
                ن
              </div>
              <div className="text-lg font-bold">
                د. أيمن <span className="text-orange">نور</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-[1.8] mt-3">
              سياسي مصري ومفكر ليبرالي. أول مرشح رئاسي ينافس مبارك. مؤسس حزب الغد. رئيس اتحاد القوى الوطنية المصرية. مناضل من أجل حرية مصر وديمقراطيتها.
            </p>
            <div className="flex gap-2.5 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-[10px] bg-white/[0.08] flex items-center justify-center text-white/60 no-underline transition-all hover:bg-orange hover:text-white"
                >
                  <i className={`fab ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-orange text-[15px] font-bold mb-4">روابط سريعة</div>
            <ul className="list-none flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 no-underline text-sm hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <div className="text-orange text-[15px] font-bold mb-4">المشاريع</div>
            <ul className="list-none flex flex-col gap-2">
              {projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 no-underline text-sm hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <div className="text-orange text-[15px] font-bold mb-4">مواقع مهمة</div>
            <ul className="list-none flex flex-col gap-2">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/60 no-underline text-sm hover:text-orange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.08] pt-5 text-center text-white/30 text-[13px]">
          جميع الحقوق محفوظة &copy; 2026 - الموقع الرسمي للدكتور أيمن عبد العزيز نور
        </div>
      </div>
    </footer>
  );
}
