import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Tv, Mic, Newspaper, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "الإعلام",
  description:
    "النشاط الإعلامي للدكتور أيمن نور — قناة الشرق الفضائية والمقابلات والتغطية الصحفية.",
};

const mediaSections = [
  {
    href: "/media/elsharq",
    icon: Tv,
    title: "قناة الشرق",
    description:
      "قناة فضائية مصرية معارضة تبث من إسطنبول. شعارها \"الحقيقة والأمل\". يملكها الدكتور أيمن نور منذ 2015.",
  },
  {
    href: "/media/interviews",
    icon: Mic,
    title: "المقابلات",
    description:
      "مقابلات مع كبرى المحطات والمؤسسات الإعلامية العربية والدولية — CFR، DAWN، CNN، الجزيرة وغيرها.",
  },
  {
    href: "/media/press",
    icon: Newspaper,
    title: "في الصحافة",
    description:
      "أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام العربية والدولية.",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="الإعلام"
        subtitle="قناة الشرق الفضائية والمقابلات والتغطية الإعلامية"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mediaSections.map((section, index) => (
              <FadeIn key={section.href} delay={index * 0.1}>
                <Link href={section.href} className="group block h-full">
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange/30 h-full flex flex-col text-center">
                    <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                      <section.icon className="text-orange" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-orange transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                      {section.description}
                    </p>
                    <span className="inline-flex items-center justify-center gap-2 text-orange text-sm font-semibold group-hover:gap-3 transition-all">
                      المزيد
                      <ArrowLeft size={16} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
