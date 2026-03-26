"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Work Experience
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>
            
            <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 md:left-1/2 md:top-6 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 border-4 border-white dark:border-slate-950 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow relative">
                <div className="flex items-center gap-4 mb-2">
                  {/* @ts-ignore - Adding logo dynamically */}
                  {exp.logo ? (
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden shrink-0">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain p-1.5" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-primary-600 dark:text-primary-400">{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                
                <ul className="space-y-2 mt-4 text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Spacer for empty side */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
