import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CodeIcon from './icons/CodeIcon';
import DeviceIcon from './icons/DeviceIcon';
import BrainIcon from './icons/BrainIcon';

const StrengthCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => {
    return (
         <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 font-['Rajdhani',_sans-serif]">{title}</h3>
            <p className="text-slate-400">{children}</p>
        </div>
    )
}

const About: React.FC = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-20 md:py-32 bg-black overflow-hidden">
            <div ref={ref} className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-['Rajdhani',_sans-serif] tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      About Me
                    </h2>
                    <p className="mt-4 text-xl text-slate-400">A little bit about my journey.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-24">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-fuchsia-500/50 animate-pulse">
                            <img
                                src="/me.png"
                                alt="Portrait of Heudjeu Mbelkeutchie Christian Steve"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 text-lg text-slate-300 space-y-6">
                        <p>
                            Hello! I'm Heudjeu Mbelkeutchie Christian Steve, a software engineer with a deep passion for building beautiful, functional, and scalable web applications. My journey into the world of code began with a fascination for how technology can solve real-world problems, and that curiosity continues to drive me every day.
                        </p>
                        <p>
                            I studied Software Engineering and am currently deepening my expertise by following online courses in Artificial Intelligence and Machine Learning, areas I'm incredibly passionate about.
                        </p>
                        <p>
                            With a strong foundation in both front-end and back-end development, I enjoy every aspect of the development process from architecting robust systems and designing intuitive user interfaces to writing clean, efficient code. I'm a lifelong learner, constantly exploring new technologies and frameworks to stay at the forefront of the industry.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new hiking trails, contributing to open-source projects, or diving into a good sci-fi novel. I believe that a balance between technical challenges and creative pursuits is key to innovation.
                        </p>
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StrengthCard icon={<DeviceIcon className="w-10 h-10 text-cyan-400" />} title="Responsive Design">
                        Crafting layouts that provide a seamless experience on any device, from mobile phones to desktops.
                    </StrengthCard>
                     <StrengthCard icon={<CodeIcon className="w-10 h-10 text-purple-400" />} title="Clean Code">
                        Prioritizing readable, maintainable, and efficient code based on industry best practices.
                    </StrengthCard>
                     <StrengthCard icon={<BrainIcon className="w-10 h-10 text-fuchsia-400" />} title="Problem Solving">
                        Adept at breaking down complex challenges into manageable solutions and thinking creatively.
                    </StrengthCard>
                </div>
            </div>
        </section>
    );
};

export default About;