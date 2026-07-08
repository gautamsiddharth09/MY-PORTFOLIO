import { useMemo, useState } from "react";
import gg2 from "../src/assets/gg2.jpg.jpg";
import invoiceImg from "../src/assets/invoiceImg.png";
import supportIq from "../src/assets/supportIq.png";
import ecommerce from "../src/assets/ecommerce.png";
import youtube from "../src/assets/youtube.png";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiTool,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";

import "./App.css";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const trustLogos = [
  {
    name: "GitHub",
    link: "https://github.com/gautamsiddharth09",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gautam-kumar-b4052b9b",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/GautamSingh_21/",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "JavaScript",
      "Moment.js",
      "Chart.js",
      "Axios",
      "Framer Motion",
      "Tailwind",
      "Bootstrap",
    ],
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "JWT",
      "Authentication",
      "REST API",
      "Socket.IO",
      "bcrypt",
      "Nodemailer",
      "CORS",
      "Multer",
    ],
  },

  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Firebase"],
  },
  {
    title: "Database",
    items: [
      "OpenAI",
      "Gemini",
      "Prompt Eng.",
      "LLMs",
      "MCP",
      "Function Calling",
      "JSON Output",
      "AI Automation",
      "RAG",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Render",
      "Vercel",
      "Netlify",
    ],
  },
];
const services = [
  {
    icon: <FiCode />,
    title: "Full Stack Web Development",
    description: "End-to-end applications with React, Node.js and MongoDB.",
    features: ["Modern UI", "Secure API", "Production-ready"],
  },
  {
    icon: <FiLayout />,
    title: "React Frontend Development",
    description: "Clean, responsive and accessible user interfaces.",
    features: ["Component Design", "Performance", "SEO Friendly"],
  },
  {
    icon: <FiDatabase />,
    title: "REST API Development",
    description: "Robust backend services and authentication flows.",
    features: ["JWT Authentication", "Data Validation", "Scalable APIs"],
  },
  {
    icon: <FiTool />,
    title: "Bug Fixing",
    description: "Fast fixes with clear communication and reliability.",
    features: ["Issue Analysis", "Debugging", "Regression Testing"],
  },
  {
    icon: <FiZap />,
    title: "Website Optimization",
    description: "Faster loading, better performance, and improved UX.",
    features: ["Core Web Vitals", "Code Optimization", "Asset Compression"],
  },
  {
    icon: <FiBarChart2 />,
    title: "Dashboard Development",
    description: "Data-driven dashboards with polished, premium layouts.",
    features: ["Admin Panels", "Charts & Tables", "Realtime Updates"],
  },
];

