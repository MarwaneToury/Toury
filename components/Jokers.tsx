"use client";

import { useI18n } from "@/lib/i18n";
import { JOKERS, UI } from "@/lib/content";
import TiltCard from "./TiltCard";

const RARITY_LABEL: Record<string, { fr: string; en: string }> = {
  common: { fr: "Commun", en: "Common" },
  uncommon: { fr: "Peu commun", en: "Uncommon" },
  rare: { fr: "Rare", en: "Rare" },
  legendary: { fr: "Légendaire", en: "Legendary" },
};

export default function Jokers() {
  const { t } = useI18n();
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center" }}>
          <span className="eyebrow">{t(UI.projects.subtitle)}</span>
          <h2 className="section-title">{t(UI.projects.title)}</h2>
        </div>

        <div className="joker-grid">
          {JOKERS.map((j, i) => (
            <TiltCard
              className={`joker${j.negative ? " negative" : ""}${j.foil ? " foil" : ""}`}
              data-rarity={j.rarity}
              key={i}
              max={8}
            >
              <div className="joker-head">
                <span className="joker-year">{j.year}</span>
              </div>
              <div>
                <div className="joker-context">{t(j.context)}</div>
              </div>
              <div className="joker-badges">
                <span className={`rarity-tag rarity-${j.rarity}`}>
                  {t(RARITY_LABEL[j.rarity])}
                </span>
                {j.negative && (
                  <span className="negative-effect">
                    ✦ +1 {t({ fr: "emplacement", en: "slot" })}
                  </span>
                )}
                {j.foil && (
                  <span className="foil-effect">
                    ✦ {t({ fr: "Brillante", en: "Foil" })}
                  </span>
                )}
              </div>
              <div className="joker-ability">{t(j.ability)}</div>
              <div className="tag-row">
                {j.tech.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
