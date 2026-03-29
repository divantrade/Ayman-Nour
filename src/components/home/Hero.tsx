"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy via-navy-mid to-navy-light flex items-center relative overflow-hidden pt-[70px]">
      {/* Background effects */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 80%, rgba(232,116,42,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,116,42,0.05) 0%, transparent 50%)"
      }} />
      <div className="hero-pattern" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center relative z-[2]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(232,116,42,0.15)] border border-[rgba(232,116,42,0.3)] px-4 py-1.5 rounded-full text-orange-light text-[13px] font-semibold mb-6">
            <i className="fas fa-circle text-[10px]" />
            مناضل من أجل الحرية والديمقراطية
          </div>

          <h1 className="text-[42px] md:text-[52px] font-black text-white leading-[1.2] mb-2">
            د. أيمن عبد العزيز <span className="text-orange">نور</span>
          </h1>

          <p className="text-[22px] text-white/70 font-normal mb-6">
            سياسي، مفكر، صحفي، إعلامي
          </p>

          <p className="text-base text-white/60 leading-[1.9] mb-8 max-w-[520px]">
            أول مرشح رئاسي ينافس الرئيس مبارك في تاريخ مصر. مؤسس حزب الغد، رئيس اتحاد القوى الوطنية المصرية، ومالك قناة الشرق. أكثر من أربعة عقود من النضال السياسي من أجل مصر حرة ديمقراطية.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-9">
            {[
              { number: "+40", label: "عاماً من النضال" },
              { number: "11", label: "كتاباً مؤلفاً" },
              { number: "3", label: "دورات برلمانية" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-orange leading-none">
                  {stat.number}
                </div>
                <div className="text-xs text-white/50 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/biography"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline bg-gradient-to-br from-orange to-orange-dark text-white shadow-[0_4px_20px_rgba(232,116,42,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(232,116,42,0.5)] transition-all"
            >
              <i className="fas fa-route" /> اكتشف المسيرة
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] no-underline bg-transparent border-2 border-white/30 text-white hover:border-orange hover:bg-[rgba(232,116,42,0.1)] transition-all"
            >
              <i className="fas fa-envelope" /> تواصل معنا
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[380px] h-[460px]">
            <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy-mid rounded-[20px] border-[3px] border-[rgba(232,116,42,0.3)] flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="text-center text-white/40">
                <i className="fas fa-user text-[80px] mb-4 block" />
                <p className="text-sm">صورة الدكتور أيمن نور</p>
              </div>
            </div>
            {/* Accent corners */}
            <div className="absolute -top-5 -right-5 w-[120px] h-[120px] border-[3px] border-orange rounded-xl opacity-30" />
            <div className="absolute -bottom-5 -left-5 w-[120px] h-[120px] border-[3px] border-orange rounded-xl opacity-30" />
          </div>
        </motion.div>
      </div>

      {/* Bottom orange line */}
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-transparent via-orange to-transparent" />
    </section>
  );
}
