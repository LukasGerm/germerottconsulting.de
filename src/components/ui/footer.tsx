import { cn } from "@/lib/utils";
import styles from "./footer.module.css";
import { paths } from "@/utils/paths";
import Link from "next/link";
import LogoWhite from "../../assets/logo_white.svg";
import Image from "next/image";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export const Footer = () => {
  return (
    <footer className={cn(styles.footer, "text-white text-xl")}>
      <div className="flex flex-col md:flex-row gap-8 w-full pt-32 pb-16 px-8">
        <div className="flex-1">
          <Image width={150} src={LogoWhite} alt="Germerott Consulting Logo" />
        </div>
        <div className="flex-1">
          <div>
            <h4>Seiten</h4>
            <hr className="w-5 h-2 bg-primary mt-2 mb-2 border-t-2" />
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <Link href={paths.home.path}>Startseite</Link>
            <Link href={paths.about.path}>Über uns</Link>
            <Link href={paths.services.path}>Unsere Services</Link>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <h4>Rechtliches</h4>
            <hr className="w-5 h-2 bg-primary mt-2 mb-4 border-t-2" />
            <div className="flex flex-col gap-2 text-lg">
              <Link href={paths.imprint.path}>Impressum</Link>
              <Link href={paths.privacy.path}>Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <h4>Kontakt</h4>
            <hr className="w-5 h-2 bg-primary mt-2 mb-4 border-t-2" />
            <div className="flex flex-col gap-2 text-lg">
              <div className="flex gap-2 items-center">
                <DevicePhoneMobileIcon className="w-4 h-4" />
                <p>015161228182</p>
              </div>
              <div className="flex gap-2 items-center">
                <EnvelopeIcon className="w-4 h-4" />
                <p>lukas@lukasgermerott.de</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-lg">
          © {new Date().getFullYear()} Germerott Consulting. Alle Rechte
          vorbehalten.
        </p>
      </div>
    </footer>
  );
};
