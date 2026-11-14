"use client";

import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Ajanta Ghosh",
  title: "Senior Software Developer",
  tagline: "8.5+ Years · Full Stack · Immediate Joiner",
  location: "Dhanbad, Jharkhand",
  phone: "+91 72570 55995",
  email: "ajanta.ghosh08@gmail.com",
  github: "https://github.com/ajantait08",
  linkedin: "https://linkedin.com/in/ajanta-ghosh-57a42a14a",
  summary:
    "Senior Software Developer specializing in PHP (Laravel, CodeIgniter), React.js, Node.js, Next.js, TypeScript, Shopify, and Python/Django. Deep expertise in payment gateway integrations, admission portals, eCommerce platforms, REST APIs, and admin dashboards across government institutions, startups, and enterprise IT.",
};

const skills = [
  {
    category: "Backend",
    items: ["PHP (Core & OOP)", "Laravel", "CodeIgniter", "Python", "Django", "Node.js", "REST APIs", "AJAX", "JSON"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "jQuery", "Material UI", "Bootstrap"],
  },
  {
    category: "Database & CMS",
    items: ["MySQL", "MongoDB", "Shopify", "WordPress", "WooCommerce"],
  },
  {
    category: "Payments & CRM",
    items: ["SBI", "HDFC", "PayU", "CCAvenue", "Stripe", "Razorpay", "PayPal", "Sticky", "Konnective", "CheckoutChamp"],
  },
  {
    category: "Tools & Infra",
    items: ["GitHub", "RabbitMQ", "Redis", "SEMrush SEO", "Shopify GraphQL"],
  },
];

