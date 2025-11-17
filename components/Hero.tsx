
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const title = "Suraj Mondal";
    const subtitle = "Cybersecurity Analyst & Ethical Hacker_";
    const [displayedSubtitle, setDisplayedSubtitle] = useState('');
    const [subtitleCursor, setSubtitleCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        setDisplayedSubtitle(''); // Reset on component mount
        const typingInterval = setInterval(() => {
            if (i < subtitle.length - 1) { // Type until the underscore
                setDisplayedSubtitle(prev => prev + subtitle.charAt(i));
                i++;
            } else {
                setDisplayedSubtitle(subtitle.slice(0, -1)); // Show full subtitle without underscore
                clearInterval(typingInterval);
            }
        }, 100);

        const cursorInterval = setInterval(() => {
            setSubtitleCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/80 z-10"></div>

            <div className="container mx-auto px-6 text-center z-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent/90 mb-4">
                    {title.split('').map((char, index) => (
                        <span key={index}
                            className="inline-block animate-title-flicker"
                            style={{ animationDelay: `${Math.random() * 2}s` }}>
                            {char === ' ' ? ' ' : char}
                        </span>
                    ))}
                </h1>
                <p className="text-xl md:text-2xl text-text-primary mb-8 font-mono">
                    {displayedSubtitle}
                    <span className={`transition-opacity duration-100 ${subtitleCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
                </p>
                <p className="max-w-3xl mx-auto text-text-secondary">
                    Securing digital frontiers by identifying vulnerabilities and neutralizing threats before they strike. Welcome to my command center.
                </p>
                 <a href="#projects" onClick={handleSmoothScroll} className="mt-8 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-accent-dark transition-transform duration-300 transform hover:scale-105">
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;