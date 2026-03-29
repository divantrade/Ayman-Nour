"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="relative py-5">
      {/* Central line */}
      <div className="timeline-line" />

      <div className="space-y-10">
        {timelineEvents.map((event, index) => {
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
                      ? "border-r-0 md:border-r-0 md:border-l-4 border-r-4 md:border-l-orange border-r-orange"
                      : "border-r-4 border-r-orange"
                  }`}
                >
                  <span className="inline-block bg-gradient-to-br from-orange to-orange-dark text-white px-3.5 py-1 rounded-full text-[13px] font-bold mb-2.5">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-2">{event.title}</h3>
                  <p className="text-sm text-text-secondary leading-[1.8]">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute right-[11px] md:right-1/2 md:translate-x-1/2 top-6 w-5 h-5 bg-orange border-4 border-off-white rounded-full z-[2]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