const experiences = [
  {
    role: "Software Developer",
    location: "Dhanbad , Jharkhand",
    period: "Feb 2026 – Present",
    current: true,
    highlights: [
      "Worked on a Rent Guarantor Project using PHP Laravel, Joomla Framework",
      "Worked on Hotel Management Project using Laravel (12)",
      "Working on a Chat Application using (React +NodeJS)",
      "Working on AI Projects covering different topicssuch as AI Agent, Prompt Engineering , Loop Engineering concepts and RAG Systems.",
      "Worked on a Django Project for a Client using Python Django Framework",
      "Worked on a Flutter Project for a Client using Flutter Framework",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "CodeClouds IT Solutions Pvt. Ltd.",
    location: "Kolkata, WB",
    period: "Sep 2024 – Feb 2026",
    current: false,
    highlights: [
      "Full Stack E-commerce (Node + React JS) with auth, orders & payment integrations",
      "Full-Stack CRM using Laravel for product, customer & sales management",
      "Next.js / Laravel E-commerce integrated with Shopify APIs & order lifecycle",
      "Custom Shopify themes & apps using Liquid, Remix, React, Node.js, GraphQL",
      "eCommerce sales funnels via Unify platform; CRM integration with Sticky, Konnective, CheckoutChamp",
      "SEO optimizations achieving 90% site health via SEMrush",
      "Custom WordPress themes, plugins & WooCommerce customization",
    ],
  },
  {
    role: "Software Developer",
    company: "IIT (Indian School of Mines)",
    location: "Dhanbad, JH",
    period: "Mar 2022 – Sep 2024",
    current: false,
    highlights: [
      "Online admission portals (React + Node.js) for MBA, M.Tech, Ph.D., Exec MBA programs",
      "Admin backend portals for M.Tech candidate data & COAP portal integration",
      "Candidate interfaces: application forms, document uploads, interview scheduling, fee payment",
      "SBI & HDFC payment gateway integration for admission fees",
      "MIS registration modules & automated student data transfer",
      "Admin dashboards with real-time application & payment statistics",
      "Hostel allotment, admission number generation & offline fee upload modules",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Maven AI Technologies Pvt. Ltd.",
    location: "Chennai, TN",
    period: "Jun 2021 – Mar 2022",
    current: false,
    highlights: [
      "Payment gateway APIs: Dohone, CryptAPI, Paymetrust, Selcom",
      "Admin dashboards for transaction monitoring & reporting",
      "Telegram Bots using Python, Django, and Node.js",
      "Backend REST APIs using Django; SMTP mailserver configuration",
      "PDF encryption GUI app using Python (Tkinter) compiled to EXE",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "IIT (ISM) Dhanbad",
    location: "Dhanbad, JH",
    period: "Dec 2018 – May 2021",
    current: false,
    highlights: [
      "Hostel Management System & No Dues modules",
      "SBI & PayU Money gateway integrations with transaction tracking",
      "Bulk email systems with automated logging",
      "Recruitment portals & exam tabulation systems",
      "Delivered secure applications certified by Security Audit Services",
    ],
  },
  {
    role: "Web Developer",
    company: "E Web Bazar Pvt. Ltd.",
    location: "Dhanbad, JH",
    period: "Jul 2018 – Dec 2018",
    current: false,
    highlights: [
      "Travel modules: Flight, Hotel, Bus, Tours",
      "Admin panels for Food Delivery, Taxi Booking, CMS & News Portals",
      "Instamojo, PayU Money & PayuBiz integrations",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Connecting Dot Pvt. Ltd.",
    location: "Dhanbad, JH",
    period: "Feb 2017 – Jun 2018",
    current: false,
    highlights: [
      "Travel APIs: Domestic & International Flights, Hotels, Bus",
      "SMS & Email APIs (SendGrid, Mailgun)",
      "Multiple payment gateway & DMT API integrations",
      "Admin panels for B2B travel applications",
    ],
  },
];

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Durgapur Institute of Advanced Technology & Management",
    board: "MAKAUT (WBUT)",
    year: "2016",
    score: "DGPA: 8.05",
  },
  {
    degree: "Class XII – Science (AISSCE)",
    institution: "CBSE Board",
    year: "2011",
    score: "75.5%",
  },
  {
    degree: "Class X (AISSE)",
    institution: "CBSE Board",
    year: "2009",
    score: "84.6%",
  },
];

const certifications = [
  "PHP – NIIT, Dhanbad (25 Days)",
  "Advanced Java – NIIT, Dhanbad (30 Days)",
  "Core Java – HP India Pvt. Ltd., Kolkata (15 Days)",
  "Cyber Security (Basic Orientation) – IIT(ISM), Dhanbad (30 Days)",
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

:root {
  --bg:          #08080c;
  --surface:     #0d0d15;
  --card:        #111118;
  --card-hover:  #16161f;
  --accent:      #c9a96e;
  --accent-pale: rgba(201,169,110,0.09);
  --accent-glow: rgba(201,169,110,0.18);
  --accent-line: rgba(201,169,110,0.22);
  --text:        #ece8e0;
  --muted:       #6b6677;
  --border:      rgba(255,255,255,0.065);
  --border-hov:  rgba(255,255,255,0.13);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.pf { background: var(--bg); color: var(--text); font-family: 'Plus Jakarta Sans', system-ui, sans-serif; font-size: 16px; line-height: 1.7; min-height: 100vh; overflow-x: hidden; }

/* ── NAV ── */
.pf-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 48px;
  background: rgba(8,8,12,0.75);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.pf-nav-logo {
  font-family: 'Playfair Display', Georgia, serif; font-size: 28px; font-weight: 900;
  letter-spacing: -.02em; display: inline-flex; align-items: center; line-height: 1;
  padding: 9px 15px; border: 1px solid var(--accent-line); border-radius: 6px;
  background: var(--accent-pale); text-decoration: none; transition: background .25s, border-color .25s;
}
.pf-nav-logo:hover { background: rgba(201,169,110,0.15); border-color: var(--accent); }
.pf-nav-logo-a { color: var(--text); }
.pf-nav-logo-g { color: var(--accent); }
.pf-nav-logo-dot { color: var(--accent); font-size: 22px; margin-left: 1px; align-self: flex-end; line-height: 1.25; }
.pf-nav-links { display: flex; gap: 36px; list-style: none; }
.pf-nav-links a {
  font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.18em; color: var(--muted); text-decoration: none; transition: color 0.25s;
  padding-bottom: 2px; border-bottom: 1px solid transparent; transition: all 0.25s;
}
.pf-nav-links a:hover, .pf-nav-links a.active { color: var(--accent); border-bottom-color: var(--accent); }

/* ── HERO ── */
.pf-hero {
  min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end;
  padding: 90px 0px 64px 80px; position: relative; overflow: hidden;
}
.pf-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px);
  background-size: 64px 64px;
}
.pf-hero-orb1 {
  position: absolute; width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 65%);
  top: -180px; right: -120px;
  animation: orbPulse 8s ease-in-out infinite;
}
.pf-hero-orb2 {
  position: absolute; width: 450px; height: 450px; border-radius: 50%;
  background: radial-gradient(circle, rgba(100,80,200,0.05) 0%, transparent 65%);
  bottom: 60px; left: 20%;
  animation: orbPulse 11s ease-in-out infinite reverse;
}
@keyframes orbPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes dotBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }

