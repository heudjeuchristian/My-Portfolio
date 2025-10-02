

import React from 'react';
import type { Project, Skill, Experience } from './types';
import CodeIcon from './components/icons/CodeIcon';
import DatabaseIcon from './components/icons/DatabaseIcon';
import { ToolIcon } from './components/icons/ToolIcon';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedinIcon from './components/icons/LinkedinIcon';
import BrainIcon from './components/icons/BrainIcon';

export const SKILLS: { title: string; list: Skill[]; icon: React.ReactNode }[] = [
  {
    title: "Frontend",
    icon: <CodeIcon className="w-8 h-8 text-cyan-400" />,
    list: [
      { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-8 h-8" />, proficiency: 95 },
      { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />, proficiency: 90 },
      { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />, proficiency: 95 },
      { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line.svg" alt="Next.js" className="w-8 h-8" style={{ filter: "invert(1)" }}/>, proficiency: 85 },
      { name: "Tailwind CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-8 h-8" />, proficiency: 90 },
      { name: "HTML5", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />, proficiency: 98 },
      { name: "WordPress", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" alt="WordPress" className="w-8 h-8" />, proficiency: 70 },
    ],
  },
  {
    title: "Backend",
    icon: <CodeIcon className="w-8 h-8 text-purple-400" />,
    list: [
      { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />, proficiency: 85 },
      { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" className="w-8 h-8" style={{ filter: "invert(1)" }} />, proficiency: 80 },
      { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />, proficiency: 75 },
      { name: "PHP", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-8 h-8" />, proficiency: 65 },
      { name: "Appwrite", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg" alt="Appwrite" className="w-8 h-8" />, proficiency: 70 },
      { name: "C", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="w-8 h-8" />, proficiency: 60 },
      { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8" />, proficiency: 60 },
    ],
  },
  {
    title: "Databases",
    icon: <DatabaseIcon className="w-8 h-8 text-fuchsia-400" />,
    list: [
      { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />, proficiency: 80 },
      { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />, proficiency: 75 },
      { name: "Firebase", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-8 h-8" />, proficiency: 80 },
      { name: "Neon", icon: <img src="https://neon.tech/favicon.svg" alt="Neon" className="w-8 h-8" />, proficiency: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <ToolIcon className="w-8 h-8 text-indigo-400" />,
    list: [
      { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-8 h-8" />, proficiency: 95 },
      { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />, proficiency: 70 },
      { name: "Vite", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-8 h-8" />, proficiency: 85 },
      { name: "Illustrator", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" alt="Adobe Illustrator" className="w-8 h-8" />, proficiency: 60 },
      { name: "Canva", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-8 h-8" />, proficiency: 75 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainIcon className="w-8 h-8 text-green-400" />,
    list: [
      { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8" />, proficiency: 65 },
      { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-8 h-8" />, proficiency: 60 },
    ],
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Crypto Tracker Dashboard",
    description: "A responsive dashboard that displays real-time cryptocurrency data including prices, market caps, volume, and price changes using public APIs.",
    technologies: ["Next.js","TypeScript", "Tailwind CSS"],
    imageUrl: "crypto.png",
    liveUrl: "https://crypto-tracker-dashboard-chi.vercel.app/",
    repoUrl: "https://github.com/heudjeuchristian/Crypto-Tracker-Dashboard",
  },
  {
    title: "AI Budget Planner Platform",
    description: "An intelligent web app that uses AI to analyze spending and provide personalized budget recommendations and financial insights.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "/planner.png",
    liveUrl: "https://planner-delta-inky.vercel.app",
    repoUrl: "https://github.com/heudjeuchristian/planner",
  },
  {
    title: "Resume Builder",
    description: "A user-friendly tool to create professional resumes from various templates, with real-time preview and PDF export functionality.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    imageUrl: "/resume-builder.png",
    liveUrl: "https://resume-builder-tan-two.vercel.app",
    repoUrl: "https://github.com/heudjeuchristian/Resume-Builder",
  },
  {
    title: "Astra Security Code Scanner",
    description: "An AI-powered security assistant that analyzes code snippets to identify and suggest fixes for common vulnerabilities, helping developers write more secure code.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageUrl: "scanner.png",
    liveUrl: "https://security-code-scanner.vercel.app/",
    repoUrl: "https://github.com/heudjeuchristian/Security-Code-Scanner",
  },
  {
    title: "Recipe Finder",
    description: "An intelligent app that helps you find meals based on ingredients in your fridge and dietary needs like vegan or vegetarian.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Spoonacular API"],
    imageUrl: "chef.png",
    liveUrl: "https://recipe-generator-vert-theta.vercel.app/",
    repoUrl: "https://github.com/heudjeuchristian/recipe-generator",
  },
  {
    title: "AI Code Assistant",
    description: "An AI-powered assistant that helps developers explain, organize, and fix bugs in their code, boosting productivity.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageUrl: "code-assistant.png",
    liveUrl: "https://code-assistant-chi.vercel.app",
    repoUrl: "https://github.com/heudjeuchristian/Code-Assistant",
  }
];


export const EXPERIENCE: Experience[] = [
    {
        role: "Software Engineer & Head of IT Department",
        company: "Azoomar LLC",
        duration: "January 2024 - Present",
        description: [
            "Leading the IT department, overseeing all technological operations and strategy for a dynamic e-commerce marketplace.",
            "Architecting, developing, and deploying full-stack features for the Azoomar platform, a large-scale e-commerce marketplace.",
            "Making key architectural and technological decisions to ensure platform scalability, security, and peak performance.",
            "Managing the complete software development lifecycle, from conception and planning through to deployment and maintenance."
        ]
    },
    {
        role: "Full-stack Developer Intern",
        company: "Azoomar LLC",
        duration: "July 2023 - January 2024",
        description: [
            "Contributed to core feature development for the Azoomar e-commerce platform during a 6-month intensive internship.",
            "Gained hands-on experience in both frontend and backend development in a live, fast-paced production environment.",
            "Collaborated with the development team to debug critical issues and implement new functionalities.",
            "Assisted in building a scalable platform designed to handle significant user traffic and complex business logic."
        ]
    }
];


export const SOCIAL_LINKS = {
    github: "https://github.com/heudjeuchristian",
    linkedin: "https://www.linkedin.com/in/heudjeu-mbelkeutchie-christian-steve-a37a95280",
    email: "mailto:heudjeuchristian10@gmail.com",
};

export const SOCIAL_ICONS = [
    { href: SOCIAL_LINKS.github, icon: <GitHubIcon className="w-6 h-6" />, name: 'GitHub' },
    { href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon className="w-6 h-6" />, name: 'LinkedIn' },
];