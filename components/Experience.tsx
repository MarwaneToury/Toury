"use client";

import { useI18n } from "@/lib/i18n";
import { JOBS, EDUCATION, UI } from "@/lib/content";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <span className="eyebrow">{t(UI.experience.subtitle)}</span>
          <h2 className="section-title">{t(UI.experience.title)}</h2>
        </div>

        <div className="timeline">
          {JOBS.map((job, i) => (
            <div className="job" key={i}>
              <div>
                <div className="job-period">{t(job.period)}</div>
                <div className="job-loc">{job.location}</div>
              </div>
              <div>
                <div className="job-role">
                  {t(job.role)} ·{" "}
                  {job.website ? (
                    <a
                      className="job-company"
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="job-company">{job.company}</span>
                  )}
                </div>
                <ul>
                  {t(job.bullets).map((b, k) => (
                    <li key={k}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row dark">
                  {job.tech.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu">
          <span className="cap">🎓</span>
          <div>
            <strong>{t(EDUCATION.degree)}</strong>
            <div style={{ color: "var(--text-dim)" }}>
              {EDUCATION.school} · {EDUCATION.year}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
