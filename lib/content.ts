export type Locale = "fr" | "en";

export type Joker = {
  /** The real client / context, bilingual */
  context: { fr: string; en: string };
  /** Period, e.g. "2023" */
  year: string;
  /** "Ability text" describing the real deliverable */
  ability: { fr: string; en: string };
  /** Tech tags */
  tech: string[];
  /** Rarity drives the card's color treatment */
  rarity: "common" | "uncommon" | "rare" | "legendary";
  /** Balatro "Negative" edition — dark holographic look, "+1 Joker slot" flavour */
  negative?: boolean;
  /** Balatro "Foil" edition (Brillante) — circular glossy sheen across the card */
  foil?: boolean;
};

export type Skill = {
  name: string;
  /** blue "chips" value — flavor number */
  chips: number;
  /** red "mult" value — flavor number */
  mult: number;
  /** path to the brand logo in /public/logos */
  logo: string;
};

export type Job = {
  role: { fr: string; en: string };
  company: string;
  /** company website — makes the company name a link */
  website?: string;
  period: { fr: string; en: string };
  location: string;
  bullets: { fr: string[]; en: string[] };
  tech: string[];
};

export const PROFILE = {
  name: "Marwane Toury",
  title: {
    fr: "Ingénieur en Informatique",
    en: "Software Engineer",
  },
  tagline: {
    fr: "Ingénieur en Informatique · Coach et joueur compétitif de jeux de cartes",
    en: "Computer Science Engineer · Competitive card game player",
  },
  pitch: {
    fr: "Je conçois et développe des solutions full-stack web, logicielles et mobiles. Basé à Montpellier, diplômé de Polytech.",
    en: "I design and build full-stack web, software and mobile solutions. Based in Montpellier, engineering graduate from Polytech.",
  },
  links: {
    github: "https://github.com/MarwaneToury",
    linkedin: "https://linkedin.com/in/marwane-toury",
    email: "marwanetoury@gmail.com",
    resumeFr: "/Marwane_Toury_Dev_FR.pdf",
    resumeEn: "/Marwane_Toury_Dev_EN.pdf",
  },
};

export const JOKERS: Joker[] = [
  {
    context: { fr: "Doctreen", en: "Doctreen" },
    year: "2025",
    rarity: "legendary",
    ability: {
      fr: "Système interne de benchmarking des tests pour les équipes fonctionnelles et IA. Gain de temps : ½ journée → quelques minutes.",
      en: "Internal test-benchmarking system for functional and AI teams. Cuts turnaround from half a day to a few minutes.",
    },
    tech: ["NestJS", "TypeScript", "MongoDB"],
  },
  {
    context: { fr: "Doctreen", en: "Doctreen" },
    year: "2025",
    rarity: "rare",
    ability: {
      fr: "Migre et modernise les applications back-end vers NestJS. Améliore la maintenabilité et les performances.",
      en: "Migrates and modernizes back-end applications to NestJS. Improves maintainability and performance.",
    },
    tech: ["Express", "NestJS", "TypeScript", "MongoDB"],
  },
  {
    context: { fr: "Doctreen", en: "Doctreen" },
    year: "2024",
    rarity: "uncommon",
    ability: {
      fr: "Développement d'applications de démonstration présentées aux prospects lors des phases commerciales.",
      en: "Development of demo applications presented to prospects during sales phases.",
    },
    tech: ["React", "NestJS", "MongoDB", "Postgres"],
  },
  {
    context: {
      fr: "Conecsio · Projet de fin d'études",
      en: "Conecsio · Final-year Project",
    },
    year: "2024",
    rarity: "rare",
    foil: true,
    ability: {
      fr: "Démonstrateur de recueil de données patient pour essais cliniques, sécurisé par cryptographie. Présenté aux clients pilotes.",
      en: "Clinical-trial patient data collection demonstrator, secured with cryptography. Presented to pilot clients.",
    },
    tech: ["Rust", "React", "Postgres"],
  },
  {
    context: {
      fr: "TRF Retail · Projet industriel",
      en: "TRF Retail · Industrial Project",
    },
    year: "2023",
    rarity: "uncommon",
    negative: true,
    ability: {
      fr: "Extraction de données journalistiques et génération de rapport analytiques. Transforme un processus manuel de plusieurs heures en quelques minutes.",
      en: "Continuously monitors internal servers. Turns a multi-hour manual process into a few minutes.",
    },
    tech: ["Node", "Express", "TypeScript", "MariaDB"],
  },
  {
    context: { fr: "DSIN · Stage", en: "DSIN · Internship" },
    year: "2023",
    rarity: "common",
    ability: {
      fr: "Mise à jour technologique d'une application web de PHP Symfony 6 à 8. Modernisation de la stack.",
      en: "Technology upgrade of a web application from PHP Symfony 6 to 8. Stack modernization.",
    },
    tech: ["PHP", "Symfony"],
  },
];

