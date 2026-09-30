"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { abbr, contact, jobs, projects, services, skillGroups } from "@/data/profile";
import s from "./Portfolio.module.css";

const TABS = ["About", "Skills", "Projects"] as const;

export default function Portfolio() {
  const [tab, setTab] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pid, setPid] = useState(projects[0].id);
  const panel = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const go = (i: number) => {
    if (i === tab) return;
    setVisible(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (panel.current) panel.current.scrollTop = 0;
      setTab(i);
      setVisible(true);
    }, 180);
  };

  const cur = projects.find((p) => p.id === pid)!;

  return (
    <div className={s.root}>
      <aside className={s.side}>
        <div className={s.avatarRing}>
          {contact.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={contact.avatar} alt={contact.name} className={s.avatar} />
          ) : (
            <div className={s.avatar}>NT</div>
          )}
          <span className={s.status} />
        </div>

        <div className={s.identity}>
          <h1 className={s.name}>{contact.name}</h1>
          <span className={s.role}>{contact.role}</span>
        </div>

        <div className={s.contacts}>
          <a href={`mailto:${contact.email}`} className={s.contact}>
            <span className={s.contactIcon}>@</span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>EMAIL</span>
              <span className={s.contactValue}>{contact.email}</span>
            </span>
          </a>
          <a href={contact.phoneHref} className={s.contact}>
            <span className={s.contactIcon}>☏</span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>PHONE</span>
              <span className={s.contactValue}>{contact.phone}</span>
            </span>
          </a>
          <div className={`${s.contact} ${s.static}`}>
            <span className={s.contactIcon}>⌖</span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>LOCATION</span>
              <span className={s.contactValue}>{contact.location}</span>
            </span>
          </div>
          <Link href="/cv" className={`${s.contact} ${s.cvLink}`}>
            <span className={s.contactIcon}>CV</span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>RESUME</span>
              <span className={s.contactValue}>View printable CV →</span>
            </span>
          </Link>
        </div>

        <div className={s.socials}>
          {contact.socials.map((x) => (
            <a key={x.title} href={x.href} title={x.title} className={s.social}>
              {x.label}
            </a>
          ))}
        </div>
      </aside>

      <main className={s.main}>
        <div className={s.tabs} role="tablist">
          <span className={s.pill} style={{ left: `calc(5px + (100% - 10px) / 3 * ${tab})` }} />
          {TABS.map((label, i) => (
            <button
              key={label}
              role="tab"
              aria-selected={i === tab}
              className={`${s.tab} ${i === tab ? s.tabActive : ""}`}
              onClick={() => go(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={s.card}>
          <span className={s.scallop} />
          <div ref={panel} className={`${s.panel} ${visible ? "" : s.hidden}`}>
            {tab === 0 && (
              <>
                <section className={s.block}>
                  <span className={s.eyebrow}>OVERVIEW</span>
                  <h2 className={s.headline}>
                    I keep enterprise .NET systems <span className={s.mark}>running</span> — and make them better.
                  </h2>
                  <p className={s.lead}>
                    5+ years in design, software development, support and system administration. I’ve delivered
                    software and web projects for clients of different scales — logistics, HR, education and B2B
                    retail — in C#, JavaScript, Python and Dart. My motto: <strong>never give up.</strong>
                  </p>
                </section>

                <section className={s.block}>
                  <span className={s.eyebrow}>WHAT I DO</span>
                  <div className={s.services}>
                    {services.map((x) => (
                      <div key={x.title} className={`${s.service} ${s[x.variant]}`}>
                        <span className={s.serviceIcon}>{x.icon}</span>
                        <h3 className={s.serviceTitle}>{x.title}</h3>
                        <p className={s.serviceBody}>{x.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={s.block}>
                  <span className={s.eyebrow}>EXPERIENCE</span>
                  <div>
                    {jobs.map((j, i) => (
                      <div key={j.company} className={s.job}>
                        <div className={s.rail}>
                          <span className={s.dot} style={{ background: j.dot }} />
                          <span className={s.line} style={{ background: i === jobs.length - 1 ? "transparent" : undefined }} />
                        </div>
                        <div className={s.jobBody}>
                          <div className={s.jobHead}>
                            <span className={s.company}>{j.company}</span>
                            <span className={s.jobProjects}>{j.projects}</span>
                          </div>
                          <span className={`${s.chip} ${j.current ? s.chipCurrent : ""}`}>{j.dates}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {tab === 1 &&
              skillGroups.map((g) => (
                <section key={g.label} className={s.skillGroup}>
                  <div className={s.groupHead}>
                    <span className={s.swatch} style={{ background: g.color }} />
                    <span className={s.groupLabel}>{g.label}</span>
                    <span className={s.rule} />
                  </div>
                  <div className={s.skills}>
                    {g.items.map((name) => (
                      <div key={name} className={s.skill}>
                        <span className={s.skillIcon} style={{ background: g.color, color: g.ink }}>
                          {abbr(name)}
                        </span>
                        <span className={s.skillName}>{name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

            {tab === 2 && (
              <div className={s.projects}>
                <div className={s.projectList}>
                  {projects.map((p, i) => (
                    <button
                      key={p.id}
                      className={`${s.projectBtn} ${p.id === pid ? s.projectOn : ""}`}
                      onClick={() => setPid(p.id)}
                    >
                      <span className={s.projectNum}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={s.projectShort}>{p.short}</span>
                      <span className={s.projectCompany}>{p.company}</span>
                    </button>
                  ))}
                </div>

                <div className={s.detail}>
                  <div className={s.techCard}>
                    <div className={s.techHead}>
                      <span>LANGUAGES &amp; TECH</span>
                      <span>
                        {cur.company} · {cur.years}
                      </span>
                    </div>
                    <div className={s.techList}>
                      {cur.tech.map((name) => (
                        <span key={name} className={s.tech}>
                          <span className={s.techIcon}>{abbr(name)}</span>
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={s.detailCard}>
                    <h3 className={s.detailTitle}>{cur.title}</h3>
                    <p className={s.detailSummary}>{cur.summary}</p>
                    <div className={s.bullets}>
                      {cur.bullets.map((b) => (
                        <div key={b} className={s.bullet}>
                          <span className={s.bulletMark} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
