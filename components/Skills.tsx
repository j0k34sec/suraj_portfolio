import React from 'react';
import TerminalWindow from './TerminalWindow';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory } from '../types';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <TerminalWindow title="usr/bin/skills">
          <AnimatedSectionTitle text="$ ./list_skills --all" className="text-3xl font-bold text-accent mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category: SkillCategory) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold text-accent mb-4 border-b-2 border-accent/30 pb-2">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-200">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Skills;
