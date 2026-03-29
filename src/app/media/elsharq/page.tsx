import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { programs } from "@/data/programs";
import { Tv, Calendar, MapPin, User } from "lucide-react";

export const metadata: Metadata = {
  title: "قناة الشرق",
  description:
    "قناة الشرق الفضائية — قناة مصرية معارضة تبث من إسطنبول. شعارها الحقيقة والأمل.",
};

export default function ElsharqPage() {
  return (
    <>
      <PageHero
        title="قناة الشرق"
        subtitle="الحقيقة والأمل — قناة فضائية مصرية معارضة تبث من إسطنبول"
      />

      {/* About */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <Calendar className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">تاريخ الإطلاق</p>
                    <p className="font-semibold">25 أبريل 2014</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <MapPin className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">مقر البث</p>
                    <p className="font-semibold">إسطنبول، تركيا</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-off-white rounded-xl">
                  <User className="text-orange" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">المالك</p>
                    <p className="font-semibold">د. أيمن نور (منذ 2015)</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                قناة الشرق هي قناة فضائية مصرية معارضة، انطلقت في 25 أبريل 2014
                وتبث من إسطنبول. يملكها الدكتور أيمن نور منذ أغسطس 2015. تحمل
                شعار &quot;الحقيقة والأمل&quot; وتقدم تغطية إخبارية وبرامج سياسية
                واجتماعية تُعد من أبرز المنابر الإعلامية للمعارضة المصرية.
              </p>
            </FadeIn>

            {/* Live embed placeholder */}
            <FadeIn>
              <div className="bg-navy rounded-2xl aspect-video flex items-center justify-center mb-12">
                <div className="text-center text-white/50">
                  <Tv size={64} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">البث المباشر</p>
                  <p className="text-sm mt-2">
                    سيتم تضمين البث المباشر من يوتيوب هنا
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="py-16 bg-off-white">
        <Container>
          <SectionHeader
            title="البرامج"
            subtitle="باقة متنوعة من البرامج السياسية والاجتماعية"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <FadeIn key={program.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-orange/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
                    <Tv className="text-orange" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {program.name}
                  </h3>
                  <p className="text-orange text-sm font-semibold mb-3">
                    {program.presenter}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
