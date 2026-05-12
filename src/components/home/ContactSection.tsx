"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { STORE_INFO } from "@/lib/constants";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapQuery = encodeURIComponent(
    `${STORE_INFO.address.street}, ${STORE_INFO.address.postalCode} ${STORE_INFO.address.city}, ${STORE_INFO.address.country}`
  );

  return (
    <section className="py-16 sm:py-24 bg-fru-peach-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-fru-dark mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-fru-purple/10 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5 text-fru-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-semibold text-fru-dark">
                  {STORE_INFO.address.street}
                </p>
                <p className="text-fru-dark/70">
                  {STORE_INFO.address.postalCode} {STORE_INFO.address.city}
                </p>
                <p className="text-fru-dark/70">{STORE_INFO.address.country}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-fru-purple/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-fru-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <a
                  href={`mailto:${STORE_INFO.contact.email}`}
                  className="text-fru-purple hover:underline"
                >
                  {STORE_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-fru-purple/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-fru-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <a
                  href={`tel:${STORE_INFO.contact.phone.replace(/\s/g, "")}`}
                  className="text-fru-purple hover:underline"
                >
                  {STORE_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white shadow-sm min-h-[300px]">
            {mapLoaded ? (
              <iframe
                title="Google Maps"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center bg-fru-dark/5 p-6 text-center">
                <svg className="w-12 h-12 text-fru-dark/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm text-fru-dark/50 mb-4">{t("mapNotice")}</p>
                <button
                  onClick={() => setMapLoaded(true)}
                  className="px-6 py-2.5 bg-fru-purple text-white rounded-full font-heading text-sm font-semibold hover:bg-fru-purple-light transition-colors"
                >
                  {t("loadMap")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
