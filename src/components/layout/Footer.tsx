"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#080E1C", borderTop: "3px solid #E8742A" }} className="pt-12 pb-6">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline text-white mb-2">
              <div
                className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white font-black text-lg"
                style={{ background: "linear-gradient(135deg, #E8742A, #D05E18)" }}
              >
                ن
              </div>
              <div className="text-lg font-bold">
                د. أيمن <span style={{ color: "#E8742A" }}>نور</span>
              </div>
            </Link>
            <p className="text-sm leading-[1.8] mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              سياسي مصري ومفكر ليبرالي. أول مرشح رئاسي ينافس مبارك. مؤسس حزب الغد. رئيس اتحاد القوى الوطنية المصرية. مناضل من أجل حرية مصر وديمقراطيتها.
            </p>
            <div className="flex gap-2.5 mt-4">
              {[
                { icon: "fa-telegram", href: "#" },
                { icon: "fa-youtube", href: "#" },
                { icon: "fa-facebook-f", href: "https://facebook.com/dr.Aymannour" },
                { icon: "fa-x-twitter", href: "https://twitter.com/AymanNour" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center no-underline transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#E8742A";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[15px] font-bold mb-4" style={{ color: "#E8742A" }}>روابط سريعة</div>
            <ul className="list-none flex flex-col gap-2">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/biography", label: "المسيرة" },
                { href: "/books", label: "المؤلفات" },
                { href: "/articles", label: "المقالات" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="no-underline text-sm transition-colors hover:text-orange" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <div className="text-[15px] font-bold mb-4" style={{ color: "#E8742A" }}>المشاريع</div>
            <ul className="list-none flex flex-col gap-2">
              {[
                { href: "/political/ghad", label: "حزب غد الثورة" },
                { href: "/political/ena", label: "اتحاد القوى الوطنية" },
                { href: "/media/elsharq", label: "قناة الشرق" },
                { href: "/political/adafp", label: "التحالف الأفريقي" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="no-underline text-sm transition-colors hover:text-orange" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <div className="text-[15px] font-bold mb-4" style={{ color: "#E8742A" }}>مواقع مهمة</div>
            <ul className="list-none flex flex-col gap-2">
              {["ghadnews.net", "egyna.org", "elsharq.tv", "arabcouncil.foundation"].map((s) => (
                <li key={s}>
                  <a href={`https://${s}`} target="_blank" rel="noopener noreferrer" className="no-underline text-sm transition-colors hover:text-orange" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-5 text-center text-[13px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>
          جميع الحقوق محفوظة &copy; 2026 - الموقع الرسمي للدكتور أيمن عبد العزيز نور
        </div>
      </div>
    </footer>
  );
}
