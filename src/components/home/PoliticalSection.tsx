"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const cards = [
  {
    href: "/political/ghad",
    icon: "fa-sun",
    title: "حزب غد الثورة",
    description: "حزب ليبرالي معارض أسسه أيمن نور. يطرح رؤية إصلاحية شاملة تقوم على الديمقراطية والليبرالية وحقوق الإنسان. امتداد لحزب الغد الذي تأسس عام 2004.",
  },
  {
    href: "/political/ena",
    icon: "fa-handshake",
    title: "اتحاد القوى الوطنية المصرية",
    description: 'تأسس في 2021 ليمثل المعارضة المصرية. أطلق "وثيقة العشرين" التي تتضمن تجريم الانقلابات وإطلاق سراح المعتقلين وإصلاح النظام الاقتصادي.',
  },
  {
    href: "/political/adafp",
    icon: "fa-globe-africa",
    title: "التحالف الديمقراطي الأفريقي",
    description: "شارك في تأسيسه في فبراير 2026 بالدار البيضاء. يهدف لتوحيد الأحزاب الليبرالية والديمقراطية في أفريقيا وتعزيز قيم الحرية والتعددية.",
  },
  {
    href: "/political/ena",
    icon: "fa-scroll",
    title: "وثيقة العشرين",
    description: "برنامج عمل شامل للمرحلة القادمة يتضمن: تجريم الانقلابات، إصلاح اقتصادي، عدالة اجتماعية، إطلاق سجناء الرأي، وتجريم العنف والإرهاب.",
  },
];

export default function PoliticalSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="النضال السياسي"
          title="المشروع الوطني"
          subtitle="أحزاب وتحالفات ومبادرات من أجل مصر حرة ديمقراطية"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
              <Link href={card.href} className="no-underline block h-full">
                <div className="bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-orange h-full group">
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-[22px] text-orange mb-4">
                    <i className={`fas ${card.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.8]">
                    {card.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
