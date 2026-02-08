"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const services = [
  {
    title: "Custom Software",
    icon: "fa-code",
    bestFor: "Founders, startups, and teams modernizing legacy tools",
    solves: [
      "Rigid off-the-shelf tools that block growth",
      "Disconnected systems and manual spreadsheets",
      "Slow product iteration cycles",
    ],
    gets: [
      "Product discovery & UX mapping",
      "Scalable full-stack build (web, mobile, cloud)",
      "Release roadmap and QA automation",
      "Long-term maintenance and optimization",
    ],
    timeline: "6-10 weeks (scope dependent)",
    detailHref: "/services/custom-web-development",
  },
  {
    title: "API & Server Integration",
    icon: "fa-plug",
    bestFor: "CTOs, product owners, and platform teams",
    solves: [
      "Fragmented services that don't share data",
      "Slow partner onboarding and unclear API docs",
      "Security gaps between systems",
    ],
    gets: [
      "REST/GraphQL API design & implementation",
      "OAuth2/JWT authentication flows",
      "Webhook & event-driven integrations",
      "Observability, logging, and uptime monitors",
    ],
    timeline: "2-6 weeks (per integration)",
    detailHref: "/services/api-integration",
  },
  {
    title: "Automation & Bots",
    icon: "fa-robot",
    bestFor: "Ops, growth, and support teams",
    solves: [
      "Manual, repetitive workflows",
      "Slow data handoffs across tools",
      "Missed follow-ups and reporting delays",
    ],
    gets: [
      "Workflow mapping and optimization",
      "Zapier/Make + custom scripts",
      "CRM and marketing automation",
      "Scheduled reporting dashboards",
    ],
    timeline: "1-4 weeks (per workflow)",
    detailHref: "/services/automation",
  },
  {
    title: "Cloud Architecture",
    icon: "fa-cloud",
    bestFor: "Scaling startups and enterprise modernization",
    solves: [
      "Unpredictable infrastructure costs",
      "Downtime during traffic spikes",
      "Security and compliance risks",
    ],
    gets: [
      "Cloud-native architecture (AWS/GCP/Azure)",
      "CI/CD pipelines and infrastructure as code",
      "Performance tuning and auto-scaling",
      "Security reviews and disaster recovery",
    ],
    timeline: "4-8 weeks (phased rollout)",
    detailHref: "/services/custom-web-development",
  },
  {
    title: "WordPress Development",
    icon: "fa-wordpress",
    bestFor: "Content teams and marketing-led businesses",
    solves: [
      "Slow, outdated themes",
      "Limited customization options",
      "Plugin conflicts and security issues",
    ],
    gets: [
      "Custom theme or block development",
      "Performance optimization & caching",
      "SEO-ready architecture",
      "Ongoing updates and monitoring",
    ],
    timeline: "3-6 weeks (scope dependent)",
    detailHref: "/services/ecommerce-development",
  },
  {
    title: "E-Commerce Website Building",
    icon: "fa-cart-shopping",
    bestFor: "Online brands, DTC teams, and marketplaces",
    solves: [
      "Low conversion rates",
      "Complex checkout flows",
      "Lack of analytics and tracking",
    ],
    gets: [
      "Shopify/WooCommerce/custom builds",
      "Conversion-focused UX and UI",
      "Payment, shipping, and tax setup",
      "Analytics + attribution dashboards",
    ],
    timeline: "4-8 weeks (store build)",
    detailHref: "/services/ecommerce-development",
  },
  {
    title: "Social Media Automation",
    icon: "fa-bolt",
    bestFor: "Marketing teams and creator brands",
    solves: [
      "Inconsistent posting schedules",
      "Manual content repurposing",
      "Lost engagement due to slow replies",
    ],
    gets: [
      "Scheduling pipelines & content queues",
      "Cross-platform analytics dashboards",
      "Auto-responder and lead capture flows",
      "Content repurposing scripts",
    ],
    timeline: "1-3 weeks (setup)",
    detailHref: "/services/automation",
  },
  {
    title: "AI Agents",
    icon: "fa-brain",
    bestFor: "Product teams exploring automation and intelligence",
    solves: [
      "Slow internal support resolution",
      "Noisy knowledge bases",
      "Lack of personalized customer journeys",
    ],
    gets: [
      "Custom AI copilots for teams",
      "Retrieval-augmented knowledge search",
      "Integrations with Slack, email, and CRMs",
      "Guardrails, testing, and monitoring",
    ],
    timeline: "3-6 weeks (pilot)",
    detailHref: "/services/custom-web-development",
  },
];

