
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{
    href: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}> = ({ href, children, onClick, className = '', style }) => (
    <li>
        <a
            href={href}
            onClick={onClick}
            style={style}
            className={`block py-2 px-3 text-slate-300 rounded hover:bg-slate-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-400 md:p-0 transition-colors duration-300 font-['Rajdhani',_sans-serif] tracking-wider text-lg ${className}`}
        >
            {children}
        </a>
    </li>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsOpen(false);
    };
    
    const navLinks = [
        { href: '#about', text: 'About' },
        { href: '#experience', text: 'Experience' },
        { href: '#skills', text: 'Skills' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-fuchsia-500/10' : 'bg-transparent'}`}>
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                    <span
                        className="self-center text-2xl font-bold whitespace-nowrap text-white font-['Rajdhani',_sans-serif] tracking-widest animate-fade-in-down"
                        style={{ animationDelay: '100ms', opacity: 0 }}
                    >
                        HMCS
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="animate-fade-in-down"
                                style={{ animationDelay: `${200 + index * 100}ms`, opacity: 0 }}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
