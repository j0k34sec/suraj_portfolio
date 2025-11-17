
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group relative bg-secondary/80 border-2 border-accent/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-primary border border-accent/30 text-accent text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:scale-105">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-end gap-4 mt-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                            <ExternalLink className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSectionTitle text="[ Declassified Projects ]" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;