const impactCards = [
  {
    title: "Increase revenue 30-50%",
    text:
      "Faster checkouts, clean integrations, and automated workflows drive repeat revenue.",
    badge: '"Cut cart abandonment by 42% in 3 months" — KC Linen',
    icon: "fa-arrow-trend-up",
  },
  {
    title: "Ship products 2-3x faster",
    text:
      "Modular architecture, clear documentation, and CI/CD keep velocity high.",
    badge: "150+ projects delivered on time from MVP to scale",
    icon: "fa-stopwatch",
  },
  {
    title: "Eliminate manual work",
    text: "Bots, webhooks, and automations remove busywork and errors.",
    badge: '"Saved 20+ hours/week on data entry" — DailyHisab',
    icon: "fa-bolt",
  },
  {
    title: "Reduce technical risk",
    text:
      "Security-first builds with monitoring, audits, and resilient infrastructure.",
    badge: "Zero critical security incidents across our portfolio",
    icon: "fa-shield-halved",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>(".custom-cursor");
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    let cursorFrame: number;
    const cursorTarget = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const cursorPosition = { x: cursorTarget.x, y: cursorTarget.y };
    const cursorScale = { value: 1 };
    const cursorScaleTarget = { value: 1 };
    let scaleTimeout: number | undefined;

    const updateCursor = () => {
      if (!cursor) return;
      cursorPosition.x += (cursorTarget.x - cursorPosition.x) * 0.15;
      cursorPosition.y += (cursorTarget.y - cursorPosition.y) * 0.15;
      cursorScale.value += (cursorScaleTarget.value - cursorScale.value) * 0.12;
      cursor.style.transform =
        `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale.value})`;
      cursorFrame = window.requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (event: MouseEvent) => {
      cursorTarget.x = event.clientX;
      cursorTarget.y = event.clientY;
      cursorScaleTarget.value = 0.85;
      if (scaleTimeout) {
        window.clearTimeout(scaleTimeout);
      }
      scaleTimeout = window.setTimeout(() => {
        cursorScaleTarget.value = 1;
      }, 120);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!cursor || !target) return;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        cursor.classList.add("is-active");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!cursor || !target) return;
      if (
        target.closest("a, button, input, textarea, select, [role='button']")
      ) {
        cursor.classList.remove("is-active");
      }
    };

    if (cursor && supportsFinePointer) {
      document.body.classList.add("custom-cursor-active");
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);
      cursorFrame = window.requestAnimationFrame(updateCursor);
    }

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      if (cursorFrame) {
        window.cancelAnimationFrame(cursorFrame);
      }
      if (scaleTimeout) {
        window.clearTimeout(scaleTimeout);
      }
    };
  }, []);

  return (
    <div className="services-page">
      <div className="custom-cursor" />
      <div className="noise-layer" />
      <div className="bubble-field" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span className="bubble" key={`bubble-${index}`} />
        ))}
      </div>
      <header className="services-hero">
        <motion.nav
          className="navbar navbar-expand-lg navbar-dark py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container-fluid px-lg-5">
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
            >
              <span className="brand-icon">
                <img src="/images/logo.png" alt="Home Of Coders logo" />
              </span>
              <span className="brand-text">Home Of Coders</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#servicesNav"
              aria-controls="servicesNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="servicesNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i
                      className="fa-solid fa-house nav-icon"
                      aria-hidden="true"
                    />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/services">
                    <i
                      className="fa-solid fa-briefcase nav-icon"
                      aria-hidden="true"
                    />
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#work">
                    <i
                      className="fa-solid fa-diagram-project nav-icon"
                      aria-hidden="true"
                    />
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <i
                      className="fa-solid fa-envelope nav-icon"
                      aria-hidden="true"
                    />
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    <i
                      className="fa-solid fa-user-group nav-icon"
                      aria-hidden="true"
                    />
                    About us
                  </a>
                </li>
              </ul>
              <div className="nav-cta-group">
                <a
                  className="btn btn-glow"
                  href="https://cal.com/nirob/int-meeting"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <i className="fa-solid fa-phone" />
                  </span>
                  Book a call
                </a>
                <a className="btn btn-outline-light" href="/contact">
                  Get quote
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
        <div className="container hero-content">
          <div className="services-hero-inner">
            <div>
              <p className="section-kicker">Our Services</p>
              <h1 className="display-4 fw-bold text-white">
                High-impact services for teams that need speed, clarity, and
                quality.
              </h1>
              <p className="text-white-50 mt-3">
                We design, build, and scale digital products with the
                craftsmanship of a boutique studio and the execution of an
                enterprise-ready team.
              </p>
              <div className="services-hero-actions">
                <a className="btn btn-glow btn-lg" href="/contact">
                  Start a project
                </a>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#services-list"
                >
                  Explore all services
                </a>
              </div>
            </div>
            <div className="services-hero-panel">
              <div className="services-highlight">
                <span className="highlight-label">Delivery snapshots</span>
                <h3>Clarity from day one</h3>
                <p>
                  Strategy, design, engineering, and optimization delivered as a
                  single, aligned team.
                </p>
                <div className="highlight-grid">
                  {[
                    "Design sprints",
                    "Technical discovery",
                    "Release planning",
                    "Lifecycle support",
                  ].map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="services-highlight-callout">
                <span>Average kickoff time</span>
                <strong>5 business days</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services-list" className="section-padding services-cards">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Capabilities</p>
            <h2 className="text-white">
              Services built to match your growth curve.
            </h2>
          </div>
          <div className="row g-4 mt-4">
            {services.map((service) => (
              <div className="col-md-6 col-xl-4" key={service.title}>
                <article className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      <i
                        className={`fa-solid ${service.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-detail-block">
                    <p className="service-detail-label">Best for</p>
                    <p className="service-detail-text">{service.bestFor}</p>
                  </div>
                  <div className="service-detail-block">
                    <p className="service-detail-label">Solves</p>
                    <ul className="service-detail-list negative">
                      {service.solves.map((item) => (
                        <li key={item}>
                          <i className="fa-solid fa-xmark" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-detail-block">
                    <p className="service-detail-label">What you get</p>
                    <ul className="service-detail-list positive">
                      {service.gets.map((item) => (
                        <li key={item}>
                          <i className="fa-solid fa-check" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-detail-footer">
                    <span className="timeline-pill">
                      Timeline: {service.timeline}
                    </span>
                    <Link
                      className="service-cta"
                      href={service.detailHref as any}
                    >
                      View details
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding alt-background services-impact">
        <div className="container">
          <div className="section-heading text-center">
            <p className="section-kicker">Why teams choose us</p>
            <h2 className="text-white">
              Outcomes you can feel across the business.
            </h2>
          </div>
          <div className="row g-4 mt-4">
            {impactCards.map((card) => (
              <div className="col-md-6" key={card.title}>
                <div className="impact-card">
                  <div className="impact-icon">
                    <i className={`fa-solid ${card.icon}`} aria-hidden="true" />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                  <div className="impact-badge">
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    />
                    <span>{card.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="section-kicker">Ready when you are</p>
              <h2 className="text-white">Let’s plan the roadmap together.</h2>
              <p className="text-white-50">
                Share your goals and we’ll craft the right mix of services,
                timelines, and delivery cadence.
              </p>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-glow"
                href="https://cal.com/nirob/int-meeting"
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </a>
              <a className="btn btn-outline-light" href="/">
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
