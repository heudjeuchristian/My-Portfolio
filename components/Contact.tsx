import React, { useState } from 'react';
import { SOCIAL_ICONS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SendIcon from './icons/SendIcon';
import CheckIcon from './icons/CheckIcon';
import SpinnerIcon from './icons/SpinnerIcon';

const Contact: React.FC = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formspreeEndpoint = 'https://formspree.io/f/xpwyzzer';

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await response.json();
                if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                    setErrorMessage(data.errors.map((error: { message: string }) => error.message).join(', '));
                } else {
                    setErrorMessage(data.error || 'An unexpected error occurred while sending the message.');
                }
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Failed to send message. Please check your network connection.');
            setStatus('error');
        }
    };

    const renderFormContent = () => {
        if (status === 'success') {
            return (
                <div className="text-center flex flex-col items-center justify-center h-full animate-fade-in">
                    <CheckIcon className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white font-['Rajdhani',_sans-serif]">Message Sent!</h3>
                    <p className="text-slate-400 mt-2">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
            );
        }

        return (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-800/80 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition disabled:opacity-50" disabled={status === 'loading'} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-800/80 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition disabled:opacity-50" disabled={status === 'loading'} />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea name="message" id="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-slate-800/80 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition resize-none disabled:opacity-50" disabled={status === 'loading'}></textarea>
                </div>
                <div className="h-16 flex items-center">
                    {status === 'error' && (
                        <div className="w-full text-red-400 bg-red-900/30 border border-red-500/50 p-3 rounded-md text-sm text-center animate-fade-in">
                            <strong>Error:</strong> {errorMessage}
                        </div>
                    )}
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-fuchsia-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100">
                    {status === 'loading' ? (
                        <>
                            <SpinnerIcon className="animate-spin w-5 h-5 mr-3" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message <SendIcon className="w-5 h-5 ml-2" />
                        </>
                    )}
                </button>
            </form>
        );
    };

    return (
        <section id="contact" className="py-20 md:py-32 overflow-hidden">
            <div ref={ref} className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-['Rajdhani',_sans-serif] tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                      Get In Touch
                    </h2>
                    <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to connect? Drop me a message!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Info & Socials */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-['Rajdhani',_sans-serif]">Contact Information</h3>
                            <p className="text-slate-400">
                                I'm currently open to new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>
                        <div>
                             <h3 className="text-2xl font-bold text-white mb-4 font-['Rajdhani',_sans-serif]">Find me on Social Media</h3>
                             <div className="flex space-x-6">
                                {SOCIAL_ICONS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-300"
                                    >
                                       {React.cloneElement(social.icon, { className: 'w-8 h-8' })}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form or Success Message */}
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-lg shadow-2xl min-h-[520px] flex flex-col justify-center">
                       {renderFormContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;