import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

import Scene from "./components/Scene";

import web from "../public/web.png";
import ecommerce from "../public/ecommerce.png";
import dietmeeting from "../public/diet.png";
import langingpage from "../public/landingpage.png";
import marketz from "../public/martetz.png";
import luketemple from "../public/luketemple.png";
import tatoonight from "../public/tatoonight.png";
import pindito from "../public/pindito.png";
import timesheet from "../public/timesheet.png";
import newa from "../public/new.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript ES6+",
  "TypeScript",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "Material UI",
  "Mantine UI",
  "Ant Design",
  "Bootstrap",
  "REST APIs",
  "Axios",
  "Git / GitHub",
  "Figma to Code",
  "Web Performance",
  "SEO",
  "Responsive Design",
];

const experience = [
  {
    role: "Front-End Developer",
    company: "Aptech Media",
    period: "Dec 2025 — Present",
    points: [
      "Architecting and maintaining enterprise-grade React applications with a focus on scalability and responsive behavior.",
      "Building modular, reusable UI systems with Tailwind CSS and Material UI.",
      "Integrating REST APIs and improving accessibility, rendering performance and cross-device usability.",
    ],
  },

  {
    role: "Front-End Developer",
    company: "IG Tech Services — Islamabad",
    period: "May 2024 — Nov 2025",
    points: [
      "Engineered scalable SPAs using React.js, Next.js and modern front-end design systems.",
      "Implemented Redux Toolkit for structured state management, async data flow and persistence.",
      "Integrated complex REST APIs with resilient error handling and caching strategies.",
    ],
  },

  {
    role: "Front-End Developer",
    company: "Tech Creator — Swabi",
    period: "Jan 2021 — May 2024",
    points: [
      "Migrated legacy interfaces to modern React architectures.",
      "Translated Figma wireframes into pixel-accurate responsive experiences.",
      "Optimized image loading, SEO structure and Core Web Vitals.",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "Khyber Pakhtunkhwa Government Official Portal",
    href: "https://kp.gov.pk",
    tag: "Government / Public Service",
    desc: "Responsive React interfaces for a high-traffic government portal spanning multiple departments, sub-domains and public-service modules.",
    tech: [
      "React.js",
      "RESTful Services",
      "Responsive UI",
      "Multi-Domain Architecture",
    ],
    image: web,
  },

  {
    index: "02",
    title: "NewRich — Social & E-Learning Platform",
    href: "https://new-rich.vercel.app/",
    tag: "Social / E-Learning",
    desc: "Front-end architecture for a social networking and e-learning platform with posts, direct messaging and course-management flows.",
    image: newa,
    tech: ["React.js", "Redux", "REST APIs", "Tailwind CSS"],
  },

  {
    index: "03",
    title: "Diet Meeting Dashboard",
    href: "https://diet-meeting-mlk9.vercel.app/",
    tag: "Management Dashboard",
    desc: "A responsive meeting management dashboard designed to organize diet-related meetings, manage schedules, track meeting information, and provide an intuitive interface for managing daily activities.",
    image: dietmeeting,
    tech: [
      "React.js",
      "Responsive UI",
      "Tailwind CSS",
      "Firebase",
      "API Integration",
      "Authentication",
      "Dashboard UI",
    ],
  },

  {
    index: "04",
    title: "E-Commerce Platform",
    href: "https://frontend-ecommerce-brown.vercel.app/",
    tag: "E-Commerce Platform",
    desc: "A modern e-commerce platform where users can browse products, search and filter items, manage their cart and wishlist, place orders, track order status, and securely authenticate their accounts.",
    image: ecommerce,
    tech: [
      "React.js",
      "Responsive UI",
      "Tailwind CSS",
      "Context API",
      "REST API Integration",
      "Authentication",
      "Cart & Wishlist",
      "Order Management",
      "Admin Dashboard",
    ],
  },

  {
    index: "05",
    title: "Tatto Night",
    href: "https://tattonight.com/",
    tag: "Booking Platform",
    desc: "A tattoo-shop booking platform where registered and approved users can discover available artists, search artist records, and book appointments.",
    image: tatoonight,
    tech: [
      "React.js",
      "Responsive UI",
      "Bootstrap",
      "Context API",
      "API Integration",
      "Authentication",
    ],
  },

  {
    index: "06",
    title: "Luke Temple",
    href: "https://65a127dcbec86dbcc7b528c3--singular-scone-f8c454.netlify.app/",
    tag: "Website",
    desc: "A responsive website project focused on clean presentation and a polished front-end experience.",
    image: luketemple,
    tech: ["React.js", "Responsive UI", "Bootstrap"],
  },

  {
    index: "07",
    title: "Timesheet Management System",
    href: "https://timesheet-app-lac-beta.vercel.app",
    tag: "Productivity Platform",
    desc: "A timesheet management platform designed to help teams track working hours, manage timesheet records, and organize employee work activities through a responsive and user-friendly interface.",
    image: timesheet,
    tech: [
      "React.js",
      "Responsive UI",
      "Tailwind CSS",
      "Form Management",
      "Static Data",
    ],
  },

  {
    index: "08",
    title: "Market Z",
    href: "https://market-z.vercel.app/",
    tag: "E-Commerce Platform",
    desc: "A modern marketplace platform with a responsive user interface designed to provide a smooth browsing and shopping experience across desktop, tablet, and mobile devices.",
    image: marketz,
    tech: [
      "React.js",
      "Responsive UI",
      "Tailwind CSS",
      "API Integration",
      "Context API",
      "Authentication",
      "Product Management",
    ],
  },

  {
    index: "09",
    title: "Pindito",
    href: "https://pindito.vercel.app/",
    tag: "Web Application",
    desc: "A modern and responsive web application focused on delivering a clean, intuitive, and user-friendly experience across desktop, tablet, and mobile devices.",
    tech: ["Next.js", "Responsive UI", "Tailwind CSS", "Modern UI"],
    image: pindito,
  },

  {
    index: "10",
    title: "Landing Page Design",
    href: "https://landing-page-eight-rosy.vercel.app/",
    tag: "Landing Page",
    desc: "A responsive landing page created as a design and development testing project, focusing on modern UI, clean layouts, responsive behavior, and reusable frontend components.",
    tech: [
      "Next.js",
      "Responsive UI",
      "Tailwind CSS",
      "Reusable Components",
      "Modern UI Design",
    ],
    image: langingpage,
  },
];

function App() {
  const root = useRef(null);
  const projectCarouselRef = useRef(null);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;

    const distance = touchStart.current - touchEnd.current;

    if (distance > 50) {
      nextProject();
    }

    if (distance < -50) {
      prevProject();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  const handleProjectMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const carousel = projectCarouselRef.current;

    if (!carousel) return;

    const rect = carousel.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = (mouseX / rect.width - 0.5) * 3;
    const rotateX = -(mouseY / rect.height - 0.5) * 2;

    gsap.to(carousel, {
      rotateY,
      rotateX,
      duration: 0.8,
      ease: "power3.out",
      transformPerspective: 1800,
    });
  };

  const handleProjectMouseLeave = () => {
    if (!projectCarouselRef.current) return;

    gsap.to(projectCarouselRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".portrait", {
        scale: 0.88,
        opacity: 0,
        duration: 1.25,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.from(".projects-carousel", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-carousel",
          start: "top 85%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="noise relative min-h-screen overflow-x-hidden bg-[#08090d] text-white"
    >
      {/* ===================================== */}
      {/* GLOBAL 3D BACKGROUND */}
      {/* ===================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        
        <Scene />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[#08090d]/10 via-[#08090d]/70 to-[#08090d]" />

      <div className="pointer-events-none fixed inset-0 z-[2] grid-bg" />

      {/* Background glows */}

      <div className="pointer-events-none fixed inset-0 z-[3] overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-emerald-400/[0.08] blur-[130px]" />

        <div className="absolute right-[3%] top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-[160px]" />

        <div className="absolute bottom-[5%] left-[35%] h-[400px] w-[400px] rounded-full bg-emerald-300/[0.04] blur-[150px]" />
      </div>

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}

      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090d]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="font-display text-xl font-bold tracking-tight"
          >
            HF<span className="text-emerald-300">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                className="transition hover:text-white"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hamzafarooq925@gmail.com"
            className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium transition hover:border-emerald-300/40 hover:bg-emerald-300/10 md:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/5 bg-[#0b0c11] px-6 py-5 md:hidden">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                onClick={() => setMenuOpen(false)}
                key={item}
                className="block py-3 text-white/80"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ===================================== */}
        {/* HERO */}
        {/* ===================================== */}

        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
          <div className="absolute left-[8%] top-[24%] h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
            <div>
              <div className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-xs uppercase tracking-[.2em] text-emerald-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                Available for opportunities
              </div>

              <p className="hero-reveal mb-4 text-sm font-semibold uppercase tracking-[.28em] text-white/45">
                React.js Developer · MERN Stack Candidate
              </p>

              <h1 className="hero-reveal max-w-4xl font-display text-5xl font-bold leading-[.97] tracking-[-.055em] sm:text-6xl lg:text-8xl">
                Building interfaces that{" "}
                <span className="text-gradient">feel alive.</span>
              </h1>

              <p className="hero-reveal mt-7 max-w-xl text-base leading-7 text-white/58 sm:text-lg">
                I&apos;m Hamza Farooq, a front-end developer with 4+ years of
                experience creating responsive, high-performance web products
                with React, Next.js and modern UI systems.
              </p>

              <div className="hero-reveal mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-emerald-200"
                >
                  View projects
                  <ArrowDownRight
                    size={18}
                    className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>

                <a
                  href="mailto:hamzafarooq925@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white/80 transition hover:bg-white/5"
                >
                  <Mail size={17} />
                  Email me
                </a>
              </div>
            </div>

            {/* Portrait */}

            <div className="portrait relative mx-auto w-full max-w-[390px] lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-300/60 via-transparent to-cyan-300/10 blur-2xl" />

              <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow">
                <img
                  src="/hamza.jpg"
                  alt="Hamza Farooq"
                  className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top grayscale-[15%]"
                />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Hamza Farooq</p>

                      <p className="mt-1 text-xs text-white/55">
                        Swabi, Khyber Pakhtunkhwa, Pakistan
                      </p>
                    </div>

                    <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,.9)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* MARQUEE */}
        {/* ===================================== */}

        <section className="overflow-hidden border-y border-white/5 bg-white/[.02] py-5 backdrop-blur-sm">
          <div className="marquee-track flex gap-10 pr-10 text-sm font-semibold uppercase tracking-[.18em] text-white/35">
            {[...skills.slice(0, 10), ...skills.slice(0, 10)].map((s, i) => (
              <span key={`${s}-${i}`} className="whitespace-nowrap">
                {s}
                <span className="ml-10 text-emerald-300/80">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ===================================== */}
        {/* ABOUT */}
        {/* ===================================== */}

        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
        >
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                01 / About
              </p>

              <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                Front-end craft with product thinking.
              </h2>
            </div>

            <div className="reveal space-y-7 text-lg leading-8 text-white/60">
              <p>
                My core strength is turning product requirements and design
                systems into maintainable React experiences. I enjoy reusable
                component architecture, API-driven interfaces, performance work
                and the small interaction details that make a product feel
                polished.
              </p>

              <p>
                I work across React.js, Next.js, Redux Toolkit, TypeScript,
                Tailwind CSS and Material UI, with a practical focus on
                debugging, accessibility, SEO and cross-device quality.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[
                  ["4+", "Years experience"],
                  ["3", "Front-end roles"],
                  ["10", "Highlighted products"],
                ].map(([n, l]) => (
                  <div key={l} className="glass rounded-2xl p-5">
                    <div className="font-display text-3xl font-bold text-white">
                      {n}
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-[.16em] text-white/40">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* EXPERIENCE */}
        {/* ===================================== */}

        <section
          id="experience"
          className="border-y border-white/5 bg-white/[.018] backdrop-blur-sm"
        >
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                  02 / Experience
                </p>

                <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                  Selected experience
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/45">
                A progression of React-focused roles spanning enterprise apps,
                public-service platforms and design-system driven product work.
              </p>
            </div>

            <div className="space-y-4">
              {experience.map((item, i) => (
                <article
                  key={item.company}
                  className="reveal group grid gap-5 rounded-3xl border border-white/8 bg-black/10 p-6 backdrop-blur-sm transition hover:border-emerald-300/20 hover:bg-white/[.025] md:grid-cols-[80px_1fr_200px] md:p-8"
                >
                  <div className="font-display text-2xl text-white/20">
                    0{i + 1}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-emerald-200/75">{item.company}</p>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-white/50">
                      {item.points.map((p) => (
                        <li key={p}>— {p}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-white/40 md:text-right">
                    {item.period}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* 3D PROJECTS CAROUSEL */}
        {/* ===================================== */}

        <section
          id="projects"
          className="relative overflow-hidden py-28 lg:py-36"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.05] blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mb-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                03 / Projects
              </p>

              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                  Work that shipped
                </h2>

                <p className="max-w-md text-sm leading-6 text-white/40">
                  Explore selected applications, products and interfaces
                  I&apos;ve worked on.
                </p>
              </div>
            </div>

            <div
              ref={projectCarouselRef}
              onMouseMove={handleProjectMouseMove}
              onMouseLeave={handleProjectMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="projects-carousel relative mx-auto h-[620px] w-full sm:h-[690px]"
              style={{
                perspective: "1800px",
                transformStyle: "preserve-3d",
              }}
            >
              {projects.map((project, index) => {
                let offset = index - activeProject;

                if (offset > projects.length / 2) {
                  offset -= projects.length;
                }

                if (offset < -projects.length / 2) {
                  offset += projects.length;
                }

                const isActive = offset === 0;
                const distance = Math.abs(offset);

                return (
                  <article
                    key={project.title}
                    onClick={() => setActiveProject(index)}
                    className="absolute left-1/2 top-0 w-[90%] max-w-[720px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0c0e13]/95 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl"
                    style={{
                      transformStyle: "preserve-3d",

                      transform: `
                        translateX(calc(-50% + ${offset * 58}%))
                        translateZ(${isActive ? 100 : -distance * 150}px)
                        rotateY(${offset * -25}deg)
                        scale(${isActive ? 1 : 0.84})
                      `,

                      opacity:
                        distance > 2
                          ? 0
                          : isActive
                            ? 1
                            : distance === 1
                              ? 0.6
                              : 0.2,

                      zIndex: 30 - distance,

                      pointerEvents: distance > 2 ? "none" : "auto",

                      filter:
                        distance === 0
                          ? "blur(0px)"
                          : distance === 1
                            ? "blur(0px)"
                            : "blur(2px)",

                      transition:
                        "transform 750ms cubic-bezier(.22,.8,.25,1), opacity 500ms ease, filter 500ms ease",
                    }}
                  >
                    {/* Image */}

                    <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        draggable="false"
                        className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-[#0c0e13]/10 to-transparent" />

                      <div className="absolute inset-0 bg-emerald-400/0 transition duration-500 hover:bg-emerald-400/[0.04]" />

                      <div className="absolute left-5 top-5">
                        <span className="inline-flex rounded-full border border-white/10 bg-black/55 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 backdrop-blur-xl">
                          {project.tag}
                        </span>
                      </div>

                      <span className="absolute right-6 top-5 font-display text-5xl font-bold text-white/20">
                        {project.index}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="relative p-6 sm:p-8">
                      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-300/[0.08] blur-[80px]" />

                      <div className="relative">
                        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 line-clamp-3 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                          {project.desc}
                        </p>

                        <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                          {project.tech.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs text-white/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.href !== "#" && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition duration-300 hover:gap-3 hover:text-white"
                          >
                            Visit Project
                            <ArrowUpRight size={17} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Carousel navigation */}

            <div className="-mt-6 flex flex-col items-center justify-center gap-5 sm:-mt-10">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition hover:border-emerald-300/30 hover:bg-emerald-300/10 hover:text-emerald-200"
                >
                  ←
                </button>

                <span className="min-w-[75px] text-center text-sm text-white/40">
                  {String(activeProject + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition hover:border-emerald-300/30 hover:bg-emerald-300/10 hover:text-emerald-200"
                >
                  →
                </button>
              </div>

              {/* Dots */}

              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    type="button"
                    aria-label={`Go to project ${index + 1}`}
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeProject
                        ? "w-8 bg-emerald-300"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* STACK */}
        {/* ===================================== */}

        <section className="border-y border-white/5 bg-white/[.018] backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-32">
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                04 / Stack
              </p>

              <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                Tools I use to build.
              </h2>
            </div>

            <div className="reveal flex flex-wrap gap-3 self-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[.025] px-4 py-2.5 text-sm text-white/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-300/[0.05] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* CONTACT */}
        {/* ===================================== */}

        <section id="contact" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,.18),transparent_45%)]" />

          <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:py-40">
            <p className="reveal mb-5 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
              05 / Contact
            </p>

            <h2 className="reveal section-title font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
              Have a product to build?
            </h2>

            <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-8 text-white/52">
              I&apos;m open to React / front-end opportunities and product teams
              looking for polished, maintainable user experiences.
            </p>

            <div className="reveal mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hamzafarooq925@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-emerald-200"
              >
                <Mail size={17} />
                hamzafarooq925@gmail.com
              </a>

              <a
                href="tel:+923466634029"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-white/75 transition hover:border-emerald-300/30 hover:text-white"
              >
                <Phone size={17} />
                +92 346 6634029
              </a>
            </div>

            <div className="reveal mt-7 flex justify-center gap-5 text-white/50">
              <a
                href="https://www.linkedin.com/in/hamza-farooq-009673227/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:-translate-y-1 hover:text-white"
              >
                <Linkedin />
              </a>

              <a
                href="https://github.com/Hamza607"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="transition hover:-translate-y-1 hover:text-white"
              >
                <Github />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================== */}
      {/* FOOTER */}
      {/* ===================================== */}

      <footer className="relative z-10 border-t border-white/5 px-6 py-7 text-center text-xs text-white/30">
        © 2026 Hamza Farooq. Built with React, Vite, Tailwind CSS, GSAP &
        Three.js.
      </footer>
    </div>
  );
}

export default App;
