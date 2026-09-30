import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { contact, cv } from "@/data/profile";
import s from "./cv.module.css";

export const metadata: Metadata = {
  title: "Nguyen Truong Thuan — .NET Full-Stack Developer",
  description: "Resume of Nguyen Truong Thuan, .NET Full-Stack Developer.",
};

const icon = { width: 13, height: 13, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };

export default function CvPage() {
  return (
    <div className={s.page}>
      <div className={s.toolbar}>
        <Link href="/" className={s.back}>← Portfolio</Link>
        <span>A4 resume — use the print dialog to save as PDF.</span>
        <PrintButton className={s.printBtn} />
      </div>

      <main className={s.sheet}>
        <header className={s.head}>
          <div>
            <h1 className={s.name}>{contact.name}</h1>
            <p className={s.title}>{contact.cvTitle}</p>
          </div>
          <ul className={s.contact}>
            <li>
              <svg {...icon}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <svg {...icon}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>{contact.cvLocation}</span>
            </li>
            <li>
              <svg {...icon}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </header>

        <section className={s.section}>
          <h2>Summary</h2>
          <p className={s.summary}>{cv.summary}</p>
        </section>

        <section className={s.section}>
          <h2>Experience</h2>
          {cv.experience.map((job) => (
            <article key={job.company} className={s.job}>
              <div className={s.jobHeader}>
                <span className={s.jobCompany}>{job.company}</span>
                <span className={s.jobDates}>{job.dates}</span>
              </div>
              {job.projects.map((p) => (
                <div key={p.title} className={s.project}>
                  <p className={s.projectTitle}>{p.title}</p>
                  <p className={s.projectTech}>
                    <span className={s.label}>Technology:</span> {p.tech}
                  </p>
                  <ul className={s.projectList}>
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section className={s.section}>
          <h2>Skills</h2>
          <div className={s.skills}>
            {cv.skills.map(([label, value]) => (
              <div key={label} className={s.skillRow}>
                <span className={s.skillLabel}>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <h2>Education</h2>
          <div className={s.edu}>
            <p className={s.eduSchool}>{cv.education.school}</p>
            <p className={s.eduLine}>
              {cv.education.degree} <span className={s.muted}>({cv.education.years})</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
