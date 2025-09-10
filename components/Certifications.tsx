
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-cyan-500">
            <h3 className="text-lg font-bold text-slate-100">{cert.title}</h3>
            <p className="text-slate-400">{cert.issuer} - {cert.year}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
