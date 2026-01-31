"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-card", {
      opacity: 0,
      y: 80,
      duration: 1.4,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".service-card, .work-card, .timeline-item").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reset",
          once: false,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".feature-card, .brand-pill").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reset",
          once: false,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".timeline-node").forEach((node, i) => {
      gsap.from(node, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reset",
          once: false,
        },
      });
    });

    gsap.to(".hero-glow", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.to(".orb", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
      stagger: 0.6,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <div className="noise-layer" />
      <header className="hero-section">
        <div className="hero-orbs">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="orb orb-three" />
        </div>
        <motion.nav
          className="navbar navbar-expand-lg navbar-dark py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container-fluid px-lg-5">
            <a className="navbar-brand d-flex align-items-center gap-2" href="#">
              <span className="brand-icon">HC</span>
              <span className="brand-text">Home Of Coders</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#process">
                    Process
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a className="btn btn-glow ms-lg-4" href="#contact">
                Book a call
              </a>
            </div>
          </div>
        </motion.nav>

        <div className="container-fluid px-lg-5 hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="badge-pill">⚡ Crafted by elite makers</div>
              <h1 className="display-3 fw-bold text-white hero-title">
                We build <span className="highlight">stellar</span> web &amp; software
                experiences.
              </h1>
              <p className="lead text-white-50 mt-4">
                Home Of Coders is a full-stack agency inspired by fearless design. We blend
                strategy, code, and motion to ship premium digital products that convert.
              </p>
              <div className="hero-chips">
                {["Product Design", "Web Apps", "AI Integrations", "Growth Sprints"].map((chip) => (
                  <span className="hero-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className="btn btn-glow btn-lg" href="#work">
                  See our work
                </a>
                <a className="btn btn-outline-light btn-lg" href="#services">
                  Explore services
                </a>
              </div>
              <div className="hero-stats mt-5">
                {["120+", "98%", "24/7"].map((stat, index) => (
                  <motion.div
                    key={stat}
                    custom={index}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="stat-number">{stat}</h3>
                    <p>
                      {index === 0
                        ? "products launched"
                        : index === 1
                          ? "client retention"
                          : "support rhythm"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-card">
                <div className="hero-card-inner">
                  <div className="hero-panel">
                    <p className="panel-label">Featured Launch</p>
                    <h4>Orbit AI Platform</h4>
                    <p>
                      A multi-tenant SaaS experience with real-time analytics, custom
                      workflows, and AI copilots.
                    </p>
                    <div className="panel-tags">
                      <span>Next.js 16</span>
                      <span>GSAP</span>
                      <span>Motion</span>
                      <span>WebGL</span>
                    </div>
                  </div>
                  <div className="hero-radar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="hero-glow" />
                </div>
                <div className="floating-card">
                  <h5>Velocity Sprint</h5>
                  <p>Ship MVPs in 6 weeks</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span />
          Scroll
        </div>
      </header>

      <section className="section-padding brand-strip">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <p className="section-kicker mb-2">Trusted by builders</p>
              <h3 className="text-white mb-3">Design systems for ambitious teams.</h3>
              <p className="text-white-50">
                From MVPs to scale-ups, we partner with product leaders who want motion-rich,
                conversion-first experiences.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="brand-marquee">
                <div className="brand-track">
                  {[
                    "Pulse Labs",
                    "Orbitra",
                    "Starlight",
                    "Nova",
                    "Rift",
                    "CloudNine",
                    "Vector",
                    "Lumina",
                  ].map((brand) => (
                    <span className="brand-pill" key={brand}>
                      {brand}
                    </span>
                  ))}
                </div>
                <div className="brand-track brand-track-alt">
                  {[
                    "Pulse Labs",
                    "Orbitra",
                    "Starlight",
                    "Nova",
                    "Rift",
                    "CloudNine",
                    "Vector",
                    "Lumina",
                  ].map((brand) => (
                    <span className="brand-pill" key={`${brand}-alt`}>
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Services</p>
            <h2 className="text-white">End-to-end teams for bold builders.</h2>
          </div>
          <div className="row g-4 mt-4">
            {[
              {
                icon: "fa-code",
                title: "API Integration & Development",
                text: "Strategic guidance to align your stack with long-term business growth.",
              },
              {
                icon: "fa-globe",
                title: "Custom Web Development",
                text: "Transform raw data into insights that power smarter decisions.",
              },
              {
                icon: "fa-store",
                title: "Website Development Service",
                text: "Responsive websites built for performance, accessibility, and brand impact.",
              },
              {
                icon: "fa-bolt",
                title: "Business Automation",
                text: "Eliminate manual work with intelligent automation flows.",
              },
              {
                icon: "fa-chart-line",
                title: "SEO & Digital Marketing",
                text: "Data-driven strategies that keep your growth compounding.",
              },
              {
                icon: "fa-pen-ruler",
                title: "UI/UX Design",
                text: "User-centered design that increases engagement and conversions.",
              },
            ].map((service) => (
              <div className="col-md-6 col-lg-6" key={service.title}>
                <div className="service-card service-card-light">
                  <div className="service-icon">
                    <i className={`fa-solid ${service.icon}`} />
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
                  <button className="service-cta" type="button">
                    <span className="service-cta-icon">+</span>
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding timeline-showcase">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Why teams choose us</p>
            <h2 className="text-white">Proof points that compound over time.</h2>
          </div>
          <div className="timeline-stats">
            {[
              { value: "5+", label: "Years experience", tone: "tone-violet" },
              { value: "120+", label: "Projects delivered", tone: "tone-blue" },
              { value: "40+", label: "APIs integrated", tone: "tone-orange" },
              { value: "24/7", label: "Support available", tone: "tone-green" },
            ].map((stat) => (
              <div className="timeline-stat" key={stat.label}>
                <span className={`stat-value ${stat.tone}`}>{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="timeline-grid">
            {[
              {
                badge: "5+",
                title: "Years of Full-Stack Engineering",
                text: "Proven track record across multiple industries from startups to enterprises.",
                tone: "tone-violet",
                icon: "fa-briefcase",
              },
              {
                badge: "120+",
                title: "Projects Delivered Worldwide",
                text: "Real results for businesses across 15+ countries, delivering scalable solutions.",
                tone: "tone-blue",
                icon: "fa-globe",
              },
              {
                badge: "40+",
                title: "API & Automation Specialists",
                text: "Deep expertise in complex system integrations, webhooks, and workflows.",
                tone: "tone-orange",
                icon: "fa-plug",
              },
              {
                badge: "24/7",
                title: "Fast Delivery with Lifetime Support",
                text: "Quick turnaround with long-term partnership and dedicated maintenance.",
                tone: "tone-green",
                icon: "fa-headset",
              },
              {
                badge: "100%",
                title: "Professional Communication & PM",
                text: "Weekly updates, transparent process, and always available for your questions.",
                tone: "tone-gold",
                icon: "fa-comments",
              },
              {
                badge: "A+",
                title: "Security-Focused Development",
                text: "OWASP standards, data protection, and compliance-ready architectures.",
                tone: "tone-pink",
                icon: "fa-shield-halved",
              },
            ].map((item, index) => (
              <div className="timeline-node" key={item.title}>
                <div className={`timeline-marker ${item.tone}`}>
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </div>
                <div className={`timeline-card ${index % 2 === 0 ? "align-left" : "align-right"}`}>
                  <span className={`timeline-badge ${item.tone}`}>{item.badge}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding feature-section alt-background">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <p className="section-kicker">Why Home Of Coders</p>
              <h2 className="text-white">We choreograph every pixel.</h2>
              <p className="text-white-50">
                Inspired by the energy of modern agency sites, we blend cinematic motion,
                high-contrast gradients, and modular systems that evolve with your product.
              </p>
              <a className="btn btn-glow mt-3" href="#contact">
                Book a discovery call
              </a>
            </div>
            <div className="col-lg-7">
              <div className="feature-grid">
                {[
                  {
                    title: "Immersive UI Systems",
                    text: "Signature interactions, animated depth, and tactile components.",
                  },
                  {
                    title: "Rapid Prototype Ops",
                    text: "Clickable journeys in days with clarity on scope and cost.",
                  },
                  {
                    title: "Metric-driven Launches",
                    text: "Conversion experiments, SEO, and analytics baked in.",
                  },
                  {
                    title: "Always-on Support",
                    text: "Continuous improvements and prioritized enhancements.",
                  },
                ].map((feature) => (
                  <div className="feature-card" key={feature.title}>
                    <h5>{feature.title}</h5>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-padding alt-background">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="section-kicker">Selected Work</p>
              <h2 className="text-white">We craft magnetic digital brands.</h2>
              <p className="text-white-50">
                Inspired by Codenvibe's bold visuals, our team merges neon energy with
                precise engineering to create experiences people remember.
              </p>
              <a className="btn btn-outline-light mt-3" href="#contact">
                Start a project
              </a>
            </div>
            <div className="col-lg-7">
              <div className="work-grid">
                {[
                  {
                    title: "Pulse Finance",
                    text: "Realtime fintech dashboard with secure wallets.",
                  },
                  {
                    title: "Aurora Health",
                    text: "Patient journey portal with frictionless onboarding.",
                  },
                  {
                    title: "Nova Retail",
                    text: "Composable commerce with headless growth.",
                  },
                  {
                    title: "Signal Cloud",
                    text: "DevOps intelligence layer with predictive uptime.",
                  },
                ].map((work) => (
                  <div className="work-card" key={work.title}>
                    <h5>{work.title}</h5>
                    <p>{work.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Process</p>
            <h2 className="text-white">Momentum in every sprint.</h2>
          </div>
          <div className="timeline mt-5">
            {[
              { step: "01", title: "Discover", text: "Uncover growth, map architecture, align vision." },
              { step: "02", title: "Design", text: "Prototype bold visuals with rapid iteration." },
              { step: "03", title: "Develop", text: "Agile delivery with measurable milestones." },
              { step: "04", title: "Launch", text: "Scale, monitor, and optimize across every channel." },
            ].map((item) => (
              <div className="timeline-item" key={item.step}>
                <span className="step">{item.step}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding alt-background">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="section-kicker">Let’s build</p>
              <h2 className="text-white">Ready for lift-off?</h2>
              <p className="text-white-50">
                Tell us where you’re headed. We’ll craft a tailored roadmap and ship your next
                launch faster than you thought possible.
              </p>
              <div className="contact-list">
                <div>
                  <i className="fa-solid fa-envelope" /> hello@homeofcoders.agency
                </div>
                <div>
                  <i className="fa-solid fa-location-dot" /> Remote-first, worldwide.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="contact-card">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control" id="name" placeholder="Ada Lovelace" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="company">
                    Company
                  </label>
                  <input className="form-control" id="company" placeholder="Starlight Labs" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="vision">
                    Project vision
                  </label>
                  <textarea
                    className="form-control"
                    id="vision"
                    rows={4}
                    placeholder="Share your idea..."
                  />
                </div>
                <button className="btn btn-glow w-100" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div>
              <strong>Home Of Coders</strong>
              <p className="mb-0">Crafting experiences with relentless precision.</p>
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
