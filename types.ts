import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface CharterItem {
  id: number;
  service: string;
  time: string;
}

export interface ClinicSchedule {
  id: number;
  service: string;
  day: string;
  time: string;
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  subSteps?: string[];
  isEmergency?: boolean;
}