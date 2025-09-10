# Bobbili Sandeep Reddy - Personal Portfolio

This is a personal portfolio website built with React, TypeScript, and Vite, designed to showcase projects, skills, and professional experience. It's styled with Tailwind CSS for a modern, responsive, and clean user interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Customizing Your Portfolio](#customizing-your-portfolio)
  - [1. Update Personal Information](#1-update-personal-information)
  - [2. Add Your Avatar](#2-add-your-avatar)
  - [3. Add Your Resume](#3-add-your-resume)
  - [4. Update Skill Icons](#4-update-skill-icons)
- [Available Scripts](#available-scripts)
- [Deployment to Vercel](#deployment-to-vercel)
- [Project Structure](#project-structure)

## Features

-   **Modern UI/UX:** Clean, responsive design built with Tailwind CSS.
-   **Interactive Elements:** Smooth scrolling, hover effects, and animations.
-   **Component-Based:** Built with React for a modular and maintainable codebase.
-   **Typed Codebase:** TypeScript for robust, error-free development.
-   **Easy to Customize:** Centralized content management in a single file.
-   **Sections:** Home, About, Education, Projects, Skills, Experience, Certifications, and a functional Contact form.
-   **Resume Download:** Simple and secure resume download functionality.

## Tech Stack

-   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js) or any other package manager like [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Customizing Your Portfolio

All the portfolio content is managed in one central file, making it incredibly easy to personalize.

### 1. Update Personal Information

Open the `constants.ts` file. This file contains all the text content for your portfolio. Simply edit the exported constants (`PERSONAL_INFO`, `EDUCATION`, `PROJECTS`, `SKILLS`, etc.) to replace the placeholder data with your own.

```typescript
// file: constants.ts

// Update your personal details
export const PERSONAL_INFO = {
  name: "Your Name",
  initials: "YN",
  avatarUrl: "/avatar.png", // Points to public/avatar.png
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },
};

// Update your projects, skills, experience, etc.
export const PROJECTS: Project[] = [
    //... your projects here
];
```

### 2. Add Your Avatar

Place your profile picture in the `public/` directory and name it `avatar.png`. If you use a different filename, make sure to update the `avatarUrl` in `constants.ts`.

### 3. Add Your Resume

Place your resume PDF in the `public/` directory and name it `Resume.pdf`. The download button is already configured to fetch this file.

### 4. Update Skill Icons

The portfolio uses local images for some skill icons (e.g., MySQL, MongoDB, AWS). To add or change these:
1.  Place the new image file (e.g., `MySkill.png`) inside the `public/` directory.
2.  In `components/icons.tsx`, create or update the corresponding icon component to use an `<img>` tag pointing to your new file.
    ```tsx
    export const MySkillIcon: React.FC<{ className?: string }> = ({ className }) => (
        <img src="/MySkill.png" alt="My Skill" className={className} />
    );
    ```
3.  Use this new icon component in the `SKILLS` array within `constants.ts`.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally to preview it before deployment.

## Deployment to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket).

2.  **Sign up or log in to your Vercel account.**

3.  **Create a "New Project"** and import the Git repository you just pushed to.

4.  **Configure the project:** Vercel will automatically detect that you are using Vite and configure the build settings. The default settings should work perfectly:
    -   **Build Command:** `vite build` or `npm run build`
    -   **Output Directory:** `dist`
    -   **Install Command:** `npm install`

5.  **Deploy!** Vercel will build and deploy your site. The `vercel.json` file is already included in the repository to handle client-side routing correctly.

## Project Structure

```
.
├── public/                 # Static assets (images, resume.pdf, icons)
│   ├── avatar.png
│   ├── MongoDb.png
│   ├── MySql.png
│   ├── Resume.pdf
│   └── ...
├── src/
│   ├── components/         # Reusable React components
│   │   ├── About.tsx
│   │   ├── Header.tsx
│   │   ├── icons.tsx
│   │   └── ...
│   ├── App.tsx             # Main application component
│   ├── constants.ts        # Centralized portfolio content
│   ├── index.tsx           # Application entry point
│   └── types.ts            # TypeScript type definitions
├── .gitignore
├── index.html              # Main HTML file
├── package.json
├── README.md               # This file
├── tsconfig.json
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts
```
