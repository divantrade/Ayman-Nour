import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/biography/Timeline";
import { GraduationCap, User, Briefcase, MapPin, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "السيرة الذاتية",
  description:
    "السيرة الذاتية الكاملة للدكتور أيمن نور — من الميلاد في المنصورة إلى قيادة المعارضة المصرية. خط زمني تفاعلي لأبرز المحطات.",
};

const personalInfo = [
  { icon: User, label: "الاسم الكامل", value: "أيمن عبد العزيز نور" },
  { icon: MapPin, label: "مكان الميلاد", value: "المنصورة، الدقهلية، مصر" },
  { icon: Briefcase, label: "المهنة", value: "سياسي، محامي، كاتب، إعلامي" },
  { icon: Heart, label: "التوجه السياسي", value: "ليبرالي إصلاحي" },
  { icon: MapPin, label: "الإقامة الحالية", value: "إسطنبول، تركيا" },
];

const education = [
  { degree: "بكالوريوس حقوق", institution: "جامعة المنصورة", year: "1985" },
  { degree: "دبلوم قانون دولي", institution: "", year: "" },
  { degree: "ماجستير فلسفة التاريخ السياسي", institution: "", year: "" },
  { degree: "دكتوراه تاريخ القانون", institution: "", year: "1995" },
];

export default function BiographyPage() {
  return (
    <>
      <PageHero
        title="السيرة الذاتية"
        subtitle="مسيرة نضال وعطاء امتدت لأكثر من أربعين عاماً في خدمة مصر وحريتها"
      />

      {/* Personal Info */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader title="البيانات الأساسية" />
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-off-white"
                >
                  <info.icon className="text-orange mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-text-secondary">{info.label}</p>
                    <p className="font-semibold text-text-primary">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Family */}
      <section className="py-16 bg-off-white">
        <Container>
          <SectionHeader title="الحياة الشخصية" />
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-text-primary mb-3 text-lg">العائلة</h3>
                <div className="space-y-3 text-text-secondary leading-relaxed">
                  <p>
                    <strong className="text-text-primary">والده:</strong> محامٍ بارز
                    وعضو سابق في مجلس الشعب المصري، ورث عنه أيمن نور شغف العمل
                    العام والدفاع عن الحقوق.
                  </p>
                  <p>
                    <strong className="text-text-primary">والدته:</strong> سيدة
                    فاضلة اشتهرت بمشاريعها الخيرية وخدمة المجتمع.
                  </p>
                  <p>
                    <strong className="text-text-primary">زوجته الأولى:</strong>{" "}
                    جميلة إسماعيل — إعلامية وناشطة سياسية بارزة، عاشا معاً عشرين
                    عاماً قبل أن ينفصلا.
                  </p>
                  <p>
                    <strong className="text-text-primary">زوجته الحالية:</strong>{" "}
                    دعاء حسن — مقدمة برنامج &quot;أنا الشعب&quot; على قناة الشرق.
                  </p>
                  <p>
                    <strong className="text-text-primary">الأبناء:</strong> له ولدان.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader title="التعليم والمؤهلات الأكاديمية" />
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-off-white border-r-4 border-orange"
                  >
                    <GraduationCap className="text-orange flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-text-primary">{edu.degree}</p>
                      <p className="text-sm text-text-secondary">
                        {edu.institution}
                        {edu.year && ` (${edu.year})`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-off-white">
        <Container>
          <SectionHeader
            title="الخط الزمني"
            subtitle="المحطات الرئيسية في مسيرة الدكتور أيمن نور من 1964 إلى 2026"
          />
          <Timeline />
        </Container>
      </section>
    </>
  );
}
