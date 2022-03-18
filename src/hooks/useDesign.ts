import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  setDefault,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
  toggleCaps,
  setRandom,
} from '../store/slices/design.reducer'
import getTitle from '../utils/getTitle'

const useDesign = () => {
  const dispatch = useAppDispatch()
  const { backgroundColor, fontColor, capsActive, glowColor } = useAppSelector(
    (state) => state.design,
  )

  const toggle = () => dispatch(toggleCaps())

  const title = (title: string) => getTitle(title, capsActive)

  const colorOptions = [
    { title: title('default'), dispatchColor: () => dispatch(setDefault()) },
    { title: title('random'), dispatchColor: () => dispatch(setRandom()) },
    { title: title('red'), dispatchColor: () => dispatch(setRed()) },
    { title: title('orange'), dispatchColor: () => dispatch(setOrange()) },
    { title: title('yellow'), dispatchColor: () => dispatch(setYellow()) },
    { title: title('green'), dispatchColor: () => dispatch(setGreen()) },
    { title: title('blue'), dispatchColor: () => dispatch(setBlue()) },
    { title: title('purple'), dispatchColor: () => dispatch(setPurple()) },
  ]

  return {
    backgroundColor,
    colorOptions,
    fontColor,
    capsActive,
    glowColor,
    t: title,
    toggleCaps: toggle,
  }
}

export default useDesign
