import Image from "next/image"
import { HeroType } from "./hero-list"

export const Hero = ({ hero }: { hero: HeroType }) => {
    return (
        <div className="card w-70 h-95 relative">
            <Image
                src={hero.imageURL}
                alt={hero.name}
                width={280}
                height={380}
            />

            <h3 className="absolute inset-x-0  text-center bottom-0">{hero.name}</h3>
        </div>
    )
}