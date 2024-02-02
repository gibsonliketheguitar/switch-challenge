import { cloneElement } from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { twJoin } from 'tailwind-merge'

export function SwitchIcon(props) {
  const {
    id,
    visible = false,
    icon
  } = props

  return (
    <span className={twJoin(
      !visible && 'transition-opacity duration-300 ease-in opacity-0',
      'flex justify-center items-center',
    )}>
      <VisuallyHidden.Root>{id} Icon</VisuallyHidden.Root>
      {cloneElement(icon, { className: 'm-[1px] mx-[2px]', height: '12px', width: '12px', color: 'white' })}
    </span>
  )
}
