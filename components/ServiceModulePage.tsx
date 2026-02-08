"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { ServiceModule } from "../data/service-modules";
import SiteFooter from "./SiteFooter";

type ServiceModulePageProps = {
  service: ServiceModule;
};

export default function ServiceModulePage({ service }: ServiceModulePageProps) {
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
    <div className="service-module-page">
      <div className="custom-cursor" />
      <div className="noise-layer" />
      <div className="bubble-field" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span className="bubble" key={`bubble-${index}`} />
        ))}
      </div>
      <header className="service-module-hero">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid px-lg-5">
            <Link
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
            >
              <span className="brand-icon">
                <img src="/images/logo.png" alt="Home Of Coders logo" />
              </span>
              <span className="brand-text">Home Of Coders</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#serviceDetailNav"
              aria-controls="serviceDetailNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="serviceDetailNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    <i
                      className="fa-solid fa-house nav-icon"
                      aria-hidden="true"
                    />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    <i
                      className="fa-solid fa-briefcase nav-icon"
                      aria-hidden="true"
                    />
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#work">
                    <i
                      className="fa-solid fa-diagram-project nav-icon"
                      aria-hidden="true"
                    />
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    <i
                      className="fa-solid fa-envelope nav-icon"
                      aria-hidden="true"
                    />
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    <i
                      className="fa-solid fa-user-group nav-icon"
                      aria-hidden="true"
                    />
                    About us
                  </Link>
                </li>
              </ul>
              <div className="nav-cta-group">
                <Link
                  className="btn btn-glow"
                  href="https://cal.com/nirob/int-meeting"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <i className="fa-solid fa-phone" />
                  </span>
                  Book a call
                </Link>
                <Link className="btn btn-outline-light" href="/contact">
                  Get quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container hero-content service-module-hero-content">
          <Link className="service-return" href="/services">
            <span className="service-return-icon">
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            </span>
            Return
          </Link>
          <div className="service-module-hero-grid">
            <div className="service-module-title">
              <p className="service-module-kicker">{service.module}</p>
              <h1>
                {service.title}{" "}
                <span className="service-module-accent">{service.accent}</span>
              </h1>
            </div>
            <div className="service-module-summary">
              <p className="service-module-summary-title">
                {service.summaryTitle}
              </p>
              <p className="service-module-summary-text">
                {service.summaryText}
              </p>
              <Link
                className="btn btn-glow service-module-cta"
                href={service.ctaHref as any}
              >
                {service.ctaLabel}
                <span className="service-module-cta-icon" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="section-padding service-module-grid">
        <div className="container">
          <div className="row g-4">
            {service.features.map((feature, index) => {
              const number = `${index + 1}`.padStart(2, "0");
              const isHighlight = service.highlightIndex === index;
              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={`${service.slug}-${feature.title}`}
                >
                  <div
                    className={`service-module-card ${
                      isHighlight ? "is-highlight" : ""
                    }`.trim()}
                  >
                    <div className="service-module-card-icon">
                      <i
                        className={`fa-solid ${feature.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="service-module-card-number">{number}</span>
                    <p>{feature.title}</p>
                  </div>
                </div>
              );
            })}
            <div className="col-md-6 col-lg-4">
              <div className="service-module-card service-module-card-cta">
                <span className="service-module-card-kicker">
                  Need a custom solution?
                </span>
                <h3>Book a Free Strategy Call</h3>
                <Link
                  className="service-module-card-link"
                  href="https://cal.com/nirob/int-meeting"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Book a free strategy call"
                >
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
