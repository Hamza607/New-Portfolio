import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  ExternalLink,
  Eye,
  Code2,
  Layers,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Filter,
  MessageSquare,
  Send,
  FileText,
  ChevronRight,
  ChevronLeft,
  Globe,
  ShieldCheck,
  LayoutGrid,
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
  "SEO & Web Vitals",
  "Responsive Design",
  "AI Coding (Cursor/Copilot)",
];

const services = [
  {
    icon: Code2,
    title: "Scalable Front-End Architecture",
    desc: "Architecting modular, maintainable React & Next.js applications with strict component boundaries, clean state patterns, and production-ready codebases.",
    badges: ["React.js", "Next.js", "TypeScript", "Clean Architecture"],
  },
  {
    icon: Layers,
    title: "Complex State & API Integration",
    desc: "Implementing predictable data pipelines with Redux Toolkit and Context API, integrated with resilient RESTful endpoints, caching, and error handling.",
    badges: ["Redux Toolkit", "REST APIs", "Axios", "Async State"],
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Dashboards & Portals",
    desc: "Crafting multi-role administrative portals, dispatch tracking, ledger billing, Kanban boards, and data-dense dashboards tailored for operational clarity.",
    badges: ["RBAC", "Data Tables", "Recharts", "Auth & JWT"],
  },
  {
    icon: Sparkles,
    title: "Performance & Design Systems",
    desc: "Translating Figma design systems into pixel-perfect responsive layouts with Tailwind CSS, 90+ Lighthouse scores, accessibility, and micro-interactions.",
    badges: ["Tailwind CSS", "Figma to Code", "Core Web Vitals", "GSAP"],
  },
];

