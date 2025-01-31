"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsentGiven } from "./providers/consent-provider";

export const GoogleTagManager = () => {
  const consentGiven = useConsentGiven();

  if (!consentGiven) return null;

  return (
    <>
      <GoogleAnalytics gaId="G-TSBJF4KMV5" />
    </>
  );
};
