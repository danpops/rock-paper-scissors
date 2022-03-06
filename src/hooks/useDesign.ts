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
    { title: 'default', dispatchColor: () => dispatch(setDefault()) },
    { title: 'red', dispatchColor: () => dispatch(setRed()) },
    { title: 'orange', dispatchColor: () => dispatch(setOrange()) },
    { title: 'yellow', dispatchColor: () => dispatch(setYellow()) },
    { title: 'green', dispatchColor: () => dispatch(setGreen()) },
    { title: 'blue', dispatchColor: () => dispatch(setBlue()) },
    { title: 'purple', dispatchColor: () => dispatch(setPurple()) },
  ]

  return {
    backgroundColor,
    colorOptions,
    fontColor,
  }
}

export default useDesign
