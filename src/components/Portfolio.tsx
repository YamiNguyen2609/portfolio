"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { abbr, contact, jobs, projects, services, skillGroups } from "@/data/profile";
import s from "./Portfolio.module.css";

const TABS = ["About", "Skills", "Projects"] as const;

export default function Portfolio() {
  const [tab, setTab] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pid, setPid] = useState(projects[0].id);
  // Mobile accordion: which project is expanded (null = all collapsed)
  const [openId, setOpenId] = useState<string | null>(projects[0].id);
  const panel = useRef<HTMLDivElement>(null);
  const detail = useRef<HTMLDivElement>(null);
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

  const projectDetail = (p: (typeof projects)[number]) => (
    <>
      <div className={s.techCard}>
        <div className={s.techHead}>
          <span>LANGUAGES &amp; TECH</span>
          <span>
            {p.company} · {p.years}
          </span>
        </div>
        <div className={s.techList}>
          {p.tech.map((name) => (
            <span key={name} className={s.tech}>
              <span className={s.techIcon}>{abbr(name)}</span>
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className={s.detailCard}>
        <h3 className={s.detailTitle}>{p.title}</h3>
        <p className={s.detailSummary}>{p.summary}</p>
        <div className={s.bullets}>
          {p.bullets.map((b) => (
            <div key={b} className={s.bullet}>
              <span className={s.bulletMark} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
      {p.modules?.map((m) => (
        <div key={m.name} className={s.detailCard}>
          <h4 className={s.moduleTitle}>{m.name}</h4>
          {m.summary && <p className={s.detailSummary}>{m.summary}</p>}
          {m.bullets.length > 0 && (
            <div className={s.bullets}>
              {m.bullets.map((b) => (
                <div key={b} className={s.bullet}>
                  <span className={s.bulletMark} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className={s.root}>
      <aside className={s.side}>
        <div className={s.avatarRing}>
          {contact.avatar ? (
            <div className={s.avatar}>
              <Image src={contact.avatar} alt={contact.name} className={s.avatarImg} sizes="136px" priority />
            </div>
          ) : (
            <div className={s.avatar}>NT</div>
          )}
        </div>

        <div className={s.identity}>
          <h1 className={s.name}>{contact.name}</h1>
          <span className={s.role}>{contact.role}</span>
        </div>

        <div className={s.contacts}>
          <a href={`mailto:${contact.email}`} className={s.contact}>
            <span className={s.contactIcon}><Image src={contact.icons.email} alt="" width={18} height={18} /></span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>EMAIL</span>
              <span className={s.contactValue}>{contact.email}</span>
            </span>
          </a>
          <a href={contact.phoneHref} className={s.contact}>
            <span className={s.contactIcon}><Image src={contact.icons.phone} alt="" width={18} height={18} /></span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>PHONE</span>
              <span className={s.contactValue}>{contact.phone}</span>
            </span>
          </a>
          <div className={`${s.contact} ${s.static}`}>
            <span className={s.contactIcon}><Image src={contact.icons.location} alt="" width={18} height={18} /></span>
            <span className={s.contactText}>
              <span className={s.contactLabel}>LOCATION</span>
              <span className={s.contactValue}>{contact.location}</span>
            </span>
          </div>
        </div>

        <div className={s.socials}>
          {contact.socials.map((x) => (
            <a key={x.title} href={x.href} title={x.title} target="_blank" rel="noopener noreferrer" className={s.social} style={{ color: x.color, background: x.background }}>
              <Image src={x.icon} alt="" width={18} height={18} className={x.mobileIcon ? s.desktopOnly : undefined} />
              {x.mobileIcon && <Image src={x.mobileIcon} alt="" width={18} height={18} className={s.mobileOnly} />}
              <span className={s.socialLabel}>{x.label}</span>
            </a>
          ))}
        </div>
      </aside>

      <main className={s.main}>
        <div className={s.topbar}>
          <div className={`${s.pageTitle} ${visible ? "" : s.hidden}`}>
            <h2 className={s.pageName}>{TABS[tab]}</h2>
          </div>
        <div className={s.tabs} role="tablist">
          <span className={s.pill} style={{ transform: `translateX(${tab * 100}%)` }} />
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
        </div>

        <div className={s.card}>
          <div ref={panel} className={`${s.panel} ${visible ? "" : s.hidden}`}>
            {tab === 0 && (
              <>
                <section className={s.block}>
                  <span className={s.eyebrow}>OVERVIEW</span>
                  <div className={s.blockBody}>
                  <h2 className={s.headline}>
                    I keep enterprise .NET systems <span className={s.mark}>running</span> — and make them better.
                  </h2>
                  <p className={s.lead}>
                    7+ years in design, software development, support and system administration. I’ve delivered software and web projects for clients of different scales — logistics, HR, education and B2B retail — in C#, JavaScript, and Python. <br/>My motto: <strong>never give up.</strong>
                  </p>
                  </div>
                </section>

                <section className={s.block}>
                  <span className={s.eyebrow}>WHAT I DO</span>
                  <div className={`${s.blockBody} ${s.services}`} 
                       style={{ border: 'unset !important', background: 'unset !important', padding: 'unset !important', boxShadow: 'unset !important' }}>
                    {services.map((x) => (
                      <div key={x.title} className={`${s.service} ${s[x.variant]}`}>
                        <h3 className={s.serviceTitle}>{x.title}</h3>
                        <p className={s.serviceBody}>{x.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className={s.block}>
                  <span className={s.eyebrow}>EXPERIENCE</span>
                  <div className={s.blockBody}>
                    {jobs.map((j, i) => (
                      <div key={j.company} className={s.job}>
                        <div className={s.rail}>
                          <span className={`${s.dot} ${j.current ? s.dotCurrent : ""}`} />
                          {i < jobs.length - 1 && <span className={s.line} />}
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
                <section key={g.label} className={`${s.skillGroup} ${s[g.tone]}`}>
                  <div className={s.groupHead}>
                    <span className={s.swatch} />
                    <span className={s.groupLabel}>{g.label}</span>
                    <span className={s.rule} />
                  </div>
                  <div className={`${s.blockBody} ${s.skills}`}
                       style={{ border: 'unset !important', background: 'unset !important', padding: 'unset !important', boxShadow: 'unset !important' }}>
                    {g.items.map((name) => (
                      <div key={name} className={s.skill}>
                        <span className={s.skillIcon}>
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
                    <Fragment key={p.id}>
                      <button
                        className={`${s.projectBtn} ${p.id === pid ? s.projectOn : ""}`}
                        aria-expanded={openId === p.id}
                        onClick={() => {
                          setPid(p.id);
                          setOpenId(openId === p.id ? null : p.id);
                          detail.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        <span className={s.projectNum}>{String(i + 1).padStart(2, "0")}</span>
                        <span className={s.projectShort}>{p.short}</span>
                        <span className={s.projectCompany}>{p.company}</span>
                      </button>
                      {openId === p.id && <div className={`${s.detail} ${s.inlineDetail}`}>{projectDetail(p)}</div>}
                    </Fragment>
                  ))}
                </div>

                <div ref={detail} className={`${s.detail} ${s.sideDetail}`}>
                  {projectDetail(cur)}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
