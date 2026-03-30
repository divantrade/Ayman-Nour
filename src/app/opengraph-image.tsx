import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "د. أيمن نور - سياسي، مفكر، مناضل من أجل الحرية";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F1E3D 0%, #1A2D54 100%)",
          fontFamily: "Arial, sans-serif",
          direction: "rtl",
        }}
      >
        {/* Orange accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#E8742A",
            display: "flex",
          }}
        />

        {/* Photo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 60,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ayman-nour-git-claude-build-ayman-nou-7047ef-mostaftys-projects.vercel.app/ayman-nour.png"
            alt=""
            width={280}
            height={340}
            style={{
              borderRadius: 20,
              border: "3px solid rgba(232,116,42,0.5)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            flex: 1,
            padding: "0 60px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                display: "flex",
              }}
            >
              د. أيمن{" "}
              <span style={{ color: "#E8742A", marginRight: 8 }}>نور</span>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#E8742A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 900,
              }}
            >
              ن
            </div>
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.3,
              textAlign: "right",
              display: "flex",
            }}
          >
            سياسي، مفكر، مناضل من أجل الحرية
          </div>

          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              marginTop: 16,
              textAlign: "right",
              display: "flex",
            }}
          >
            مؤسس حزب الغد | رئيس اتحاد القوى الوطنية | مالك قناة الشرق
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 32,
            }}
          >
            {[
              { num: "+40", label: "عاماً" },
              { num: "11", label: "كتاباً" },
              { num: "3", label: "دورات برلمانية" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    color: "#E8742A",
                    display: "flex",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orange accent line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#E8742A",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
