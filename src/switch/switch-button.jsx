import * as Switch from '@radix-ui/react-switch';
import { SwitchIcon as Icon } from './switch-icon';
import { SwitchCircle as Circle } from './switch-circle';
import { default as GridIcon } from '@mui/icons-material/GridViewRounded';
import { default as ListIcon } from '@mui/icons-material/ViewHeadlineRounded';
import { DEFAULT_COLOR, GRID, LIST } from './conts';
/*
  unchecked:  [ ( ) LIST ] 
  checked     [GRID ( ) ]
*/
export default function SwitchButton(props) {
  const {
    disabled = false,
    color = DEFAULT_COLOR,
    state = GRID,
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
            id={GRID}
            visible={state === LIST}
            icon={<GridIcon />}
          />
          <Circle
            state={state}
            color={color}
          />
          <Icon
            id={LIST}
            visible={state === GRID}
            icon={<ListIcon />}
          />
        </div>
      </Switch.Root>
    </div>
  )
}
