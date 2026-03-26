"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-primary-500/5 transition-all group relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-[0.02] group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <GraduationCap className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-white/90 rounded-xl p-2 border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <Image src={edu.logo} alt={`${edu.university} logo`} fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <span className="text-primary-600 dark:text-primary-400">{edu.university}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mt-6 text-slate-600 dark:text-slate-300">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
