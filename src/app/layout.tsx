import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "د. أيمن نور — سياسي ومفكر ليبرالي مصري",
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
    title: "د. أيمن نور — سياسي ومفكر ليبرالي مصري",
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
