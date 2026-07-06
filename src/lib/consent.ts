// Client-side marketing-consent state, shared between the cookie banner
// (CookieConsent) and the Google Ads tag (GoogleAds). The tag is only loaded
// once consent is "granted"; nothing is sent to Google before that.

export const CONSENT_KEY = "fru-consent-marketing";
export const CONSENT_EVENT = "fru-consent-change";

export type ConsentValue = "granted" | "denied";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
  // Let the GoogleAds component react immediately, without a page reload.
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
