"use client";

import { useI18n } from "@/lib/i18n";
import { PROFILE, UI } from "@/lib/content";
import { asset } from "@/lib/asset";
import TiltCard from "./TiltCard";

export default function About() {
  const { t, locale } = useI18n();
  return (
    <header id="top">
      <section id="about" className="landing">
        <div className="container about-grid">
          <div className="deal" style={{ animationDelay: "0.1s" }}>
            <TiltCard className="face-card">
              <div className="face-corner tl">
                M<span className="suit-red">♦</span>
              </div>
              <div className="face-portrait">
                <img src={asset("/Marwane_pro.jpg")} alt="Marwane Toury" />
              </div>
              <div className="face-name">Marwane Toury</div>
              <div className="face-role">{t(PROFILE.title)}</div>
              <div className="face-corner br">
                M<span className="suit-red">♦</span>
              </div>
            </TiltCard>
          </div>

          <div>
            <span className="eyebrow deal" style={{ animationDelay: "0.15s" }}>
              {locale === "fr" ? "Le joueur" : "The player"}
            </span>
            <h1 className="landing-title deal" style={{ animationDelay: "0.25s" }}>
              {locale === "fr"
                ? "Ingénieur le jour, joueur de cartes le reste du temps."
                : "Engineer by day, card player the rest of the time."}
            </h1>
            <p className="pitch deal" style={{ animationDelay: "0.35s", maxWidth: "52ch" }}>
              {locale === "fr"
                ? "Développeur full-stack diplômé de Polytech Montpellier. J'aime construire des produits web solides, du back-end NestJS aux interfaces React soignées. En dehors du code, je joue et coache en compétition sur des jeux de cartes."
                : "Full-stack developer, engineering graduate from Polytech Montpellier. I like building solid web products from NestJS back-ends to polished React front-ends. Away from code, I play and coach competitive card games."}
            </p>
            <div className="hero-cta deal" style={{ animationDelay: "0.45s" }}>
              <a href="#skills" className="btn btn-primary">
                {t(UI.hero.cta)} →
              </a>
              <a href="#contact" className="btn btn-ghost">
                {t(UI.hero.contact)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
