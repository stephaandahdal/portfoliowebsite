export const personalInfo = {
  name: "Stephaan Dahdal",
  email: "sdahdal2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/stephaandahdal/",
  github: "https://github.com/stephaandahdal",
  titles: ["Software Engineer", "Full-Stack Developer", "CS @ Arizona State"],
  bio: "I'm a Computer Science senior at Arizona State University's Ira A. Fulton Schools of Engineering, graduating May 2026 with a 3.9 GPA. I'm passionate about building full-stack web applications that solve real problems — from healthcare platforms to developer tools. I love crafting clean, performant user experiences with modern technologies.",
};

export const education = {
  school: "Arizona State University",
  department: "Ira A. Fulton Schools of Engineering",
  location: "Tempe, AZ",
  degree: "Bachelor of Science in Computer Science",
  gpa: "3.9",
  graduation: "May 2026",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Distributed Software Development",
    "Database Management",
    "Software Quality Assurance",
    "Web Development",
  ],
  awards: [
    "Dean's List (F22, S23, F23, S25, F25)",
    "F23 Fulton Engineering Pitch Deck Competition Runner-Up",
  ],
};

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github?: string;
  live?: string;
  period: string;
}

export const projects: Project[] = [
  {
    title: "Healthcare & Wellness Platform",
    subtitle: "Full-Stack Capstone Project",
    description: [
      "Designed a full-stack healthcare web application for tracking meals, symptoms, and health metrics.",
      "Developed responsive, accessible UI components with Svelte, TailwindCSS, and DaisyUI, including image uploads.",
      "Implemented secure authentication and role-based access control using Auth.js and server-side middleware.",
      "Collaborated using Git feature branches, pull requests, and code reviews.",
    ],
    tech: ["SvelteKit", "TailwindCSS", "DaisyUI", "Auth.js", "Cloudflare"],
    period: "Aug 2025 - Present",
  },
  {
    title: "Personal CV Website",
    subtitle: "Personal Project",
    description: [
      "A simple, responsive personal portfolio website showcasing experience, skills, and projects.",
      "Built with HTML, CSS, and JavaScript.",
      "Features smooth scroll animation, theme toggle, and optimized UI for speed.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/stephaandahdal/cvwebsite",
    period: "Feb 2026",
  },
];

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Benessere North",
    role: "Software Engineering Intern (Capstone)",
    location: "Ontario, CA (Remote)",
    period: "Aug 2025 - Present",
    type: "work",
    description: [
      "Developed a web app where users can directly receive doctor feedback about meal plans and health/pain metrics.",
      "Users can log meals, health metrics, pain scores, and view progress over time alongside doctoral guidance.",
      "HIPAA-aligned web app (mobile and desktop) using SvelteKit and TailwindCSS for both patients and providers.",
      "Designed encrypted data models, roles, meal/audit logging, and Cloudflare integration.",
    ],
  },
  {
    company: "AutoZone",
    role: "Customer Sales Expert",
    location: "Phoenix, AZ",
    period: "Jun 2024 - Present",
    type: "work",
    description: [
      "Assisted customers by diagnosing issues, strengthening problem-solving and communication skills.",
      "Collaborated with team members to prioritize tasks and efficient store operations in a fast-paced environment.",
      "Communicated technical information clearly to customers with varying levels of knowledge.",
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "Java", "JavaScript", "SQL", "C/C++", "C#"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Svelte", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Other",
    skills: ["Git", "GitHub Actions", "Cloudflare", "Linux", "UI/UX Design"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
