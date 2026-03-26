"use client";

import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";
import { FileDown, Code, Globe, Coffee } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-200 dark:bg-slate-800 relative z-10">
               {/* @ts-ignore */}
               {portfolioData.about.image ? (
                 <img 
                   src={portfolioData.about.image} 
                   alt="About Me" 
                   className="w-full h-auto hover:scale-105 transition-transform duration-500"
                 />
               ) : (
                 <div className="w-full aspect-square flex items-center justify-center p-8 bg-gradient-to-br from-primary-500/10 to-primary-600/20">
                    <Code className="w-32 h-32 text-primary-500/50" />
                 </div>
               )}
            </div>
            
            {/* Stats overlay */}
            {/* <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg grid grid-cols-2 gap-4 z-20">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">2+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Years Exp</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Projects</p>
              </div>
            </div> */}
          </div>
          
          <div className="md:col-span-7">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Passionate developer seeking to build robust web solutions.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {portfolioData.about.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-medium rounded-lg transition-colors"
                download="Aman_Kumar_CV.pdf"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
