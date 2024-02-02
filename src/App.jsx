import { useState } from 'react'
import SwitchButton from './switch'
import './App.css'

function App() {
  const [color, setColor] = useState('blue')
  const handleToggleColor = () => {
    setColor(prev => {
      if (prev === 'red') return 'blue'
      return 'red'
    })
  }

  const [state, setState] = useState('grid')
  const handleToggleState = () => {
    setState(prev => {
      if (prev === 'grid') return 'list'
      return 'grid'
    })
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <button onClick={handleToggleColor}>
        Click to Toggle Color: <span className={color === 'blue' ? 'text-blue-300': 'text-red-300'}>{color}</span>
      </button>
      <SwitchButton color={color} state={state} handleToggleState={handleToggleState} />
    </div>
  )
}

export default App
