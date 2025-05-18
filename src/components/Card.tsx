import type { FC } from "react"
import type { Card as TCard } from "types"

interface Props {
  data: TCard
}

export const Card: FC<Props> = ({ data: { text } }) => {
  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <p>{text}</p>
    </div>
  )
}
