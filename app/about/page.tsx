import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";

const foundersTeam = [
  {
    name: "Iftakhar Khan Efaz",
    image: "/images/iftakhar-efaz.svg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Saha Anirudha Arnob",
    image: "/images/saha-arnob.svg",
    linkedin: "https://www.linkedin.com",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="noise-layer" />
      <header className="about-hero">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid px-lg-5">
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
            >
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
                  <a className="nav-link" href="/">
                    <i className="fa-solid fa-house nav-icon" aria-hidden="true" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    <i className="fa-solid fa-briefcase nav-icon" aria-hidden="true" />
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#work">
                    <i className="fa-solid fa-diagram-project nav-icon" aria-hidden="true" />
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <i className="fa-solid fa-envelope nav-icon" aria-hidden="true" />
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">
                    <i className="fa-solid fa-user-group nav-icon" aria-hidden="true" />
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
        </nav>

        <div className="container-fluid px-lg-5 about-hero-content">
          <div className="row align-items-center">
            <div className="col-lg-9 col-xl-8">
              <span className="about-eyebrow">
                <i className="fa-solid fa-people-group" aria-hidden="true" />
                About us
              </span>
              <h1 className="display-3 fw-bold">
                The People Behind Home Of Coders
              </h1>
              <p className="lead">
                We are a boutique engineering studio focused on high-impact,
                AI-powered products. Our approach is rooted in ownership,
                craftsmanship, and building systems that scale sustainably.
              </p>
              <div className="about-highlight">
                <div>
                  <h3>AI-first delivery</h3>
                  <p>
                    Rapid prototypes, smart automation, and production-ready
                    architecture.
                  </p>
                </div>
                <div>
                  <h3>Product ownership</h3>
                  <p>
                    From MVPs to global launches, we stay with you through every
                    iteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-founder-section">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div className="about-founder-card">
                <a
                  className="about-card-linkedin"
                  href="https://www.linkedin.com/in/nirobsmh/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Nirob on LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
                <span className="about-role">Founder &amp; Lead Engineer</span>
                <h2>Nirob</h2>
                <h3>Full-Stack Software Engineer</h3>
                <p>
                  Experienced in owning products end-to-end, from MVP to scale.
                  I design and build AI-powered systems that prioritize
                  performance, reliability, and measurable business impact.
                </p>
                <div className="about-skill-grid">
                  <span>React &amp; Next.js</span>
                  <span>Node.js APIs</span>
                  <span>Real-time Systems</span>
                  <span>AI Product Strategy</span>
                </div>
                <a
                  className="btn btn-outline-light about-link-btn"
                  href="https://www.linkedin.com/in/nirobsmh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                  View LinkedIn
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-founder-image">
                <Image
                  src="/images/nirob.jpg"
                  alt="Portrait of Nirob"
                  width={560}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founders-team">
        <div className="container-fluid px-lg-5">
          <div className="section-heading text-center about-team-heading">
            <p className="section-kicker">Founders team</p>
            <h2 className="text-white">Automation &amp; Engineering Leaders</h2>
            <p className="about-team-subtitle">
              A multidisciplinary duo focused on reliable automation, scalable
              engineering, and systems that keep businesses moving.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {foundersTeam.map((founder) => (
              <div className="col-md-6 col-lg-5" key={founder.name}>
                <div className="about-team-card">
                  <a
                    className="about-card-linkedin"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                  </a>
                  <div className="about-team-avatar">
                    <Image
                      src={founder.image}
                      alt={`Avatar of ${founder.name}`}
                      width={88}
                      height={88}
                    />
                  </div>
                  <span className="about-team-role">Automation &amp; Engineering</span>
                  <h3>{founder.name}</h3>
                  <p className="about-team-exp">
                    3+ years of experience with Automation and Engineering.
                  </p>
                </div>
              </div>
            ))}
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
                  Build a globally trusted engineering partner that helps teams
                  innovate, scale, and lead through intelligent digital systems.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-panel about-panel-light">
                <h2>Mission</h2>
                <p>
                  Design, develop, and deliver modern software that solves real
                  business challenges through transparency, technical
                  excellence, and measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
