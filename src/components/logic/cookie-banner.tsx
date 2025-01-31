"use client";

import CookieConsent from "react-cookie-consent";
import { useSetConsent } from "./providers/consent-provider";

export const CookieBanner = () => {
  const setConsent = useSetConsent();

  const handleAccept = () => {
    setConsent(true);
  };

  return (
    <CookieConsent
      debug={process.env.NODE_ENV === "development"}
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      onAccept={handleAccept}
    >
      Diese Website verwendet Cookies, um Ihnen ein besseres Erlebnis zu bieten.
    </CookieConsent>
  );
};
