import { Hero } from "@/app/components/hero";
import { heroData } from "@/app/components/hero-list";
import { notFound } from "next/navigation";

export async function HeroDetails({
  params,
}: Pick<PageProps<"/hero/[id]">, "params">) {
  const { id } = await params;
  const hero = heroData.find((h) => h.id === Number(id));

  if (!hero) notFound();

  return <Hero hero={hero}/>;
}
