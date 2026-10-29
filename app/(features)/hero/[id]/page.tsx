import { heroData } from "@/app/components/hero-list";
import { Suspense } from "react";
import { HeroDetails } from "./hero-details";

export function generateStaticParams() {
  return heroData.map((hero) => ({ id: String(hero.id) }));
}

export default function HeroPage({ params }: PageProps<"/hero/[id]">) {
  return (
    <Suspense fallback={<h1>Loading…</h1>}>
      <HeroDetails params={params} />
    </Suspense>
  );
}
