import { 
  Stethoscope, 
  Pill, 
  Ambulance, 
  FlaskConical, 
  Activity, 
  Baby, 
  HeartPulse,
  UserPlus,
  ClipboardList,
  Home,
  Users
} from 'lucide-react';
import { ServiceItem, CharterItem, ClinicSchedule, FlowStep } from './types';

export const SERVICES: ServiceItem[] = [
  { id: 1, title: "Doctors Consultation", description: "Expert medical advice and diagnosis from qualified physicians.", icon: Stethoscope },
  { id: 2, title: "Pharmacy Services", description: "Dispensing of medication and pharmaceutical care.", icon: Pill },
  { id: 3, title: "Emergency Care", description: "24/7 rapid response for critical medical situations.", icon: Ambulance },
  { id: 4, title: "Laboratory Services", description: "Comprehensive diagnostic testing and pathology services.", icon: FlaskConical },
  { id: 5, title: "Physiotherapy Services", description: "Rehabilitation and physical therapy for injury recovery.", icon: Activity },
  { id: 6, title: "MCH/FP Services", description: "Maternal Child Health and Family Planning services.", icon: Baby },
  { id: 7, title: "Maternity Services", description: "Complete care for expectant mothers before, during, and after birth.", icon: HeartPulse },
];

export const SERVICE_CHARTER: CharterItem[] = [
  { id: 1, service: "Registration", time: "10 Minutes" },
  { id: 2, service: "Consultation", time: "30 Minutes" },
  { id: 3, service: "Triage", time: "5 Minutes" },
  { id: 4, service: "Special Clinic", time: "30 Minutes" },
  { id: 5, service: "Minor Surgical Procedure", time: "30 Min – 1 Hour" },
  { id: 6, service: "Nursing Procedure", time: "10-20 Minutes" },
  { id: 7, service: "Dispensing", time: "20 Minutes" },
];

export const SPECIALIST_CLINICS: ClinicSchedule[] = [
  { id: 1, service: "Pediatric Clinic", day: "Wednesday", time: "1.00pm – 4.00 pm" },
  { id: 2, service: "Orthopedic", day: "Tuesday", time: "1.00pm – 4.00 pm" },
  { id: 3, service: "Obstetric Clinic", day: "Thursday", time: "8.00 am – 10.00 am" },
  { id: 4, service: "Gynecology", day: "Monday", time: "8.00 am – 10.00 am" },
  { id: 5, service: "Eye Care Clinic", day: "Tuesday", time: "8.00 am – 11.00 am" },
  { id: 6, service: "Diabetic Clinic", day: "Wednesday", time: "8.00 am – 10.00 am" },
  { id: 7, service: "Hypertension Clinic", day: "Friday", time: "8.00 am – 10.00 am" },
  { id: 8, service: "Dental Care", day: "Saturday", time: "8.00 am – 11.00 am" },
  { id: 9, service: "Urology Clinic", day: "Friday", time: "1.00 pm – 4.00 pm" },
  { id: 10, service: "Internal Medicine", day: "Wednesday", time: "11.00 am – 2.00 pm" },
  { id: 11, service: "Dermatology / Chest Clinic", day: "Thursday", time: "1.00 pm – 4.00 pm" },
  { id: 12, service: "E.N.T Clinic", day: "Monday", time: "11.00 am – 4.00 pm" },
];

export const PATIENT_FLOW: FlowStep[] = [
  { 
    id: 1, 
    title: "Arrival", 
    description: "Patient arrives at the hospital entrance.", 
    icon: Users 
  },
  { 
    id: 2, 
    title: "Emergency or Registration", 
    description: "Critical cases go immediately to Emergency. Standard cases proceed to Registration.", 
    icon: UserPlus 
  },
  { 
    id: 3, 
    title: "Triage / Vital Signs", 
    description: "Nurses assess severity and take vital signs (BP, Temp, Weight).", 
    icon: Activity 
  },
  { 
    id: 4, 
    title: "Consultation Room", 
    description: "Doctor assesses patient and determines course of action.", 
    icon: Stethoscope 
  },
  { 
    id: 5, 
    title: "Service Departments", 
    description: "Patient directed to specific care units based on consultation.", 
    icon: ClipboardList,
    subSteps: ["Laboratory", "Imaging / X-Ray", "Pharmacy", "Nurse / Customer Care"]
  },
  { 
    id: 6, 
    title: "Admission or Home", 
    description: "Patient is either admitted for further care or discharged home.", 
    icon: Home 
  },
];

export const MISSION_VISION = {
  preamble: "Webuye West Hospital and its staff is committed to offering highest standards of medical services supported by modern equipment and qualified personnel to all clients in the shortest period of time.",
  vision: "To be a leading hospital of excellence in holistic healthcare delivery, compassionate and patient centred services.",
  mission: "To provide medical services that are accessible, acceptable, affordable, sustainable, curative, preventive and rehabilitative to all clients."
};