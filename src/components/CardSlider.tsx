import type { FC } from "react"
import type { Card as TCard } from "types"
import { Card } from "./Card"

interface Props {
  cards: TCard[]
}

export const CardSlider: FC<Props> = ({ cards }) => {
  return cards.map((p, index) => <Card key={index} data={p} />)
}
