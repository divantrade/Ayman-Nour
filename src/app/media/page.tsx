import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "الإعلام",
  description: "النشاط الإعلامي للدكتور أيمن نور — قناة الشرق والمقابلات والتغطية الصحفية.",
};

const mediaSections = [
  { href: "/media/elsharq", icon: "fa-tv", title: "قناة الشرق", description: 'قناة فضائية مصرية معارضة تبث من إسطنبول. شعارها "الحقيقة والأمل". يملكها الدكتور أيمن نور منذ 2015.' },
  { href: "/media/interviews", icon: "fa-microphone", title: "المقابلات", description: "مقابلات مع كبرى المحطات والمؤسسات الإعلامية العربية والدولية — CFR، DAWN، CNN، الجزيرة وغيرها." },
  { href: "/media/press", icon: "fa-newspaper", title: "في الصحافة", description: "أرشيف ما كُتب عن الدكتور أيمن نور في وسائل الإعلام العربية والدولية." },
];

export default function MediaPage() {
  return (
    <>
      <PageHero label="الإعلام" title="النشاط الإعلامي" subtitle="قناة الشرق الفضائية والمقابلات والتغطية الإعلامية" />
      <section className="py-20 bg-off-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mediaSections.map((section, index) => (
              <FadeIn key={section.href} delay={index * 0.1}>
                <Link href={section.href} className="group block h-full no-underline">
                  <div className="bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-orange h-full flex flex-col text-center">
                    <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-[22px] text-orange mx-auto mb-5">
                      <i className={`fas ${section.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">{section.title}</h3>
                    <p className="text-sm text-text-secondary leading-[1.8] flex-1 mb-4">{section.description}</p>
                    <span className="text-orange text-[13px] font-semibold">المزيد <i className="fas fa-arrow-left mr-1" /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
