"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-white dark:bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all"
          >
            <div className="p-4 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-xl shadow-sm">
              {cert.logo ? (
                <img 
                  src={cert.logo} 
                  alt={`${cert.organization} logo`} 
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <Award className="w-8 h-8" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                {cert.organization}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {cert.date}
              </p>
            </div>
            
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label={`View ${cert.title} certificate`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
