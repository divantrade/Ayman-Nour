"use client";

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="container-site">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="nav-logo"
              style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff" }}
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
            <p>
              سياسي مصري ومفكر ليبرالي. أول مرشح رئاسي ينافس مبارك. مؤسس حزب الغد. رئيس اتحاد القوى الوطنية المصرية. مناضل من أجل حرية مصر وديمقراطيتها.
            </p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-x-twitter" /></a>
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-youtube" /></a>
              <a href="#"><i className="fab fa-telegram" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-title">روابط سريعة</div>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleClick(e, "#home")}>الرئيسية</a></li>
              <li><a href="#timeline" onClick={(e) => handleClick(e, "#timeline")}>المسيرة</a></li>
              <li><a href="#books" onClick={(e) => handleClick(e, "#books")}>المؤلفات</a></li>
              <li><a href="#articles" onClick={(e) => handleClick(e, "#articles")}>المقالات</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <div className="footer-title">المشاريع</div>
            <ul className="footer-links">
              <li><a href="#">حزب غد الثورة</a></li>
              <li><a href="#">اتحاد القوى الوطنية</a></li>
              <li><a href="#">قناة الشرق</a></li>
              <li><a href="#">التحالف الأفريقي</a></li>
            </ul>
          </div>

          {/* External */}
          <div>
            <div className="footer-title">مواقع مهمة</div>
            <ul className="footer-links">
              <li><a href="#">ghadnews.net</a></li>
              <li><a href="#">egyna.org</a></li>
              <li><a href="#">elsharq.tv</a></li>
              <li><a href="#">arabcouncil.foundation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          جميع الحقوق محفوظة &copy; 2026 - الموقع الرسمي للدكتور أيمن عبد العزيز نور
        </div>
      </div>
    </footer>
  );
}
