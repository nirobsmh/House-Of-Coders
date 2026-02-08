import LegalPageLayout from "../../components/LegalPageLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'This Cookies Policy explains how HomeOfCoders ("we", "our", "us") uses cookies and similar technologies on our website https://homeofcoders.com.',
      "By continuing to browse or use our website, you agree to the use of cookies as described in this policy.",
    ],
  },
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    paragraphs: [
      "Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function properly, improve user experience, and provide information about how the site is used.",
    ],
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    paragraphs: ["We use the following types of cookies:"],
    bullets: [
      "Essential Cookies: Necessary for core functionality, including page navigation, security and session management, and form submissions.",
      "Analytics & Performance Cookies: Help us understand how visitors interact with our website (pages visited, time spent, browser and device types). We use tools such as Google Analytics and Google Tag Manager to collect this data in an aggregated and anonymous form.",
      "Functional Cookies: Remember choices such as language preferences or region settings to enhance user experience.",
      "Third-Party Cookies: Set by third-party services used on our website, including analytics providers and embedded content (such as videos or maps).",
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    paragraphs: [
      "We use cookies to:",
      "We do not use cookies to collect sensitive personal information or to sell data.",
    ],
    bullets: [
      "Ensure the website operates correctly",
      "Analyze and improve website performance",
      "Understand user behavior and improve content",
      "Maintain website security",
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    paragraphs: [
      "You can control or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of the website.",
      "Browser-specific instructions can usually be found in your browser's help section.",
    ],
  },
  {
    id: "changes-to-policy",
    title: "Changes to This Cookies Policy",
    paragraphs: [
      "We may update this Cookies Policy from time to time to reflect changes in technology or legal requirements. Updates will be posted on this page.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    paragraphs: [
      "If you have any questions about our use of cookies, please contact us at:",
      "Email: homeofcoders@gmail.com",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookies Policy"
      updated="January 2026"
      sections={sections}
    />
  );
}
