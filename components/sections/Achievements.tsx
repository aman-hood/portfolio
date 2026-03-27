"use client";

import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Key Achievements
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Milestones, awards, and significant contributions throughout my journey.
        </p>
      </div>

      <div className="max-w-[100vw] mx-auto relative group flex overflow-hidden">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee w-max hover:[animation-play-state:paused] py-4">
          {/* First set */}
          <div className="flex gap-6 pr-6">
            {portfolioData.achievements.map((item, index) => (
              <article
                key={`set1-${item.title}-${index}`}
                className="group/card bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all flex flex-col w-[280px] sm:w-[320px] shrink-0 h-full relative"
              >
                {item.image && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/20 group-hover/card:scale-105 transition-transform duration-500 pointer-events-none z-10"></div>
                    {item.link ? (
                       <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative z-20">
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                       </a>
                    ) : (
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 relative z-20" />
                    )}
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover/card:text-primary-600 dark:group-hover/card:text-primary-400 transition-colors">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-md">
                      {item.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Second set for infinite loop */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {portfolioData.achievements.map((item, index) => (
              <article
                key={`set2-${item.title}-${index}`}
                className="group/card bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all flex flex-col w-[280px] sm:w-[320px] shrink-0 h-full relative"
              >
                {item.image && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/20 group-hover/card:scale-105 transition-transform duration-500 pointer-events-none z-10"></div>
                    {item.link ? (
                       <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative z-20" tabIndex={-1}>
                         <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                       </a>
                    ) : (
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 relative z-20" />
                    )}
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover/card:text-primary-600 dark:group-hover/card:text-primary-400 transition-colors">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-md">
                      {item.date}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
