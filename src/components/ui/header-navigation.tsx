"use client";
import Link from "next/link";
import { paths } from "@/utils/paths";
import { usePathname } from "next/navigation";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4 uppercase text-lg font-semibold">
      <Link
        href={paths.home}
        className={pathname === paths.home ? "text-primary" : undefined}
      >
        Startseite
      </Link>
      <Link
        href={paths.services}
        className={pathname === paths.services ? "text-primary" : undefined}
      >
        Leistungen
      </Link>
      <Link
        href={paths.about}
        className={pathname === paths.about ? "text-primary" : undefined}
      >
        Über Mich
      </Link>
    </div>
  );
};