.pf-hero-badge {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent);
  padding: 8px 18px; border: 1px solid var(--accent-line); border-radius: 100px;
  margin-bottom: 36px; width: fit-content;
  animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both 0.15s;
}
.pf-badge-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
  animation: dotBlink 2s ease-in-out infinite;
}

.pf-hero-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(60px, 9.5vw, 136px);
  font-weight: 900; line-height: 0.92; letter-spacing: -0.025em;
  color: var(--text); margin-bottom: 8px; position: relative; z-index: 1;
  animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both 0.3s;
}
.pf-hero-name-stroke {
  -webkit-text-stroke: 1.5px var(--accent);
  color: transparent;
}

.pf-hero-role {
  font-size: 17px; color: var(--muted); font-weight: 400;
  letter-spacing: 0.04em; margin: 28px 0 14px;
  animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both 0.45s;
}
.pf-hero-role em { font-style: normal; color: var(--text); font-weight: 500; }

.pf-hero-summary {
  max-width: 580px; font-size: 15px; color: var(--muted);
  line-height: 1.85; margin-bottom: 44px;
  animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both 0.55s;
}

.pf-hero-ctas {
  display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 52px;
  animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both 0.65s;
}
.pf-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 26px; background: var(--accent); color: #08080c;
  font-weight: 600; font-size: 14px; border-radius: 8px; text-decoration: none;
  transition: background 0.2s, transform 0.2s; letter-spacing: 0.025em;
}
.pf-btn-primary:hover { background: #d9b87e; transform: translateY(-2px); }
.pf-btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; background: transparent; color: var(--text);
  font-size: 14px; font-weight: 500; border-radius: 8px;
  border: 1px solid var(--accent-line); text-decoration: none;
  transition: all 0.2s;
}
.pf-btn-ghost:hover { background: var(--accent-pale); border-color: var(--accent); color: var(--accent); }

.pf-hero-meta {
  display: flex; flex-wrap: wrap; gap: 28px;
  animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both 0.75s;
}
.pf-hero-meta-item {
  display: flex; align-items: center; gap: 8px;
  font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted);
}

/* ── SECTION BASE ── */
.pf-section { padding: 100px 64px; }
.pf-section-alt { background: var(--surface); }

.pf-section-eyebrow {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.2em; color: var(--accent);
  margin-bottom: 14px; display: block;
}
.pf-section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(38px, 5vw, 58px); font-weight: 700;
  color: var(--text); line-height: 1.05; letter-spacing: -0.025em;
}
.pf-section-rule { width: 44px; height: 2px; background: var(--accent); margin-top: 16px; }

/* ── SUMMARY BAND ── */
.pf-about {
  background: var(--surface); border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border); padding: 64px;
}
.pf-about-inner { max-width: 780px; }
.pf-about-text {
  font-family: 'Playfair Display', Georgia, serif; font-style: italic;
  font-size: clamp(19px, 2.2vw, 24px); color: rgba(236,232,224,0.8);
  line-height: 1.65; font-weight: 400;
}

/* ── SKILLS ── */
.pf-skills-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px; margin-top: 52px;
}
.pf-skill-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: 14px; padding: 28px; position: relative; overflow: hidden;
  transition: border-color 0.3s, transform 0.3s, background 0.3s;
}
.pf-skill-card::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  opacity: 0; transition: opacity 0.3s;
}
.pf-skill-card:hover { border-color: var(--accent-line); background: var(--card-hover); transform: translateY(-4px); }
.pf-skill-card:hover::after { opacity: 1; }
.pf-skill-cat {
  font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 18px; font-weight: 500;
}
.pf-skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.pf-skill-tag {
  padding: 5px 12px; background: rgba(255,255,255,0.04);
  border: 1px solid var(--border); border-radius: 100px;
  font-size: 12.5px; color: var(--muted); transition: all 0.2s; cursor: default;
}
.pf-skill-tag:hover { background: var(--accent-pale); border-color: var(--accent-line); color: var(--accent); }

