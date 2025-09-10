
import React from 'react';
import { SKILLS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
    // Mapping skill names to their brand-specific Tailwind CSS hover shadow color.
    // This adds a unique, branded flair to each skill card on interaction.
    const skillColorMap: { [key: string]: string } = {
        'C': 'hover:shadow-blue-500/40',
        'Python': 'hover:shadow-yellow-400/40',
        'Java': 'hover:shadow-orange-500/40',
        'JavaScript': 'hover:shadow-yellow-300/40',
        'TypeScript': 'hover:shadow-blue-400/40',
        'React.js': 'hover:shadow-cyan-400/40',
        'Node.js': 'hover:shadow-green-500/40',
        'Express.js': 'hover:shadow-slate-400/40',
        'Vite': 'hover:shadow-purple-500/40',
        'HTML5/CSS3': 'hover:shadow-orange-400/40',
        'MySQL': 'hover:shadow-blue-600/40',
        'MongoDB': 'hover:shadow-green-600/40',
        'Git & GitHub': 'hover:shadow-red-500/40',
        
        'VS Code': 'hover:shadow-blue-500/40',
        'AWS': 'hover:shadow-orange-500/40',
        'Azure': 'hover:shadow-blue-400/40',
    };

  return (
    <SectionWrapper id="skills" title="My Technical Skills">
      <div className="space-y-12">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-slate-200 mb-6">{category.title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <div 
                    key={skill.name} 
                    className={`
                        bg-slate-800/50 
                        rounded-lg 
                        p-4 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        gap-3
                        text-center
                        transition-all 
                        duration-300 
                        hover:-translate-y-1.5 
                        shadow-lg
                        ${skillColorMap[skill.name] || 'hover:shadow-slate-500/30'}
                    `}
                >
                    {skill.icon}
                    <span className="font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;