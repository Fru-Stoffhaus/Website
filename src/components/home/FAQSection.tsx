"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { STORE_INFO } from "@/lib/constants";
import { FAQ, type FaqItem } from "@/lib/faq";
import { NeedlesIcon, SnipsIcon } from "@/components/ui/CraftIcons";
import { LoopyLine, DashedLine } from "@/components/ui/DecorativePatterns";

/** Render plain answer text, turning the store email into a mailto link when present. */
function AnswerText({ text, email }: { text: string; email?: boolean }) {
  if (!email) return <>{text}</>;
  const parts = text.split(STORE_INFO.contact.email);
  return (
    <>
      {parts[0]}
      <a
        href={`mailto:${STORE_INFO.contact.email}`}
        className="text-fru-purple underline underline-offset-2 hover:text-fru-peach transition-colors"
      >
        {STORE_INFO.contact.email}
      </a>
      {parts[1]}
    </>
  );
}

function FAQEntry({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-fru-dark/10">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        >
          <span className="font-heading text-lg sm:text-xl font-semibold text-fru-dark group-hover:text-fru-purple transition-colors">
            {item.q}
          </span>
          <svg
            className={`w-5 h-5 shrink-0 text-fru-purple transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h3>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="pb-6 text-base leading-relaxed text-fru-dark/80"
        >
          <p>
            <AnswerText text={item.a} email={item.email} />
          </p>
          {item.list && (
            <ul className="mt-3 space-y-1 list-disc pl-5 marker:text-fru-peach">
              {item.list.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          )}
          {item.after && <p className="mt-3">{item.after}</p>}
          {item.link && (
            <p className="mt-3">
              {item.link.before}
              <Link
                href={item.link.href}
                className="text-fru-purple underline underline-offset-2 hover:text-fru-peach transition-colors"
              >
                {item.link.label}
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const locale = useLocale();
  const items = FAQ[locale === "en" ? "en" : "de"];

  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[3%] w-24 h-24 rotate-[12deg] opacity-20 hidden md:block">
          <NeedlesIcon dark />
        </div>
        <div className="absolute bottom-12 left-[3%] w-24 h-24 rotate-[-12deg] opacity-20 hidden md:block">
          <SnipsIcon dark />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fru-dark text-center mb-2">
          {t("title")}
        </h2>
        <LoopyLine className="w-48 h-6 text-fru-peach/60 mx-auto mb-8" />

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 sm:px-8 border border-fru-dark/5">
          {items.map((item, index) => (
            <FAQEntry key={item.q} item={item} index={index} />
          ))}
        </div>

        <DashedLine className="w-32 h-2 text-fru-peach/40 mx-auto mt-8" />
      </div>
    </section>
  );
}
