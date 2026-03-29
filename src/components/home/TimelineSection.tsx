"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const timelineItems = [
  { year: "1980", title: "بداية النشاط السياسي", desc: "انتُخب رئيساً لاتحاد طلاب المدارس الثانوية في مصر وعمره 16 عاماً فقط" },
  { year: "1985", title: "التخرج والصحافة", desc: "تخرّج من كلية الحقوق بجامعة المنصورة وبدأ العمل الصحفي في جريدة الوفد" },
  { year: "1995", title: "أصغر نائب في البرلمان", desc: "انتُخب عضواً في مجلس الشعب عن دائرة باب الشعرية وكان أصغر النواب سناً (31 عاماً)" },
  { year: "2004", title: "تأسيس حزب الغد", desc: "أسّس حزب الغد كحزب ليبرالي معارض يطرح رؤية إصلاحية شاملة لمستقبل مصر" },
  { year: "2005", title: "لحظة تاريخية فارقة", desc: "أول مرشح ينافس مبارك في انتخابات رئاسية مباشرة. حلّ ثانياً. اعتُقل وحُكم عليه بالسجن 5 سنوات" },
  { year: "2009", title: "الإفراج بضغط دولي", desc: "أُفرج عنه بعد أكثر من 3 سنوات، في خطوة اعتُبرت محاولة لتحسين العلاقات مع إدارة أوباما" },
  { year: "2013", title: "المنفى", desc: "غادر مصر بعد الانقلاب العسكري واستقر في إسطنبول. يواصل نضاله من الخارج" },
  { year: "2015", title: "قناة الشرق", desc: 'تولى ملكية قناة الشرق الفضائية المعارضة. شعارها: "الحقيقة والأمل"' },
  { year: "2021", title: "اتحاد القوى الوطنية", desc: "انتُخب رئيساً لاتحاد القوى الوطنية المصرية. كشف Citizen Lab عن اختراق هاتفه ببيغاسوس وبريداتور" },
  { year: "2026", title: "التحالف الديمقراطي الأفريقي", desc: "شارك في تأسيس التحالف الديمقراطي الأفريقي من أجل الحرية والتقدم في الدار البيضاء" },
];

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gray-100" id="timeline">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="المسيرة السياسية"
          title="أكثر من أربعة عقود"
          subtitle="من اتحاد طلاب الثانوية إلى قيادة المعارضة المصرية في المنفى"
        />

        <div className="relative py-5">
          {/* Central line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start ${
                    isOdd ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isOdd ? "md:mr-auto" : "md:ml-auto"
                    } mr-10 md:mr-0`}
                  >
                    <div
                      className={`bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${
                        isOdd
                          ? "border-r-4 md:border-r-0 md:border-l-4 border-r-orange md:border-l-orange"
                          : "border-r-4 border-r-orange"
                      }`}
                    >
                      <span className="inline-block bg-gradient-to-br from-orange to-orange-dark text-white px-3.5 py-1 rounded-full text-[13px] font-bold mb-2.5">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-sm text-text-secondary leading-[1.8]">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute right-[11px] md:right-1/2 md:translate-x-1/2 top-6 w-5 h-5 bg-orange border-4 border-off-white rounded-full z-[2]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
