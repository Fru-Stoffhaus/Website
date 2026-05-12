"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent-dismissed", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-fru-dark text-white rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">{t("message")}</p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/datenschutz"
            className="text-xs text-fru-peach hover:underline"
          >
            {t("learnMore")}
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-fru-peach text-fru-dark rounded-full text-sm font-heading font-semibold hover:bg-fru-peach/80 transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
