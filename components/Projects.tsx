import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectCard: React.FC<{ project: Project; isVisible: boolean; index: number }> = ({ project, isVisible, index }) => {
    return (
        <div 
            className={`bg-slate-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 group flex flex-col ${isVisible ? 'animate-fade-in-zoom' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Rajdhani',_sans-serif]">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-800/50">
                    <p className="text-sm font-semibold text-slate-400 mb-3">Key Technologies:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-slate-800 text-fuchsia-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-300 flex items-center font-medium"
                            >
                                <ExternalLinkIcon className="w-5 h-5 mr-2" /> Live Demo
                            </a>
                        )}
                         {project.repoUrl && project.repoUrl !== '#' && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-300 flex items-center font-medium"
                            >
                                <GitHubIcon className="w-5 h-5 mr-2" /> Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="projects" className="py-20 md:py-32 bg-black overflow-hidden">
            <div ref={ref} className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-['Rajdhani',_sans-serif] tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      My Projects
                    </h2>
                    <p className="mt-4 text-xl text-slate-400">A selection of my work.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} isVisible={isVisible} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;