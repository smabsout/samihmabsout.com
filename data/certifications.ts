export interface Certification {
  code: string;
  name: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    code: "CBCP",
    name: "Certified Business Continuity Professional (In Progress)",
    description:
      "DRI International's core business continuity credential, covering program management, business impact analysis, continuity strategy, and exercising.",
  },
  {
    code: "CCRP",
    name: "Certified Cyber Resilience Professional",
    description:
      "Advanced certification in cyber resilience frameworks, business continuity planning, and organizational risk management.",
  },
  {
    code: "CC",
    name: "Certified in Cybersecurity",
    description:
      "Foundational cybersecurity certification covering security principles, risk management, and security controls.",
  },
];