/* ── EXPERIENCE ── */
.pf-exp-list { margin-top: 52px; }
.pf-exp-entry {
  display: grid; grid-template-columns: 200px 1fr;
  gap: 48px; padding: 44px 0;
  border-top: 1px solid var(--border);
  position: relative;
}
.pf-exp-entry:last-child { border-bottom: 1px solid var(--border); }
.pf-exp-sidebar {}
.pf-exp-period {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: var(--accent); letter-spacing: 0.04em; margin-bottom: 12px; line-height: 1.6;
}
.pf-exp-co { font-size: 13px; color: var(--muted); margin-bottom: 4px; font-weight: 500; }
.pf-exp-loc {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--muted); opacity: 0.55; letter-spacing: 0.05em;
}
.pf-exp-current {
  display: inline-block; margin-top: 12px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em;
  text-transform: uppercase; color: #08080c; background: var(--accent);
  padding: 4px 10px; border-radius: 100px; font-weight: 600;
}
.pf-exp-body {}
.pf-exp-role {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(22px, 3vw, 30px); font-weight: 700;
  color: var(--text); line-height: 1.2; margin-bottom: 24px;
}
.pf-exp-highlights { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.pf-exp-hl {
  display: flex; gap: 14px; font-size: 14px; color: var(--muted); line-height: 1.75;
}
.pf-exp-hl-arrow { color: var(--accent); flex-shrink: 0; margin-top: 3px; font-size: 12px; }

/* ── EDUCATION ── */
.pf-edu-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 18px; margin-top: 52px; margin-bottom: 60px;
}
.pf-edu-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: 14px; padding: 28px 28px 24px; position: relative; overflow: hidden;
}
.pf-edu-year-bg {
  position: absolute; top: 12px; right: 18px;
  font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 900;
  color: rgba(201,169,110,0.07); line-height: 1; pointer-events: none; user-select: none;
}
.pf-edu-degree {
  font-size: 15px; font-weight: 600; color: var(--text);
  line-height: 1.4; margin-bottom: 8px; position: relative;
}
.pf-edu-inst { font-size: 13px; color: var(--muted); margin-bottom: 18px; position: relative; line-height: 1.5; }
.pf-edu-score {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  color: var(--accent); font-weight: 500; position: relative;
}

/* ── CERTIFICATIONS ── */
.pf-cert-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 26px; font-weight: 700; color: var(--text); margin-bottom: 24px;
}
.pf-cert-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 12px;
}
.pf-cert-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-left: 2px solid var(--accent);
  border-radius: 0 10px 10px 0;
  padding: 16px 20px; font-size: 13.5px; color: var(--muted);
  transition: color 0.2s, background 0.2s;
}
.pf-cert-item:hover { color: var(--text); background: var(--card-hover); }

/* ── CONTACT ── */
.pf-contact-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: start; margin-top: 52px;
}
.pf-contact-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(36px, 4vw, 52px); font-weight: 700;
  color: var(--text); line-height: 1.1; margin-bottom: 20px;
}
.pf-contact-sub { font-size: 15px; color: var(--muted); line-height: 1.85; }
.pf-contact-links { display: flex; flex-direction: column; gap: 14px; }
.pf-contact-link {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 22px; background: var(--card);
  border: 1px solid var(--border); border-radius: 14px;
  text-decoration: none; color: var(--text);
  transition: all 0.25s; position: relative; overflow: hidden;
}
.pf-contact-link::before {
  content: ''; position: absolute; inset: 0;
  background: var(--accent-pale); opacity: 0; transition: opacity 0.25s;
}
.pf-contact-link:hover { border-color: var(--accent-line); transform: translateX(6px); }
.pf-contact-link:hover::before { opacity: 1; }
.pf-cl-icon {
  width: 42px; height: 42px; border-radius: 10px;
  background: var(--accent-pale); border: 1px solid var(--accent-line);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--accent); position: relative; z-index: 1;
}
.pf-cl-info { flex: 1; position: relative; z-index: 1; }
.pf-cl-label {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted); margin-bottom: 3px;
}
.pf-cl-value { font-size: 14px; font-weight: 500; }
.pf-cl-arrow { color: var(--muted); position: relative; z-index: 1; transition: color 0.2s; }
.pf-contact-link:hover .pf-cl-arrow { color: var(--accent); }

