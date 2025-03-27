import { HeroSection } from "@/components/ui/sections/hero-section";
import { Title } from "@/components/ui/title";

export default function Success() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection>
        <Title variant="h1">Vielen Dank für Ihre Anfrage!</Title>
        <Title variant="h3">Sie erhalten eine Bestätigung per E-Mail</Title>
      </HeroSection>
    </main>
  );
}
