import ClockItem from "./ClockItem"
import './Clocks.css'

export default function Clocks({ cloks, del }:Props) {

  return (
    <div className="clocks">
      {cloks.map((el) => <ClockItem clock={el} del={del} key={el.id}/>) }
    </div>
  )
}

type Props = {
  cloks: {
    id: number
    nameZone: string,
    timeZone: string
  }[];
  del: (id: number) => void
}
