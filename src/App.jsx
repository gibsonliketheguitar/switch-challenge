import { useState } from 'react'
import './App.css'
import SwitchButton from './switch'

const GRID = 'grid'
const LIST = 'list'

function App() {
  const [color, setColor] = useState('blue')
  const handleToggleColor = () => {
    setColor(prev => {
      if (prev === 'red') return 'blue'
      return 'red'
    })
  }

  const [display, setDisplay] = useState('list')
  const handleToggleDisplay = () => {
    setDisplay(prev => {
      if(prev === 'grid') return 'list'
      return 'grid'
    })
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <button onClick={handleToggleColor}>Click to Toggle Color: {color}</button>
      <button onClick={handleToggleDisplay}>Click to Toggle Color: {display}</button>
      <SwitchButton color={color} state={display} />
    </div>
  )
}

export default App
