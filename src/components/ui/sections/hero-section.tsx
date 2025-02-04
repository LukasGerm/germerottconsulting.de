import { cn } from "@/lib/utils";
import styles from "./hero-section.module.css";

export const HeroSection = (props: React.PropsWithChildren) => {
  return (
    <section
      className={cn(
        "flex justify-center items-center w-full z-0 pointer-events-none",
        styles["entry-section"]
      )}
    >
      <div className="flex flex-col gap-8 text-center py-56 max-w-screen-lg px-8 z-10">
        {props.children}
      </div>
    </section>
  );
};
