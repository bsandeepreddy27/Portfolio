
import React from 'react';
import { INTERNSHIPS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Internship Experience">
      <div className="relative border-l-2 border-slate-700 pl-8">
        {INTERNSHIPS.map((item, index) => (
          <div key={index} className="mb-12">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 mt-1.5 border-4 border-slate-900"></div>
            <p className="text-sm text-slate-500 mb-1">{item.period}</p>
            <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
            <p className="text-md font-medium text-cyan-400 mb-3">{item.company}</p>
            <p className="text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
