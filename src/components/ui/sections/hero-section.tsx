import { cn } from "@/lib/utils";
import styles from "./hero-section.module.css";
import Image from "next/image";
import HeroBackgroundImage from "../assets/picture1-min.jpg"; // Adjusted path

export const HeroSection = (props: React.PropsWithChildren) => {
  return (
    <section
      className={cn(
        "flex justify-center items-center w-full z-0 relative", // Added relative
      )}
    >
      <Image
        src={HeroBackgroundImage}
        alt="Decorative background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-2]"
        priority
      />
      <div
        className={cn(
          "absolute inset-0 z-[-1]", // Overlay div
          styles["entry-section"], // Apply background color and blend mode from CSS module
        )}
      />
      <div className="flex flex-col gap-8 text-center py-56 max-w-screen-lg px-8 z-10">
        {props.children}
      </div>
    </section>
  );
};
