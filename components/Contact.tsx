import React from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <AnimatedSectionTitle text="[ Establish Connection ]" />
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-text-primary">Contact Channels</h3>
                    <p className="text-text-secondary mb-8">
                        Open for collaboration or inquiries. Feel free to connect via my professional networks or send a direct message.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/j0k34sec" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.1s' }}><Github size={32} /></a>
                        <a href="https://www.linkedin.com/in/suraj-mondal/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.7s' }}><Linkedin size={32} /></a>
                        <a href="https://www.youtube.com/@J0K34-official" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '0.4s' }}><Youtube size={32} /></a>
                        <a href="mailto:mondalsuraj745@gmail.com" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 animate-icon-flicker" style={{ animationDelay: '1s' }}><Mail size={32} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;