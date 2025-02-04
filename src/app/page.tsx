import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
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

const usps: USP[] = [
  {
    title: "Schnellere Ladezeiten",
    description:
      "Unsere Optimierungen reduzieren Ladezeiten drastisch. Das sorgt für eine bessere User Experience & zufriedene Besucher.",
    icon: RocketIcon,
  },
  {
    title: "Mehr Nutzerzufriedenheit",
    description:
      "Schnelles Surfen, weniger Frust. Deine User bleiben länger und kommen gerne wieder.",
    icon: SmileIcon,
  },
  {
    title: "Nachweisbarer Erfolg",
    description:
      "Mit datenbasierten Analysen und Case Studies zeigen wir dir schwarz auf weiß, wie sich deine Performance verbessert.",
    icon: ClipboardIcon,
  },
];

const services: USP[] = [
  {
    title: "Performance-Audit",
    description:
      "Durch gezielte Optimierungen der Ladegeschwindigkeit wird die Performance deiner Website verbessert, was zu kürzeren Ladezeiten und einer insgesamt besseren Nutzererfahrung führt.",
    icon: ChartLineIcon,
  },
  {
    title: "Performance-Optimierung & Umsetzung",
    description:
      "Durch gezielte Optimierungen der Ladegeschwindigkeit wird die Performance deiner Website verbessert, was zu kürzeren Ladezeiten und einer insgesamt besseren Nutzererfahrung führt.",
    icon: CogsIgon,
  },
  {
    title: "Monitoring & kontinuierliche Betreuung",
    description:
      "Durch gezielte Optimierungen der Ladegeschwindigkeit wird die Performance deiner Website verbessert, was zu kürzeren Ladezeiten und einer insgesamt besseren Nutzererfahrung führt.",
    icon: ChartPieIcon,
  },
  {
    title: "Workshops & Schulungen",
    description:
      "Durch gezielte Optimierungen der Ladegeschwindigkeit wird die Performance deiner Website verbessert, was zu kürzeren Ladezeiten und einer insgesamt besseren Nutzererfahrung führt.",
    icon: ChalkboardTeacherIcon,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <section
        className={cn(
          "flex justify-center items-center w-full z-0",
          styles["entry-section"]
        )}
      >
        <div className="flex flex-col gap-8 text-center py-56 max-w-screen-lg px-8 z-10">
          <h1 className="font-semibold text-6xl">
            Leistungssprung für{" "}
            <span className="text-primary">Ihre Webapp:</span>{" "}
            Frontend-Performance & Speed-Optimierung
          </h1>
          <p>
            Wir optimieren Ihre Frontend-Performance, reduziere Ladezeiten und
            sorge für eine reibungslose Nutzererfahrung. Durch gezielte
            Optimierungen steigeren wir Ihre Conversion Rate und macheb Ihre
            Website schneller, effizienter und erfolgreicher.
          </p>
          <div>
            <Button asChild>
              <Link href="#calendly">Kostenloses Erstgespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
      <section
        className={cn(
          styles["angled-section"],
          "flex justify-center items-center w-full",
          styles["linear-gradient"]
        )}
      >
        <div className="flex flex-col gap-8 text-center py-32 max-w-screen-lg px-8">
          <div>
            <h2 className="font-bold text-4xl text-white">
              Blitzschnell, leistungsstark, konversionsstark!
            </h2>
            <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
          </div>
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
        </div>
      </section>
      <section className={styles["computer-picture"]} />
      <section
        className={cn(
          styles["angled-section"],
          "bg-card w-full flex justify-center items-center"
        )}
      >
        <div className="flex flex-col gap-8 text-center py-32 max-w-screen-lg px-8">
          <div>
            <h2 className="font-bold text-4xl">Unser Angebot für dich</h2>
            <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
          </div>
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
        </div>
      </section>
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
            <h2 className="font-bold text-4xl">Hey, ich bin Lukas</h2>
            <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div>
            <Button asChild>
              <Link href={paths.about}>Erfahren Sie mehr über mich</Link>
            </Button>
          </div>
        </div>
      </section>
      <CalendlyWidget />
    </main>
  );
}
