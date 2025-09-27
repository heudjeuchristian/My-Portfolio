import React from 'react';
import { EXPERIENCE } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import BriefcaseIcon from './icons/BriefcaseIcon';
import type { Experience } from '../types';

const TimelineItem: React.FC<{ experience: Experience, isLast: boolean, index: number }> = ({ experience, isLast, index }) => {
    const isOdd = index % 2 !== 0;

    return (
        <div className={`relative lg:flex ${isOdd ? 'lg:flex-row-reverse' : ''} ${!isLast ? 'pb-12' : ''}`}>
            {/* Spacer for desktop view */}
            <div className="hidden lg:block w-1/2"></div>
            
            {/* Timeline Dot */}
            <div className="z-10 flex items-center justify-center w-11 h-11 bg-slate-800 rounded-full ring-4 ring-slate-900 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2">
                <BriefcaseIcon className="w-6 h-6 text-fuchsia-400" />
            </div>
            
            {/* Mobile Timeline Line */}
            {!isLast && <div className="absolute left-[22px] top-2 h-full w-0.5 bg-slate-700 lg:hidden"></div>}

            {/* Content Card */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)]">
                <p className="text-sm font-semibold text-slate-400 mb-1">{experience.duration}</p>
                <h3 className="text-xl font-bold text-white font-['Rajdhani',_sans-serif]">{experience.role}</h3>
                <p className="text-md font-medium text-cyan-400 mb-4">{experience.company}</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                    {experience.description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="experience" className="py-20 md:py-32 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div ref={ref} className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-['Rajdhani',_sans-serif] tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      Work Experience
                    </h2>
                    <p className="mt-4 text-xl text-slate-400">My professional journey so far.</p>
                </div>
                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 top-2 h-full w-0.5 bg-slate-700 -translate-x-1/2"></div>
                    
                    {EXPERIENCE.map((exp, index) => (
                        <TimelineItem key={index} experience={exp} isLast={index === EXPERIENCE.length - 1} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;