"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "./content";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  /** pick the right string from a { fr, en } pair */
  t: <T>(pair: { fr: T; en: T }) => T;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  // restore saved preference on mount
  useEffect(() => {
    const saved = window.localStorage.getItem("locale");
    if (saved === "fr" || saved === "en") setLocale(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value: Ctx = {
    locale,
    setLocale,
    toggle: () => setLocale((l) => (l === "fr" ? "en" : "fr")),
    t: (pair) => pair[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
