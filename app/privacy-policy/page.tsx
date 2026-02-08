import LegalPageLayout from "../../components/LegalPageLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'HomeOfCoders ("we", "our", "us") is a US-registered software and technology services company operating globally through its engineering and development team. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you visit our website https://homeofcoders.com or communicate with us through any of our platforms.',
      "By using our website or contacting us, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    bullets: [
      "Personal Information: Name, Email address, Phone number, Company name, Project-related details you choose to share",
      "Technical Information: IP address, Browser type and version, Device information, Pages visited and usage data",
      "Communication Data: Emails sent to us, Messages sent via WhatsApp or Telegram, Information shared during calls or meetings",
    ],
  },
  {
    id: "how-we-collect-information",
    title: "How We Collect Information",
    paragraphs: ["We collect information when you:"],
    bullets: [
      "Fill out contact or inquiry forms on our website",
      "Book a call or request a quote",
      "Communicate with us via email, WhatsApp, or Telegram",
      "Browse our website (through cookies and analytics tools)",
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    paragraphs: [
      "We use the collected information to:",
      "We do not sell, rent, or trade your personal information.",
    ],
    bullets: [
      "Respond to inquiries and communicate with you",
      "Provide and manage our services",
      "Understand your project requirements",
      "Improve our website and services",
      "Maintain security and prevent misuse",
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    paragraphs: [
      "We use cookies and similar technologies to:",
      "We may use third-party analytics services such as Google Analytics or Google Tag Manager. These tools collect data in an aggregated form and do not personally identify you.",
      "You can control cookie preferences through your browser settings.",
    ],
    bullets: [
      "Ensure basic website functionality",
      "Analyze website traffic and user behavior",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    paragraphs: [
      "We may use trusted third-party services to operate our website and communicate with users, including:",
      "These providers have access only to the information necessary to perform their services and are obligated to protect your data.",
    ],
    bullets: [
      "Website hosting and infrastructure providers",
      "Analytics and monitoring tools",
      "Communication platforms (email, WhatsApp, Telegram)",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes.",
      "You may request deletion of your personal data by contacting us.",
      "Email: homeofcoders@gmail.com",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have the right to:",
      "To exercise these rights, please contact us using the details below.",
    ],
    bullets: [
      "Access your personal information",
      "Request correction of inaccurate data",
      "Request deletion of your data",
      "Withdraw consent for communications",
    ],
  },
  {
    id: "external-links",
    title: "External Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.",
    ],
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    paragraphs: [
      "If you have any questions or concerns about this Privacy Policy, please contact us at:",
      "Email: homeofcoders@gmail.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      updated="January 2026"
      sections={sections}
    />
  );
}
