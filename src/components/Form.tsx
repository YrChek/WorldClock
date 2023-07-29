import { useState } from 'react';
import './Form.css'

export default function Form({setClocks}:Props) {

  const [zone, setZone] = useState({id:1, nameZone:'', timeZone:''});

  const handlerZone = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setZone({...zone, [name]:value});
  }

  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    if (zone.nameZone && zone.timeZone) {
      setClocks(prevClock => {
        return [...prevClock, zone]
      })
      setZone({id: zone.id + 1, nameZone: '', timeZone:''})
    }
  }

  return (
    <div className="form">
      <form className="input_data">
        <div className="data_zone">
          <label>Название</label>
          <input type="text" onChange={handlerZone} value={zone.nameZone} name='nameZone'/>
        </div>
        <div className="data_zone">
          <label>Временная зона</label>
          <input type="number" onChange={handlerZone} value={zone.timeZone} name='timeZone'/>
        </div>
        <button type="submit" onClick={handleButton}>Добавить</button>
      </form>
    </div>
  )
}

type Clock = {
  id: number;
  nameZone: string;
  timeZone: string
}
type Props = {
  setClocks: React.Dispatch<React.SetStateAction<Clock[]>>
}
