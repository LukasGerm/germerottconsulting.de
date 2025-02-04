import { HeroSection } from "@/components/ui/sections/hero-section";
import { Title } from "@/components/ui/title";
import type { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Impressum | Germerott Performance Consulting",
  description:
    "Angaben gemäß § 5 TMG über Germerott Performance Consulting. Kontaktinformationen und rechtliche Hinweise finden Sie hier.",
  openGraph: {
    title: "Impressum | Germerott Performance Consulting",
    description:
      "Rechtliche Angaben, Kontakt und weitere Informationen zu Germerott Performance Consulting.",
    url: "https://www.germerottconsulting.de/impressum",
    images: [
      {
        url: "https://www.germerottconsulting.de/og?title=Impressum",
        width: 1200,
        height: 630,
        alt: "Germerott Performance Consulting - Impressum",
      },
    ],
    siteName: "Germerott Performance Consulting",
    locale: "de_DE",
    type: "article",
  },
};

const Impressum: NextPage = () => {
  return (
    <div>
      <HeroSection>
        <Title variant="h1">Impressum</Title>
      </HeroSection>
      <div className="max-w-screen-lg pt-8 pb-20 px-4 mx-auto flex flex-col gap-2">
        <p>Lukas Germerott</p>
        <p>Totenhäuser Str. 29</p>
        <p>37434 Gieboldehausen</p>
        <p>Deutschland</p>

        <br />

        <p>Tel.: 015161228182</p>
        <p>E-Mail: lukas@lukasgermerott.de</p>

        <br />

        <p>Umsatzsteuerbefreit (Kleinunternehmerregelung)</p>

        <br />

        <p>
          Verantwortliche/r i.S.d. § 18 Abs. 2 MStV: <br />
          Lukas Germerott, Totenhäuser Str. 29, 37434 Gieboldehausen
        </p>

        <br />

        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
          <a
            href="https://ec.europa.eu/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/odr
          </a>
        </p>

        <br />

        <p>
          Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
