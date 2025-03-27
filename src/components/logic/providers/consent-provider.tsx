"use client";

import React, { createContext, useEffect } from "react";
import Cookies from "js-cookie";

interface ConsentContextType {
  consent: boolean;
  setConsent: (consent: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType>(
  {} as ConsentContextType,
);

export const CONSENT_COOKIE_NAME = "consent_given";

export const ConsentProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [consent, setConsent] = React.useState(false);

  useEffect(() => {
    setConsent(Cookies.get(CONSENT_COOKIE_NAME) === "true");
  }, []);

  const handleConsent = (newConsent: boolean) => {
    Cookies.set(CONSENT_COOKIE_NAME, newConsent.toString());
    setConsent(newConsent);
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent: handleConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsentGiven = () => {
  const context = React.useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }

  return context.consent;
};

export const useSetConsent = () => {
  const context = React.useContext(ConsentContext);

  if (!context) {
    throw new Error("useSetConsent must be used within a ConsentProvider");
  }

  return context.setConsent;
};
