"use client";

import { ExternalLink, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SectionWrapper } from "../SectionWrapper";
import Image from "next/image";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and problem-solving abilities.
        </p>
      </div>

      <div className="max-w-[100vw] mx-auto relative flex overflow-hidden">
        <div className="flex animate-marquee w-max hover:[animation-play-state:paused] py-4">
          {/* First set */}
          <div className="flex gap-6 pr-6">
            {portfolioData.projects.map((project, index) => (
              <article
                key={`set1-${project.title}-${index}`}
                className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all flex flex-col w-[320px] sm:w-[380px] shrink-0 h-full relative"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/40 group-hover:scale-105 transition-transform duration-500"></div>
                  )}
                  
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                      aria-label="GitHub Repository"
                    >
                      <Code className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Second set for infinite loop */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {portfolioData.projects.map((project, index) => (
              <article
                key={`set2-${project.title}-${index}`}
                className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all flex flex-col w-[320px] sm:w-[380px] shrink-0 h-full relative"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/40 group-hover:scale-105 transition-transform duration-500"></div>
                  )}
                  
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      aria-label="Live Demo"
                      tabIndex={-1}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                      aria-label="GitHub Repository"
                      tabIndex={-1}
                    >
                      <Code className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
