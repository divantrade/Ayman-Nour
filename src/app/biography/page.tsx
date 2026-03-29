import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/biography/Timeline";

export const metadata: Metadata = {
  title: "السيرة الذاتية",
  description: "السيرة الذاتية الكاملة للدكتور أيمن نور — من الميلاد في المنصورة إلى قيادة المعارضة المصرية.",
};

const personalInfo = [
  { icon: "fa-user", label: "الاسم الكامل", value: "أيمن عبد العزيز نور" },
  { icon: "fa-map-marker-alt", label: "مكان الميلاد", value: "المنصورة، الدقهلية، مصر" },
  { icon: "fa-briefcase", label: "المهنة", value: "سياسي، محامي، كاتب، إعلامي" },
  { icon: "fa-heart", label: "التوجه السياسي", value: "ليبرالي إصلاحي" },
  { icon: "fa-location-dot", label: "الإقامة الحالية", value: "إسطنبول، تركيا" },
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
        label="السيرة الذاتية"
        title="أكثر من أربعة عقود"
        subtitle="من اتحاد طلاب الثانوية إلى قيادة المعارضة المصرية في المنفى"
      />

      {/* Personal Info */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <SectionHeader label="البيانات" title="المعلومات الأساسية" />
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {personalInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-5 rounded-xl bg-off-white">
                  <div className="w-10 h-10 rounded-[10px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-orange flex-shrink-0">
                    <i className={`fas ${info.icon}`} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{info.label}</p>
                    <p className="font-semibold text-text-primary">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Family */}
      <section className="py-20 bg-gray-100">
        <div className="container-main">
          <SectionHeader label="العائلة" title="الحياة الشخصية" />
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-200">
              <div className="space-y-4 text-text-secondary leading-[1.8]">
                <p><strong className="text-text-primary">والده:</strong> محامٍ بارز وعضو سابق في مجلس الشعب المصري، ورث عنه أيمن نور شغف العمل العام والدفاع عن الحقوق.</p>
                <p><strong className="text-text-primary">والدته:</strong> سيدة فاضلة اشتهرت بمشاريعها الخيرية وخدمة المجتمع.</p>
                <p><strong className="text-text-primary">زوجته الأولى:</strong> جميلة إسماعيل — إعلامية وناشطة سياسية بارزة، عاشا معاً عشرين عاماً قبل أن ينفصلا.</p>
                <p><strong className="text-text-primary">زوجته الحالية:</strong> دعاء حسن — مقدمة برنامج &quot;أنا الشعب&quot; على قناة الشرق.</p>
                <p><strong className="text-text-primary">الأبناء:</strong> له ولدان.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <SectionHeader label="التعليم" title="المؤهلات الأكاديمية" />
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-off-white border-r-4 border-r-orange">
                  <div className="w-10 h-10 rounded-[10px] bg-[rgba(232,116,42,0.15)] flex items-center justify-center text-orange flex-shrink-0">
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{edu.degree}</p>
                    <p className="text-sm text-text-secondary">
                      {edu.institution}{edu.year && ` (${edu.year})`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-100">
        <div className="container-main">
          <SectionHeader
            label="المسيرة السياسية"
            title="أكثر من أربعة عقود"
            subtitle="من اتحاد طلاب الثانوية إلى قيادة المعارضة المصرية في المنفى"
          />
          <Timeline />
        </div>
      </section>
    </>
  );
}
