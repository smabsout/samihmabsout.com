export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: "April 2025 – Present",
    role: "Business Continuity & Crisis Management Lead",
    company: "Allstate",
    summary:
      "Owning business continuity for the majority of Allstate's Market Facing Business areas at one of North America's largest insurance carriers, managing the full BC lifecycle with programs aligned to ISO 22301.",
    bullets: [
      "Own business continuity for the majority of Market Facing Business areas: BIAs, BCP updates, and RCSAs",
      "Expanded team scope in 2026 when the Chief Risk Officer moved the Risk Partners function under the Business Continuity team",
      "Designed and built AI agents in Microsoft Copilot Studio, including ARIA (BIA workbook auditing), the BPI Workbook Automator, a BCP gap assessment agent, and a tabletop scenario recommender",
      "Design and lead enterprise tabletop exercises and dependency risk scenarios",
      "Represent Business Continuity on the orange team in enterprise exercises, simulating disruptions to stress-test response plans",
      "Architected the MVC Playbook for the CARR effort at Allstate Roadside Services",
    ],
    tags: ["BCP", "Crisis Management", "ISO 22301", "AI Automation", "Orange Team"],
  },
  {
    date: "July 2022 – April 2025",
    role: "Senior Business Continuity & Disaster Recovery Analyst",
    company: "U.S. Financial Technology",
    summary:
      "Conducted comprehensive Business Impact Analyses and developed enterprise Business Continuity Plans across financial technology operations, engaging directly with FHFA regulators to ensure FFIEC and NIST 800-53 compliance.",
    bullets: [
      "Completed BIAs for 150+ critical business processes",
      "Developed and maintained Business Continuity Plans",
      "Facilitated quarterly tabletop exercises and DR tests, achieving 99.9% uptime",
      "Engaged directly with FHFA regulators on FFIEC and NIST 800-53 compliance",
      "Conducted third-party vendor risk assessments on critical suppliers",
    ],
    tags: ["BIA", "BCP", "FFIEC", "Vendor Risk"],
  },
  {
    date: "April 2020 – July 2022",
    role: "Business Continuity & Disaster Recovery Consultant",
    company: "FDM Group (Contractor at U.S. Financial Technology)",
    summary:
      "Provided specialized business continuity and disaster recovery consulting as an embedded contractor at U.S. Financial Technology, establishing foundational BC/DR frameworks during a period of significant organizational growth.",
    bullets: [
      "Established foundational BC/DR frameworks as an embedded consultant",
      "Supported business impact assessments and DR procedures across core operations",
      "Contributed to enterprise resilience planning during significant organizational growth",
    ],
    tags: ["BC/DR", "BIA", "Disaster Recovery"],
  },
];
