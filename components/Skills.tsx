"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SKILLS, UI } from "@/lib/content";
import { asset } from "@/lib/asset";

/** Count up from 0 to `target` once the element scrolls into view. */
function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export default function Skills() {
  const { t } = useI18n();
  const totalChips = SKILLS.reduce((s, k) => s + k.chips, 0);
  const mult = SKILLS.length; // one mult per skill in the deck
  const { value, ref } = useCountUp(totalChips * mult);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <span className="eyebrow">{t(UI.skills.subtitle)}</span>
          <h2 className="section-title">{t(UI.skills.title)}</h2>
        </div>

        <div className="score-banner" ref={ref}>
          <div className="score-unit unit-chips">
            <span className="score-chip">{totalChips}</span>
            <span className="score-cap">{t(UI.skills.chips)}</span>
          </div>
          <span className="score-x">×</span>
          <div className="score-unit unit-mult">
            <span className="score-mult">{mult}</span>
            <span className="score-cap">{t(UI.skills.mult)}</span>
          </div>
          <span className="score-x">=</span>
          <div className="score-unit unit-score">
            <span className="score-chip" style={{ color: "var(--gold)", borderColor: "rgba(255,210,63,.5)", background: "rgba(255,210,63,.14)" }}>
              {value.toLocaleString()}
            </span>
            <span className="score-cap">{t({ fr: "Score", en: "Score" })}</span>
          </div>
        </div>

        <div className="skill-grid">
          {SKILLS.map((s) => (
            <div className="card skill-card" key={s.name}>
              <div className="skill-art">
                <img className="skill-logo" src={asset(s.logo)} alt={`${s.name} logo`} />
              </div>
              <div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-score">
                  <span>
                    <span className="c">+{s.chips}</span>{" "}
                    <span style={{ fontSize: ".7rem", opacity: .55 }}>{t(UI.skills.chips)}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
