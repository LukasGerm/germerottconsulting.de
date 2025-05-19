import Image from "next/image";
import ComputerBackgroundImage from "../assets/picture2-min.jpg"; // Adjusted path
import { cn } from "@/lib/utils";

export const ComputerPictureSection = () => {
  return (
    <section className={cn("relative w-full h-[50vh]")}>
      <Image
        src={ComputerBackgroundImage}
        alt="Decorative background image"
        layout="fill"
        objectFit="cover"
        quality={50}
        className="grayscale" // Apply grayscale filter
      />
    </section>
  );
};
