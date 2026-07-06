"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getStoredConsent, setStoredConsent, type ConsentValue } from "@/lib/consent";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the banner until the visitor has made a marketing-cookie choice.
    if (getStoredConsent() === null) {
      setVisible(true);
    }
  }, []);

  function choose(value: ConsentValue) {
    setStoredConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-fru-dark text-white rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          {t("message")}{" "}
          <Link
            href="/datenschutz"
            className="text-fru-peach hover:underline whitespace-nowrap"
          >
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => choose("denied")}
            className="px-5 py-2 border border-white/40 text-white rounded-full text-sm font-heading font-semibold hover:bg-white/10 transition-colors"
          >
            {t("reject")}
          </button>
          <button
            onClick={() => choose("granted")}
            className="px-5 py-2 bg-fru-peach text-fru-dark rounded-full text-sm font-heading font-semibold hover:bg-fru-peach/80 transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
