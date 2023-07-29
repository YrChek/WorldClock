export default function Seconds ({ second }:Props) {
  
  const style = {
    transform: `rotate(${second * 6}deg)`
  }

  return (
    <div className="seconds" style={style}>
      <div className="top_sec"></div>
      <div className="bootom_sec"></div>
  </div>
  )
}

type Props = {
  second: number
}
