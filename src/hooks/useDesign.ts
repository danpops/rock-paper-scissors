import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  setDefault,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
} from '../store/slices/design.reducer'

const useDesign = () => {
  const dispatch = useAppDispatch()
  const { backgroundColor, fontColor } = useAppSelector((state) => state.design)

  const colorOptions = [
    { title: 'Default', dispatchColor: () => dispatch(setDefault()) },
    { title: 'Red', dispatchColor: () => dispatch(setRed()) },
    { title: 'Orange', dispatchColor: () => dispatch(setOrange()) },
    { title: 'Yellow', dispatchColor: () => dispatch(setYellow()) },
    { title: 'Green', dispatchColor: () => dispatch(setGreen()) },
    { title: 'Blue', dispatchColor: () => dispatch(setBlue()) },
    { title: 'Purple', dispatchColor: () => dispatch(setPurple()) },
  ]

  return {
    backgroundColor,
    colorOptions,
    fontColor,
  }
}

export default useDesign
