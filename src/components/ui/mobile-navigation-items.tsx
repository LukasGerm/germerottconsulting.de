"use client";

import { paths } from "@/utils/paths";
import { usePathname } from "next/navigation";
import { DrawerClose } from "./drawer";
import Link from "next/link";

export const MobileNavigationItems = () => {
  const pathname = usePathname();
  return (
    <>
      {Object.keys(paths).map((path) => {
        const { path: href, label } = paths[path];
        return (
          <DrawerClose key={path} asChild>
            <Link
              href={href}
              className={pathname === href ? "text-primary" : undefined}
            >
              {label}
            </Link>
          </DrawerClose>
        );
      })}
    </>
  );
};
