import type { LucideIcon } from "lucide-react";
import { Compass, PawPrint } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  status: string;
  icon: LucideIcon;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "NavGate",
    description:
      "A compliance and risk management platform for SaaS-era organizations. Brings governance, risk, and compliance work into one place, with an AI guide that helps teams navigate requirements.",
    status: "In Development",
    icon: Compass,
  },
  {
    name: "PetHealth",
    description:
      "A health records platform for pets, giving owners a clear, organized view of their pet's medical history, with a built-in AI assistant.",
    status: "In Development",
    icon: PawPrint,
  },
];
