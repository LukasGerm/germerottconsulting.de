import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "./title";

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
      <Title variant="h3">{usp.title}</Title>
      <p>{usp.description}</p>
    </div>
  );
};
