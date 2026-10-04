import type { StaticImageData } from "next/image";
import avatarImage from "./images/chibi-avatar.png";
import cvLogo from "./images/cv-logo.png";
import emailLogo from "./images/email-logo.png";
import githubLogo from "./images/github-logo.png";
import locationLogo from "./images/location-logo.png";
import linkedinLogo from "./images/linkedin-logo.png";
import resumeLogo from "./images/resume-logo.png";
import phoneLogo from "./images/smartphone-logo.png";

// Single source of truth for the portfolio (/) and the printable CV (/cv).

export const contact = {
  name: "Nguyen Truong Thuan",
  role: ".NET Developer · Fullstack",
  cvTitle: ".NET Full-Stack Developer",
  email: "truongthuan2609@gmail.com",
  phone: "+84 938 761 194",
  phoneHref: "tel:+84938761194",
  // Set to null to fall back to the "NT" initials.
  avatar: avatarImage as StaticImageData | null,
  location: "Binh Tan, Ho Chi Minh City",
  icons: { email: emailLogo, phone: phoneLogo, location: locationLogo },
  cvLocation: "Ho Chi Minh City, Vietnam",
  // Replace "#" with your real profile URLs.
  socials: [
    { label: "RESUME", title: "Resume", href: "/cv", color: "#FFF", background: "#2f6699", icon: resumeLogo, mobileIcon: cvLogo },
    { label: "GITHUB", title: "GitHub", href: "https://github.com/YamiNguyen2609", color: "#FFF", background: "#181717", icon: githubLogo },
    { label: "LINKEDIN", title: "LinkedIn", href: "https://www.linkedin.com/in/nguyen-truong-thuan/", color: "#FFF", background: "#0077B5", icon: linkedinLogo },
  ],
};

/* ---------------------------------------------------------
   Portfolio
--------------------------------------------------------- */

const ABBR: Record<string, string> = {
  "C#": "C#", JavaScript: "JS", TypeScript: "TS", Python: "Py",
  ".NET": ".N", ".NET Core": ".N", ".NET Framework 4.6.1": ".N", ".NET Framework 4.8": ".N",
  "ASP.NET MVC / Web API": "MV", "ASP.NET Web API": "API", Yii2: "Yi",
  Odoo: "Od", "Odoo 13 Enterprise": "Od", React: "Re", "React Native": "RN",
  "Sencha ExtJS": "Ex", "Sencha ExtJS 7": "Ex", Flutter: "Fl", "Node.js": "No",
  "Entity Framework": "EF", Dapper: "Dp", "MS SQL Server": "SQL", "SQL Server": "SQL",
  PostgreSQL: "Pg", MongoDB: "Mg", "Microsoft Azure": "Az", IIS: "IIS", Apache: "Ap",
  Git: "Git", SVN: "Svn", FTP: "FTP", "Bitbucket Pipelines": "CI", Formstack: "Fs",
  "Splendid CRM": "CRM", Workfront: "Wf", Selenium: "Se", "Google SDK": "G",
  "Telegram SDK": "Tg", MQTT: "MQ", Sisense: "Si", "Claude Code": "CC", Cursor: "Cu",
  Antigravity: "Ag", "Visual Studio": "VS", "VS Code": "VC", "Android Studio": "AS",
  "Agile / Scrum": "Ag", JWT: "JWT", Aspose: "As", "Bluetooth scanner": "BT",
};

export const abbr = (name: string) =>
  ABBR[name] ?? name.replace(/[^A-Za-z]/g, "").slice(0, 2);

export type Variant = "featured" | "plain" | "tint";

export const services: { icon: string; title: string; body: string; variant: Variant }[] = [
  { icon: ".N", title: "Development & maintenance", body: "Fixes, features, and incident resolutions for legacy ASP.NET MVC applications and Web API platforms.", variant: "plain" },
  { icon: "⇄", title: "Integrations & automation", body: "Selenium robots and third-party SDKs that remove manual work.", variant: "plain" },
  { icon: "▦", title: "Business systems & BI", body: "HR, education, and marketing platforms with SQL Server and Sisense reporting.", variant: "plain" },
  { icon: "RN", title: "Mobile field apps", body: "React Native apps for couriers and warehouses — scanning, photos, live location.", variant: "plain" },
];

