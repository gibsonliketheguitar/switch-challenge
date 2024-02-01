import { cloneElement, useState } from 'react'
import { GridIcon, RowsIcon } from '@radix-ui/react-icons'
import * as Switch from '@radix-ui/react-switch';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { twJoin } from 'tailwind-merge'


const GRID = 'grid' //state-uncheck
const LIST = 'list' //data-check 

/*
  unchecked:  [ ( ) LIST ] 
  checked     [GRID ( ) ]

*/

export default function SwitchButton(props) {
  const {
    color = 'blue',
    state = 'grid',
  } = props

  const [toggle, setToggle] = useState(state)

  const handleCheckChange = () => {
    setToggle(prev => {
      if (prev === GRID) return LIST
      return GRID
    })
  }


  return (
    <div className="flex w-auto justify-between items-center bg-light-dark-linear rounded-xl">
      <Switch.Root
        id='layout'
        className="w-[44px] h-[22px] py-[3px] px-1"
        value={toggle}
        onCheckedChange={handleCheckChange}
      >
        <div className={twJoin(
          'flex relative p-[1px] bg-dark-linear rounded-xl',
          toggle === LIST ? 'justify-start' : 'justify-end'
        )}>
          <Icon id='grid' visible={toggle === LIST} icon={<GridIcon />} />
          <Switch.Thumb className={twJoin(
            "absolute left-0 w-[14px] h-[14px] bg-white rounded-full",
            "duration-500 transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[21px]"
          )}/>
          <Icon id='list' visible={toggle === GRID} icon={<RowsIcon />} />
        </div>
      </Switch.Root>
    </div>
  )
}

function Icon(props) {
  const {
    id,
    visible = false,
    icon
  } = props

  if (!visible) return <></>
  return (
    <span className='flex justify-center items-center'>
      <VisuallyHidden.Root>{id} Icon</VisuallyHidden.Root>
      {cloneElement(icon, { className: 'm-[1px] mx-[2px]', height: '12px', width: '12px', color: 'white' })}
    </span>
  )
}