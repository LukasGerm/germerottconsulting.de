import { AngledSection } from "@/components/ui/sections/angled-section";
import { ComputerPictureSection } from "@/components/ui/sections/computer-picture-section";
import { HeroSection } from "@/components/ui/sections/hero-section";
import { ServicesUsps, ServicesUsp } from "@/components/ui/services-usps";
import { Title } from "@/components/ui/title";
import AuditPicture from "./assets/audit.jpg";
import MonitoringPicture from "./assets/monitoring.jpeg";
import PerformancePicture from "./assets/performance.jpeg";
import SchulungPicture from "./assets/schulung.jpeg";
import { CalendlyWidget } from "@/components/logic/calendly-widget";
import { HomeUsp, USP } from "@/components/ui/home-usp";
import SearchIcon from "../assets/icons/search.svg";
import TachometerIcon from "../assets/icons/tachometer-alt.svg";
import ChartIcon from "../assets/icons/chart-line.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | Germerott Performance Consulting",
  description:
    "Entdecken Sie unser Angebot: Performance-Audits, Optimierungen, Monitoring und Workshops. Wir steigern dauerhaft die Geschwindigkeit Ihrer Webanwendungen.",
  openGraph: {
    title: "Leistungen | Germerott Performance Consulting",
    description:
      "Unser Portfolio rund um Web-Performance: Audit, Umsetzung, Monitoring und Schulungen für effiziente und schnelle Websites.",
    url: "https://germerottconsulting.de/leistungen",
    images: [
      {
        url: "https://germerottconsulting.de/og?title=Leistungen",
        width: 1200,
        height: 630,
        alt: "Germerott Performance Consulting - Leistungen",
      },
    ],
    siteName: "Germerott Performance Consulting",
    locale: "de_DE",
    type: "article",
  },
};

const usps: ServicesUsp[] = [
  {
    title: "Performance Audit",
    body: (
      <>
        <p>
          Wir starten mit einem umfassenden <b>Performance Audit</b>, um alle
          relevanten Ladezeiten und Engpässe Ihrer Webanwendung zu analysieren.
          Dabei nutzen wir <b>bewährte Tools</b> wie Lighthouse, WebPageTest und
          RumVision um fundierte Messwerte zu erhalten.
        </p>
        <p>
          Auf Basis dieser Daten erstellen wir eine <b>detaillierte Roadmap</b>{" "}
          mit konkreten Handlungsempfehlungen, um Ihre Website deutlich zu
          beschleunigen. Das Resultat: eine bessere <b>User Experience</b>,
          höhere Conversion Rates und eine klar erkennbare Leistungssteigerung.
        </p>
      </>
    ),
    cta: "Kostenloses Erstgespräch vereinbaren",
    image: AuditPicture,
  },
  {
    title: "Performance-Optimierung & Umsetzung",
    body: (
      <>
        <p>
          In dieser Phase realisieren wir gezielte{" "}
          <b>Performance-Optimierungen</b>, etwa durch Code-Splitting,
          Bildkomprimierung oder das Reduzieren unnötiger Skripte. Dabei achten
          wir stets darauf, dass sowohl <b>Frontend</b> als auch Backend
          reibungslos zusammenspielen.
        </p>
        <p>
          Wir integrieren <b>Best Practices</b> und moderne Technologien, um
          Ladezeiten nachhaltig zu senken. Auf diese Weise wird Ihre Anwendung
          nicht nur schneller, sondern auch robuster für zukünftige
          Herausforderungen.
        </p>
      </>
    ),
    cta: "Kostenloses Erstgespräch vereinbaren",
    image: PerformancePicture,
  },
  {
    title: "Monitoring & kontinuierliche Betreuung",
    body: (
      <>
        <p>
          Nach der Umsetzung behalten wir die <b>Web-Performance</b> dauerhaft
          im Blick und reagieren frühzeitig auf Veränderungen. Hierbei setzen
          wir auf proaktive <b>Monitoring-Tools</b>, damit potenzielle Engpässe
          schon vor dem Auftreten gelöst werden können.
        </p>
        <p>
          Regelmäßige Berichte und <b>Performance-Checks</b> stellen sicher,
          dass Ihr System stets auf optimalem Niveau läuft. So profitieren Sie
          langfristig von stabilen Ladezeiten und einer konsistent hochwertigen
          Nutzererfahrung.
        </p>
      </>
    ),
    cta: "Kostenloses Erstgespräch vereinbaren",
    image: MonitoringPicture,
  },
  {
    title: "Workshops & Schulungen",
    body: (
      <>
        <p>
          In unseren <b>Workshops</b> und <b>Schulungen</b> vermitteln wir
          praxisnah, wie Sie typische Performance-Fallen vermeiden und moderne
          Optimierungsstrategien umsetzen. Ihr Team erhält so das Rüstzeug, um
          eigenständig auf hohem Niveau entwickeln zu können.
        </p>
        <p>
          Ob Einführung in <b>Core Web Vitals</b> oder tiefgehendes Debugging –
          wir passen die Inhalte an Ihre individuellen Bedürfnisse an. Durch
          interaktive Übungen sorgen wir dafür, dass das gelernte Wissen direkt
          im Projektalltag anwendbar ist.
        </p>
      </>
    ),
    cta: "Kostenloses Erstgespräch vereinbaren",
    image: SchulungPicture,
  },
];

const advantages: USP[] = [
  {
    title: "Schnellere Ladezeiten",
    description:
      "Optimierte Ladezeiten verbessern die Nutzererfahrung und verhindern, dass Besucher abspringen. Je schneller deine Seite lädt, desto mehr Besucher bleiben und interagieren.",
    icon: TachometerIcon,
  },
  {
    title: "Bessere Conversion-Rate",
    description:
      "Eine schnelle Website steigert die Conversion-Rate, da Nutzer schneller handeln können, ohne durch lange Ladezeiten frustriert zu werden.",
    icon: ChartIcon,
  },
  {
    title: "Stärkeres SEO-Ranking",
    description:
      "Google belohnt schnelle Websites mit besseren Rankings. Durch Performance-Optimierung wird deine Seite besser indexiert und erscheint weiter oben in den Suchergebnissen.",
    icon: SearchIcon,
  },
];

export default function Leistungen() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection>
        <Title variant="h1">
          Unser Angebot <span className="text-primary">für Sie</span>.
        </Title>
      </HeroSection>
      <AngledSection
        variant="gradient"
        title="Performance-Optimierung für Ihre Website"
      >
        <p className="text-white">
          Eine schnelle Website ist entscheidend für Ihren Erfolg! Optimierte
          Ladezeiten verbessern nicht nur die Nutzererfahrung, sondern steigern
          auch Ihre Conversion Rate, stärken die Kundenbindung und sorgen für
          ein besseres SEO-Ranking. Mit gezielten Performance-Optimierungen
          mache ich Ihre Webanwendung schneller, effizienter und erfolgreicher.
          Lassen Sie Ihre Website nicht ausbremsen – jetzt optimieren
        </p>
      </AngledSection>
      <ComputerPictureSection />
      <AngledSection variant="grey" title="Unsere Leistungen">
        <ServicesUsps usps={usps} />
      </AngledSection>
      <section className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8 text-center py-32 max-w-screen-lg px-8 items-center">
          <div>
            <Title variant="h2">Ihre Vorteile</Title>
            <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {advantages.map((advantage) => (
              <HomeUsp
                key={advantage.title}
                usp={advantage}
                color="text-black"
              />
            ))}
          </div>
        </div>
      </section>
      <CalendlyWidget variant="grey" />
    </main>
  );
}
