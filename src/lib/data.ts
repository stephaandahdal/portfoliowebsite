export const personalInfo = {
  name: "Stephaan Dahdal",
  email: "sdahdal2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/stephaandahdal/",
  github: "https://github.com/stephaandahdal",
  titles: [
    "Computer Science Senior at ASU",
    "Entry-Level Software Engineer",
    "Web Development",
    "Database Systems",
    "Full-Stack Developer",
  ],
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
    "Fall 2023 Fulton Engineering Pitch Deck Competition Runner-Up",
  ],
  deansListSemesters: [
    { label: "Fall 2022", file: "/pdfs/deans-list/DeanF22.pdf" },
    { label: "Spring 2023", file: "/pdfs/deans-list/DeanS23.pdf" },
    { label: "Fall 2023", file: "/pdfs/deans-list/DeanF23.pdf" },
    { label: "Spring 2025", file: "/pdfs/deans-list/DeanS25.pdf" },
    { label: "Fall 2025", file: "/pdfs/deans-list/DeanF25.pdf" },
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
    title: "Programming Language Compiler & Interpreter",
    subtitle: "Compiler Engineering Project",
    description: [
      "Built a full compiler and VM interpreter for a C-like language in C++.",
      "Implemented a lexer and a recursive-descent parser to generate instruction-list IR.",
      "Added symbol-table memory mapping and control flow support (if/while/for/switch).",
      "Validated behavior with 60+ tests, including nested branching and loop edge cases.",
    ],
    tech: ["C++", "Compiler Design", "Data Structures", "Bash", "GCC"],
    github: "https://github.com/stephaandahdal/compiler-interpreter",
    period: "April 2025",
  },
  {
    title: "Chain of Custody CLI",
    subtitle: "Python Blockchain-style Evidence Tracker",
    description: [
      "Built a Python CLI to track digital evidence lifecycle events with tamper-evident block chaining.",
      "Secured case and evidence identifiers with AES encryption and SHA-256 hash-linked integrity checks.",
      "Implemented intake, check-in/out, removal, history queries, and ledger verification with state-transition validation.",
    ],
    tech: [
      "Python 3",
      "argparse",
      "AES (pycryptodome)",
      "SHA-256",
      "struct",
      "Data Integrity Validation",
    ],
    github: "https://github.com/stephaandahdal/chainofcustody",
    period: "Nov 2025",
  },
  {
    title: "Developer Portfolio Website",
    subtitle: "Personal Branding Web Project",
    description: [
      "Built a modern portfolio website to showcase projects, skills, and experience with a clean, responsive UI.",
      "Implemented reusable TypeScript-driven components and smooth interactive animations for a polished user experience.",
      "Improved discoverability with production-ready SEO metadata, sitemap, robots configuration, and social preview support.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    github: "https://github.com/stephaandahdal/portfoliowebsite",
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
    skills: ["Git", "GitHub Actions", "Cloudflare", "Vercel", "Linux", "UI/UX Design"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
