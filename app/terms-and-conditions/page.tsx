import LegalPageLayout from "../../components/LegalPageLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'These Terms & Conditions ("Terms") govern your access to and use of the HomeOfCoders website (https://homeOfcoders.com) and any services provided by HomeOfCoders ("we", "our", "us"). By accessing our website, contacting us, or engaging our services, you agree to be bound by these Terms.',
      "If you do not agree with any part of these Terms, please do not use our website or services.",
    ],
  },
  {
    id: "services",
    title: "Services",
    paragraphs: [
      "HomeOfCoders provides software development, automation, API integration, custom web development, and related technology services. All services are provided based on individual project agreements, proposals, or written communication.",
      "The information on our website is for general informational purposes only and does not constitute a binding offer.",
    ],
  },
  {
    id: "use-of-website",
    title: "Use of Website",
    paragraphs: [
      "You agree to use this website only for lawful purposes. You must not:",
      "We reserve the right to restrict or terminate access to the website for any violation of these Terms.",
    ],
    bullets: [
      "Attempt to gain unauthorized access to the website or its systems",
      "Disrupt or interfere with website security or performance",
      "Use the website to transmit malicious code or spam",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, logos, icons, code snippets, and design elements, is the property of HomeOfCoders unless otherwise stated.",
      "You may not copy, reproduce, distribute, or create derivative works from any content without our prior written consent.",
    ],
  },
  {
    id: "project-engagement-payments",
    title: "Project Engagement & Payments",
    paragraphs: [
      "Project-specific terms, scope, timelines, and payment conditions will be defined in separate agreements or proposals.",
      "Unless otherwise agreed:",
    ],
    bullets: [
      "Payments are non-refundable once work has commenced",
      "Delays caused by incomplete client input may impact timelines",
      "Additional work outside the agreed scope may require additional charges",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    paragraphs: [
      "Clients are responsible for:",
      "HomeOfCoders is not responsible for delays or issues caused by client-side actions or omissions.",
    ],
    bullets: [
      "Providing accurate and complete project requirements",
      "Timely communication and approvals",
      "Ensuring they have rights to any materials provided to us",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    paragraphs: [
      "Our services may involve third-party platforms, tools, or services. We are not responsible for the availability, performance, or policies of third-party services.",
      "Any issues related to third-party platforms are subject to their respective terms and conditions.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, HomeOfCoders shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services.",
      "Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.",
    ],
  },
  {
    id: "no-guarantees",
    title: "No Guarantees",
    paragraphs: [
      "While we strive to deliver high-quality solutions, we do not guarantee specific business results, revenue outcomes, or performance metrics unless explicitly stated in writing.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    paragraphs: [
      "Any confidential information shared during discussions or project execution will be treated as confidential and used solely for project-related purposes, unless disclosure is required by law.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "We reserve the right to terminate or suspend services if a client breaches these Terms or any project agreement.",
      "Clients may terminate engagement subject to the terms defined in their project agreement.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Changes will be effective upon posting on this page.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    paragraphs: [
      "For questions regarding these Terms & Conditions, please contact:",
      "Email: homeofcoders@gmail.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      updated="January 2026"
      sections={sections}
    />
  );
}
