import ExhibitionFields from "@/components/ExhibitionFields";
import LandingHero from "@/components/LandingHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingHero />
      <ExhibitionFields />
    </main>
  );
}
