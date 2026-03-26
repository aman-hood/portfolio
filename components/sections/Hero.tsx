"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-transparent dark:from-primary-900/20 dark:via-transparent dark:to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              {portfolioData.hero.name}
              <span className="block text-slate-400 dark:text-slate-500 text-3xl md:text-5xl mt-2 font-bold">
                {portfolioData.hero.title}
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {portfolioData.hero.tagline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href={portfolioData.hero.cta.primary.href}
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl shadow-lg shadow-primary-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              {portfolioData.hero.cta.primary.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={portfolioData.hero.cta.secondary.href}
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 font-medium rounded-xl transition-all flex items-center justify-center"
            >
              {portfolioData.hero.cta.secondary.label}
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-100 dark:from-slate-900 to-transparent h-1/2 rounded-full blur-2xl z-0"></div>
            {/* Replace with actual Next.js Image component when you have an image */}
            <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative z-10 flex items-center justify-center">
               <img src={portfolioData.hero.image} alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-10 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20 animate-bounce delay-150">
              <span className="text-2xl">👋</span>
            </div>
            <div className="absolute bottom-10 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20 animate-bounce delay-300">
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
