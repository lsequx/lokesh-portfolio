export const site = {
  name: "Lokesh Sequeira",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "lokeshsequeira@gmail.com",
  github: "https://github.com/lsequx",
  linkedin: "www.linkedin.com/in/lokesh-sequeira-3a5243261",
  nav: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
};

export const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Responsive UI", "Form Validation"],
  },
  {
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Session Handling",
    ],
  },
  {
    title: "Data & Tools",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git/GitHub",
      "Postman",
      "Linux",
      "AWS EC2 (basics)",
      "ServiceNow",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Full-Stack Development",
      "API Integration",
      "Debugging",
      "Data Validation",
      "Incident Analysis",
      "Root-Cause Analysis",
    ],
  },
];

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
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    id: "nexus",
    title: "NEXUS",
    tagline: "Network Intelligence & Incident Response Platform",
    status: "Completed",
    featured: true,
    description:
      "An end-to-end platform that collects network events, correlates related device impacts, classifies incident severity, and supports root-cause investigation. It's built on the workflows I used daily as a NOC analyst.",
    highlights: [
      "Models direct and indirect device relationships to show what happened, when, and which components were affected",
      "Investigator actions for investigation, resolution and closure, with timestamped state transitions",
      "Historical records to help spot and review recurring events",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/lsequx/nexus-network-intelligence",
    image: "/images/nexus-dashboard.png",
    imageAlt: "NEXUS incident dashboard showing correlated network events",
  },
  {
    id: "guard-reporting",
    title: "Security Guard Reporting App",
    tagline: "Walkthrough reporting for a facility manager",
    status: "Working Demo",
    description:
      "Designed and built independently in about a month, then iterated with the facility manager through demos and feedback.",
    highlights: [
      "Login-session checks and duplicate guard-name prevention",
      "Required-field and checkbox validation with clear error handling",
      "Emailed reports with guard identity, notes, and date/time details",
    ],
    stack: [
      "Python",
      "FastAPI",
      "MongoDB",
      "React",
      "Next.js",
      "Flask",
      "Gmail SMTP",
    ],
  },
  {
    id: "portal-redesign",
    title: "Customer Portal Redesign",
    tagline: "Self-directed initiative at H5 DataCenters",
    status: "Prototype",
    description:
      "Prototyped a modernized customer portal alongside my NOC responsibilities, learning a new stack along the way.",
    highlights: [
      "Clearer navigation and more readable status updates",
      "Document links, ticket visibility, and an updated login presentation",
    ],
    stack: ["Ruby on Rails", "CSS", "JavaScript", "jQuery"],
  },
];

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

export const experience: Job[] = [
  {
    id: "qualfon",
    role: "Remote Technical Assistant",
    company: "Qualfon Data Services Group / Forged Fiber 37",
    location: "Remote",
    period: "May 2026 – Present",
    current: true,
    bullets: [
      "Handle roughly 10–15 technician-support calls per day, documenting each interaction in Salesforce with about a 99% call-to-case ratio",
      "Troubleshoot fiber installation, connectivity and Q1000K/W1700 equipment issues, including misrouted splitter and service-leg connections",
      "Verify configurations, perform VLAN changes, provision or reset ONTs, and support service restoration",
      "Work with field technicians through hardware replacements and additional diagnostics",
    ],
    tags: ["Salesforce", "Calix", "Adtran", "VLANs", "ONT Provisioning"],
  },
  {
    id: "h5",
    role: "NOC Analyst",
    company: "H5 DataCenters",
    location: "Cincinnati, OH",
    period: "Jun 2022 – May 2025",
    bullets: [
      "Monitored data-center and customer-server availability with status dashboards, Nagios, ping and traceroute, handling about 15–20 tickets per 12-hour shift",
      "Owned incident response during solo 12-hour shifts, coordinating with network engineering, data-center teams and ISPs including Lumen/CenturyLink",
      "Investigated connectivity, firewall, access-point, latency and server-reachability incidents, and maintained ticket histories and shift handoffs",
      "Trained 2 new analysts on ticket workflows, diagnostics, incident-versus-outage handling and escalation",
      "Used downtime to follow up on and close 10–20 older high-priority tickets, improving documentation and customer-status visibility",
    ],
    story: {
      title: "Incident story: city-level power outage",
      body: "As the primary contact during a power outage affecting multiple customer servers, I created a master incident ticket plus customer-specific tickets, communicated status, gathered diagnostics and coordinated recovery calls over several hours.",
    },
    tags: ["Nagios", "Incident Response", "Escalation", "Root-Cause Analysis"],
  },
  {
    id: "atos",
    role: "L1 Helpdesk Agent",
    company: "ATOS",
    location: "Mason, OH",
    period: "Aug 2021 – May 2022",
    bullets: [
      "Resolved or escalated about 10–20 tickets per shift covering account lockouts, password resets, secure-login fob numbers and access issues",
      "Provided first-level support by phone, email and service portal, investigating issues and communicating ticket updates",
      "Supported operational monitoring of physical security and IT systems, escalating issues and informing internal teams",
    ],
    tags: ["Helpdesk", "Ticketing", "User Access"],
  },
];

export const education = [
  {
    school: "Miami University",
    credential: "B.S. Computer Science & Engineering",
    period: "Expected 2028",
  },
  {
    school: "Talawanda High School",
    credential: "High School Diploma",
    period: "May 2019",
  },
];
