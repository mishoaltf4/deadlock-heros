import Link from "next/link"
import { Hero } from "./hero"

export type HeroType = {
    id: number,
    name: string,
    imageURL: string,
}

export const heroData: HeroType[] = [
        {
            id: 1,
            name: "abrams",
            imageURL: "https://cdn.deadlock.wiki/Abrams_card.png",
        },
        {
            id: 2,
            name: "Apollo",
            imageURL: "https://cdn.deadlock.wiki/Apollo_card.png"
        },
        {
            id: 3,
            name: "Baba",
            imageURL: "https://cdn.deadlock.wiki/Baba_card.png"
        },
    ]

export const HeroList = () => {

    return (
        <>
            <div style={{ display: "flex", gap: 16 }}>
                {heroData.map((hero) => (
                    <Link key={hero.id} href={`/hero/${hero.id}`}><Hero hero={hero} /></Link>
                ))}
            </div>

        </>
    )
}