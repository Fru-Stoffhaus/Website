"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-fru-peach/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="text-fru-green">Stoff</span>
              <span className="text-fru-green">haus</span>{" "}
              <span className="text-fru-green">F</span>
              <span className="text-fru-purple">R</span>
              <span className="text-fru-peach">U</span>
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            <Link
              href="/"
              className={`font-heading text-sm uppercase tracking-wider transition-colors hover:text-fru-purple ${
                pathname === "/" ? "text-fru-purple" : "text-fru-dark"
              }`}
            >
              {t("home")}
            </Link>
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-3 sm:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-fru-dark"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="sm:hidden pb-4 border-t border-fru-peach/20 pt-4">
            <Link
              href="/"
              className="block py-2 font-heading text-sm uppercase tracking-wider text-fru-dark hover:text-fru-purple"
              onClick={() => setMenuOpen(false)}
            >
              {t("home")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