const projectCards = [
  {
    id: "ai-invoice",
    title: "AI Invoice Generator",
    category: "Full Stack",
    image: invoiceImg,
    status: "Live",
    tagline: "Smart invoicing with automated document generation.",
    description:
      "A productivity platform for SaaS businesses to create invoices, manage clients and automate recurring billing.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    metrics: ["Code quality", "Responsive", "Authentication"],
    problem: "Manual invoicing creates delays and inconsistent billing.",
    solution:
      "A polished dashboard with AI-driven invoice templates and secure API workflows.",
    challenges:
      "Ensured PDF generation, automate and fast loading across devices.",
    results: "Delivered a reliable tool that reduced billing time by 70%.",
    live: "https://invoice-pulse-frontend.vercel.app",
    repo: "https://github.com/gautamsiddharth09/InvoicePulse-Frontend.git",
  },
  {
    id: "coding-repo",
    title: "AI Support IQ",
    category: "Full Stack",
    image: supportIq,
    status: "Completed",
    tagline: "AI-Powered SaaS Customer Support Tool",

    description:
      "An AI-powered SaaS customer support platform that enables businesses to deploy an intelligent chatbot with secure script embedding, helping automate customer queries and improve response times.",

    tech: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Scalekit",
    ],
    metrics: ["AI Chatbot", "60-sec Integration", "Secure Script Embed"],

    problem:
      "Businesses spend significant time handling repetitive customer support queries, leading to increased support costs and slower response times.",

    solution:
      "Built an AI-powered chatbot using Gemini/OpenAI APIs with secure dynamic script embedding, allowing businesses to integrate the support widget into any website in under 60 seconds.",

    challenges:
      "Implemented secure widget embedding, managed AI conversations efficiently, and designed smooth, responsive user interactions using Framer Motion.",

    results:
      "Reduced manual customer support efforts through AI-driven responses while providing a fast, seamless onboarding experience for website integration.",

    live: "https://support-iq-five.vercel.app",
    repo: "https://github.com/your-username/support-iq",
  },

  {
    id: "stylenest",
    title: "StyleNest",
    category: "Full Stack",
    image: ecommerce,
    status: "Completed",
    tagline: "Full-Stack E-Commerce Platform",

    description:
      "A modern full-stack e-commerce platform featuring secure authentication, online payments, product management, and an intuitive shopping experience with a responsive user interface.",

    tech: [
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
    ],

    metrics: ["Secure Payments", "Admin Dashboard", "Responsive UI"],

    problem:
      "Small businesses need an e-commerce solution that provides secure user authentication, online payments, and efficient product and inventory management.",

    solution:
      "Developed a full-stack e-commerce application with JWT-based authentication, Razorpay payment integration, Redux-powered state management, and a dedicated admin dashboard for managing products and inventory.",

    challenges:
      "Implemented secure payment workflows, optimized React state management for better performance, and ensured seamless API communication across the application.",

    results:
      "Delivered a fast, responsive shopping experience with secure checkout, real-time inventory management, and improved application performance.",

    live: "https://mern-ecommerce-frontend-hazel.vercel.app",
    repo: "https://github.com/gautamsiddharth09/MernEcommerce_Backend.git",
  },
  {
    id: "dynamic-engagement-platform",
    title: "Dynamic Engagement Platform",
    category: "Frontend",
    image: youtube,
    status: "Completed",
    tagline: "Real-Time YouTube Analytics",

    description:
      "A responsive YouTube analytics that visualizes real-time engagement metrics such as views, likes, comments, and subscriber growth using live API data.",

    tech: ["JavaScript", "React.js", "Redux Toolkit", "REST API", "CSS"],

    metrics: ["Real-Time Analytics", "Live API Data"],

    problem:
      "Content creators need an intuitive dashboard to monitor YouTube engagement metrics in real time without manually refreshing data.",

    solution:
      "Built a React-based analytics dashboard that integrates REST APIs to fetch and display live engagement statistics, providing a smooth and interactive user experience.",

    challenges:
      "Managed real-time API synchronization, optimized Redux state updates, and designed reusable UI components for efficient rendering of dynamic analytics.",

    results:
      "Delivered a fast and responsive analytics platform with live updates, enabling users to track engagement metrics through an intuitive and interactive interface.",

    live: "https://youtube-project-sand.vercel.app",
    repo: "https://github.com/gautamsiddharth09/youtube_project.git",
  },
];

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Product Lead, SaaS Startup",
    quote:
      "Rahul delivered a robust platform ahead of schedule and maintained excellent communication throughout the project.",
  },
  {
    name: "Jason Lee",
    role: "Founder, Growth Agency",
    quote:
      "The application felt premium from day one. The code quality and speed were exactly what we needed.",
  },
  {
    name: "Mina Patel",
    role: "Head of Engineering, Scaleup",
    quote:
      "Every detail reflected a senior engineer. The product launched smoothly with zero surprises.",
  },
];

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects complete in 4 to 8 weeks depending on scope, with clear milestones and status reports.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. I offer ongoing support plans, performance tuning, and feature enhancements after launch.",
  },
  {
    question: "Can you redesign existing websites?",
    answer:
      "Absolutely. I specialize in modernizing legacy sites with fast, accessible, polished interfaces.",
  },
  {
    question: "Can you build APIs?",
    answer:
      "Yes. I build secure REST APIs with authentication, validation, and scalable architecture.",
  },
];

const timeline = [
  "Political Science Graduate",
  "Started Web Development",
  "React & Modern Frontend",
  "Node.js Backend Systems",
  "Full Stack MERN Product Work",
  "Freelancing for Startups",
];

