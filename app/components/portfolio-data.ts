export const navItems = [
  ["About", "about"],
  ["Toolkit", "toolkit"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;
export const mobileNavItems = [
  ["Overview", "about", "dashboard"],
  ["Toolkit", "toolkit", "code"],
  ["Projects", "projects", "folder_open"],
  ["History", "experience", "history"],
  ["Cloud", "cloud", "cloud"],
  ["Contact", "contact", "alternate_email"],
] as const;

export const skills = [
  [
    "Frontend",
    "web",
    [
      "React / Next.js|Advanced",
      "Svelte & SvelteKit|Skilled",
      "TypeScript / JS|Advanced",
      "Tailwind CSS|Advanced",
      "Semantic HTML & CSS|Standard",
    ],
  ],
  [
    "Backend",
    "sync_alt",
    [
      "Laravel (PHP)|Advanced",
      "REST API Architecture|Advanced",
      "Node.js / Express|Skilled",
      "Auth & Session / JWT|Advanced",
      "Stripe & Webhooks|Skilled",
    ],
  ],
  [
    "Data & DevOps",
    "database",
    [
      "PostgreSQL / MySQL|Advanced",
      "AWS EC2, S3, RDS|Certified",
      "Docker Containers|Skilled",
      "Nginx Reverse Proxy|Skilled",
      "Prisma & Eloquent ORM|Advanced",
    ],
  ],
  [
    "Foundations",
    "architecture",
    [
      "Data Structures & Alg|Strong",
      "Web Vitals & Perf|95+ Scores",
      "Git CI/CD Actions|Standard",
      "SEO & OpenGraph|Audited",
      "Technical Documentation|Clean",
    ],
  ],
] as const;

export const projects = [
  {
    name: "Kalakaya",
    label: "Curated Art Commerce",
    stack: "Next.js · Stripe",
    description:
      "High-performance marketplace for verified South Asian contemporary artists with NextAuth, ISR, and custom checkout flows.",
    color: "indigo",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
  },
  {
    name: "Zeneva Health",
    label: "Healthcare Systems",
    stack: "Full Stack System",
    description:
      "Patient appointment scheduling and clinical records management with role-based access, SMS alerts, and encrypted storage.",
    color: "mint",
    tags: ["React", "Node.js", "Role-Based Auth"],
  },
] as const;
