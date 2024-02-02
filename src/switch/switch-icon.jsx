import { cloneElement } from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { twJoin } from 'tailwind-merge'

export function SwitchIcon(props) {
  const {
    id,
    visible = false,
    icon,
    invert = false,
  } = props

  return (
    <span className={twJoin(
      'flex justify-center items-center mx-[1px]',
      !visible && 'transition-opacity duration-300 ease-in opacity-0',
    )}>
      <VisuallyHidden.Root>{id} Icon</VisuallyHidden.Root>
      {cloneElement(icon, { style:{ height: '14px', width: '14px'} })}
    </span>
  )
}