export const jobs = [
  { company: "Global Vertical Innovations, LLC", dates: "May 2022 — Present", projects: "TDC Legacy · Cortex", current: true },
  { company: "SB&P Logistics", dates: "Dec 2019 — Mar 2022", projects: "Billing Retrieval · Courier & Warehouse apps · HRMS", current: false },
  { company: "AdwardSoft", dates: "Jan 2019 — Dec 2019", projects: "CSI Center Management", current: false },
];

export const skillGroups = [
  { label: "LANGUAGES", tone: "soft" as const, items: ["C#", "JavaScript", "TypeScript", "Python"] },
  { label: "FRAMEWORKS", tone: "solid" as const, items: [".NET", "React", "React Native", "Sencha ExtJS", "Node.js", "Yii2", "Odoo"] },
  { label: "DATA & ORM", tone: "neutral" as const, items: ["MS SQL Server", "PostgreSQL", "MongoDB", "Entity Framework", "Dapper"] },
  { label: "CLOUD, SERVERS & DELIVERY", tone: "soft" as const, items: ["Microsoft Azure", "IIS", "Apache", "Git", "SVN", "FTP", "Bitbucket Pipelines"] },
  { label: "INTEGRATIONS & SDKS", tone: "solid" as const, items: ["Formstack", "Splendid CRM", "Workfront", "Selenium", "Google SDK", "Telegram SDK", "MQTT", "Sisense"] },
  { label: "TOOLS & WAY OF WORKING", tone: "neutral" as const, items: ["Visual Studio", "VS Code", "Android Studio", "Claude", "Cursor", "Antigravity", "Agile / Scrum"] },
];

