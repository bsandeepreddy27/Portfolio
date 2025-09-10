import React from 'react';

export interface Project {
  title: string;
  stack: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Certification {
    title: string;
    issuer: string;
    year: number;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}
