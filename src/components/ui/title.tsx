import { cn } from "@/lib/utils";

interface TitleProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Title = (props: React.PropsWithChildren<TitleProps>) => {
  const { variant, children, className } = props;

  let element: React.ReactElement | null = null;

  switch (variant) {
    case "h1":
      element = (
        <h1 className="font-semibold  text-4xl md:text-6xl">{children}</h1>
      );
      break;
    case "h2":
      element = <h2 className="font-bold text-3xl md:text-4xl">{children}</h2>;
      break;

    case "h3":
      element = <h3 className="text-xl md:text-2xl font-bold">{children}</h3>;
      break;

    case "h4":
      element = <h4>{children}</h4>;
      break;

    case "h5":
      element = <h5>{children}</h5>;
      break;

    case "h6":
      element = <h6>{children}</h6>;
      break;
  }

  return <span className={cn(className)}>{element}</span>;
};
