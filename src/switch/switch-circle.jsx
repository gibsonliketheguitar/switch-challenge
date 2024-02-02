import { twJoin } from 'tailwind-merge'
import * as Switch from '@radix-ui/react-switch';
import { DEFAULT_COLOR, LIST } from './conts';

export function SwitchCircle(props) {
  const {
    state,
    color
  } = props

  return (
    <Switch.Thumb id='outer-circle' className={twJoin(
      "absolute left-0 flex justify-center items-center w-[14px] h-[14px] rounded-full",
      "transition ease-out duration-300 data-[state=checked]:w-[10px] data-[state=checked]:rounded-l-[10px] data-[state=checked]:rounded-r-[25px]",
      "transition-transform translate-x-[1px] will-change-transform data-[state=checked]:translate-x-[25px] duration-500 ease-out",
      color === DEFAULT_COLOR
        ? 'bg-gradient-to-tr from-light-blue to-dark-blue shadow-custom-blue'
        : 'bg-gradient-to-tr from-light-red to-dark-red shadow-custom-red'
    )}>
      <div id='inner-circle' className={twJoin(
        'w-[12px] h-[12px] bg-gradient-to-tr rounded-full',
        state === LIST && 'transition duration-300 ease-out w-[8px] rounded-l-[8px] rounded-r-[20px]',
        color === DEFAULT_COLOR ? 'from-dark-blue to-light-blue' : 'from-dark-red to-light-red'
      )} />
    </Switch.Thumb>
  )
}