const processSteps = [
  "Discovery",
  "Planning",
  "Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

const stats = [
  { label: "Projects completed", value: "35+" },
  { label: "Upwork ranking", value: "Top 5%" },
  { label: "Rated 5 stars", value: "24+" },
  { label: "Fast delivery", value: "24h response" },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
        <div className="modal-hero">
          <div>
            <p className="eyebrow">Project details</p>
            <h2>{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <div className="project-badges">
            <span>{project.category}</span>
            <span className="badge-live">{project.status}</span>
          </div>
        </div>
        <div className="modal-grid">
          <div>
            <h3>Overview</h3>
            <p>{project.description}</p>
            <h4>Problem</h4>
            <p>{project.problem}</p>
            <h4>Solution</h4>
            <p>{project.solution}</p>
            <h4>Challenges</h4>
            <p>{project.challenges}</p>
            <h4>Results</h4>
            <p>{project.results}</p>
          </div>
          <aside>
            <div className="detail-panel">
              <h4>Tech stack</h4>
              <div className="detail-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="detail-panel">
              <h4>Quality badges</h4>
              <div className="detail-tags">
                {project.metrics.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="detail-panel">
              <h4>Project links</h4>
              <div className="modal-actions">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Launch Live Project
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");
  const [activeProject, setActiveProject] = useState(null);
  const [activeLink, setActiveLink] = useState("#home");


  const categories = useMemo(
    () => [
      "All",
      "Full Stack",
      "React",
      "Node.js",
      "AI",
      "Dashboard",
      "Machine Coding",
    ],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      projectCards.filter((project) => {
        const matchesCategory =
          projectFilter === "All" || project.category === projectFilter;
        const query = projectSearch.toLowerCase().trim();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.tech.some((tech) => tech.toLowerCase().includes(query));
        return matchesCategory && (!query || matchesSearch);
      }),
    [projectFilter, projectSearch],
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            Gautam Kumar
          </a>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeLink === link.href ? "active" : ""}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="button button-secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Hi,</h1>
              <h1>I'm Gautam Kumar</h1>
              <p className="hero-title">Full Stack MERN Developer.</p>
              <p className="hero-text">
                I build fast, scalable and production-ready web applications
                using React, Node.js, Express, and MongoDB.
              </p>
              <p className="hero-description">
                Focused on building real-world MERN applications with clean
                architecture, modern UI, and reliable performance. Currently
                open to freelance, remote, and full-time opportunities.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Hire Me
                </a>
                <a className="button button-ghost" href="#projects">
                  View Projects
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-header">
                  <span>Production-Ready MERN Application</span>
                </div>
                <div className="hero-card-content">
                  <div className="hero-project-image">
                    <img src={invoiceImg} alt="Invoice AI Project" />
                  </div>

                  <div className="hero-summary">
                    <h3>Invoice AI</h3>

                    <p>
                      AI-powered invoice management platform that automates
                      invoice creation, automated reminders, analytics and
                      dashboard insights using React, Node.js, Express, MongoDB,
                      and Generative AI.
                    </p>

                    <div className="hero-tech">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>MongoDB</span>
                      <span>Tailwind</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div> <img src={invoiceImg} alt="invocie" /></div> */}

        <section className="section trust-section">
          <div className="container section-grid small-gap">
            <p className="eyebrow">
              Building projects that solve real-world problems.
            </p>

            <div className="trust-grid">
              {trustLogos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust-pill"
                >
                  <span className="trust-icon">{logo.icon}</span>
                  <span>{logo.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* about */}

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="photo-frame">
                <img src={gg2} alt="my-image" className="my-image" />
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">About me</p>
              <h2>Mern Stack Developer with a product-first mindset.</h2>
              <p>
                I focus on delivering scalable web applications with
                maintainable architecture, clean code, and thoughtful
                experiences.
              </p>
              <ul>
                <li>Years of focused learning and production experience.</li>
                <li>Problem solving mindset with reliable delivery.</li>
                <li>Performance and maintainability are core priorities.</li>
              </ul>
              <div className="about-metrics">
                <div>
                  <strong>20+</strong>
                  <span>Projects Built</span>
                </div>

                <div>
                  <strong>Open</strong>
                  <span>Full-Time & Freelance </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}

        <section className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Expertise across modern web platforms.</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* service */}

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Premium development offerings for ambitious teams.</h2>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.title} className="service-card">
                  <div className="service-icon"> {service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* project */}

        <section id="projects" className="section featured-projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Featured projects</p>
              <h2>Premium product-grade work that drives trust.</h2>
            </div>
            <div className="project-controls">
              <label className="search-field">
                <input
                  type="search"
                  placeholder="Search projects or technologies"
                  value={projectSearch}
                  onChange={(event) => setProjectSearch(event.target.value)}
                />
              </label>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => setActiveProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) =>
                    event.key === "Enter" ? setActiveProject(project) : null
                  }
                >
                  <div className="project-image">
                    <div className="project-image-preview">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span className="badge-live">{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <div className="project-tags">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section hire-section">
          <div className="container hire-grid">
            <div>
              <p className="eyebrow">Why hire me</p>
              <h2>Modern engineering with premium delivery.</h2>
            </div>
            <div className="hire-cards">
              {[
                "Clean Code",
                "Fast Delivery",
                "Responsive Design",
                "Long Term Support",
              ].map((item) => (
                <div key={item} className="hire-card">
                  <h3>{item}</h3>
                  <p>
                    {item === "Clean Code" &&
                      "Maintainable, readable and scalable code for long-term growth."}
                    {item === "Fast Delivery" &&
                      "Fast onboarding and milestone-based delivery with transparent updates."}
                    {item === "Responsive Design" &&
                      "Every product is optimized for desktop, tablet and mobile."}
                    {item === "Long Term Support" &&
                      "Flexible support plans after launch to keep your product stable."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* faqs */}
        <section className="section faq-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Questions clients usually ask.</h2>
            </div>
            <div className="faq-grid">
              {faqs.map((item) => (
                <div key={item.question} className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Let's build something amazing together</p>
              <h2>Ready to launch your next product.</h2>
              <p>
                I work with startups, SaaS companies, agencies and founders who
                need a dependable engineering partner.
              </p>
              <div className="contact-details">
                <div>
                  <strong>Email</strong>
                  <span>gautamsiddharth2013@gmail.com</span>
                </div>
                <div>
                  <strong>Phone</strong>
                  <span>7808233110</span>
                </div>
              </div>
              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/gautam-kumar-b4052b9b"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gautamsiddharth09"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Project brief
                <textarea
                  rows="5"
                  placeholder="Tell me about your project"
                ></textarea>
              </label>
              <button type="submit" className="button button-primary">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Gautam Kumar</strong>
            <p>Full Stack MERN Developer for startups and SaaS teams.</p>
          </div>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-copyright">
            &copy; 2026 Gautam Kumar. All rights reserved.
          </div>
        </div>
      </footer>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default App;
