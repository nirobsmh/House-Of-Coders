import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="noise-layer" />
      <header className="about-hero">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid px-lg-5">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <span className="brand-icon">HC</span>
              <span className="brand-text">Home Of Coders</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#aboutNav"
              aria-controls="aboutNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="aboutNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a className="btn btn-glow ms-lg-4" href="/#contact">
                <span className="btn-icon" aria-hidden="true">
                  <i className="fa-solid fa-phone" />
                </span>
                Book a call
              </a>
            </div>
          </div>
        </nav>

        <div className="container-fluid px-lg-5 about-hero-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="about-eyebrow">Engineering-driven team</span>
              <h1 className="display-3 fw-bold">The People Behind Home Of Coders</h1>
              <p className="lead">
                We are a boutique engineering studio focused on high-impact, AI-powered products. Our
                approach is rooted in ownership, craftsmanship, and building systems that scale
                sustainably.
              </p>
              <div className="about-highlight">
                <div>
                  <h3>AI-first delivery</h3>
                  <p>Rapid prototypes, smart automation, and production-ready architecture.</p>
                </div>
                <div>
                  <h3>Product ownership</h3>
                  <p>From MVPs to global launches, we stay with you through every iteration.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-hero-card">
                <div className="about-hero-badge">Founder &amp; Engineer</div>
                <h2>Nirob</h2>
                <p>
                  Full-stack software engineer with 7+ years of experience building AI-powered apps.
                  Led engineering for products, shipping real-time systems using React, Next.js,
                  React Native, Node.js, and modern AI stacks.
                </p>
                <a
                  className="about-linkedin"
                  href="https://www.linkedin.com/in/nirobsmh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-founder-section">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-founder-card">
                <span className="about-role">Founder &amp; Lead Engineer</span>
                <h2>Nirob</h2>
                <h3>Full-Stack Software Engineer</h3>
                <p>
                  Experienced in owning products end-to-end, from MVP to scale. I design and build
                  AI-powered systems that prioritize performance, reliability, and measurable
                  business impact.
                </p>
                <div className="about-skill-grid">
                  <span>React &amp; Next.js</span>
                  <span>Node.js APIs</span>
                  <span>Real-time Systems</span>
                  <span>AI Product Strategy</span>
                </div>
                <a
                  className="btn btn-outline-light"
                  href="https://www.linkedin.com/in/nirobsmh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-founder-image">
                <Image src="/images/nirob.svg" alt="Portrait of Nirob" width={560} height={640} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="container-fluid px-lg-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-panel about-panel-dark">
                <h2>Vision</h2>
                <p>
                  Build a globally trusted engineering partner that helps teams innovate, scale, and
                  lead through intelligent digital systems.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-panel about-panel-light">
                <h2>Mission</h2>
                <p>
                  Design, develop, and deliver modern software that solves real business challenges
                  through transparency, technical excellence, and measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
