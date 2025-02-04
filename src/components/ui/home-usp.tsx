import { cn } from "@/lib/utils";
import Image from "next/image";

export interface USP {
  title: string;
  description: string;
  icon: string;
}

interface HomeUspProps {
  usp: USP;
  color: string;
}

export const HomeUsp = (props: HomeUspProps) => {
  const { usp, color } = props;

  return (
    <div className={cn("flex flex-col items-center gap-4 flex-1", color)}>
      <Image src={usp.icon} alt={usp.title} />
      <h3 className="text-2xl font-bold">{usp.title}</h3>
      <p>{usp.description}</p>
    </div>
  );
};
