import React from 'react';
import { Palette, Code2, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400 mb-4">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Where Design Meets Production-Ready Engineering
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-8">
            I eliminate the gap between creative concepts and scalable code. You don't need to hire a separate designer, frontend dev, and backend engineer, I build the entire pipeline from the first sketch to the final deployed application.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="group rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-900/5 dark:shadow-none transition-transform duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:shadow-2xl hover:shadow-fuchsia-500/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/20 mb-6 transition-all duration-300 group-hover:scale-105">
              <Palette className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Product Design & Prototyping</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-7">
              Crafting intuitive digital products focused on exceptional user experience, built with an engineering mindset so they transition flawlessly to code.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• High-fidelity Figma prototypes</li>
              <li>• Interactive user flows</li>
              <li>• Complete design systems & component libraries</li>
            </ul>
          </article>

          <article className="group rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-900/5 dark:shadow-none transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/20 mb-6 transition-all duration-300 group-hover:scale-105">
              <Code2 className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Full-Stack Web Development</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-7">
              Building ultra-fast, secure, and SEO-optimized web applications with robust backend systems capable of scaling with your business.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Production-ready Next.js & React architectures</li>
              <li>• Clean & typed TypeScript codebases</li>
              <li>• Seamless API integrations & database systems</li>
            </ul>
          </article>

          <article className="group rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-900/5 dark:shadow-none transition-transform duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 mb-6 transition-all duration-300 group-hover:scale-105">
              <Smartphone className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Mobile Apps</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-7">
              Developing high-performance, native-feeling mobile experiences for iOS and Android out of a single, highly maintainable codebase.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Fluid mobile UI animations</li>
              <li>• Offline data synchronization</li>
              <li>• Smooth deployment to App Stores</li>
            </ul>
          </article>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-900/5 dark:shadow-none">
            <h3 className="text-2xl font-semibold mb-4">Design & Logic</h3>
            <div className="grid gap-3 text-slate-600 dark:text-slate-300">
              <p>Figma, interactive prototypes, user journeys, component libraries, accessibility-first interfaces.</p>
              <p>Design systems built for scalability, modular layouts, visual hierarchy, and production handoff readiness.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-900/5 dark:shadow-none">
            <h3 className="text-2xl font-semibold mb-4">Development & Infra</h3>
            <div className="grid gap-3 text-slate-600 dark:text-slate-300">
              <p>Next.js, React, TypeScript, API architecture, database systems, authentication, and deployment automation.</p>
              <p>Performance tuning, CI/CD, cloud-ready hosting, monitoring, and end-to-end delivery with enterprise quality.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-800 px-8 py-12 shadow-2xl shadow-slate-900/10 dark:shadow-none">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-600">Let’s connect</p>
              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold text-white dark:text-slate-200 leading-tight">
                Have a project or a role that needs both technical execution and design taste?
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:from-fuchsia-400 hover:to-pink-400 hover:shadow-xl hover:shadow-fuchsia-500/40 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400"
            >
              Let's Build Together
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
