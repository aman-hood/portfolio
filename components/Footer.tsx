"use client";

import { Code, Globe, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 text-center text-slate-600 dark:text-slate-400">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Aman<span className="text-primary-600">.dev</span>
        </h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 transition-all duration-300"
            aria-label="GitHub"
          >
            <Code className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
