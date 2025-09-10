// =============================================================================
// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// =============================================================================
// To update your personal info, projects, skills, etc., just edit the
// corresponding sections below.
// =============================================================================

import React from 'react';
import { Project, SkillCategory, ExperienceItem, Certification, EducationItem } from './types';
import { CIcon, PythonIcon, JavaIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, NodeIcon, MongoDbIcon, MySqlIcon, GitIcon, AwsIcon, AzureIcon, ExpressIcon, ViteIcon, HtmlCssIcon, VsCodeIcon } from './components/icons';

// =============================================================================
// PERSONAL INFORMATION
// This object contains all your personal details. Update it to reflect
// your information across the entire portfolio.
// =============================================================================
export const PERSONAL_INFO = {
  name: "BOBBILI SANDEEP REDDY",
  initials: "B. SANDEEP REDDY",
  avatarUrl: "https://avatars.githubusercontent.com/bsandeepreddy27",
  email: "bsandeepreddy27@gmail.com",
  socials: {
    github: "https://github.com/bsandeepreddy27",
    linkedin: "https://www.linkedin.com/in/bobbili-sandeep-reddy-b00744230/",
  },
};

// =============================================================================
// EDUCATION SECTION
// This data is used to populate the new Education section.
// =============================================================================
export const EDUCATION: EducationItem[] = [
  {
    institution: 'KGReddy College of Engineering & Technology, Hyderabad',
    degree: 'B.Tech, Computer Science Engineering',
    period: '2021–2025',
  },
  {
    institution: 'Gayathri Junior College, Hyderabad',
    degree: 'Intermediate',
    period: '2019–2021',
  },
  {
    institution: 'Bhashyam High School, Hyderabad',
    degree: 'SSC',
    period: '2018–2019',
  },
];


// =============================================================================
// PROJECTS SECTION
// To add a new project, copy an existing object and fill in your details.
// - title: The name of your project.
// - stack: The technologies used (comma-separated).
// - description: A brief explanation of the project.
// - githubUrl: The link to the project's GitHub repository.
// - liveUrl: (Optional) The link to the live demo. If you don't have one, you can remove this line.
// =============================================================================
export const PROJECTS: Project[] = [
  {
    title: "AI Object Identifier",
    stack: "React, TypeScript, Google Gemini API",
    description: "Built a React + TypeScript web app using the Google Gemini API for real-time object recognition, image analysis, and conversational Q&A with camera integration.",
    githubUrl: "https://github.com/bsandeepreddy27/Object-Identifier.git",
    liveUrl: "https://object-identifier-three.vercel.app/"
  },
  {
    title: "Metal Price Tracker",
    stack: "React, Vite, MetalPriceAPI",
    description: "Developed a React + Vite web app to track live prices of Gold, Silver, Platinum, and Palladium with search functionality, MetalPriceAPI integration, and secure API key management.",
    githubUrl: "https://github.com/bsandeepreddy27/metal-price.git",
    liveUrl: "https://fluffy-kitsune-649b45.netlify.app/"
  },
  {
    title: "Procurement & Vendor Payment Portal",
    stack: "Django, MySQL",
    description: "Designed and developed a comprehensive portal for NEEPCO to digitize and streamline procurement processes, vendor payments, and reporting functionalities.",
    githubUrl: "https://github.com/bsandeepreddy27/neepco.git"
  },
  {
    title: "Differentiated Case-Flow Management",
    stack: "Automation",
    description: "Engineered an automated system for legal case handling workflows, significantly enhancing efficiency and minimizing manual effort for legal professionals.",
    githubUrl: "https://github.com/bsandeepreddy27/iomp.git",
  },
];


// =============================================================================
// SKILLS SECTION
// To add a new skill, add it to the appropriate category's `skills` array.
// - name: The name of the skill.
// - icon: A React component for the skill's icon. You can find existing icons
//         in `components/icons.tsx` or add new ones.
// =============================================================================
export const SKILLS: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "C", icon: React.createElement(CIcon, { className: "w-12 h-12" }) },
            { name: "Python", icon: React.createElement(PythonIcon, { className: "w-12 h-12" }) },
            { name: "Java", icon: React.createElement(JavaIcon, { className: "w-12 h-12" }) },
            { name: "JavaScript", icon: React.createElement(JavaScriptIcon, { className: "w-12 h-12" }) },
            { name: "TypeScript", icon: React.createElement(TypeScriptIcon, { className: "w-12 h-12" }) },
        ],
    },
    {
        title: "Web Development",
        skills: [
            { name: "React.js", icon: React.createElement(ReactIcon, { className: "w-12 h-12" }) },
            { name: "Node.js", icon: React.createElement(NodeIcon, { className: "w-12 h-12" }) },
            { name: "Express.js", icon: React.createElement(ExpressIcon, { className: "w-12 h-12" }) },
            { name: "Vite", icon: React.createElement(ViteIcon, { className: "w-12 h-12" }) },
            { name: "HTML5/CSS3", icon: React.createElement(HtmlCssIcon, { className: "w-12 h-12" }) },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: React.createElement(MySqlIcon, { className: "w-10 h-5" }) },
            { name: "MongoDB", icon: React.createElement(MongoDbIcon, { className: "w-20 h-9" }) },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git & GitHub", icon: React.createElement(GitIcon, { className: "w-12 h-12" }) },
            { name: "VS Code", icon: React.createElement(VsCodeIcon, { className: "w-12 h-12" }) },
            { name: "AWS", icon: React.createElement(AwsIcon, { className: "w-12 h-12" }) },
            { name: "Azure", icon: React.createElement(AzureIcon, { className: "w-12 h-12" }) },
        ],
    },
];

// =============================================================================
// INTERNSHIPS (EXPERIENCE) SECTION
// To add a new internship, copy an existing object and fill in your details.
// - role: Your title during the internship.
// - company: The name of the company.
// - period: The duration of the internship.
// - description: A short summary of what you did and learned.
// =============================================================================
export const INTERNSHIPS: ExperienceItem[] = [
    {
        role: "MERN Stack Internship",
        company: "EY GDS & AICTE (Remote)",
        period: "Feb–Mar 2025",
        description: "Gained hands-on experience in full-stack development using MongoDB, Express.js, React, and Node.js to build and deploy web applications."
    },
    {
        role: "Web Development Internship",
        company: "Zidio Development (Remote)",
        period: "Jan–Mar 2025",
        description: "Contributed to front-end development projects, enhancing user interfaces and implementing new features using modern web technologies."
    },
    {
        role: "Product Design Internship",
        company: "Remote",
        period: "8 Weeks",
        description: "Participated in the end-to-end product design lifecycle, from user research and wireframing to prototyping and usability testing."
    },
    {
        role: "Rural Internship Program",
        company: "Community Engagement",
        period: "Self-paced",
        description: "Engaged with local communities to promote digital literacy and support various development initiatives through technology."
    }
];


// =============================================================================
// CERTIFICATIONS SECTION
// To add a new certification, copy an existing object and fill in your details.
// - title: The name of the certification.
// - issuer: Who issued the certification.
// - year: The year you received it.
// =============================================================================
export const CERTIFICATIONS: Certification[] = [
    { title: "Cloud Skill Challenge (Azure AI Fundamentals)", issuer: "Microsoft Learn Student Ambassadors", year: 2025 },
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: 2023 },
    { title: "Python Full Stack Development", issuer: "Industry Program", year: 2023 },
    { title: "DBMS Certification", issuer: "Mind Luster", year: 2024 },
];
