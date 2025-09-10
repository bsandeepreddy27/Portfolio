
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
            <span className="text-cyan-400 mr-4">#</span>
            {title}
            <span className="flex-grow h-px bg-slate-700 ml-6"></span>
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
