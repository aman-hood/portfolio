"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";

const categoryColors: Record<string, string> = {
  "Languages": "from-blue-500 to-cyan-500 shadow-blue-500/20",
  "Frontend": "from-pink-500 to-rose-500 shadow-pink-500/20",
  "Backend": "from-emerald-500 to-teal-500 shadow-emerald-500/20",
  "Database": "from-purple-500 to-indigo-500 shadow-purple-500/20",
  "Tools": "from-orange-500 to-amber-500 shadow-orange-500/20",
};

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and the tools I use to build scalable applications.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioData.skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon as any;
          const colorClass = categoryColors[skillGroup.category] || "from-primary-500 to-primary-600 shadow-primary-500/20";
          
          return (
            <motion.div
              key={skillGroup.category}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`p-3.5 rounded-xl bg-gradient-to-br ${colorClass} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