export const SKILLS: Skill[] = [
  { name: "TypeScript", chips: 60, mult: 4, logo: "/logos/typescript.svg" },
  { name: "React", chips: 55, mult: 4, logo: "/logos/react.svg" },
  { name: "NestJS", chips: 50, mult: 3, logo: "/logos/nestjs.svg" },
  { name: "Node.js", chips: 50, mult: 3, logo: "/logos/nodejs.svg" },
  { name: "JavaScript", chips: 45, mult: 3, logo: "/logos/javascript.svg" },
  { name: "Git", chips: 35, mult: 3, logo: "/logos/git.svg" },
  { name: "MongoDB", chips: 40, mult: 2, logo: "/logos/mongodb.svg" },
  { name: "PostgreSQL", chips: 40, mult: 2, logo: "/logos/postgresql.svg" },
];

export const JOBS: Job[] = [
  {
    role: { fr: "Développeur Full-stack", en: "Full-stack Developer" },
    company: "Doctreen",
    website: "https://www.doctreen.com/",
    period: { fr: "nov. 2024 – déc. 2025", en: "Nov 2024 – Dec 2025" },
    location: "Montpellier",
    tech: ["React", "NestJS", "MongoDB", "Postgres"],
    bullets: {
      fr: [
        "Conception, développement et maintenance d'applications web métiers (features, tests, refactoring).",
        "Système interne de benchmarking des tests (½ journée → quelques minutes).",
        "Système de feedback client intégré à la gestion des tickets, utilisé quotidiennement.",
      ],
      en: [
        "Designed, built and maintained business web applications (features, testing, refactoring).",
        "Internal test-benchmarking system (half a day → a few minutes).",
        "Client feedback system integrated into ticket management, used daily.",
      ],
    },
  },
  {
    role: { fr: "Stage de fin d'études", en: "Final-year Internship" },
    company: "Doctreen",
    website: "https://www.doctreen.com/",
    period: { fr: "avr. – août 2024", en: "Apr – Aug 2024" },
    location: "Montpellier",
    tech: ["Express", "NestJS", "TypeScript", "MongoDB"],
    bullets: {
      fr: [
        "Applications de démonstration présentées aux prospects lors des phases commerciales.",
        "Migration et modernisation d'applications back-end vers NestJS.",
      ],
      en: [
        "Demo applications presented to prospects during sales phases.",
        "Migrated and modernized back-end applications to NestJS.",
      ],
    },
  },
  {
    role: { fr: "Projet de fin d'études", en: "Final-year Project" },
    company: "Conecsio",
    website: "https://conecsio.com/",
    period: { fr: "déc. 2023 – févr. 2024", en: "Dec 2023 – Feb 2024" },
    location: "Montpellier",
    tech: ["Rust", "React", "Postgres"],
    bullets: {
      fr: [
        "Démonstrateur de digitalisation du recueil de données patient (essais cliniques), sécurisé par cryptographie.",
      ],
      en: [
        "Digitalization demonstrator for clinical-trial patient data collection, secured with cryptography.",
      ],
    },
  },
  {
    role: { fr: "Projet industriel", en: "Industrial Project" },
    company: "TRF Retail",
    website: "https://www.retailnext.ai/",
    period: { fr: "avr. – mai 2023", en: "Apr – May 2023" },
    location: "Montpellier",
    tech: ["Node", "Express", "TypeScript", "MariaDB"],
    bullets: {
      fr: [
        "Solution automatisée de supervision des serveurs internes (plusieurs heures → quelques minutes).",
        "Extraction de données journalistiques et rapports analytiques type dashboard.",
      ],
      en: [
        "Automated internal server monitoring solution (several hours → a few minutes).",
        "Journalistic data extraction and dashboard-style analytical reports.",
      ],
    },
  },
];

export const EDUCATION = {
  degree: {
    fr: "Diplôme d'ingénieur en informatique",
    en: "Engineering degree in Computer Science",
  },
  school: "Polytech Montpellier",
  year: "2024",
};

/** UI strings (section titles, buttons, labels) */
export const UI = {
  nav: {
    about: { fr: "Profil", en: "About" },
    skills: { fr: "Compétences", en: "Skills" },
    projects: { fr: "Projets", en: "Projects" },
    experience: { fr: "Parcours", en: "Experience" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    cta: { fr: "Voir la stack", en: "See the stack" },
    contact: { fr: "Me contacter", en: "Get in touch" },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    subtitle: {
      fr: "Chaque compétence marque des points.",
      en: "Every skill scores points.",
    },
    chips: { fr: "Jetons", en: "Chips" },
    mult: { fr: "Mult", en: "Mult" },
  },
  projects: {
    title: { fr: "Projets", en: "Projets" },
    subtitle: {
      fr: "Chaque projet est un Joker avec sa capacité.",
      en: "Each project is a Joker with its own ability.",
    },
  },
  experience: {
    title: { fr: "Le Parcours", en: "The Run" },
    subtitle: {
      fr: "Les manches remportées, dans l'ordre.",
      en: "Rounds cleared, in order.",
    },
    education: { fr: "Formation", en: "Education" },
  },
  contact: {
    title: { fr: "Cash Out", en: "Cash Out" },
    subtitle: {
      fr: "Faisons connaissance",
      en: "Let's connect",
    },
    resume: { fr: "CV (PDF)", en: "Resume (PDF)" },
  },
};
