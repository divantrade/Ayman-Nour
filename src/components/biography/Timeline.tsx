"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineEvents } from "@/data/timeline";
import { ChevronDown } from "lucide-react";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative py-8">
      {/* Central line */}
      <div className="timeline-line" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative flex items-center ${
                isEven
                  ? "md:flex-row-reverse md:text-right"
                  : "md:flex-row md:text-right"
              } flex-row`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } mr-12 md:mr-0`}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                  className="w-full text-right bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange/30 cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-bold mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-orange transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform mt-1 flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-text-secondary text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">
                          {event.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Dot */}
              <div className="absolute right-[17px] md:right-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-orange border-4 border-white shadow-md z-10" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
