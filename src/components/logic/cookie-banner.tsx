"use client";

import CookieConsent from "react-cookie-consent";
import {
  CONSENT_COOKIE_NAME,
  useConsentGiven,
  useSetConsent,
} from "./providers/consent-provider";
import Link from "next/link";
import {paths} from "@/utils/paths";

export const CookieBanner = () => {
  const setConsent = useSetConsent();
  const consentGiven = useConsentGiven();

  const handleAccept = () => {
    setConsent(true);
  };

  if (consentGiven) return null;

  return (
    <CookieConsent
      debug={process.env.NODE_ENV === "development"}
      location="bottom"
      buttonText="Akzeptieren"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      onAccept={handleAccept}
      cookieName={CONSENT_COOKIE_NAME}
    >
      Diese Website verwendet Cookies, um Ihnen ein besseres Erlebnis zu bieten.{" "}
      <Link className="font-bold" href={paths.privacy.path}>
        Datenschutzerklärung
      </Link>
    </CookieConsent>
  );
};
