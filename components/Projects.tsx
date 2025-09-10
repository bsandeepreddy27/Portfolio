
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import SectionWrapper from './SectionWrapper';
import { ExternalLinkIcon, GithubIcon } from './icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/10">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
        <div className="flex items-center space-x-4 text-slate-400">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <GithubIcon className="w-6 h-6" />
            </a>
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    <ExternalLinkIcon className="w-6 h-6" />
                </a>
            )}
        </div>
      </div>
      <p className="text-slate-400 mb-4">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 text-sm">
      {project.stack.split(',').map((tech, index) => (
        <span key={index} className="bg-slate-700 text-cyan-300 px-3 py-1 rounded-full">
          {tech.trim()}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Things I've Built">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
