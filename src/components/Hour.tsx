export default function Hour ({ hour }: Props) {
  const style = {
    transform: `rotate(${hour * 30}deg)`
  }

  return (
    <div className="hour" style={style}>
      <div className="tip"></div>
      <div className="top"></div>
      <div className="bootom"></div>
    </div>
  )
}

type Props = {
  hour: number
}
