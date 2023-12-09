import { ReactNode } from "react"
import { Card } from "../ProjectCard"

interface CardsWrapper {
    cards?: Card[]
}

export const CardsWrapper = ({ cards }: CardsWrapper) => {
    return (
        <div className="d-flex flex-column align-items-center gap-4">
            {cards?.map((el, index) => {
                return <div key={index}>{el as ReactNode}</div>
            })}
        </div>
    )
}