export const projects = [
  { id: "ix", short: "TDC Legacy", company: "Global Vertical Innovations", years: "May 2022 — Present", title: "TDC Legacy Exchange Platform",
    summary: "Maintained and extended a 33-project .NET Framework 4.8 platform (ASP.NET MVC/Web API, SQL Server, Dapper, ExtJS) that runs the product-data capture lifecycle for SPINS IX-ONE.",
    tech: ["C#", ".NET Framework 4.8", "ASP.NET MVC / Web API", "SQL Server", "Dapper", "Sencha ExtJS", "JWT", "Bitbucket Pipelines"],
    bullets: ["Automated member onboarding across Formstack, SplendidCRM, the core platform and the RIVIR API, including lead conversion, account sync and international address mapping.", "Built GS1 Data Hub product matching by Case and Inner-Pack identifiers, with normalized zero-padded matching across all search flows.", "Built automated retailer new-item ingestion and an APL file-match feature, covering both the ExtJS UI and the backend."],
    // Each module renders as its own card under the project overview. Fill in summary/bullets.
    modules: [
      { name: "IX-OCR", summary: "", bullets: [] as string[] },
      { name: "Data Processing", summary: "", bullets: [] as string[] },
      { name: "Payment", summary: "", bullets: [] as string[] },
      { name: "Portal", summary: "", bullets: [] as string[] },
      { name: "Splendid CRM", summary: "", bullets: [] as string[] },
      { name: "Splendid Integration", summary: "", bullets: [] as string[] },
      { name: "Outstanding", summary: "", bullets: [] as string[] },
      { name: "Automation", summary: "", bullets: [] as string[] },
    ] },
  { id: "cortex", short: "Cortex", company: "Global Vertical Innovations", years: "May 2022 — Present", title: "Cortex — Marketing Program & Budget Management",
    summary: "Enterprise platform for campaign/program/tactic planning, budget allocation, invoicing and ROI/KPI reporting.",
    tech: ["ASP.NET Web API", ".NET Framework 4.6.1", "Sencha ExtJS 7", "SQL Server", "Aspose", "Sisense", "MongoDB"],
    bullets: ["Reviewed and documented the architecture, tracing the real service layer and data model from source to correct outdated docs.", "Mapped integrations with Workfront (project sync) and Sisense (BI dashboards), plus Aspose-based Word/Excel/PDF generation.", "Built Sisense-powered client reporting on budget and tactics data, giving retailers a summary of each program’s spend and tactics."] },
  { id: "billing", short: "Automatic Billing Retrieval", company: "SB&P Logistics", years: "Dec 2019 — Mar 2022", title: "Automatic Billing Retrieval System",
    summary: "Automation that collects tracking and billing data from carrier partners and turns it into reports.",
    tech: ["C#", ".NET Core", "Selenium", "Dapper"],
    bullets: ["Reads billing account records from the internal database to know which shipments need tracking.", "Uses Selenium to log into carrier partners’ systems and pull tracking/billing data for each account.", "Stores retrieved data centrally for the internal team to review and process.", "Turns processed data into reports, uploaded back into the internal system or sent directly to customers."] },
  { id: "courier", short: "Courier Android App", company: "SB&P Logistics", years: "Dec 2019 — Mar 2022", title: "Courier Android App",
    summary: "Mobile companion app for couriers, syncing shipment scans and status back to the backend in real time.",
    tech: ["React Native", "Google SDK", "Telegram SDK", "MQTT", "Android Studio"],
    bullets: ["Scans shipment labels and captures manifest photos in the field.", "Reports real-time pickup/delivery location and order status.", "Lets couriers log vehicle mileage and fuel, and self-assign pickup and delivery runs."] },
  { id: "warehouse", short: "Warehouse Android App", company: "SB&P Logistics", years: "Dec 2019 — Mar 2022", title: "Warehouse Android App",
    summary: "Covers the full inbound-to-outbound warehouse flow on handheld Bluetooth scanners.",
    tech: ["React Native", "Telegram SDK", "Android Studio", "Bluetooth scanner"],
    bullets: ["Check-in, bagging and re-scanning orders.", "Receiving and returning products to vendors, plus bin putaway and picking.", "Inter-location inventory transfers.", "Exports completed orders after picking and bagging for downstream processing."] },
  { id: "hr", short: "HR Management System", company: "SB&P Logistics", years: "Dec 2019 — Mar 2022", title: "Human Resource Management System",
    summary: "Odoo-based HR system for internal use, centralising employee records and contracts.",
    tech: ["Python", "Odoo 13 Enterprise", "PostgreSQL"],
    bullets: ["Manages salary information and calculations.", "Tracks time-off requests, attendance and additional working hours."] },
  { id: "csi", short: "CSI Center Management", company: "AdwardSoft", years: "Jan 2019 — Dec 2019", title: "Cornerstone Institute (CSI) Center Management",
    summary: "Core management system for the CSI education center — teachers, students, courses, classes and branches in one place.",
    tech: ["C#", ".NET Core", "Dapper"],
    bullets: ["Supporting workflows for salary calculation, invoicing and class scheduling.", "Exam tooling: question creation, online exam delivery and a document library for course materials."] },
];

/* ---------------------------------------------------------
   CV
--------------------------------------------------------- */

