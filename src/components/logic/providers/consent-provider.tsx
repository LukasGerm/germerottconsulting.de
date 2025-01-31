"use client";

import React, { createContext } from "react";

interface ConsentContextType {
  consent: boolean;
  setConsent: (consent: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType>(
  {} as ConsentContextType,
);

export const ConsentProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [consent, setConsent] = React.useState(false);

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
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
