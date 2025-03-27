import { cn } from "@/lib/utils";
import { Title } from "../title";
import styles from "./angled-section.module.css";

interface AngledSectionProps {
  title: string;
  variant: "gradient" | "grey";
}

export const AngledSection = (
  props: React.PropsWithChildren<AngledSectionProps>,
) => {
  const { title, children, variant } = props;
  return (
    <section
      className={cn(
        styles["angled-section"],
        "flex justify-center items-center w-full",
        variant === "gradient" ? styles["linear-gradient"] : "bg-card",
      )}
    >
      <div className="flex flex-col gap-8 text-center py-32 max-w-screen-lg px-8">
        <div>
          <Title
            variant="h2"
            className={variant === "gradient" ? "text-white" : "text-black"}
          >
            {title}
          </Title>
          <hr
            className={cn(
              "w-24 h-2  mx-auto mt-4 mb-4 border-t-2",
              variant === "gradient"
                ? "bg-transparent"
                : "bg-card border-primary",
            )}
          />
        </div>
        {children}
      </div>
    </section>
  );
};
