"use client";

import { useI18n } from "@/lib/i18n";
import { PROFILE, UI } from "@/lib/content";
import { FlagFR, FlagGB } from "./Flags";

export default function Nav() {
  const { t, locale, toggle } = useI18n();
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span className="suit">♦</span> {PROFILE.name}
        </a>
        <div className="nav-links">
          <a href="#about">{t(UI.nav.about)}</a>
          <a href="#skills">{t(UI.nav.skills)}</a>
          <a href="#projects">{t(UI.nav.projects)}</a>
          <a href="#experience">{t(UI.nav.experience)}</a>
          <a href="#contact">{t(UI.nav.contact)}</a>
          <button
            className="lang nav-links-btn btn-ghost btn"
            onClick={toggle}
            aria-label="Switch language"
            style={{ padding: "6px 12px" }}
          >
            {locale === "fr" ? <><FlagGB /> EN</> : <><FlagFR /> FR</>}
          </button>
        </div>
      </div>
    </nav>
  );
}
