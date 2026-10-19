import content from "@/data/content.json";

// Portfolio content lives in src/data/content.json so the dashboard can edit it.
export const profile: Profile = content.profile;
export const sections: Sections = content.sections;
export const themeId: string = content.theme;

export const site = {
  name: profile.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lokesh-portfolio-wheat.vercel.app",
  email: profile.email,
  github: profile.github,
  linkedin: profile.linkedin,
  nav: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
};

export type Profile = {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  heroBadge: string;
  intro: string;
  photo: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  about: string[];
  stats: { value: string; label: string }[];
};

type Heading = { label: string; title: string };

export type Sections = {
  about: Heading;
  projects: Heading;
  skills: Heading & { intro: string };
  experience: Heading;
  education: { title: string };
  contact: Heading & { intro: string; ctaTitle: string; ctaBody: string };
  footer: { tagline: string };
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = content.skills;

export type Project = {
  id: string;
  title: string;
  tagline: string;
  status: string;
  featured?: boolean;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  outcome?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = content.projects;

export type Job = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  story?: { title: string; body: string };
  tags: string[];
};

export const experience: Job[] = content.experience;

export type Education = { school: string; credential: string; period: string };

export const education: Education[] = content.education;
