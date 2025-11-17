import React, { useRef, useState, useEffect } from 'react';

interface AnimatedSectionTitleProps {
  text: string;
  className?: string;
}

const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({ text, className }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentTitleRef = titleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  const hasPromptSymbol = text.startsWith('$ ');
  const titleText = hasPromptSymbol ? text.substring(2) : text;
  const baseDelay = 100;

  return (
    <h2
      ref={titleRef}
      className={`font-bold text-accent ${className || 'text-4xl text-center mb-12'}`}
      aria-label={text}
    >
      {hasPromptSymbol && <span className="text-green-400 mr-2">$</span>}
      {titleText.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 ease-out"
          style={{
            transitionDelay: `${baseDelay + index * 50}ms`,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedSectionTitle;
