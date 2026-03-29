import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Flag, Users, Globe, ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "النضال السياسي",
  description: "مسيرة النضال السياسي للدكتور أيمن نور — حزب غد الثورة، اتحاد القوى الوطنية، والتحالف الديمقراطي الأفريقي.",
};

const sections = [
  {
    href: "/political/ghad",
    icon: Flag,
    title: "حزب غد الثورة",
    description: "من حزب الغد 2004 إلى غد الثورة 2011 — مسيرة الحزب الليبرالي الإصلاحي الأول في مصر.",
    color: "bg-orange/10",
  },
  {
    href: "/political/ena",
    icon: Users,
    title: "اتحاد القوى الوطنية المصرية",
    description: "أكبر تحالف للمعارضة المصرية، تأسس 2021. أيمن نور رئيساً. وثيقة العشرين للإصلاح الشامل.",
    color: "bg-blue-50",
  },
  {
    href: "/political/adafp",
    icon: Globe,
    title: "التحالف الديمقراطي الأفريقي",
    description: "تأسس فبراير 2026 في الدار البيضاء — رؤية لدعم الديمقراطية والليبرالية في القارة الأفريقية.",
    color: "bg-green-50",
  },
  {
    href: "/political/pegasus",
    icon: ShieldAlert,
    title: "قضية بيغاسوس وبريداتور",
    description: "أول حالة موثقة عالمياً لاستخدام برنامجي تجسس حكوميين على هاتف واحد — توثيق وكشف.",
    color: "bg-red-50",
  },
];

export default function PoliticalPage() {
  return (
    <>
      <PageHero
        title="النضال السياسي"
        subtitle="أكثر من أربعين عاماً من النضال من أجل حرية مصر وديمقراطيتها"
      />

      <section className="py-16 bg-off-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <FadeIn key={section.href} delay={index * 0.1}>
                <Link href={section.href} className="group block h-full">
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange/30 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-xl ${section.color} flex items-center justify-center mb-5`}>
                      <section.icon className="text-orange" size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-orange transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                      {section.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-orange text-sm font-semibold group-hover:gap-3 transition-all">
                      اقرأ المزيد
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
