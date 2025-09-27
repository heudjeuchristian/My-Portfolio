
import React from 'react';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="skills" className="py-20 md:py-32 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div ref={ref} className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-16">
                     <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-['Rajdhani',_sans-serif] tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      My Tech Stack
                    </h2>
                    <p className="mt-4 text-xl text-slate-400">Technologies I work with to bring ideas to life.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {SKILLS.map((category, index) => (
                        <div 
                            key={category.title} 
                            className="bg-slate-900/70 p-6 rounded-lg shadow-lg border border-slate-800"
                            style={{ transitionDelay: `${index * 100}ms`}}
                        >
                            <div className="flex items-center mb-6">
                                {category.icon}
                                <h3 className="text-2xl font-bold text-white ml-3 font-['Rajdhani',_sans-serif]">{category.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {category.list.map((skill) => (
                                    <li key={skill.name}>
                                        <div className="flex items-center mb-1">
                                            <div className="w-8 h-8 mr-3 flex-shrink-0">{skill.icon}</div>
                                            <span className="text-base font-medium text-slate-300 flex-grow">{skill.name}</span>
                                            {skill.proficiency && (
                                                <span className="text-sm font-medium text-slate-400">{skill.proficiency}%</span>
                                            )}
                                        </div>
                                        {skill.proficiency && (
                                            <div className="w-full bg-slate-700 rounded-full h-2.5 relative group">
                                                <div
                                                    className={`bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-2.5 rounded-full ${isVisible ? 'animate-fill-and-bounce' : 'w-0'}`}
                                                    style={isVisible ? { '--target-width': `${skill.proficiency}%` } as React.CSSProperties : {}}
                                                ></div>
                                                <div 
                                                    className="absolute -top-9 bg-slate-800 border border-slate-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                                                    style={{ left: `${skill.proficiency}%`, transform: 'translateX(-50%)' }}
                                                >
                                                    {skill.proficiency}%
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;