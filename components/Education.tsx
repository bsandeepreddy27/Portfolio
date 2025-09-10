import React from 'react';
import { EDUCATION } from '../constants';
import SectionWrapper from './SectionWrapper';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="relative border-l-2 border-slate-700 pl-8">
        {EDUCATION.map((item, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 mt-1.5 border-4 border-slate-900"></div>
            <p className="text-sm text-slate-500 mb-1">{item.period}</p>
            <h3 className="text-xl font-bold text-slate-100">{item.institution}</h3>
            <p className="text-md font-medium text-cyan-400">{item.degree}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
