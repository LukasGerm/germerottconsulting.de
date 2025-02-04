import Image from "next/image";

import LogoBlue from "../../assets/logo_blue.svg";
import { HeaderNavigation } from "./header-navigation";

export const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="flex justify-between items-center py-8 px-8 md:py-14 md:px-20">
        <Image
          height={150}
          width={200}
          src={LogoBlue}
          alt="Germerott Consulting Logo"
        />

        <HeaderNavigation />
      </div>
    </header>
  );
};
