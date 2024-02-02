import { cloneElement, useState } from 'react'
import { GridIcon, RowsIcon } from '@radix-ui/react-icons'
import * as Switch from '@radix-ui/react-switch';
import { SwitchIcon as Icon } from './switch-icon';
import { twJoin } from 'tailwind-merge'

const DEFAULT_COLOR = 'blue'
const GRID = 'grid' //state-uncheck
const LIST = 'list' //data-check 

/*
  unchecked:  [ ( ) LIST ] 
  checked     [GRID ( ) ]
*/
export default function SwitchButton(props) {
  const {
    disabled = false,
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
    <div className="flex w-auto justify-between items-center bg-gradient-to-tr from-outer-start to-outer-end rounded-xl">
      <Switch.Root
        id='layout'
        disabled={disabled}
        checked={toggle === LIST}
        className="w-[44px] h-[22px] py-[3px] px-1"
        onCheckedChange={handleCheckChange}
        value={toggle}
      >
        <div className='flex relative justify-between p-[1px] bg-gradient-to-tr from-inner-start to-inner-end rounded-xl'>
          <Icon
            id='grid'
            visible={toggle === LIST}
            icon={<GridIcon />}
          />
          <Switch.Thumb className={twJoin(
            "absolute left-0 flex justify-center items-center w-[14px] h-[14px] rounded-full",
            "transition ease-out duration-300 data-[state=checked]:w-[10px] data-[state=checked]:rounded-l-[10px] data-[state=checked]:rounded-r-[25px]",
            "transition-transform translate-x-[1px] will-change-transform data-[state=checked]:translate-x-[25px] duration-500 ease-out",
            color === DEFAULT_COLOR
              ? 'bg-gradient-to-tr from-light-blue to-dark-blue shadow-custom-blue'
              : 'bg-gradient-to-tr from-light-red to-dark-red shadow-custom-red'
          )}>
            <div className={twJoin(
              'w-[12px] h-[12px] bg-gradient-to-tr from-dark-blue to-light-blue rounded-full',
               toggle === LIST && 'transition duration-300 ease-out w-[8px] rounded-l-[8px] rounded-r-[20px]'
            )}/>
          </Switch.Thumb>
          <Icon
            id='list'
            visible={toggle === GRID}
            icon={<RowsIcon />}
          />
        </div>
      </Switch.Root>
    </div>
  )
}
