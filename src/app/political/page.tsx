import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "النضال السياسي",
  description: "مسيرة النضال السياسي للدكتور أيمن نور — حزب غد الثورة واتحاد القوى الوطنية والتحالف الديمقراطي الأفريقي.",
};

const sections = [
  { href: "/political/ghad", icon: "fa-sun", title: "حزب غد الثورة", description: "حزب ليبرالي معارض أسسه أيمن نور. يطرح رؤية إصلاحية شاملة تقوم على الديمقراطية والليبرالية وحقوق الإنسان." },
  { href: "/political/ena", icon: "fa-handshake", title: "اتحاد القوى الوطنية المصرية", description: 'تأسس في 2021 ليمثل المعارضة المصرية. أطلق "وثيقة العشرين" التي تتضمن تجريم الانقلابات وإطلاق سراح المعتقلين.' },
  { href: "/political/adafp", icon: "fa-globe-africa", title: "التحالف الديمقراطي الأفريقي", description: "شارك في تأسيسه في فبراير 2026 بالدار البيضاء. يهدف لتوحيد الأحزاب الليبرالية والديمقراطية في أفريقيا." },
  { href: "/political/pegasus", icon: "fa-shield-halved", title: "قضية بيغاسوس وبريداتور", description: "أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف واحد — توثيق وكشف." },
];

export default function PoliticalPage() {
  return (
    <>
      <PageHero label="النضال السياسي" title="المشروع الوطني" subtitle="أحزاب وتحالفات ومبادرات من أجل مصر حرة ديمقراطية" />
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <FadeIn key={section.href} delay={index * 0.1}>
                <Link href={section.href} className="group block h-full no-underline">
                  <div className="bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-orange h-full">
                    <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-[22px] text-orange mb-4">
                      <i className={`fas ${section.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-orange transition-colors">{section.title}</h3>
                    <p className="text-sm text-text-secondary leading-[1.8]">{section.description}</p>
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
