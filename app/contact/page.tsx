import SiteFooter from "../../components/SiteFooter";

const serviceOptions = [
  {
    title: "Web Development",
    description: "Modern web apps with React, Next.js, and more",
    icon: "fa-code",
  },
  {
    title: "WordPress Development",
    description: "Custom themes and plugin development",
    icon: "fa-wordpress",
  },
  {
    title: "Custom Software",
    description: "Tailored solutions for unique business needs",
    icon: "fa-gears",
  },
  {
    title: "Automation & Bots",
    description: "Streamline workflows with intelligent automation",
    icon: "fa-robot",
  },
  {
    title: "API & Server Integration",
    description: "Seamless third-party integrations",
    icon: "fa-network-wired",
  },
  {
    title: "Visual Design",
    description: "UI/UX design that delights users",
    icon: "fa-pen-ruler",
  },
  {
    title: "Cloud Architecture",
    description: "Scale with secure cloud infrastructure",
    icon: "fa-cloud",
  },
  {
    title: "Social Media Automation",
    description: "Automate campaigns, reporting, and outreach",
    icon: "fa-bolt",
  },
];

const budgetOptions = [
  {
    label: "$0 - $5K",
    description: "Starter projects and MVPs",
  },
  {
    label: "$5K - $15K",
    description: "Small to medium projects",
  },
  {
    label: "$15K - $50K",
    description: "Enterprise-grade solutions",
  },
  {
    label: "$100K+",
    description: "Large-scale transformations",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="noise-layer" />
      <header className="contact-hero">
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
              data-bs-target="#contactNav"
              aria-controls="contactNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="contactNav">
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
                  <a className="nav-link" href="/services">
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
                  <a className="nav-link active" href="/contact">
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
        </nav>

        <div className="container-fluid px-lg-5 contact-hero-content">
          <span className="contact-eyebrow">Get in touch</span>
          <h1>Let&apos;s discuss your project</h1>
          <p>
            Tell us about your goals, challenges, or project ideas — and
            we&apos;ll get back to you with a clear plan and next steps.
          </p>
          <div className="contact-hero-actions">
            <a className="btn btn-glow" href="#contact-form">
              Start conversation
            </a>
            <a className="btn btn-outline-light" href="#whatsapp">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Quick chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section id="contact-form" className="contact-form-section">
        <div className="container-fluid px-lg-5">
          <div className="contact-grid">
            <aside className="contact-info-card">
              <h2>Contact Information</h2>
              <span className="contact-underline" />

              {
                /* <div className="contact-info-block">
                <h3>
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  US Headquarters
                </h3>
                <p>1023 East Lincolnway, Cheyenne, WY 82001-4843, USA</p>
                <p>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  +1 (202) 773-6753
                </p>
              </div>

              <div className="contact-divider" /> */
              }

              <div className="contact-info-block">
                <h3>
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  Global Development Center
                </h3>
                <p>Worldwide</p>
                <p>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  +880 1728-705880
                </p>
              </div>

              <div className="contact-divider" />

              <div className="contact-info-block">
                <h3>
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  Email
                </h3>
                <p>info@homeofcoders.com</p>
              </div>

              <div className="contact-divider" />

              <div className="contact-info-block">
                <h3>Follow us</h3>
                <div className="contact-socials">
                  <a aria-label="LinkedIn" href="#linkedin">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a aria-label="X" href="#x">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a aria-label="Facebook" href="#facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a aria-label="Instagram" href="#instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a aria-label="Behance" href="#behance">
                    <i className="fa-brands fa-behance" />
                  </a>
                </div>
              </div>

              <div className="contact-response-card">
                <span className="response-indicator" />
                <div>
                  <strong>24-Hour Response</strong>
                  <p>We typically reply within a day.</p>
                </div>
              </div>
            </aside>

            <div className="contact-form-card">
              <h2>Let&apos;s Talk About Your Project</h2>
              <p className="contact-form-intro">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <div className="contact-step">
                <div className="contact-step-title">
                  <span>1.</span> What services are you interested in?
                </div>
                <p className="contact-step-subtitle">
                  Select one or more services
                </p>
                <div className="contact-option-grid">
                  {serviceOptions.map((service) => (
                    <button
                      className="contact-option-card"
                      type="button"
                      key={service.title}
                    >
                      <div className="contact-option-icon">
                        <i
                          className={`fa-solid ${service.icon}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="contact-step">
                <div className="contact-step-title">
                  <span>2.</span> What&apos;s your project budget?
                </div>
                <p className="contact-step-subtitle">
                  Select an estimated budget range
                </p>
                <div className="contact-budget-grid">
                  {budgetOptions.map((budget) => (
                    <button
                      className="contact-budget-card"
                      type="button"
                      key={budget.label}
                    >
                      <span className="budget-radio" />
                      <div>
                        <strong>{budget.label}</strong>
                        <p>{budget.description}</p>
                      </div>
                      <span className="budget-tag">{budget.label}</span>
                    </button>
                  ))}
                </div>
                <div className="contact-budget-note">
                  <span className="note-dot" />
                  <p>
                    Need a custom budget range?{" "}
                    <span>Let us know in the message below</span>, and
                    we&apos;ll create a tailored proposal.
                  </p>
                </div>
              </div>

              <div className="contact-step">
                <div className="contact-step-title">
                  <span>3.</span> Your information
                </div>
                <div className="contact-fields-grid">
                  <div>
                    <label className="contact-label" htmlFor="full-name">
                      Full name <span>*</span>
                    </label>
                    <input
                      className="contact-input"
                      id="full-name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="contact-label" htmlFor="email">
                      Email address <span>*</span>
                    </label>
                    <input
                      className="contact-input"
                      id="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="contact-label" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      className="contact-input"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="contact-label" htmlFor="company">
                      Company name
                    </label>
                    <input
                      className="contact-input"
                      id="company"
                      placeholder="Your Company (Optional)"
                    />
                  </div>
                </div>
              </div>

              <div className="contact-step">
                <div className="contact-step-title">
                  <span>4.</span> Project details
                </div>
                <textarea
                  className="contact-textarea"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button className="btn btn-glow contact-submit" type="submit">
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                Send message
              </button>
              <p className="contact-disclaimer">
                By submitting, you agree to our{" "}
                <span>Terms &amp; Conditions</span> and
                <span>Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
