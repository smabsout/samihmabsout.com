import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  RefreshCcw,
  TriangleAlert,
  Search,
  BarChart3,
  Target,
  Cpu,
  CodeXml,
  Infinity as InfinityIcon,
} from "lucide-react";

export interface Skill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  {
    title: "Cybersecurity Strategy",
    description:
      "Developing comprehensive security frameworks, risk assessments, and incident response plans to protect critical business assets.",
    icon: ShieldCheck,
  },
  {
    title: "Business Continuity",
    description:
      "Designing resilient operational strategies and disaster recovery plans to ensure minimal business disruption during crises.",
    icon: RefreshCcw,
  },
  {
    title: "Risk Management",
    description:
      "Identifying, analyzing, and mitigating operational and cyber risks through strategic planning and proactive measures.",
    icon: TriangleAlert,
  },
  {
    title: "Threat Intelligence",
    description:
      "Monitoring emerging threats and vulnerabilities to provide actionable intelligence for strategic decision-making.",
    icon: Search,
  },
  {
    title: "Compliance & Governance",
    description:
      "Ensuring regulatory compliance and establishing governance frameworks that align with industry standards and best practices.",
    icon: BarChart3,
  },
  {
    title: "Crisis Leadership",
    description:
      "Leading crisis response teams and coordinating organizational resilience efforts during critical incidents and emergencies.",
    icon: Target,
  },
  {
    title: "AI Agents & Automation",
    description:
      "Designing and implementing AI agents that automate continuity and resilience workflows, improving efficiency and freeing teams to focus on what matters.",
    icon: Cpu,
  },
  {
    title: "Software Engineering",
    description:
      "Building and shipping full-stack software, from internal automation tools to complete products, on a software engineering foundation.",
    icon: CodeXml,
  },
  {
    title: "AIDLC",
    description:
      "Applying AI development lifecycle practices — from prototyping to deployment — to ship reliable, production-ready AI-powered features.",
    icon: InfinityIcon,
  },
];
