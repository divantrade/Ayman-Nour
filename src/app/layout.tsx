import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "د. أيمن نور — سياسي، مفكر، مناضل من أجل الحرية",
    template: "%s | د. أيمن نور",
  },
  description:
    "الموقع الرسمي للدكتور أيمن عبد العزيز نور — سياسي مصري معارض، مفكر ليبرالي، مؤسس حزب الغد، ورئيس اتحاد القوى الوطنية المصرية.",
  keywords: [
    "أيمن نور",
    "حزب الغد",
    "غد الثورة",
    "معارضة مصرية",
    "ليبرالية",
    "قناة الشرق",
    "Ayman Nour",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "د. أيمن نور",
    title: "د. أيمن نور — سياسي، مفكر، مناضل من أجل الحرية",
    description:
      "الموقع الرسمي للدكتور أيمن عبد العزيز نور — سياسي مصري معارض، مفكر ليبرالي، ومؤسس حزب الغد.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AymanNour",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Tajawal:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "أيمن عبد العزيز نور",
              alternateName: "Ayman Nour",
              jobTitle: "سياسي ومفكر ليبرالي",
              nationality: "مصري",
              birthDate: "1964",
              birthPlace: "المنصورة، مصر",
              sameAs: [
                "https://twitter.com/AymanNour",
                "https://facebook.com/dr.Aymannour",
              ],
            }),
          }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden", maxWidth: "100vw" }}>
        <Navbar />
        <main style={{ flex: 1, overflowX: "hidden" }}>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
