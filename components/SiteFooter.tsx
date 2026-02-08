"use client";

export default function SiteFooter() {
  return (
    <footer className="footer mega-footer">
      <div className="container">
        <div className="mega-footer-top">
          <div className="brand-stack">
            <div className="brand-mark">
              <span className="brand-icon">
                <img src="/images/logo.png" alt="Home Of Coders logo" />
              </span>
              <span className="brand-text">Home Of Coders</span>
            </div>
            <p>
              Automation, API &amp; custom systems for growing businesses —
              built with precision and speed.
            </p>
            <div className="footer-cta">
              <a
                className="btn btn-light"
                href="https://cal.com/nirob/int-meeting"
                target="_blank"
                rel="noreferrer"
              >
                Book a Free Call
                <span aria-hidden="true">↗</span>
              </a>
              <button className="btn btn-outline-light" type="button">
                Review us on Trustpilot
              </button>
            </div>
          </div>
          <div className="footer-columns">
            <div>
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="/services">API Integration &amp; Development</a>
                </li>
                <li>
                  <a href="/services">Automation Systems</a>
                </li>
                <li>
                  <a href="/services">Custom Web Development</a>
                </li>
                <li>
                  <a href="/services">WordPress / Shopify</a>
                </li>
                <li>
                  <a href="/services">Maintenance &amp; Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/#work">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/cookie-policy">Cookie Policy</a>
                </li>
                <li>
                  <a href="/disclaimer">Disclaimer</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Contact &amp; Locations</h5>
              <div className="footer-social-row">
                <a
                  aria-label="Email"
                  href="mailto:homeofcoders@gmail.com"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  aria-label="WhatsApp"
                  href="https://wa.me/8801886123362"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a aria-label="Telegram" href="#telegram">
                  <i className="fa-brands fa-telegram" />
                </a>
              </div>
              <div className="footer-location">
                <span className="footer-location-icon">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <div>
                  <strong>Development Center</strong>
                  <p>Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mega-footer-bottom">
          <div className="follow-us">
            <span>Follow us</span>
            <div className="follow-icons">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/home-of-coderss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=61587329875075"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/home_of_coders/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
          <p>© 2026 Home Of Coders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
