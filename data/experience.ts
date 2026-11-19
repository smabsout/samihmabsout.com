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
      "Own business continuity for the majority of Allstate's Market Facing Business (MFB) areas, managing the full BC lifecycle: BIAs, BCP updates, and RCSAs",
      "Expanded team scope in 2026 when the Chief Risk Officer moved the Risk Partners function under the Business Continuity team",
      "Designed and built AI agents in Microsoft Copilot Studio, including ARIA (BIA workbook auditing), the BPI Workbook Automator, a BCP gap assessment agent, and a tabletop scenario recommender",
      "Lead independent oversight of operational resilience across people, processes, technology, third parties, and infrastructure",
      "Design and execute enterprise tabletop exercises and dependency risk scenarios to validate readiness, integrating with operational, cyber, and third-party risk programs",
      "Represent Business Continuity on the orange team in enterprise exercises, simulating disruptions to stress-test response plans",
      "Perform gap analyses and oversee internal/external audits to strengthen controls and maintain readiness for regulatory reviews",
      "Develop KRIs and KPIs to monitor resilience trends and present recommendations to C-suite stakeholders",
      "Architected the MVC Playbook for the CARR effort at Allstate Roadside Services",
    ],
    tags: ["BCP", "Crisis Management", "ISO 22301", "AI Automation", "Orange Team"],
  },
  {
    date: "July 2022 – April 2025",
    role: "Senior Business Continuity & Disaster Recovery Associate",
    company: "U.S. Financial Technology",
    summary:
      "Conducted comprehensive Business Impact Analyses and developed enterprise Business Continuity Plans across financial technology operations, engaging directly with FHFA regulators to ensure FFIEC and NIST 800-53 compliance.",
    bullets: [
      "Directed enterprise Business Continuity Planning (BCP) cycles, achieving compliance with FFIEC and NIST 800-53 resilience standards",
      "Led BIAs to assess critical functions, prioritize recovery objectives, and ensure risk-aligned continuity strategies",
      "Designed and facilitated ransomware rebuild tabletop exercises, enhancing enterprise preparedness for cyber threats",
      "Maintained crisis management plans and coordinated with Fannie Mae, Freddie Mac, and CSS to enable swift incident response",
      "Reduced audit findings through proactive documentation updates and remediation aligned with regulatory requirements",
      "Oversaw third-party risk assessments to strengthen vendor resilience in line with NIST 800-53 controls",
    ],
    tags: ["BIA", "BCP", "FFIEC", "NIST 800-53", "Ransomware", "Vendor Risk"],
  },
  {
    date: "April 2020 – July 2022",
    role: "Business Continuity & Disaster Recovery Consultant",
    company: "FDM Group (Contractor at U.S. Financial Technology)",
    summary:
      "Provided specialized business continuity and disaster recovery consulting as an embedded contractor at U.S. Financial Technology, establishing foundational BC/DR frameworks during a period of significant organizational growth.",
    bullets: [
      "Supported CSS by executing BCP cycles, disaster recovery tests, and resilience assessments aligned with organizational goals",
      "Facilitated tabletop exercises, identifying vulnerabilities and refining incident response strategies",
      "Conducted gap analyses and contributed to business impact assessments to improve overall risk posture",
    ],
    tags: ["BC/DR", "BIA", "Disaster Recovery"],
  },
];
