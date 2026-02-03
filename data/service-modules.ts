export type ServiceFeature = {
  title: string;
  icon: string;
};

export type ServiceModule = {
  slug: string;
  module: string;
  title: string;
  accent: string;
  summaryTitle: string;
  summaryText: string;
  ctaLabel: string;
  ctaHref: string;
  features: ServiceFeature[];
  highlightIndex?: number;
};

export const serviceModules: ServiceModule[] = [
  {
    slug: "api-integration",
    module: "Service Module 01",
    title: "API Integration &",
    accent: "Development",
    summaryTitle: "Connect your entire business ecosystem.",
    summaryText:
      "Seamless API integration that unifies platforms, data, and customer experiences without friction.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 4,
    features: [
      {
        title: "REST, SOAP, GraphQL API development & integration",
        icon: "fa-code-branch",
      },
      {
        title: "Webhooks, real-time event processing, queue-based systems",
        icon: "fa-bolt",
      },
      {
        title: "OAuth2.0, JWT, SSO, multi-provider authentication flows",
        icon: "fa-shield-halved",
      },
      {
        title: "Payment gateway integrations (Stripe, PayPal, SSLCommerz, bKash)",
        icon: "fa-credit-card",
      },
      {
        title: "Third-party SaaS integrations (HubSpot, Airtable, ClickUp, Notion, Meta APIs)",
        icon: "fa-cubes",
      },
      {
        title: "Custom API creation for mobile apps, dashboards, external partners",
        icon: "fa-mobile-screen",
      },
      {
        title: "API security hardening (rate limiting, token lifecycle, IP restrictions)",
        icon: "fa-lock",
      },
      {
        title: "API versioning, documentation, monitoring, analytics",
        icon: "fa-chart-line",
      },
    ],
  },
  {
    slug: "custom-web-development",
    module: "Service Module 02",
    title: "Custom Web",
    accent: "Development",
    summaryTitle: "Scalable platforms built for growth.",
    summaryText:
      "High-performance web systems tailored to your operations, built to scale without bottlenecks.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 2,
    features: [
      {
        title: "Dashboards, portals, cloud systems",
        icon: "fa-table-columns",
      },
      {
        title: "High-performance backend APIs & microservices",
        icon: "fa-server",
      },
      {
        title: "Multi-tenant SaaS platforms",
        icon: "fa-layer-group",
      },
      {
        title: "Admin panels & internal business tools",
        icon: "fa-gears",
      },
      {
        title: "CRM, ERP & workflow management systems",
        icon: "fa-diagram-project",
      },
      {
        title: "Real-time data dashboards (WebSockets)",
        icon: "fa-chart-area",
      },
      {
        title: "Secure authentication systems (JWT, OAuth)",
        icon: "fa-user-shield",
      },
      {
        title: "Scalable architectures for heavy traffic",
        icon: "fa-wave-square",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    module: "Service Module 03",
    title: "CMS & eCommerce",
    accent: "Development",
    summaryTitle: "Conversion-optimized business websites.",
    summaryText:
      "Fast, secure, and SEO-ready websites that elevate your brand and drive sales consistently.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 1,
    features: [
      {
        title: "Business websites, landing pages, funnels",
        icon: "fa-globe",
      },
      {
        title: "Custom theme development (speed-optimized, SEO-ready)",
        icon: "fa-pen-nib",
      },
      {
        title: "Conversion-focused eCommerce stores",
        icon: "fa-bag-shopping",
      },
      {
        title: "WooCommerce, Shopify OS2.0 customizations",
        icon: "fa-store",
      },
      {
        title: "Payment gateway setup (Stripe, SSLCommerz, bKash, PayPal)",
        icon: "fa-credit-card",
      },
      {
        title: "Store automation (abandoned cart flows, review requests, CRM sync)",
        icon: "fa-robot",
      },
      {
        title: "Performance optimization (90+ PageSpeed on mobile & desktop)",
        icon: "fa-gauge-high",
      },
      {
        title: "Security hardening, backups, uptime monitoring",
        icon: "fa-shield",
      },
    ],
  },
  {
    slug: "automation",
    module: "Service Module 04",
    title: "Business",
    accent: "Automation",
    summaryTitle: "Eliminate manual work forever.",
    summaryText:
      "Intelligent automation that orchestrates your tools, teams, and data 24/7.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 3,
    features: [
      {
        title: "Workflow automation, lead routing, notifications",
        icon: "fa-network-wired",
      },
      {
        title: "Multi-platform automation (Meta, Google, Telegram, Discord)",
        icon: "fa-share-nodes",
      },
      {
        title: "CRM automation (HubSpot, Pipedrive, Zoho, ClickUp)",
        icon: "fa-address-book",
      },
      {
        title: "LLM-powered bots for support, lead qualification, data entry",
        icon: "fa-robot",
      },
      {
        title: "Custom Discord & Telegram bots for posting, scraping, user actions",
        icon: "fa-comments",
      },
      {
        title: "Automated report generation & analytics dashboards",
        icon: "fa-chart-line",
      },
      {
        title: "Webhook orchestration (event-driven flows)",
        icon: "fa-bolt",
      },
      {
        title: "Auto-sync tasks: Google Sheets ↔ CRM, Shopify ↔ Airtable, etc.",
        icon: "fa-arrows-rotate",
      },
    ],
  },
  {
    slug: "seo-optimization",
    module: "Service Module 05",
    title: "SEO & Digital",
    accent: "Marketing",
    summaryTitle: "Dominate search rankings.",
    summaryText:
      "Data-driven SEO strategies that get you found by the customers who are already looking for you.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 0,
    features: [
      {
        title: "Comprehensive keyword research & competitor analysis",
        icon: "fa-magnifying-glass",
      },
      {
        title: "On-page SEO optimization (meta tags, schema markup)",
        icon: "fa-code",
      },
      {
        title: "Technical SEO audits (site speed, mobile optimization)",
        icon: "fa-screwdriver-wrench",
      },
      {
        title: "Link building strategies & authority development",
        icon: "fa-link",
      },
      {
        title: "Local SEO optimization (GMB, local citations)",
        icon: "fa-location-dot",
      },
      {
        title: "Content strategy & SEO copywriting",
        icon: "fa-pen-to-square",
      },
      {
        title: "Analytics setup & conversion tracking (GA4)",
        icon: "fa-chart-simple",
      },
      {
        title: "Monthly reporting & continuous optimization",
        icon: "fa-clipboard-check",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    module: "Service Module 06",
    title: "UI/UX",
    accent: "Design",
    summaryTitle: "Beautiful interfaces users love.",
    summaryText:
      "User-centered design that increases engagement, conversions, and brand loyalty.",
    ctaLabel: "Get quote",
    ctaHref: "/contact",
    highlightIndex: 5,
    features: [
      {
        title: "User research & persona development",
        icon: "fa-users",
      },
      {
        title: "Wireframing & interactive prototyping (Figma)",
        icon: "fa-pen-ruler",
      },
      {
        title: "Visual design & brand-consistent UI",
        icon: "fa-palette",
      },
      {
        title: "Design systems & component libraries",
        icon: "fa-layer-group",
      },
      {
        title: "Micro-interactions & animation design",
        icon: "fa-wand-magic-sparkles",
      },
      {
        title: "Usability testing & user feedback analysis",
        icon: "fa-clipboard-question",
      },
      {
        title: "Responsive & mobile-first design",
        icon: "fa-mobile-screen-button",
      },
      {
        title: "Design handoff & developer collaboration",
        icon: "fa-people-group",
      },
    ],
  },
];

export const serviceModuleSlugs = serviceModules.map((service) => service.slug);

export const serviceModuleMap = serviceModules.reduce<Record<string, ServiceModule>>(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {},
);
