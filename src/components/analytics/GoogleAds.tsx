"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import {
  CONSENT_EVENT,
  getStoredConsent,
  type ConsentValue,
} from "@/lib/consent";
import { GOOGLE_ADS } from "@/lib/constants";

// The Google Ads tag is only rendered after the visitor grants marketing
// consent. Until then nothing loads and no data reaches Google (DSGVO opt-in).
export default function GoogleAds() {
  const pathname = usePathname();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    setGranted(getStoredConsent() === "granted");

    const handler = (event: Event) => {
      const value = (event as CustomEvent<ConsentValue>).detail;
      setGranted(value === "granted");
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!granted) return null;

  // Ad clicks land on the home page, so that is where we count the page-view
  // conversion. Google de-duplicates repeat views per click on its side.
  const isHome = pathname === "/";

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS.id}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
          });
          gtag('config', '${GOOGLE_ADS.id}');
          ${
            isHome
              ? `gtag('event', 'conversion', {
            'send_to': '${GOOGLE_ADS.id}/${GOOGLE_ADS.conversionLabel}',
            'value': 1.0,
            'currency': 'EUR'
          });`
              : ""
          }
        `}
      </Script>
    </>
  );
}
