import Image from "next/image";

import LogoBlue from "../../assets/logo_blue.svg";
import { HeaderNavigation } from "./header-navigation";
import Link from "next/link";
import { paths } from "@/utils/paths";

export const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="flex justify-between items-center py-8 px-8 md:py-14 md:px-20">
        <Link href={paths.home.path}>
          <Image
            height={150}
            width={200}
            src={LogoBlue}
            alt="Germerott Consulting Logo"
            priority
          />
        </Link>

        <HeaderNavigation />
      </div>
    </header>
  );
};
