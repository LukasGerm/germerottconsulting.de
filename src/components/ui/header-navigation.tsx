"use client";
import Link from "next/link";
import { headerPaths } from "@/utils/paths";
import { usePathname } from "next/navigation";

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="gap-4 uppercase text-lg font-semibold hidden md:flex">
      {Object.keys(headerPaths).map((path) => {
        const { path: href, label } = headerPaths[path];
        return (
          <Link
            key={path}
            href={href}
            className={pathname === href ? "text-primary" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};
