import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse } from '../services/geminiService';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import SpinnerIcon from './icons/SpinnerIcon';
import BrainIcon from './icons/BrainIcon';
import { marked } from 'marked';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: "Hello! My name is Bob, and I'm an AI assistant for this portfolio. Feel free to ask me anything about Christian's skills, projects, or experience." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const responseText = await getChatbotResponse(input);
            const aiMessage: Message = { sender: 'ai', text: responseText };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            const errorMessage: Message = { sender: 'ai', text: "Sorry, I couldn't connect to the AI assistant. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-fuchsia-500/40 focus:outline-none z-50"
                aria-label="Toggle AI Chatbot"
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatIcon className="w-8 h-8" />}
            </button>

            <div className={`fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[70vh] sm:h-[60vh] bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl shadow-fuchsia-500/20 flex flex-col transition-all duration-500 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Header */}
                <div className="flex-shrink-0 p-4 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex items-center">
                        <BrainIcon className="w-6 h-6 mr-3 text-fuchsia-400" />
                        <h3 className="text-lg font-bold text-white font-['Rajdhani',_sans-serif]">Bob</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Messages */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0"><BrainIcon className="w-5 h-5 text-fuchsia-400" /></div>}
                            <div className={`max-w-[80%] p-3 rounded-2xl text-white ${msg.sender === 'user' ? 'bg-fuchsia-600 rounded-br-none' : 'bg-slate-800 rounded-bl-none'}`}>
                                {msg.sender === 'user' ? (
                                    <p className="text-sm">{msg.text}</p>
                                ) : (
                                    <div 
                                        className="text-sm chatbot-message"
                                        dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }} 
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-end gap-2 justify-start">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0"><BrainIcon className="w-5 h-5 text-fuchsia-400" /></div>
                            <div className="max-w-[80%] p-3 rounded-2xl bg-slate-800 rounded-bl-none text-white">
                                <div className="flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex-shrink-0 p-4 border-t border-slate-700">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about my projects..."
                            className="flex-grow bg-slate-800 border border-slate-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading} className="bg-fuchsia-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity disabled:opacity-50">
                            {isLoading ? <SpinnerIcon className="w-5 h-5 animate-spin" /> : <SendIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;