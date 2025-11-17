import React from 'react';
import TerminalWindow from './TerminalWindow';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <TerminalWindow title="suraj_mondal/about.sh">
          <AnimatedSectionTitle text="$ whoami" className="text-3xl font-bold text-accent mb-4" />
          <p className="text-text-secondary leading-relaxed mb-4">
            I am a dedicated and results-oriented Cybersecurity Analyst with a passion for deconstructing complex systems and uncovering security flaws. My journey into the world of cybersecurity began with a fascination for how things work—and more importantly, how they can be broken and subsequently fortified.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            With a proactive and analytical mindset, I specialize in both offensive and defensive security strategies. From simulating attacks as an ethical hacker to architecting robust defense mechanisms, I thrive in the dynamic, ever-evolving landscape of digital threats. My goal is to transform vulnerabilities into strengths and ensure the integrity and resilience of digital infrastructures.
          </p>
           <p className="text-text-primary leading-relaxed">
            <span className="text-green-400 mr-2">root@portfolio:</span>~# <span className="animate-pulse">|</span>
          </p>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default About;
