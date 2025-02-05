import { AngledSection } from "@/components/ui/sections/angled-section";
import { HeroSection } from "@/components/ui/sections/hero-section";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import Profile from "../assets/profile.jpeg";
import { CalendlyWidget } from "@/components/logic/calendly-widget";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Über Uns | Germerott Performance Consulting",
  description:
    "Erfahren Sie mehr über unsere Leidenschaft für Frontend-Performance. Wir stellen uns vor und zeigen, wie wir Webseiten schneller und effizienter machen.",
  openGraph: {
    title: "Über Uns | Germerott Performance Consulting",
    description:
      "Lernen Sie unser Team kennen und entdecken Sie, warum wir für nachhaltige Performance-Optimierung brennen.",
    url: "https://germerottconsulting.de/ueber-uns",
    images: [
      {
        url: "https://germerottconsulting.de/og?title=About",
        width: 1920,
        height: 1080,
        alt: "Germerott Performance Consulting - Über Uns",
      },
    ],
    siteName: "Germerott Performance Consulting",
    locale: "de_DE",
    type: "article",
  },
};

export default function About() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection>
        <Title variant="h1">
          Lernen Sie <span className="text-primary">uns</span> kennen.
        </Title>
      </HeroSection>
      <AngledSection
        title="Performance-Optimierung für Ihre Webanwendung"
        variant="gradient"
      >
        <p className="text-white">
          Hallo, ich wir sind <b>Germerott Performance Consulting</b>, und ich
          haben uns darauf spezialisiert, die <b>Performance von Webapps</b>,
          besonders React basierte, zu optimieren. Mit jahrelanger Erfahrung in
          der Softwareentwicklung helfen wir Unternehmen, ihre Webanwendungen
          schneller, benutzerfreundlicher und erfolgreicher zu machen. Unser
          Ziel ist es, Ihnen zu helfen, das <b>volle Potenzial</b> Ihrer
          Anwendung auszuschöpfen, indem wir gezielt Ladezeiten reduziere, die
          <b>Nutzererfahrung</b> verbessere und Ihre <b>Conversion-Rate</b>{" "}
          steigere.
        </p>
      </AngledSection>
      <section className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8 text-center py-32 max-w-screen-lg px-8 items-center">
          <Image
            src={Profile}
            alt="Lukas"
            width={200}
            height={200}
            className="rounded-full grayscale"
          />
          <div>
            <Title variant="h2">
              “Langsame Webanwendungen führen schnell zu Frustration, deshalb
              ist es wichtig, diese zu optimieren.”
            </Title>
            <hr
              className={cn(
                "w-24 h-2  mx-auto mt-4 mb-4 border-t-2",

                "border-primary"
              )}
            />{" "}
          </div>
          <p>Lukas Germerott – Germerott Performance Consulting</p>
        </div>
      </section>
      <AngledSection
        variant="grey"
        title="Warum Performance für mich der Schlüssel zum Erfolg istWarum Performance für mich der Schlüssel zum Erfolg ist"
      >
        <p>
          Performance ist für mich nicht nur ein technisches Detail – sie ist
          <b> der Schlüssel zu einer herausragenden Nutzererfahrung</b>. Eine
          schnelle Website sorgt dafür, dass Besucher schnell die gewünschten
          Informationen finden und mühelos durch die Seite navigieren können.
          Das führt zu{" "}
          <b>
            {" "}
            weniger Absprüngen, höherer Zufriedenheit und letztlich mehr
            Conversions
          </b>
          . In der heutigen schnelllebigen digitalen Welt entscheidet jede
          Sekunde, ob ein Nutzer bleibt oder geht. Deshalb setze ich alles
          daran, Webseiten nicht nur funktional, sondern blitzschnell und
          effizient zu machen.
        </p>
      </AngledSection>
      <CalendlyWidget variant="white" />
    </main>
  );
}
