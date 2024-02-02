import * as Switch from '@radix-ui/react-switch';
import { SwitchIcon as Icon } from './switch-icon';
import { default as GridIcon }  from '@mui/icons-material/GridViewRounded';
import { default as ListIcon } from '@mui/icons-material/ViewHeadlineRounded';
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
    handleToggleState,
  } = props

  return (
    <div className="flex w-auto justify-between items-center bg-gradient-to-tr from-outer-start to-outer-end rounded-xl">
      <Switch.Root
        id='layout'
        disabled={disabled}
        checked={state === LIST}
        className="w-[44px] h-[22px] py-[3px] px-1"
        onCheckedChange={handleToggleState}
        value={state}
      >
        <div className='flex relative justify-between p-[1px] bg-gradient-to-tr from-inner-start to-inner-end rounded-xl'>
          <Icon
            id='grid'
            visible={state === LIST}
            icon={<GridIcon />}
            invert={true}
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
              'w-[12px] h-[12px] bg-gradient-to-tr rounded-full',
              state === LIST && 'transition duration-300 ease-out w-[8px] rounded-l-[8px] rounded-r-[20px]',
              color === DEFAULT_COLOR ? 'from-dark-blue to-light-blue' : 'from-dark-red to-light-red'
            )} />
          </Switch.Thumb>
          <Icon
            id='list'
            visible={state === GRID}
            icon={<ListIcon />}
          />
        </div>
      </Switch.Root>
    </div>
  )
}
