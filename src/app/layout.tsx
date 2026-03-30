import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "د. أيمن نور - سياسي، مفكر، مناضل من أجل الحرية",
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
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "د. أيمن نور",
    title: "د. أيمن نور - سياسي، مفكر، مناضل من أجل الحرية",
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
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
