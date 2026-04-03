import {
  HardHat,
  ArrowUpCircle,
  Wrench,
  PaintBucket,
  Lightbulb,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  bullets?: string[];
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    slug: "new-construction",
    title: "New Construction",
    tagline: "Building your dream home from the ground up.",
    description:
      "We work with you from the initial design phase to the final installation to ensure your new home build meets and exceeds your expectations for quality and comfort.",
    fullDescription: [
      "At Marshall Electric, we understand that building a new home is an exciting endeavor. We believe that every house is a home, and we are committed to working with you from the initial design phase to the final installation to ensure that your new home build meets and exceeds your expectations for quality and comfort.",
      "Our team collaborates closely with builders, architects, and homeowners to deliver electrical systems that are safe, efficient, and tailored to your lifestyle. From rough-in wiring to final fixture installations, we handle every step with precision and care.",
      "We stay current with the latest building codes and energy-efficient technologies, so your new home is not only beautiful but also built to the highest safety standards.",
    ],
    icon: HardHat,
    image: "/images/services/new-construction.webp",
  },
  {
    slug: "service-upgrades",
    title: "Service Upgrades",
    tagline: "More power for your growing household.",
    description:
      "As your household grows, your power needs increase. We provide quality electrical upgrades including panel upgrades and fuse-to-breaker conversions.",
    fullDescription: [
      "We understand that as your household grows, your power needs may increase. Marshall Electric is here to provide you with quality electrical upgrades to ensure that your electrical system can safely and reliably handle your household's power demands.",
      "Whether you're adding new appliances, a home office, or expanding your living space, an electrical service upgrade ensures your home can keep up with modern power requirements without overloading your system.",
      "Our licensed electricians will assess your current setup and recommend the most cost-effective upgrade path for your needs.",
    ],
    bullets: [
      "Upgrading from fuses to breakers",
      "Installing larger amperage panels",
    ],
    icon: ArrowUpCircle,
    image: "/images/services/service-upgrades.webp",
  },
  {
    slug: "service-repair",
    title: "Service Repair",
    tagline: "Restoring your power quickly and safely.",
    description:
      "As Nova Scotia Power Service providers, our dedicated team is committed to restoring your power as quickly and safely as possible after storms or accidents.",
    fullDescription: [
      "In the event of a storm or accident that disrupts your power, please remember that we, as Nova Scotia Power Service providers, are here to help. Our dedicated team is committed to restoring your power as quickly and safely as possible.",
      "Electrical emergencies can be stressful and dangerous. Our experienced technicians are available to respond promptly, diagnose the issue, and perform the necessary repairs to get your home or business back up and running.",
      "We handle everything from downed service lines and damaged panels to tripped breakers and faulty wiring — all with a focus on safety and reliability.",
    ],
    icon: Wrench,
    image: "/images/services/service-repair.webp",
  },
  {
    slug: "renovation",
    title: "Renovation",
    tagline: "Expert electrical work for every renovation project.",
    description:
      "Whether you're updating a small bathroom or embarking on a whole-home remodel, our skilled electricians are equipped to handle all electrical work involved.",
    fullDescription: [
      "Our team of skilled electricians is ready to assist you with all your electrical needs during your renovation projects. Whether you're updating a small bathroom or embarking on a whole-home remodel, we are equipped to handle the electrical work involved.",
      "Renovations often uncover outdated wiring, insufficient circuits, or code violations that need to be addressed. Our team can identify and resolve these issues while integrating modern electrical solutions into your updated space.",
      "We work seamlessly with your general contractor and other trades to ensure the electrical portion of your renovation is completed on time and on budget.",
    ],
    icon: PaintBucket,
    image: "/images/services/renovation.webp",
  },
  {
    slug: "lighting-upgrades",
    title: "Lighting Upgrades",
    tagline: "From minor upgrades to complete lighting overhauls.",
    description:
      "We assist with all your electrical needs, no matter the size — including light fixture replacements, receptacle upgrades, and energy-efficient solutions.",
    fullDescription: [
      "We understand that electrical needs can range from large-scale projects to minor upgrades. Marshall Electric is happy to assist with all your electrical needs, no matter the size. We are available to help with minor upgrades, including light fixture and receptacle replacements.",
      "A simple lighting upgrade can transform the look and feel of any room. Whether you want to switch to energy-efficient LED fixtures, add dimmer controls, or install recessed lighting, our team can help you achieve the perfect ambiance.",
      "We also offer outdoor and landscape lighting solutions to enhance your home's curb appeal and security.",
    ],
    icon: Lightbulb,
    image: "/images/services/lighting-upgrades.webp",
  },
  {
    slug: "ev-chargers",
    title: "EV Chargers",
    tagline: "Authorized Tesla charger installer.",
    description:
      "Marshall Electric is an authorized Tesla charger installer with the experience and expertise to assist with all your EV charging needs.",
    fullDescription: [
      "Marshall Electric is an authorized Tesla charger installer. Our team has the experience and expertise to assist with all your EV charging needs.",
      "As electric vehicles become more popular, having a reliable home charging solution is essential. We install Level 2 chargers that provide fast, convenient charging right in your garage or driveway.",
      "Our electricians will evaluate your home's electrical capacity, recommend the best charger for your vehicle, and handle the complete installation — including any necessary panel upgrades to support the added load.",
    ],
    icon: Plug,
    image: "/images/services/ev-charges.webp",
  },
];
