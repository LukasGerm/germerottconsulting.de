"use client";

import { cn } from "@/lib/utils";
import styles from "./calendly-widget.module.css";

import { InlineWidget } from "react-calendly";
import { useConsentGiven } from "./providers/consent-provider";

export const CalendlyWidget = (props: { variant: "grey" | "white" }) => {
  const { variant } = props;

  const consentGiven = useConsentGiven();

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
      <div className="pb-36 w-full">
        <InlineWidget
          styles={{
            width: "100%",
            height: "1000px",
          }}
          url={
            "https://calendly.com/lukas-lukasgermerott/30min?background_color=ffffff&text_color=000000&primary_color=1e3a5f" +
            (consentGiven ? "&hide_gdpr_banner=1" : "")
          }
        />
      </div>
    </section>
  );
};
