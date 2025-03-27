import Image, { StaticImageData } from "next/image";
import { Title } from "./title";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ServicesUsp {
  title: string;
  body: React.ReactElement;
  cta: string;
  image: StaticImageData;
}

interface ServicesUspProps {
  usps: ServicesUsp[];
}

const ServicesUsp = (
  props: ServicesUsp & { reverse: boolean; showVerticalDevider: boolean },
) => {
  const { title, body, cta, image, reverse, showVerticalDevider } = props;
  return (
    <div>
      <div className={cn("flex gap-8", reverse && "flex-row-reverse")}>
        <Image
          src={image.src}
          alt="title"
          width={400}
          height={300}
          className="rounded-lg flex-1 object-cover hidden md:block w-1/2"
        />
        <div className="text-left flex-1 flex flex-col gap-2">
          <Title variant="h3">{title}</Title>
          {body}
          <div>
            <Button asChild>
              <Link href="#calendly">{cta}</Link>
            </Button>
          </div>
        </div>
      </div>
      {showVerticalDevider && (
        <div className="flex justify-center items-center h-28 mt-8">
          <hr className="w-0.5 h-full bg-gray-300" />
        </div>
      )}
    </div>
  );
};

export const ServicesUsps = (props: ServicesUspProps) => {
  const { usps } = props;
  return (
    <div className="flex flex-col gap-8 pb-16">
      {usps.map((usp, i) => (
        <ServicesUsp
          key={i}
          {...usp}
          reverse={i % 2 === 0}
          showVerticalDevider={i !== usps.length - 1}
        />
      ))}
    </div>
  );
};
