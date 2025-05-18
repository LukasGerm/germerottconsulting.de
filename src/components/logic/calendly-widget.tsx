"use client";

import { cn } from "@/lib/utils";
import styles from "./calendly-widget.module.css";

import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useConsentGiven } from "./providers/consent-provider";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CalendlyInlineWidgetView = (props: { consentGiven: boolean | null }) => {
  const { consentGiven } = props;
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: () => {
      router.push("/success");
    },
  });

  return (
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
  );
};

export const CalendlyWidget = (props: { variant: "grey" | "white" }) => {
  const { variant } = props;
  const [showCalendly, setShowCalendly] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const consentGiven = useConsentGiven();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCalendly(true);
          if (headlineRef.current) {
            observer.unobserve(headlineRef.current);
          }
        }
      },
      {
        rootMargin: "400px",
        threshold: 0.1,
      },
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <section
      className={cn(
        cn(
          styles["angled-section"],
          "flex justify-center items-center w-full flex-col",
          variant === "grey" ? "bg-card" : "bg-white",
        ),
      )}
      id="calendly"
    >
      <div className="flex flex-col text-center pt-32 pb-4 max-w-screen-lg px-8">
        <h2 ref={headlineRef} className="font-bold text-4xl">
          Jetzt direkt Termin buchen
        </h2>
        <hr className="w-24 h-2 bg-primary mx-auto mt-4 mb-4 border-t-2" />
      </div>
      <div className="pb-36 w-full min-h-[1000px]">
        {showCalendly && (
          <CalendlyInlineWidgetView consentGiven={consentGiven} />
        )}
      </div>
    </section>
  );
};
