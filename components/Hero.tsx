import React from 'react';
import DownloadIcon from './icons/DownloadIcon';

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
            <div className="text-center z-10 p-4">
                <h1
                    className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-600 animate-fade-in-down font-['Rajdhani',_sans-serif] drop-shadow-[0_0_10px_rgba(167,87,255,0.4)]"
                    style={{ animationDelay: '200ms', opacity: 0 }}
                >
                    Hello, I'm Heudjeu M. Christian Steve
                </h1>
                <p
                    className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up"
                    style={{ animationDelay: '400ms', opacity: 0 }}
                >
                    A passionate Software Engineer who transforms complex problems into elegant, user-friendly digital solutions.
                </p>
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
                    style={{ animationDelay: '600ms', opacity: 0 }}
                >
                    <a
                        href="#projects"
                        onClick={handleScrollToProjects}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-fuchsia-500/30 w-full sm:w-auto"
                    >
                        View My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Heudjeu_M_Christian_Steve_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border-2 border-slate-400 hover:border-fuchsia-400 text-slate-300 hover:text-fuchsia-400 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 duration-300 ease-in-out w-full sm:w-auto"
                    >
                        <DownloadIcon className="w-5 h-5 mr-3" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;