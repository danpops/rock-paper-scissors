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
    { title: 'Default', onPress: () => dispatch(setDefault()) },
    { title: 'Red', onPress: () => dispatch(setRed()) },
    { title: 'Orange', onPress: () => dispatch(setOrange()) },
    { title: 'Yellow', onPress: () => dispatch(setYellow()) },
    { title: 'Green', onPress: () => dispatch(setGreen()) },
    { title: 'Blue', onPress: () => dispatch(setBlue()) },
    { title: 'Purple', onPress: () => dispatch(setPurple()) },
  ]

  return {
    backgroundColor,
    colorOptions,
    fontColor,
  }
}

export default useDesign