export const cv = {
  summary:
    ".NET developer with 7+ years of experience building, maintaining, and integrating enterprise web platforms and back-office systems in C#, ASP.NET (Framework and Core), and SQL Server. Currently own day-to-day development and production support of a large B2B exchange platform and a marketing budget-management platform serving members and retailers across multiple countries, covering incident response, new features, and CRM/BI integrations. Previously worked as the sole developer on logistics automation, React Native mobile apps, an Odoo HR system, and an education-management system, owning each from requirements to delivery. Comfortable working in Git and Bitbucket Pipelines release workflows and with AI-assisted development (Claude Code, Cursor).",
  experience: [
    {
      company: "Global Vertical Innovations, LLC",
      dates: "May 2022 - Present",
      projects: [
        {
          title: "TDC Legacy Platform",
          tech: "C#, .NET Framework 4.8, ASP.NET MVC/Web API, SQL Server, Dapper, Sencha ExtJS, JWT, Bitbucket Pipelines",
          bullets: [
            "Maintained and extended a 33-project .NET Framework 4.8 platform (ASP.NET MVC/Web API, SQL Server, Dapper, ExtJS) that runs the product-data capture lifecycle for SPINS IX-ONE.",
            "Automated member onboarding across Formstack, SplendidCRM, the core platform and the RIVIR API, including lead conversion, account sync and international address mapping.",
            "Built GS1 Data Hub product matching by Case and Inner-Pack identifiers, with normalized zero-padded matching across all search flows.",
            "Built automated retailer new-item ingestion and an APL file-match feature, covering both the ExtJS UI and the backend.",
          ],
        },
        {
          title: "Cortex — Marketing Program & Budget Management Platform",
          tech: "ASP.NET Web API, .NET Framework 4.6.1, Sencha ExtJS 7, SQL Server, MongoDB, Aspose",
          bullets: [
            "Built Sisense-powered client reporting on Cortex budget and tactics data (MongoDB), giving retailers a summarized view of each program's spend and tactics.",
            "Documented the platform's architecture (campaign/program/tactic planning, budget allocation, invoicing, ROI/KPI reporting) by tracing the service layer and data model from source, correcting outdated docs.",
            "Mapped integrations with Workfront (project sync) and Sisense (BI dashboards) and Aspose-based document generation (Word/Excel/PDF).",
          ],
        },
      ],
    },
    {
      company: "SB&P Logistics",
      dates: "Dec 2019 - Mar 2022",
      projects: [
        {
          title: "Automatic Billing Retrieval System",
          tech: "C#, .NET Core, Selenium, Dapper ORM",
          bullets: [
            "As the sole developer, designed and built a service that reads billing accounts from the internal database, uses Selenium to log into carrier partners' systems, and pulls tracking/billing data for each account into a central store.",
            "Generated reports from the processed data, uploaded back into the internal system or sent directly to customers.",
          ],
        },
        {
          title: "Courier Android App",
          tech: "React Native, Google SDK, Telegram SDK, MQTT, Android Studio",
          bullets: [
            "As the sole developer, built a courier companion app that syncs shipment scans and status to the backend in real time, with label scanning, manifest photo capture, and live pickup/delivery location reporting.",
            "Implemented vehicle mileage and fuel logging and self-assignment of pickup and delivery runs.",
          ],
        },
        {
          title: "Warehouse Android App",
          tech: "React Native, Telegram SDK, Android Studio, Bluetooth scanner",
          bullets: [
            "As the sole developer, built the full inbound-to-outbound warehouse flow: check-in, bagging, re-scanning, vendor receiving and returns, bin putaway and picking.",
            "Implemented inter-location inventory transfers and export of completed orders for downstream processing.",
          ],
        },
        {
          title: "Human Resource Management System",
          tech: "Python, Odoo 13 Enterprise, PostgreSQL",
          bullets: [
            "As the sole developer, implemented an Odoo-based internal HR system covering employee records and contracts, salary calculation, time-off, attendance, and additional working hours.",
          ],
        },
      ],
    },
    {
      company: "AdwardSoft",
      dates: "Jan 2019 - Dec 2019",
      projects: [
        {
          title: "Cornerstone Institute (CSI) Center Management",
          tech: "C#, .NET Core, Dapper ORM",
          bullets: [
            "As the sole developer, built the core management system for an education center, centralizing teacher, student, course, class, and branch data.",
            "Implemented salary calculation, invoicing, and class scheduling workflows, plus exam tooling (question creation, online exams, course document library).",
          ],
        },
      ],
    },
  ],
  skills: [
    ["Languages", "C#, JavaScript, TypeScript, Python"],
    ["Backend", "ASP.NET MVC / Web API, .NET Framework & .NET Core, Entity Framework, Dapper, Node.js, Odoo"],
    ["Frontend & mobile", "Sencha ExtJS, React, React Native, Flutter"],
    ["Databases", "MS SQL Server, PostgreSQL, MongoDB"],
    ["Tools & environments", "Git, SVN, Bitbucket Pipelines (CI/CD), Microsoft Azure, IIS (working knowledge as a user)"],
    ["Integrations & BI", "Formstack, Splendid CRM, Workfront, Sisense, Selenium, MQTT, Telegram / Google SDK"],
    ["AI-assisted development", "Claude Code, Cursor, Antigravity"],
    ["Methodology", "Agile / Scrum"],
  ],
  education: {
    school: "HCMC University of Natural Resources and Environment",
    degree: "Bachelor of Engineering, Computer Science",
    years: "2014 - 2018",
  },
};
