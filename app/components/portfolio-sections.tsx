"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { mobileNavItems, navItems, projects, skills } from "./portfolio-data";
import { Icon, SectionTitle, Tag } from "./portfolio-ui";

function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next = saved === "light";
    document.documentElement.dataset.theme = next ? "light" : "dark";
  }, []);
  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    window.localStorage.setItem("theme", next ? "light" : "dark");
  }
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
    >
      <Icon>{light ? "dark_mode" : "light_mode"}</Icon>
    </button>
  );
}

export function Header() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#about" aria-label="Suraj Gaire home">
            <Image
              className="brand-logo"
              src="/SGLogo.png"
              alt="Suraj Gaire logo"
              width={38}
              height={38}
              priority
            />
            <span className="brand-name">
              suraj.gaire <i />
            </span>
          </a>
          <span className="availability">
            <i /> available for work
          </span>
          <nav aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a
              className="button button-outline desktop-only"
              href="mailto:suraj.gaire.03@gmail.com"
            >
              Request CV <Icon>mail</Icon>
            </a>
            <a className="button button-accent" href="#contact">
              Get in Touch
            </a>
            <span className="avatar">
              <Icon>person</Icon>
            </span>
          </div>
        </div>
      </header>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {mobileNavItems.map(([label, id, icon], index) => (
          <a className={index === 0 ? "active" : ""} key={id} href={`#${id}`}>
            <Icon>{icon}</Icon>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-copy">
        <span className="eyebrow">FULL STACK ENGINEER · NEPAL</span>
        <h1>
          Building systems that
          <br />
          <em>move ideas forward.</em>
        </h1>
        <p>
          I design and ship reliable web applications, from the first interface
          to the production cloud. Focused on clear architecture, thoughtful UX,
          and software that lasts.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View selected work <Icon>arrow_forward</Icon>
          </a>
          <a className="text-link" href="mailto:suraj.gaire.03@gmail.com">
            Let’s talk <Icon>arrow_outward</Icon>
          </a>
        </div>
        <div className="tech-strip">
          <span>STACK</span>
          {["Next.js", "Laravel", "AWS", "PostgreSQL", "Docker"].map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
      </div>
      <div className="code-composition">
        <div className="code-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <code>portfolio.config.ts</code>
          </div>
          <pre>
            <span className="muted">01</span> <b>const</b>{" "}
            <span className="purple">engineer</span> = {"{"}
            <br />
            <span className="muted">02</span> name:{" "}
            <span className="green">&quot;Suraj Gaire&quot;</span>,<br />
            <span className="muted">03</span> role:{" "}
            <span className="green">&quot;Full Stack Developer&quot;</span>,
            <br />
            <span className="muted">04</span> focus: [<br />
            <span className="muted">05</span>{" "}
            <span className="green">&quot;Product interfaces&quot;</span>,<br />
            <span className="muted">06</span>{" "}
            <span className="green">&quot;Reliable APIs&quot;</span>,<br />
            <span className="muted">07</span>{" "}
            <span className="green">&quot;Cloud infrastructure&quot;</span>
            <br />
            <span className="muted">08</span> ],
            <br />
            <span className="muted">09</span> cloud:{" "}
            <span className="green">&quot;AWS EC2 · S3 · Docker&quot;</span>
            <br />
            <span className="muted">10</span>
            {"}"};
          </pre>
        </div>
        <div className="status-row">
          <div>
            <i /> <small>CLUSTER</small>
            <b>Healthy</b>
          </div>
          <div>
            <Icon>bolt</Icon>
            <small>AWS REGION</small>
            <b>ap-south-1</b>
          </div>
          {/* <div>
            <Icon>speed</Icon>
            <small>SLA UPTIME</small>
            <b>99.98%</b>
          </div> */}
        </div>
        <div className="terminal">
          <span>
            <b>$</b> pnpm test:e2e --reporter=cloudwatch
          </span>
          <strong>PASS (142ms)</strong>
        </div>
      </div>
    </section>
  );
}

export function Metrics() {
  const items = [
    ["ROLE", "terminal", "Full Stack Dev", "Web, REST APIs & App Architecture"],
    [
      "CORE FOCUS",
      "bolt",
      "Web Apps & APIs",
      "Reliable, scalable, user-first engineering",
    ],
    [
      "CLOUD STACK",
      "cloud",
      "AWS Infrastructure",
      "EC2, S3, Nginx & Dockerized containers",
    ],
    ["CREDENTIAL", "verified"],
  ];
  return (
    <section className="metrics">
      {items.map(([label, icon, title, description]) => (
        <div key={label}>
          <small>{label}</small>
          <Icon>{icon}</Icon>
          <h3>
            {title}
            {label === "CREDENTIAL" && <mark>VERIFIED</mark>}
          </h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}

export function About() {
  const items = [
    [
      "devices",
      "Frontend Engineering",
      "Building responsive, accessible interfaces using React, Next.js, and Svelte. Focused on zero layout shifts, state isolation, and fine-tuned micro-interactions.",
      ["Component Systems", "Tailwind CSS", "TypeScript"],
    ],
    [
      "hub",
      "Full Stack Architecture",
      "End-to-end product development with structured RESTful APIs in Laravel or Node. Clean relational schema design, JWT/OAuth authentication, and idempotent payment webhooks.",
      ["Laravel", "PostgreSQL", "REST APIs"],
    ],
    [
      "dns",
      "Cloud & Deployment",
      "AWS infrastructure provisioning with EC2, S3 asset CDNs, automated SSL pipelines, hardened Nginx reverse proxies, and Docker containerization.",
      ["AWS EC2 / S3", "Docker", "Nginx Proxies"],
    ],
  ] as const;
  return (
    <section className="section">
      <SectionTitle
        eyebrow="01 // ABOUT"
        title="Developer by craft. Problem solver by mindset."
        description="I’m a software developer from Nepal who enjoys turning ideas and designs into reliable, user-friendly applications. My work spans frontend development, backend integration, application architecture, and cloud deployment."
      />
      <div className="card-grid three">
        {items.map(([icon, title, description, tags]) => (
          <article className="card" key={title}>
            <Icon>{icon}</Icon>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <SectionTitle
        eyebrow="02 // TOOLKIT"
        title="Tools I use to build and ship."
      />
      <div className="card-grid four">
        {skills.map(([title, icon, items]) => (
          <article className="card skill-card" key={title}>
            <h3>
              <Icon>{icon}</Icon>
              {title}
            </h3>
            {items.map((item) => {
              const [name, level] = item.split("|");
              return (
                <div className="skill" key={name}>
                  <span>{name}</span>
                  <b>{level}</b>
                </div>
              );
            })}
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`project-visual${featured ? " easyfiling" : ""}`}>
      <div className="mockup-top" />
      <div className="mockup-line wide" />
      <div className="mockup-line" />
      <div className="mockup-line short" />
      {featured && (
        <div className="mockup-check">
          <Icon>check_circle</Icon> Incorporation checklist <b>82%</b>
        </div>
      )}
    </div>
  );
}
export function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow="03 // PORTFOLIO"
        title="Some things I’ve built."
        description="Curated engineering case studies across legal tech, e-commerce, and healthcare."
      />
      <article className="project-feature card">
        <div>
          <span className="badge live">LIVE PRODUCT · PRODUCTION</span>
          <small>2024 – PRESENT</small>
          <h3>EasyFiling</h3>
          <p>
            A high-velocity platform for company formation, compliance tracking,
            and legal entity registration. Engineered a responsive Svelte
            application backed by Laravel REST endpoints, automated PDF document
            generation, and Stripe billing pipelines.
          </p>
          <div className="tags">
            {[
              "Svelte",
              "Laravel API",
              "Stripe Billing",
              "Tailwind CSS",
              "AWS S3",
            ].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <a
            className="text-link"
            href="https://easyfiling.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit easyfiling.com <Icon>arrow_outward</Icon>
          </a>
        </div>
        <ProjectVisual featured />
      </article>
      <div className="card-grid two project-grid">
        {projects.map((project) => (
          <article
            className={`card project-card ${project.color}`}
            key={project.name}
          >
            <ProjectVisual />
            <span className="eyebrow">{project.label}</span>
            <small>{project.stack}</small>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <a className="text-link project-link" href="#contact">
              Discuss a similar build <Icon>arrow_forward</Icon>
            </a>
          </article>
        ))}
      </div>
      <div className="card-grid two project-grid">
        <article className="card">
          <span className="eyebrow">CUSTOM PRINT ENGINE · E-COMMERCE</span>
          <h3>ThailiBag</h3>
          <p>
            Specialized B2B and retail ordering engine for custom eco-friendly
            bags with a live canvas print customizer, bulk quote calculator, and
            order tracking.
          </p>
          <div className="tags">
            <Tag>PHP / Laravel</Tag>
            <Tag>Canvas Customizer</Tag>
            <Tag>MySQL</Tag>
          </div>
        </article>
        <article className="card award">
          <span className="badge award-badge">
            <Icon>emoji_events</Icon> 2ND POSITION · PEOPLE’S CHOICE AWARD
          </span>
          <span className="eyebrow">NASA SPACE APPS CHALLENGE 2024</span>
          <h3>Omnietra</h3>
          <p>
            An interactive planetary data visualization application transforming
            astrophysical datasets and telemetry into accessible visual
            narratives.
          </p>
          <div className="tags">
            <Tag>NASA Open APIs</Tag>
            <Tag>Data Visualization</Tag>
            <Tag>JavaScript / WebGL</Tag>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Experience() {
  const roles = [
    [
      "Full Stack Developer",
      "Independent & Contract Engineering",
      "PRESENT",
      [
        "Architecting end-to-end web applications with Next.js, Svelte, and Laravel for startups and business clients.",
        "Designing relational schema models, index optimization, and secure API endpoints handling sensitive business data.",
        "Managing AWS cloud deployments, automated backups, and SSL/TLS proxy configurations with Nginx.",
      ],
      ["Next.js", "Svelte", "Laravel", "AWS Infrastructure"],
    ],
    [
      "Frontend Developer",
      "Codniv Innovations",
      "PREVIOUS · KATHMANDU",
      [
        "Built modular client-facing interfaces using React, JavaScript, and Tailwind CSS.",
        "Integrated REST APIs, handled asynchronous states, and resolved client-side cache issues.",
        "Refactored legacy components, reducing bundle weight and improving Lighthouse performance.",
      ],
      ["React", "Tailwind CSS", "REST Integration"],
    ],
  ] as const;
  return (
    <section className="section" id="experience">
      <SectionTitle
        eyebrow="04 // EXPERIENCE"
        title="Where I’ve contributed."
      />
      <div className="timeline">
        {roles.map(([title, company, period, bullets, tags]) => (
          <article className="timeline-item" key={title}>
            <i />
            <div className="card">
              <div className="experience-head">
                <div>
                  <h3>{title}</h3>
                  <span>{company}</span>
                </div>
                <small className={period === "PRESENT" ? "badge live" : ""}>
                  {period}
                </small>
              </div>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tags">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Cloud() {
  return (
    <section className="section" id="cloud">
      <article className="cloud-banner">
        <div>
          <span className="eyebrow">
            05 // INFRASTRUCTURE · <b className="mint">VERIFIED ARCHITECT</b>
          </span>
          <h2>Beyond the application layer.</h2>
          <p>
            Software shouldn’t just run on localhost. I design reliable cloud
            foundations: resilient EC2 instances, S3 asset buckets, Nginx SSL
            reverse-proxy configurations, and Docker container setups.
          </p>
          <div className="cloud-stats">
            {[
              ["COMPUTE", "EC2 · Lightsail"],
              ["STORAGE", "S3 · RDS Cloud"],
              [, "Nginx "],
              ["DEVOPS", "Docker · CI/CD"],
            ].map(([label, value]) => (
              <div key={label}>
                <small>{label}</small>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="credential">
          <Icon>verified_user</Icon>
          <h3>AWS Certified</h3>
          <p>Solutions Architect – Associate</p>
          <span>ID: SAA-C03 Verified</span>
        </div>
      </article>
    </section>
  );
}

export function Values() {
  const values = [
    [
      "01 // EMPATHY",
      "Build for people",
      "Software is only as good as the problem it solves. I prioritize crisp typography, snappy load speeds, keyboard accessibility, and intuitive experiences.",
    ],
    [
      "02 // SUSTAINABILITY",
      "Keep it maintainable",
      "Code is read ten times more often than it is written. I prefer boring, explicit architecture over clever, brittle abstractions.",
    ],
    [
      "03 // RIGOR",
      "Ship thoughtfully",
      "From database schema migrations to production deployment health checks, I treat resilience as a foundational requirement.",
    ],
  ];
  return (
    <section className="section">
      <SectionTitle eyebrow="06 // VALUES" title="Engineering principles." />
      <div className="card-grid three">
        {values.map(([eyebrow, title, description]) => (
          <article className="card principle" key={title}>
            <span className="eyebrow">{eyebrow}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      setStatus(response.ok ? "sent" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="section contact" id="contact">
      <div className="contact-copy">
        <SectionTitle
          eyebrow="07 // CONTACT"
          title="Let’s build something together."
        />
        <p>
          Whether you need an MVP built from scratch, a complex frontend
          refactored for speed, or a full stack web system deployed to AWS, I’m
          open to new contract projects and full-time opportunities.
        </p>
        <div className="availability-panel">
          <i />
          <div>
            <b>Available for Work & Consulting</b>
            <small>Based in Kathmandu · UTC +5:45 (Remote-friendly)</small>
          </div>
        </div>
        <a className="email-link" href="mailto:suraj.gaire.03@gmail.com">
          <Icon>mail</Icon>surajgaire.dev@gmail.com <Icon>arrow_outward</Icon>
        </a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/suraj-gaire/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/surajgaire14" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="form-card card">
        <h3>
          <Icon>send</Icon> Send a Direct Message
        </h3>
        <form onSubmit={submit}>
          <div className="form-row">
            <label>
              Your Name
              <input name="name" required placeholder="Jane Doe" />
            </label>
            <label>
              Email Address
              <input
                name="email"
                required
                type="email"
                placeholder="jane@company.com"
              />
            </label>
          </div>
          <label>
            Project Scope / Inquiries
            <select name="scope" defaultValue="Full Stack Web Application">
              <option>Full Stack Web Application</option>
              <option>Frontend Engineering</option>
              <option>Backend API</option>
              <option>AWS Infrastructure</option>
            </select>
          </label>
          <label>
            Message & Timeline
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your product, timeline, and current architectural challenges..."
            />
          </label>
          <button className="button button-accent" type="submit">
            {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent" : status === "error" ? "Try Again" : "Send Message"}{" "}
            <Icon>arrow_forward</Icon>
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <Image
          className="footer-logo"
          src="/SGLogo.png"
          alt="Suraj Gaire logo"
          width={52}
          height={52}
        />
        <span>Full Stack Systems</span>
        <small>
          <Icon>location_on</Icon> Kathmandu, Nepal
        </small>
        <small>© 2025 Suraj Gaire. All rights reserved.</small>
      </div>
      <div className="footer-right">
        <div>
          <a href="mailto:suraj.gaire.03@gmail.com">
            <Icon>alternate_email</Icon>
          </a>
          <a href="https://github.com/surajgaire14">
            <Icon>code</Icon>
          </a>
        </div>
        <small>Architected with Next.js & Geist</small>
      </div>
    </footer>
  );
}