/* ── FOOTER ── */
.pf-footer {
  padding: 28px 64px; border-top: 1px solid var(--border);
  display: flex; justify-content: space-between; align-items: center;
}
.pf-footer-copy {
  font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted);
}
.pf-footer-links { display: flex; gap: 28px; }
.pf-footer-links a {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: var(--muted); text-decoration: none; transition: color 0.2s;
}
.pf-footer-links a:hover { color: var(--accent); }

/* ── REVEAL ── */
.pf-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.pf-reveal.pf-visible { opacity: 1; transform: translateY(0); }
.pf-reveal-d1 { transition-delay: 0.1s; }
.pf-reveal-d2 { transition-delay: 0.2s; }
.pf-reveal-d3 { transition-delay: 0.3s; }
.pf-reveal-d4 { transition-delay: 0.4s; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .pf-hero, .pf-section, .pf-about { padding-left: 28px; padding-right: 28px; }
  .pf-exp-entry { grid-template-columns: 1fr; gap: 20px; }
  .pf-contact-layout { grid-template-columns: 1fr; gap: 48px; }
  .pf-footer { flex-direction: column; gap: 16px; text-align: center; }
  .pf-nav { padding: 16px 28px; }
  .pf-nav-links { gap: 20px; }
}
@media (max-width: 600px) {
  .pf-nav-links { display: none; }
  .pf-hero-name { font-size: 52px; }
  .pf-section { padding-top: 72px; padding-bottom: 72px; }
}
`;

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".pf-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("pf-visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveNav(sections: string[]) {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => { const el = document.getElementById(s); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Portfolio() {
  useReveal();
  const activeNav = useActiveNav(["hero", "skills", "experience", "education", "contact"]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const styleEl = document.createElement("style");
    styleEl.textContent = GLOBAL_CSS;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  return (
    <main className="pf">
      {/* NAV */}
      <nav className="pf-nav">
        <a href="#hero" className="pf-nav-logo">
          <span className="pf-nav-logo-a">A</span>
          <span className="pf-nav-logo-g">G</span>
          <span className="pf-nav-logo-dot">.</span>
        </a>
        <ul className="pf-nav-links">
          {["skills", "experience", "education", "contact"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} className={activeNav === s ? "active" : ""}>{s}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="pf-hero">
        <div className="pf-hero-grid" />
        <div className="pf-hero-orb1" />
        <div className="pf-hero-orb2" />

        <div className="pf-hero-badge">
          <span className="pf-badge-dot" />
          Available for Immediate Joining
        </div>

        <h1 className="pf-hero-name">
          Ajanta{" "}
          <span className="pf-hero-name-stroke">Ghosh</span>
        </h1>

        <p className="pf-hero-role">
          <em>Senior Software Developer</em> &nbsp;·&nbsp; 8.5+ Years &nbsp;·&nbsp; Full Stack Web
        </p>

        <p className="pf-hero-summary">{profile.summary}</p>

        <div className="pf-hero-ctas">
          <a href={profile.github} target="_blank" rel="noreferrer" className="pf-btn-primary">
            <Github size={15} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pf-btn-ghost">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="pf-btn-ghost">
            <Mail size={15} /> Email Me
          </a>
        </div>

        <div className="pf-hero-meta">
          <span className="pf-hero-meta-item">
            <MapPin size={14} color="#c9a96e" /> {profile.location}
          </span>
          <span className="pf-hero-meta-item">
            <Phone size={14} color="#c9a96e" /> {profile.phone}
          </span>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="pf-section">
        <div className="pf-reveal">
          <span className="pf-section-eyebrow">01 — Skills</span>
          <h2 className="pf-section-title">Technical Qualifications</h2>
          <div className="pf-section-rule" />
        </div>
        <div className="pf-skills-grid">
          {skills.map((group, i) => (
            <div key={group.category} className={`pf-skill-card pf-reveal pf-reveal-d${Math.min(i + 1, 4)}`}>
              <p className="pf-skill-cat">{group.category}</p>
              <div className="pf-skill-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="pf-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="pf-section pf-section-alt">
        <div className="pf-reveal">
          <span className="pf-section-eyebrow">02 — Experience</span>
          <h2 className="pf-section-title">Work History</h2>
          <div className="pf-section-rule" />
        </div>
        <div className="pf-exp-list">
          {experiences.map((exp, i) => (
            <div key={i} className="pf-exp-entry pf-reveal">
              <aside className="pf-exp-sidebar">
                <p className="pf-exp-period">{exp.period}</p>
                <p className="pf-exp-co">{exp.company}</p>
                <p className="pf-exp-loc">{exp.location}</p>
                {exp.current && <span className="pf-exp-current">Current</span>}
              </aside>
              <div className="pf-exp-body">
                <h3 className="pf-exp-role">{exp.role}</h3>
                <ul className="pf-exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="pf-exp-hl">
                      <span className="pf-exp-hl-arrow">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="pf-section">
        <div className="pf-reveal">
          <span className="pf-section-eyebrow">03 — Education</span>
          <h2 className="pf-section-title">Academic Background</h2>
          <div className="pf-section-rule" />
        </div>
        <div className="pf-edu-grid">
          {education.map((edu, i) => (
            <div key={i} className={`pf-edu-card pf-reveal pf-reveal-d${i + 1}`}>
              <span className="pf-edu-year-bg">{edu.year}</span>
              <p className="pf-edu-degree">{edu.degree}</p>
              <p className="pf-edu-inst">{edu.institution}</p>
              <p className="pf-edu-score">{edu.score}</p>
            </div>
          ))}
        </div>

        <div className="pf-reveal">
          <p className="pf-cert-title">Certifications</p>
          <div className="pf-cert-grid">
            {certifications.map((cert, i) => (
              <div key={i} className={`pf-cert-item pf-reveal pf-reveal-d${i + 1}`}>{cert}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="pf-section pf-section-alt">
        <div className="pf-reveal">
          <span className="pf-section-eyebrow">04 — Contact</span>
        </div>
        <div className="pf-contact-layout">
          <div className="pf-reveal">
            <h2 className="pf-contact-heading">Let's Build Something Together</h2>
            <p className="pf-contact-sub">
              I'm actively exploring new opportunities and available to join immediately.
              Whether you have a project in mind or just want to connect — reach out anytime.
            </p>
          </div>
          <div className="pf-contact-links pf-reveal pf-reveal-d1">
            <a href={`mailto:${profile.email}`} className="pf-contact-link">
              <span className="pf-cl-icon"><Mail size={18} /></span>
              <div className="pf-cl-info">
                <p className="pf-cl-label">Email</p>
                <p className="pf-cl-value">{profile.email}</p>
              </div>
              <ExternalLink size={14} className="pf-cl-arrow" />
            </a>
            <a href={`tel:${profile.phone}`} className="pf-contact-link">
              <span className="pf-cl-icon"><Phone size={18} /></span>
              <div className="pf-cl-info">
                <p className="pf-cl-label">Phone</p>
                <p className="pf-cl-value">{profile.phone}</p>
              </div>
              <ExternalLink size={14} className="pf-cl-arrow" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="pf-contact-link">
              <span className="pf-cl-icon"><Github size={18} /></span>
              <div className="pf-cl-info">
                <p className="pf-cl-label">GitHub</p>
                <p className="pf-cl-value">github.com/ajantait08</p>
              </div>
              <ExternalLink size={14} className="pf-cl-arrow" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pf-contact-link">
              <span className="pf-cl-icon"><Linkedin size={18} /></span>
              <div className="pf-cl-info">
                <p className="pf-cl-label">LinkedIn</p>
                <p className="pf-cl-value">in/ajanta-ghosh-57a42a14a</p>
              </div>
              <ExternalLink size={14} className="pf-cl-arrow" />
            </a>
            <div className="pf-contact-link" style={{ cursor: "default" }}>
              <span className="pf-cl-icon"><MapPin size={18} /></span>
              <div className="pf-cl-info">
                <p className="pf-cl-label">Location</p>
                <p className="pf-cl-value">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <span className="pf-footer-copy">
          © {new Date().getFullYear()} Ajanta Ghosh — Built with Next.js
        </span>
        <nav className="pf-footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </footer>
    </main>
  );
}