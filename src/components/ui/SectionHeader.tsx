"use client";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, light }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      {label && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          color: light ? "#F09048" : "#E8742A",
          fontSize: 14, fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 12,
        }}>
          <span style={{ width: 24, height: 2, background: "#E8742A", display: "inline-block" }} />
          {label}
          <span style={{ width: 24, height: 2, background: "#E8742A", display: "inline-block" }} />
        </div>
      )}
      <h2 style={{
        fontSize: 36,
        fontWeight: 800,
        marginBottom: 16,
        lineHeight: 1.3,
        color: light ? "#fff" : "#1A1D24",
      }}>
        {title}<span style={{ color: "#E8742A" }}>.</span>
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 16,
          color: light ? "rgba(255,255,255,0.6)" : "#4A4F5C",
          maxWidth: 600,
          margin: "0 auto",
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
