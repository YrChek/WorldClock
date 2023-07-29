import { useState } from 'react';
import Clocks from './components/Clocks';
import Form from './components/Form';
import './App.css'

function App() {

  const [clocks, setClocks] = useState<Clock[]>([])

  const delClock = (id:number) => {
    setClocks(clocks.filter((el) => el.id !== id))
  }

  return (
    <div className='container'>
      <Form setClocks={setClocks}/>
      <Clocks cloks={clocks} del={delClock}/>
    </div>
  )
}

export default App

type Clock = {
  id: number
  nameZone: string,
  timeZone: string
}
