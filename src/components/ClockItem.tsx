import { useEffect, useState } from 'react';
import moment from "moment";
import Hour from './Hour';
import Minutes from './Minutes';
import Seconds from './Seconds';

export default function ClockItem ({ clock, del }:Props) {
  const [utc, setUtc] = useState(moment.utc())
  const [time, setTime] = useState({
    hour: utc.format('h'),
    minutes: utc.format('m'),
    second: utc.format('s')
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setUtc(moment.utc())
    }, 1000)
    return () => clearInterval(timer)
  })

  useEffect(() => {
    setTime({
      hour: utc.format('h'),
      minutes: utc.format('m'),
      second: utc.format('s')
    })
  }, [utc])

  const handleDel = () => {
    del(clock.id)
  }

  return(
    <div className='clock_container'>
      <div className='clock_text'>{clock.nameZone}</div>
      <div className="clock_item">
        <Hour hour={Number(time.hour) + Number(clock.timeZone) + (Math.floor(Number(time.minutes) / 60 * 10) / 10)}/>
        <Minutes minutes={Number(time.minutes)}/>
        <Seconds second={Number(time.second)}/>
        <div className="circle"></div>
        <div className="remove" onClick={handleDel}>&times;</div>
      </div>
    </div>  
  )
}
 type Props = {
  clock: {
    id: number
    nameZone: string,
    timeZone: string
  };
  del: (id: number) => void
 }
