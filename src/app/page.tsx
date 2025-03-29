import { Button } from "@/components/ui/button";
import Link from "next/link";

import RocketIcon from "./assets/icons/rocket.svg";
import SmileIcon from "./assets/icons/smile.svg";
import ClipboardIcon from "./assets/icons/clipboard.svg";
import ChartLineIcon from "./assets/icons/chart-line.svg";
import ChartPieIcon from "./assets/icons/chart-pie.svg";
import CogsIgon from "./assets/icons/cogs.svg";
import ChalkboardTeacherIcon from "./assets/icons/chalkboard-teacher.svg";
import Profile from "./assets/profile.jpeg";
import { HomeUsp, USP } from "@/components/ui/home-usp";
import { paths } from "@/utils/paths";
import Image from "next/image";
import { CalendlyWidget } from "@/components/logic/calendly-widget";
import { HeroSection } from "@/components/ui/sections/hero-section";
import { Title } from "@/components/ui/title";
import { ComputerPictureSection } from "@/components/ui/sections/computer-picture-section";
import { AngledSection } from "@/components/ui/sections/angled-section";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Startseite | Germerott Performance Consulting",
  description:
    "Beschleunigen Sie Ihre Web-App und steigern Sie die Nutzerzufriedenheit. Germerott Performance Consulting ist Ihr Experte für nachhaltige Performance-Optimierung im Frontend.",
  openGraph: {
    title: "Startseite | Germerott Performance Consulting",
    description:
      "Maximale Geschwindigkeit für moderne Web-Anwendungen: Entdecken Sie unsere Performance-Strategien für reaktive Frontends und zufriedene User.",
    url: "https://germerottconsulting.de/",
    images: [
      {
        url: "https://germerottconsulting.de/og?title=Startseite",
        width: 1920,
        height: 1080,
        alt: "Germerott Performance Consulting - Startseite",
      },
    ],
    siteName: "Germerott Performance Consulting",
    locale: "de_DE",
    type: "website",
  },
};

const usps: USP[] = [
  {
    title: "Schnellere Ladezeiten",
    description:
      "Unsere Optimierungen reduzieren Ladezeiten und verbessern die Interaktivität Ihrer Webapp. Das sorgt für eine bessere User Experience & zufriedene Besucher.",
    icon: RocketIcon,
  },
  {
    title: "Mehr Nutzerzufriedenheit",
    description:
      "Schnelles Surfen, weniger Frust. Ihre User bleiben länger und kommen gerne wieder.",
    icon: SmileIcon,
  },
  {
    title: "Nachweisbarer Erfolg",
    description:
      "Mit datenbasierten Analysen und Case Studies zeigen wir Ihnen schwarz auf weiß, wie sich Ihre Performance verbessert.",
    icon: ClipboardIcon,
  },
];

const services: USP[] = [
  {
    title: "Performance-Audit",
    description:
      "Durch ein gründliches Performance-Audit enthüllen wir Ladezeit-Bremsen und steigern SEO sowie Nutzererlebnis.",
    icon: ChartLineIcon,
  },
  {
    title: "Performance-Optimierung & Umsetzung",
    description:
      "Durch gezielte Performance-Optimierung und Umsetzung reduzieren wir Ladezeiten, stärken SEO und erhöhen die Conversion-Rate.",
    icon: CogsIgon,
  },
  {
    title: "Monitoring & kontinuierliche Betreuung",
    description:
      "Regelmäßiges Monitoring sichert stabile Ladezeiten, erkennt Engpässe früh und sorgt für durchgehend optimale Performance.",
    icon: ChartPieIcon,
  },
  {
    title: "Workshops & Schulungen",
    description:
      "In praxisnahen Workshops und Schulungen vermitteln wir das Know-how für nachhaltige Performance und erfolgreiches Web-Optimieren.",
    icon: ChalkboardTeacherIcon,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection>
        <Title variant="h1">
          Leistungssprung für <span className="text-primary">Ihre Webapp:</span>{" "}
          Frontend-Performance & Speed-Optimierung
        </Title>
        <p>
          Wir optimieren Ihre Frontend-Performance, reduziere Ladezeiten und
          sorge für eine reibungslose Nutzererfahrung. Durch gezielte
          Optimierungen steigeren wir Ihre Conversion Rate und machen Ihre
          Webapp schneller, effizienter und erfolgreicher.
        </p>
        <div>
          <Button asChild>
            <Link href="#calendly">Kostenloses Erstgespräch vereinbaren</Link>
          </Button>
        </div>
      </HeroSection>

      <AngledSection
        title="Blitzschnell, leistungsstark, konversionsstark!"
        variant="gradient"
      >
        <div className="flex justify-between gap-8 flex-col md:flex-row">
          {usps.map((usp) => (
            <HomeUsp key={usp.title} usp={usp} color="text-white" />
          ))}
        </div>
        <div>
          <Button asChild variant="outline">
            <Link href="#calendly">Jetzt Webapp beschleunigen</Link>
          </Button>
        </div>
      </AngledSection>

      <ComputerPictureSection />
      <AngledSection variant="grey" title="Unser Angebot für Sie">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <HomeUsp key={service.title} usp={service} color="text-black" />
          ))}
        </div>
        <div>
          <Button asChild>
            <Link href="#calendly">Jetzt Webapp beschleunigen</Link>
          </Button>
        </div>
      </AngledSection>

      <section className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8 text-center py-32 max-w-screen-sm px-8 items-center">
          <Image
            src={Profile}
            alt="Lukas"
            width={200}
            height={200}
            className="rounded-full grayscale"
          />
          <div>
            <Title variant="h2">Hey, ich bin Lukas</Title>
            <hr
              className={cn(
                "w-24 h-2  mx-auto mt-4 mb-4 border-t-2",

                "border-primary",
              )}
            />
          </div>
          <p>
            Ich bin Lukas Germerott, ein leidenschaftlicher Frontend Performance
            Experte. Nach Jahren als Frontend-Entwickler spezialisiere ich mich
            auf Speed-Optimierung, gründliche Audits und nachhaltige
            Verbesserungen. Mit modernen Tools und stetiger Weiterbildung
            verbessere ich digitale Produkte, steigere Conversion und
            Nutzerzufriedenheit und teile mein Wissen in Workshops. Mein Fokus
            liegt auf messbaren Ergebnissen und kundenspezifischen
            Lösungsansätzen.
          </p>
          <div>
            <Button asChild>
              <Link href={paths.about.path}>Erfahren Sie mehr über mich</Link>
            </Button>
          </div>
        </div>
      </section>
      <CalendlyWidget variant="grey" />
    </main>
  );
}
