export default function Minutes ({ minutes }:Props) {

  const style = {
    transform: `rotate(${minutes * 6}deg)`
  }

  return (
    <div className="minutes" style={style}>
      <div className="tip"></div>
      <div className="top"></div>
      <div className="bootom"></div>
    </div>
  )
}

type Props = {
  minutes: number
}
