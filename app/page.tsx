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
  }, []);

  return (
    <div>
      <div className="noise-layer" />
      <header className="hero-section">
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
      </header>

      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Services</p>
            <h2 className="text-white">End-to-end teams for bold builders.</h2>
          </div>
          <div className="row g-4 mt-4">
            {[
              {
                icon: "fa-pen-ruler",
                title: "Product Strategy",
                text: "Research, positioning, and launch plans that fuel growth.",
              },
              {
                icon: "fa-laptop-code",
                title: "Design & UX",
                text: "Immersive interfaces with animation-driven storytelling.",
              },
              {
                icon: "fa-microchip",
                title: "Engineering",
                text: "Scalable architecture, full-stack builds, and AI pipelines.",
              },
              {
                icon: "fa-cloud",
                title: "Cloud & DevOps",
                text: "CI/CD, monitoring, and reliable infrastructure setups.",
              },
              {
                icon: "fa-chart-line",
                title: "Growth Labs",
                text: "Conversion optimization and performance playbooks.",
              },
              {
                icon: "fa-shield-halved",
                title: "Security",
                text: "Compliance-driven builds with proactive protection.",
              },
            ].map((service) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <div className="service-card">
                  <i className={`fa-solid ${service.icon}`} />
                  <h5>{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
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