const experience = [
  {
    role: "Front-End / Full Stack Developer",
    company: "Aptech Media",
    period: "Dec 2025 — Present",
    location: "Peshawar, Pakistan",
    points: [
      "Architecting and scaling enterprise-grade React applications, maintaining modular component hierarchies and ensuring sub-second response times.",
      "Building modular, reusable UI design systems with Tailwind CSS and Material UI, integrating complex RESTful APIs for real-time data flows.",
      "Accelerating sprint velocity and code coverage by leveraging modern AI engineering tools (Cursor, Copilot) for automated refactoring and debugging.",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Material UI", "REST APIs", "Git"],
  },
  {
    role: "Front-End Developer",
    company: "IG Tech Services — Islamabad",
    period: "Jan 2024 — Nov 2025",
    location: "Islamabad, Pakistan",
    points: [
      "Engineered single-page applications (SPAs) and dynamic web interfaces using React.js, Next.js, and modern front-end design systems.",
      "Implemented Redux Toolkit for structured global state management, async data fetching, and persistence across user sessions.",
      "Integrated complex REST APIs with resilient input validation, error handling, and caching mechanisms to minimize network overhead.",
    ],
    tech: ["React.js", "Next.js", "Redux Toolkit", "Axios", "REST APIs", "Bootstrap"],
  },
  {
    role: "Front-End Developer",
    company: "Tech Creator — Swabi",
    period: "Jan 2021 — May 2024",
    location: "Swabi, Pakistan",
    points: [
      "Migrated legacy web interfaces into modular React architectures, elevating system maintainability and developer velocity.",
      "Translated high-fidelity Figma prototypes into pixel-perfect, mobile-first responsive experiences.",
      "Optimized asset delivery, SEO structure, and Core Web Vitals to improve lighthouse metrics.",
    ],
    tech: ["React.js", "JavaScript ES6+", "HTML5 / CSS3", "Figma to Code", "Responsive UI"],
  },
];

const education = {
  degree: "BS in Computer Science",
  institution: "University of Swabi",
  period: "2016 — 2020",
  description: "Strong academic foundation in software engineering, algorithms, data structures, database design, and object-oriented programming.",
};

const projects = [
  {
    index: "01",
    title: "ParcelFlow — Logistics & Shipment Delivery Portal",
    href: "https://parcel-deliver-frontend-rox1.vercel.app/",
    tag: "Logistics · FinTech",
    category: "Enterprise & SaaS",
    desc: "A production-grade parcel delivery and order dispatch management portal featuring role-based access control, real-time shipment milestone tracking (In Transit, En Route, Delivered), client parcel booking, and automated ledger balance accounting in PKR.",
    highlights: [
      "Live shipment tracking timeline with milestone verification",
      "Multi-role portal: Client parcel booking & Admin dispatch control",
      "Automated ledger accounting & transaction billing history",
      "Delivery completion requests & status verification workflows",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Context API", "JWT Auth", "Ledger Accounting", "Vercel"],
    image: "/parcelflow.jpg",
    featured: true,
  },
  {
    index: "02",
    title: "CollabFlow — Team Collaboration & Sprint Workspace",
    href: "https://team-collaboration-app-frontend.vercel.app/",
    tag: "Productivity · Sprint",
    category: "Enterprise & SaaS",
    desc: "A centralized team collaboration workspace featuring interactive Kanban sprint boards, task priority & status distribution analytics, team member role assignment, and milestone delivery tracking.",
    highlights: [
      "Interactive Kanban sprint board with drag/priority workflows",
      "Task status distribution & priority breakdown visualization",
      "Multi-tenant team management, member roles & permissions",
      "Sprint roadmap tracking & milestone delivery health metrics",
    ],
    tech: ["React.js", "Tailwind CSS", "Recharts", "REST APIs", "Context API", "RBAC", "Vercel"],
    image: "/team-collaboration.jpg",
    featured: true,
  },
  {
    index: "03",
    title: "Khyber Pakhtunkhwa Government Official Portal",
    href: "https://kp.gov.pk",
    tag: "Public Sector · High Traffic",
    category: "Public Sector & Portals",
    desc: "Responsive React interfaces for a high-traffic provincial government portal spanning multiple ministries, sub-domains, public-service directories, and real-time citizen notification channels.",
    highlights: [
      "Scalable multi-department interface architecture",
      "High-performance caching and cross-device accessibility",
      "Integrated citizen service directories & real-time updates",
    ],
    tech: ["React.js", "RESTful Services", "Responsive UI", "Multi-Domain Architecture"],
    image: web,
    featured: true,
  },
  {
    index: "04",
    title: "NewRich — Social & E-Learning Platform",
    href: "https://new-rich.vercel.app/",
    tag: "Social Network · EdTech",
    category: "Enterprise & SaaS",
    desc: "Front-end architecture for a social networking and e-learning platform with dynamic newsfeeds, direct peer communication, and modular course-management flows.",
    highlights: [
      "Social feed with rich media posts & interactions",
      "Course management & learning progress tracking",
      "State persistence & predictable async flows with Redux",
    ],
    image: newa,
    tech: ["React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    featured: true,
  },
  {
    index: "05",
    title: "Diet Meeting Dashboard & Scheduler",
    href: "https://diet-meeting-mlk9.vercel.app/",
    tag: "Management Dashboard",
    category: "Productivity & Dashboards",
    desc: "A responsive meeting management dashboard designed to organize clinical consultations, manage schedules, track participant notes, and provide an intuitive schedule manager.",
    highlights: [
      "Schedule calendar & consultation booking flows",
      "Firebase database integration & real-time sync",
      "Clean responsive data tables and status monitors",
    ],
    image: dietmeeting,
    tech: ["React.js", "Tailwind CSS", "Firebase", "API Integration", "Authentication", "Dashboard UI"],
    featured: true,
  },
  {
    index: "06",
    title: "NovaStore — Modern E-Commerce Platform",
    href: "https://frontend-ecommerce-brown.vercel.app/",
    tag: "E-Commerce Platform",
    category: "E-Commerce & Marketplaces",
    desc: "A modern e-commerce platform where users can browse products, search and filter items, manage their cart and wishlist, place orders, track order status, and securely authenticate accounts.",
    highlights: [
      "Product catalog with dynamic category & price filtering",
      "Cart & wishlist state synchronization with Context API",
      "Secure checkout flow & user order tracking",
      "Full administrative dashboard for catalog management",
    ],
    image: ecommerce,
    tech: ["React.js", "Context API", "Tailwind CSS", "REST APIs", "Authentication", "Order Management"],
    featured: true,
  },
  {
    index: "07",
    title: "Market Z — Marketplace Platform",
    href: "https://market-z.vercel.app/",
    tag: "Marketplace · E-Commerce",
    category: "E-Commerce & Marketplaces",
    desc: "A modern marketplace platform with a fluid user interface designed to provide a smooth browsing and shopping experience across desktop, tablet, and mobile devices.",
    highlights: [
      "Responsive storefront layout with fluid micro-interactions",
      "Vendor catalogue indexing and product search",
      "Optimized mobile shopping experience",
    ],
    image: marketz,
    tech: ["React.js", "Responsive UI", "Tailwind CSS", "API Integration", "Context API", "Authentication"],
  },
  {
    index: "08",
    title: "Timesheet Management System",
    href: "https://timesheet-app-lac-beta.vercel.app",
    tag: "Productivity Platform",
    category: "Productivity & Dashboards",
    desc: "A timesheet management platform designed to help teams record working hours, track attendance records, and organize employee work logs through an intuitive interface.",
    highlights: [
      "Interactive timesheet entry and hour calculations",
      "Employee attendance logs & project tagging",
      "Clean form validation and responsive tables",
    ],
    image: timesheet,
    tech: ["React.js", "Responsive UI", "Tailwind CSS", "Form Management", "Static Data"],
  },
  {
    index: "09",
    title: "Tatto Night — Artist Discovery & Booking",
    href: "https://tattonight.com/",
    tag: "Booking Platform",
    category: "E-Commerce & Marketplaces",
    desc: "A tattoo-shop booking platform where registered users can discover verified artists, search artist records, view specialty portfolios, and reserve appointments.",
    highlights: [
      "Artist profile portfolios & gallery previews",
      "Interactive booking calendar & appointment reservation",
      "Secure authentication & verification flows",
    ],
    image: tatoonight,
    tech: ["React.js", "Responsive UI", "Bootstrap", "Context API", "API Integration", "Authentication"],
  },
  {
    index: "10",
    title: "Pindito — Tourism & Expedition Portal",
    href: "https://pindito.vercel.app/",
    tag: "Web Application · Travel",
    category: "Public Sector & Portals",
    desc: "A modern and responsive web application focused on delivering an elegant travel experience across desktop, tablet, and mobile devices.",
    highlights: [
      "Next.js server-rendered architecture for speed & SEO",
      "Modern visual hierarchy and smooth typography",
      "High-resolution media optimization",
    ],
    tech: ["Next.js", "Responsive UI", "Tailwind CSS", "Modern UI"],
    image: pindito,
  },
  {
    index: "11",
    title: "Luke Temple — Creative Portfolio",
    href: "https://65a127dcbec86dbcc7b528c3--singular-scone-f8c454.netlify.app/",
    tag: "Website",
    category: "Public Sector & Portals",
    desc: "A responsive website project focused on clean aesthetic presentation, smooth typography, and a polished front-end experience.",
    highlights: [
      "Refined editorial layout and typography hierarchy",
      "Responsive breakpoints across mobile, tablet and desktop",
    ],
    image: luketemple,
    tech: ["React.js", "Responsive UI", "Bootstrap"],
  },
  {
    index: "12",
    title: "Landing Page Design Studio",
    href: "https://landing-page-eight-rosy.vercel.app/",
    tag: "Landing Page",
    category: "Enterprise & SaaS",
    desc: "A responsive landing page created as a design and development showcase, focusing on modern UI, clean layouts, responsive behavior, and reusable components.",
    highlights: [
      "Modular design system with reusable React tokens",
      "Optimized conversion funnels and interactive demo sections",
    ],
    tech: ["Next.js", "Responsive UI", "Tailwind CSS", "Reusable Components"],
    image: langingpage,
  },
];

const categories = [
  "All",
  "Enterprise & SaaS",
  "E-Commerce & Marketplaces",
  "Public Sector & Portals",
  "Productivity & Dashboards",
];

function App() {
  const root = useRef(null);
  const projectCarouselRef = useRef(null);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [projectViewMode, setProjectViewMode] = useState("carousel"); // 'carousel' | 'grid'
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Quick contact form state
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Show Toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    }
  };

  // Filtered projects for Grid Mode
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        p.tag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
    if (distance > 50) nextProject();
    if (distance < -50) prevProject();
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

  // Scroll listener for reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animations
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

  // Contact Form Submission (mailto trigger fallback)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setFormSubmitted(true);
    const mailtoUrl = `mailto:hamzafarooq925@gmail.com?subject=${encodeURIComponent(
      formState.subject || "Portfolio Inquiry from " + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    showToast("Opening email client to send message...");
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div
      ref={root}
      className="noise relative min-h-screen overflow-x-hidden bg-[#08090d] text-white selection:bg-emerald-300 selection:text-black"
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-animate fixed bottom-8 right-6 z-50 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-[#0c0e14]/95 px-5 py-3.5 text-sm font-medium text-emerald-200 shadow-2xl backdrop-blur-xl">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ===================================== */}
      {/* GLOBAL 3D BACKGROUND */}
      {/* ===================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <Scene />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-[#08090d]/10 via-[#08090d]/70 to-[#08090d]" />
      <div className="pointer-events-none fixed inset-0 z-[2] grid-bg" />

      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-[3] overflow-hidden">
        <div className="absolute left-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-emerald-400/[0.08] blur-[140px]" />
        <div className="absolute right-[3%] top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[160px]" />
        <div className="absolute bottom-[5%] left-[30%] h-[450px] w-[450px] rounded-full bg-emerald-300/[0.05] blur-[150px]" />
      </div>

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}
      <header className="fixed top-0 z-40 w-full border-b border-white/5 bg-[#08090d]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="group flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 font-display text-lg font-bold tracking-tight text-white transition group-hover:border-emerald-400/60 group-hover:bg-emerald-400/20">
              HF
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white/90">
              Hamza<span className="text-emerald-400">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/65 md:flex">
            {["About", "Services", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                className="transition hover:text-white hover:text-emerald-300"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:border-emerald-400/30 hover:bg-white/[0.08] hover:text-white"
            >
              <FileText size={14} className="text-emerald-300" />
              Resume
            </a>

            <a
              href="https://wa.me/923466634029?text=Hi%20Hamza,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-200 transition hover:bg-emerald-400/20 hover:text-white"
            >
              <MessageSquare size={14} />
              WhatsApp
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.4)]"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/5 bg-[#0b0c11]/98 px-6 py-6 md:hidden">
            <div className="space-y-3">
              {["About", "Services", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  onClick={() => setMenuOpen(false)}
                  key={item}
                  className="block py-2 text-base font-medium text-white/80 hover:text-emerald-300"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/10">
              <a
                href="/resume.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
              >
                <FileText size={16} className="text-emerald-300" />
                View & Download Resume
              </a>
              <a
                href="https://wa.me/923466634029"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-sm font-bold text-black"
              >
                <MessageSquare size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ===================================== */}
        {/* HERO SECTION */}
        {/* ===================================== */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
        >
          <div className="absolute left-[8%] top-[24%] h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.18fr_.82fr] lg:px-10">
            <div>
              <div className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[.2em] text-emerald-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
                Available for Senior / Front-End Roles & Contracts
              </div>

              <p className="hero-reveal mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[.28em] text-white/45">
                Front-End Engineer · MERN & React Ecosystem Specialist
              </p>

              <h1 className="hero-reveal max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                Engineering interfaces that{" "}
                <span className="text-gradient">perform & feel alive.</span>
              </h1>

              <p className="hero-reveal mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                I&apos;m <span className="font-semibold text-white">Hamza Farooq</span>, a front-end and full-stack engineer with <span className="text-emerald-300 font-semibold">5+ years</span> of production experience crafting scalable enterprise web applications, real-time logistics portals, and high-converting user experiences.
              </p>

              {/* Highlights pills */}
              <div className="hero-reveal mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">⚡ React & Next.js Scalability</span>
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">📊 Real-Time Portals & RBAC</span>
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5">🚀 Sub-Second Performance</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-reveal mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-black transition hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(110,231,183,0.4)]"
                >
                  View Selected Work
                  <ArrowDownRight
                    size={18}
                    className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>

                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
                >
                  <FileText size={17} className="text-emerald-300" />
                  View CV / Resume
                </a>

                <a
                  href="mailto:hamzafarooq925@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  <Mail size={17} />
                  Email
                </a>
              </div>

              {/* Key Trust Metrics */}
              <div className="hero-reveal mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">5+</div>
                  <div className="text-xs uppercase tracking-wider text-white/45 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-300">12+</div>
                  <div className="text-xs uppercase tracking-wider text-white/45 mt-1">Shipped Projects</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs uppercase tracking-wider text-white/45 mt-1">Delivery Success</div>
                </div>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="portrait relative mx-auto w-full max-w-[390px] lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-300/60 via-transparent to-cyan-300/20 blur-2xl opacity-75" />

              <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow border border-white/15">
                <img
                  src="/hamza.jpg"
                  alt="Hamza Farooq"
                  className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top"
                />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-white">Hamza Farooq</p>
                      <p className="mt-1 text-xs text-white/60">
                        Full Stack & Front-End Engineer
                      </p>
                      <p className="mt-0.5 text-[11px] text-emerald-300 font-medium">
                        Swabi / Peshawar, Pakistan · Remote Friendly
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 shadow-[0_0_12px_#34d399]"></span>
                      </span>
                      <span className="mt-1 text-[9px] uppercase tracking-wider text-emerald-200">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* SKILLS MARQUEE */}
        {/* ===================================== */}
        <section className="overflow-hidden border-y border-white/5 bg-white/[.02] py-4 backdrop-blur-sm">
          <div className="marquee-track flex gap-8 pr-8 text-xs sm:text-sm font-semibold uppercase tracking-[.18em] text-white/40">
            {[...skills, ...skills].map((s, i) => (
              <span key={`${s}-${i}`} className="inline-flex items-center whitespace-nowrap hover:text-emerald-300 transition">
                {s}
                <span className="ml-8 text-emerald-300/70">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ===================================== */}
        {/* ABOUT */}
        {/* ===================================== */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-32"
        >
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                01 / Background
              </p>
              <h2 className="section-title font-display text-4xl font-bold sm:text-5xl leading-tight">
                Engineering excellence grounded in product purpose.
              </h2>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{education.degree}</h4>
                    <p className="text-xs text-white/50">{education.institution} ({education.period})</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/50">
                  {education.description}
                </p>
              </div>
            </div>

            <div className="reveal space-y-6 text-base sm:text-lg leading-relaxed text-white/60">
              <p>
                My passion is architecting front-end applications that bridge complex business logic with fast, intuitive user experiences. Over the past 4+ years, I have engineered scalable products ranging from multi-tenant team management dashboards and logistics dispatch portals to enterprise government platforms.
              </p>

              <p>
                I thrive in modern React and Next.js environments, utilizing Redux Toolkit, TypeScript, and clean modular component systems. I focus heavily on component reusability, resilient API synchronization, SEO optimization, and micro-interactions that elevate the perceived quality of every feature.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[
                  ["4+", "Years Commercial Experience"],
                  ["12+", "High-Impact Applications"],
                  ["Peshawar / Remote", "Available Full-Time"],
                ].map(([n, l]) => (
                  <div key={l} className="glass rounded-2xl p-5 border border-white/10 hover:border-emerald-400/30 transition">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {n}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[.14em] text-white/45">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* SERVICES / CORE COMPETENCIES */}
        {/* ===================================== */}
        <section
          id="services"
          className="border-y border-white/5 bg-white/[.015] backdrop-blur-sm py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                  02 / Capabilities
                </p>
                <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                  What I bring to engineering teams
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/45">
                Proven technical capabilities applied across end-to-end web applications, real-time portals, and enterprise design systems.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="reveal group shine-effect flex flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.03]"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-400/20">
                        <IconComponent size={22} />
                      </div>
                      <h3 className="mt-6 font-display text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/60"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* EXPERIENCE */}
        {/* ===================================== */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-32"
        >
          <div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                03 / Career History
              </p>
              <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                Commercial experience
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45">
              Track record of front-end and full-stack engineering roles across enterprise applications, government portals, and software agencies.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((item, i) => (
              <article
                key={item.company}
                className="reveal group grid gap-6 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition duration-300 hover:border-emerald-300/30 hover:bg-white/[.025] md:grid-cols-[70px_1fr_220px] md:p-8"
              >
                <div className="font-display text-2xl text-white/20 font-bold">
                  0{i + 1}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                      {item.company}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-white/40">{item.location}</p>

                  <ul className="mt-5 space-y-2.5 text-sm leading-6 text-white/60">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-1 text-emerald-400 font-bold">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm font-medium text-emerald-300/80 md:text-right">
                  {item.period}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================== */}
        {/* PROJECTS SHOWCASE */}
        {/* ===================================== */}
        <section
          id="projects"
          className="relative overflow-hidden border-t border-white/5 bg-white/[.012] py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[750px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.05] blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            {/* Header with View Toggle */}
            <div className="reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                  04 / Featured Portfolio
                </p>
                <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                  Selected web applications
                </h2>
                <p className="mt-2 max-w-lg text-sm text-white/50">
                  Production software, enterprise dashboards, and real-time logistics portals engineered with modern web standards.
                </p>
              </div>

              {/* View Switcher Controls */}
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setProjectViewMode("carousel")}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${projectViewMode === "carousel"
                    ? "bg-emerald-400 text-black shadow-[0_0_15px_rgba(110,231,183,0.3)]"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  <Globe size={15} />
                  3D Orbit Carousel
                </button>
                <button
                  type="button"
                  onClick={() => setProjectViewMode("grid")}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${projectViewMode === "grid"
                    ? "bg-emerald-400 text-black shadow-[0_0_15px_rgba(110,231,183,0.3)]"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  <LayoutGrid size={15} />
                  All Projects Grid ({projects.length})
                </button>
              </div>
            </div>

            {/* ==================== 3D CAROUSEL MODE ==================== */}
            {projectViewMode === "carousel" && (
              <div className="space-y-10">
                <div
                  ref={projectCarouselRef}
                  onMouseMove={handleProjectMouseMove}
                  onMouseLeave={handleProjectMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className="projects-carousel relative mx-auto h-[620px] w-full sm:h-[680px]"
                  style={{
                    perspective: "1800px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {projects.map((project, index) => {
                    let offset = index - activeProject;
                    if (offset > projects.length / 2) offset -= projects.length;
                    if (offset < -projects.length / 2) offset += projects.length;

                    const isActive = offset === 0;
                    const distance = Math.abs(offset);

                    return (
                      <article
                        key={project.title}
                        onClick={() => setActiveProject(index)}
                        className="absolute left-1/2 top-0 w-[90%] max-w-[740px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#0c0e14]/95 shadow-[0_30px_100px_rgba(0,0,0,.6)] backdrop-blur-xl transition duration-500 hover:border-emerald-400/40"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: `
                            translateX(calc(-50% + ${offset * 58}%))
                            translateZ(${isActive ? 100 : -distance * 150}px)
                            rotateY(${offset * -25}deg)
                            scale(${isActive ? 1 : 0.84})
                          `,
                          opacity:
                            distance > 2 ? 0 : isActive ? 1 : distance === 1 ? 0.65 : 0.2,
                          zIndex: 30 - distance,
                          pointerEvents: distance > 2 ? "none" : "auto",
                          filter:
                            distance === 0 ? "blur(0px)" : distance === 1 ? "blur(0px)" : "blur(2px)",
                          transition:
                            "transform 750ms cubic-bezier(.22,.8,.25,1), opacity 500ms ease, filter 500ms ease",
                        }}
                      >
                        {/* Image Preview Banner */}
                        <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                          <img
                            src={project.image}
                            alt={project.title}
                            draggable="false"
                            className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/25 to-transparent" />

                          <div className="absolute left-5 top-5 flex items-center gap-2">
                            <span className="inline-flex rounded-full border border-white/15 bg-black/65 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-xl">
                              {project.tag}
                            </span>
                            {project.featured && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                                <Sparkles size={11} /> Featured
                              </span>
                            )}
                          </div>

                          <span className="absolute right-6 top-5 font-display text-5xl font-black text-white/20">
                            {project.index}
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="relative p-6 sm:p-8">
                          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                            {project.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60 sm:text-base">
                            {project.desc}
                          </p>

                          <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                            {project.tech.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedModalProject(project);
                              }}
                              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white"
                            >
                              <Eye size={15} className="text-emerald-300" />
                              Inspect Details
                            </button>

                            {project.href !== "#" && (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 border border-emerald-400/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300 transition hover:bg-emerald-400 hover:text-black"
                              >
                                Visit Live App
                                <ArrowUpRight size={15} />
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Carousel Controls */}
                <div className="flex flex-col items-center justify-center gap-5 sm:-mt-6">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={prevProject}
                      aria-label="Previous project"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200"
                    >
                      ←
                    </button>

                    <span className="min-w-[85px] text-center text-sm font-semibold tracking-wider text-white/50">
                      {String(activeProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>

                    <button
                      type="button"
                      onClick={nextProject}
                      aria-label="Next project"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200"
                    >
                      →
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-2">
                    {projects.map((_, index) => (
                      <button
                        type="button"
                        aria-label={`Go to project ${index + 1}`}
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeProject ? "w-8 bg-emerald-300" : "w-2 bg-white/20 hover:bg-white/40"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== GRID SHOWCASE MODE ==================== */}
            {projectViewMode === "grid" && (
              <div className="space-y-8">
                {/* Filters and Search Bar */}
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition ${selectedCategory === cat
                          ? "bg-emerald-400 text-black shadow-[0_0_12px_rgba(110,231,183,0.3)]"
                          : "bg-white/[0.04] text-white/60 hover:text-white"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative min-w-[240px]">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search by tech or title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2 pl-9 pr-4 text-xs text-white placeholder-white/35 focus:border-emerald-400/40 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                  <div className="py-20 text-center text-white/40">
                    <p className="text-base">No projects match the current filter or search criteria.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                      }}
                      className="mt-3 text-xs text-emerald-300 underline"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((p) => (
                      <article
                        key={p.title}
                        className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e14]/90 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                      >
                        <div>
                          {/* Image */}
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent" />
                            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                              {p.tag}
                            </span>
                            <span className="absolute right-4 top-4 font-display text-2xl font-black text-white/25">
                              {p.index}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-200 transition">
                              {p.title}
                            </h3>
                            <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-white/60">
                              {p.desc}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {p.tech.slice(0, 4).map((t) => (
                                <span
                                  key={t}
                                  className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/50"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex items-center justify-between border-t border-white/5 p-4 px-6 bg-white/[0.01]">
                          <button
                            type="button"
                            onClick={() => setSelectedModalProject(p)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white"
                          >
                            <Eye size={14} className="text-emerald-300" />
                            Details
                          </button>
                          {p.href !== "#" && (
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-300 hover:text-white"
                            >
                              Live App
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ===================================== */}
        {/* TECH STACK CLUSTER */}
        {/* ===================================== */}
        <section className="border-y border-white/5 bg-white/[.018] backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-32">
            <div className="reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                05 / Technologies
              </p>
              <h2 className="section-title font-display text-4xl font-bold sm:text-5xl">
                Modern tools I build with.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                A carefully curated front-end & full-stack toolchain optimized for speed, maintainability, type-safety, and visual delight.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-3 self-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[.025] px-4 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/[0.08] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================== */}
        {/* CONTACT & DIRECT HIRE */}
        {/* ===================================== */}
        <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,.18),transparent_48%)]" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[.25em] text-emerald-300">
                06 / Get In Touch
              </p>
              <h2 className="reveal section-title font-display text-4xl font-bold sm:text-6xl">
                Let&apos;s build something exceptional.
              </h2>
              <p className="reveal mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/55">
                Whether you are hiring for a Senior Front-End / Full-Stack role, need an enterprise portal architected, or want to discuss a contract, I&apos;m ready to connect.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              {/* Direct Info Card */}
              <div className="reveal flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Direct Connect</h3>
                  <p className="mt-2 text-sm text-white/55">
                    Fast response guaranteed within 24 hours. Feel free to copy contacts or reach out directly on WhatsApp.
                  </p>

                  <div className="mt-8 space-y-4">
                    {/* Email Card */}
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                          <Mail size={18} />
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-white/40">Email Address</div>
                          <a href="mailto:hamzafarooq925@gmail.com" className="text-sm font-semibold text-white hover:text-emerald-300">
                            hamzafarooq925@gmail.com
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("hamzafarooq925@gmail.com", "Email")}
                        className="rounded-lg p-2 text-white/40 hover:bg-white/10 hover:text-white transition"
                        title="Copy Email"
                      >
                        <Copy size={16} />
                      </button>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                          <Phone size={18} />
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-white/40">Phone / WhatsApp</div>
                          <a href="tel:+923466634029" className="text-sm font-semibold text-white hover:text-emerald-300">
                            +92 346 6634029
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("+923466634029", "Phone Number")}
                        className="rounded-lg p-2 text-white/40 hover:bg-white/10 hover:text-white transition"
                        title="Copy Phone"
                      >
                        <Copy size={16} />
                      </button>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                      href="https://wa.me/923466634029?text=Hi%20Hamza,%20I%20saw%20your%20portfolio..."
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-400/15 border border-emerald-400/40 p-4 text-sm font-bold text-emerald-200 transition hover:bg-emerald-400 hover:text-black"
                    >
                      <MessageSquare size={18} />
                      Instant Chat on WhatsApp (+92 346 6634029)
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Profiles</span>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/hamza-farooq-00967322"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Hamza607"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="/resume.html"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                      title="View Resume"
                    >
                      <FileText size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div className="reveal rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
                <h3 className="font-display text-2xl font-bold text-white">Send a Message</h3>
                <p className="mt-2 text-sm text-white/55">
                  Drop a project inquiry or note and it will open directly in your mail app.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-400/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-400/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Front-End Role / Project Discussion"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-400/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your team or project requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-400/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.4)]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================== */}
      {/* PROJECT DETAILS MODAL */}
      {/* ===================================== */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedModalProject(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="modal-animate relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/15 bg-[#0d0f17] p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Banner Image */}
            <div className="relative h-60 overflow-hidden rounded-2xl sm:h-72">
              <img
                src={selectedModalProject.image}
                alt={selectedModalProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                {selectedModalProject.tag}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                <span>Project {selectedModalProject.index}</span>
                <span>•</span>
                <span>{selectedModalProject.category}</span>
              </div>

              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                {selectedModalProject.title}
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
                {selectedModalProject.desc}
              </p>

              {/* Highlights */}
              {selectedModalProject.highlights && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Key Features & Engineering Highlights:
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-white/60">
                    {selectedModalProject.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-0.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-emerald-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedModalProject(null)}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white"
                >
                  Close
                </button>

                {selectedModalProject.href !== "#" && (
                  <a
                    href={selectedModalProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(110,231,183,0.4)]"
                  >
                    Open Live Application
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================== */}
      {/* FOOTER */}
      {/* ===================================== */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row lg:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-display text-sm font-bold text-white">
              HF
            </span>
            <span className="text-xs text-white/50">
              © 2026 <strong className="text-white font-medium">Hamza Farooq</strong>. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#home" className="hover:text-emerald-300 transition">Back to top ↑</a>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition">Resume</a>
            <a href="https://linkedin.com/in/hamza-farooq-00967322" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition">LinkedIn</a>
            <a href="https://github.com/Hamza607" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
