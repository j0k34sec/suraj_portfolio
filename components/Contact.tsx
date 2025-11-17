import React, { useState } from 'react';
import TerminalWindow from './TerminalWindow';
import { Github, Linkedin, Mail, Youtube, Loader2 } from 'lucide-react';
import { askAI } from '../services/geminiService';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Contact: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePromptSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        setResponse('');
        const aiResponse = await askAI(prompt);
        setResponse(aiResponse);
        setIsLoading(false);
        setPrompt('');
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <AnimatedSectionTitle text="[ Establish Connection ]" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-semibold mb-4 text-text-primary">Contact Channels</h3>
                        <p className="text-text-secondary mb-8">
                            Open for collaboration or inquiries. Feel free to connect via my professional networks or send a direct message.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://github.com/j0k34sec" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.1s' }}><Github size={32} /></a>
                            <a href="https://www.linkedin.com/in/suraj-mondal/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.7s' }}><Linkedin size={32} /></a>
                            <a href="https://www.youtube.com/@J0K34-official" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.4s' }}><Youtube size={32} /></a>
                            <a href="mailto:mondalsuraj745@gmail.com" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '1s' }}><Mail size={32} /></a>
                        </div>
                    </div>
                    
                    <TerminalWindow title="cypher_ai_assistant">
                        <p className="text-text-secondary mb-4">Ask my AI assistant 'Cypher' about my skills or projects.</p>
                        <form onSubmit={handlePromptSubmit}>
                            <div className="flex items-center border-b-2 border-accent/50 focus-within:border-accent transition-colors duration-300">
                                <span className="text-green-400 mr-2">$</span>
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="e.g., tell me about Project Sentinel"
                                    className="bg-transparent w-full text-text-primary focus:outline-none"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="ml-2 px-3 py-1 text-accent hover:bg-accent hover:text-primary transition-colors duration-300 rounded-sm w-16 h-8 flex items-center justify-center"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'SEND'}
                                </button>
                            </div>
                        </form>
                        { (isLoading || response) && (
                            <div className="mt-4 p-4 bg-primary/50 border border-accent/20 rounded-md max-h-48 overflow-y-auto">
                                {isLoading && <p className="text-accent animate-pulse">Cypher is thinking...</p>}
                                {response && <p className="text-text-secondary whitespace-pre-wrap">{response}</p>}
                            </div>
                        )}
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};

export default Contact;