"use client";

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="hero"
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0F1E3D 0%, #15254A 50%, #1A2D54 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 70,
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(232,116,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,116,42,0.05) 0%, transparent 50%)",
        }}
      />
      <div className="hero-pattern" />

      {/* Content */}
      <div
        className="hero-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Text Content */}
        <div className="hero-content" style={{ animation: "fadeInRight 1s ease" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(232, 116, 42, 0.15)",
              border: "1px solid rgba(232, 116, 42, 0.3)",
              padding: "6px 16px",
              borderRadius: 50,
              color: "#F09048",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <i className="fas fa-circle" style={{ fontSize: 10 }} />
            مناضل من أجل الحرية والديمقراطية
          </div>

          <h1
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            د. أيمن عبد العزيز <span style={{ color: "#E8742A" }}>نور</span>
          </h1>

          <p
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 400,
              marginBottom: 24,
            }}
          >
            سياسي، مفكر، صحفي، إعلامي
          </p>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.9,
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            أول مرشح رئاسي ينافس الرئيس مبارك في تاريخ مصر. مؤسس حزب الغد، رئيس اتحاد القوى الوطنية المصرية، ومالك قناة الشرق. أكثر من أربعة عقود من النضال السياسي من أجل مصر حرة ديمقراطية.
          </p>

          <div style={{ display: "flex", gap: 32, marginBottom: 36 }}>
            {[
              { num: "+40", label: "عاماً من النضال" },
              { num: "11", label: "كتاباً مؤلفاً" },
              { num: "3", label: "دورات برلمانية" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    color: "#E8742A",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#timeline"
              onClick={(e) => handleClick(e, "#timeline")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 50,
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#fff",
                background: "linear-gradient(135deg, #E8742A, #D05E18)",
                boxShadow: "0 4px 20px rgba(232,116,42,0.4)",
                cursor: "pointer",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fas fa-route" /> اكتشف المسيرة
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 50,
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#fff",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fas fa-envelope" /> تواصل معنا
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="hero-image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeInLeft 1s ease",
          }}
        >
          <div style={{ position: "relative", width: 380, height: 460 }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1A2D54, #15254A)",
                borderRadius: 20,
                border: "3px solid rgba(232,116,42,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src="/ayman-nour.png"
                alt="د. أيمن نور"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: 120,
                height: 120,
                border: "3px solid #E8742A",
                borderRadius: 12,
                opacity: 0.3,
                top: -20,
                right: -20,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 120,
                height: 120,
                border: "3px solid #E8742A",
                borderRadius: 12,
                opacity: 0.3,
                bottom: -20,
                left: -20,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom orange line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 4,
          background: "linear-gradient(90deg, transparent, #E8742A, transparent)",
        }}
      />
    </section>
  );
}
