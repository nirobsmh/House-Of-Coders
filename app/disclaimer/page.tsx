import LegalPageLayout from "../../components/LegalPageLayout";

const sections = [
  {
    id: "general-information",
    title: "General Information",
    paragraphs: [
      "The information provided on the HomeOfCoders website (https://homeofcoders.com) is for general informational purposes only. All content on this website is published in good faith and is intended to provide an overview of our services, expertise, and approach.",
      "While we strive to keep the information accurate and up to date, HomeOfCoders makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of any information on this website.",
    ],
  },
  {
    id: "no-professional-advice",
    title: "No Professional or Business Advice",
    paragraphs: [
      "The content on this website does not constitute legal, financial, business, or professional advice. Any decisions you make based on the information provided on this website are made at your own discretion and risk.",
      "We recommend consulting with qualified professionals before making business, legal, or financial decisions.",
    ],
  },
  {
    id: "no-guarantees",
    title: "No Guarantees or Warranties",
    paragraphs: [
      "HomeOfCoders does not guarantee specific results, business outcomes, revenue growth, performance improvements, or return on investment from the use of our website, content, or services unless explicitly stated in a written agreement.",
      "Past performance, case studies, or examples do not guarantee future results.",
    ],
  },
  {
    id: "service-engagement",
    title: "Service Engagement Disclaimer",
    paragraphs: [
      "Any services provided by HomeOfCoders are subject to separate project agreements, proposals, or written contracts. The information presented on this website should not be considered a binding offer or commitment.",
      "Project scope, timelines, deliverables, and outcomes will be defined on a case-by-case basis.",
    ],
  },
  {
    id: "external-links",
    title: "External Links Disclaimer",
    paragraphs: [
      "Our website may contain links to third-party websites or services for convenience or reference. HomeOfCoders does not control or endorse the content, policies, or practices of any third-party websites and assumes no responsibility for them.",
      "Accessing third-party links is done at your own risk.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    paragraphs: [
      "Under no circumstances shall HomeOfCoders be liable for any loss or damage, including indirect or consequential loss or damage, arising from the use of this website or reliance on any information provided herein.",
    ],
  },
  {
    id: "updates",
    title: "Updates to This Disclaimer",
    paragraphs: [
      "HomeOfCoders reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    paragraphs: [
      "If you have any questions regarding this Disclaimer, please contact us at:",
      "Email: homeofcoders@gmail.com",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      updated="January 2026"
      sections={sections}
    />
  );
}
