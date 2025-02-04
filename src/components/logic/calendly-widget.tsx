import { cn } from "@/lib/utils";
import styles from "./calendly-widget.module.css";
import Script from "next/script";
export const CalendlyWidget = (props: { variant: "grey" | "white" }) => {
  const { variant } = props;
  return (
    <section
      className={cn(
        cn(
          styles["angled-section"],
          "flex justify-center items-center w-full flex-col",
          variant === "grey" ? "bg-card" : "bg-white"
        )
      )}
      id="calendly"
    >
      <div className="flex flex-col text-center pt-32 pb-4 max-w-screen-lg px-8">
        <h2 className="font-bold text-4xl">Jetzt direkt Termin buchen</h2>
        <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
      </div>
      <div
        className={cn("calendly-inline-widget", styles["calendly-widget"])}
        data-url="https://calendly.com/lukas-lukasgermerott/30min?background_color=ffffff&text_color=000000&primary_color=1e3a5f"
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
    </section>
  );
};
