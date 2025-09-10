import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
        <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 text-slate-400 space-y-4 text-lg">
                <p>
                    Hello! I'm Sandeep Reddy, a passionate Computer Science graduate with a strong inclination towards building robust and user-friendly web applications. My journey into technology started with a fascination for problem-solving, which has evolved into a career focused on leveraging the MERN stack, Python, and Java to create impactful digital experiences.
                </p>
                <p>
                    Throughout my academic and internship experiences, I've had the opportunity to work on diverse projects—from an AI-powered object identifier to a comprehensive procurement portal. These experiences have honed my technical abilities and taught me the importance of collaboration and clean code.
                </p>
                <p>
                    I am driven by a desire to continuously learn and adapt in the ever-evolving tech landscape. I'm currently seeking an entry-level role where I can contribute my skills and grow as a software engineer.
                </p>
            </div>
            <div className="md:col-span-2 relative group w-full max-w-xs mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img 
                    src={PERSONAL_INFO.avatarUrl} 
                    alt="Bobbili Sandeep Reddy" 
                    className="relative w-full rounded-lg shadow-xl"
                />
            </div>
        </div>
    </SectionWrapper>
  );
};

export default About;