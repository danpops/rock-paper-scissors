import {
  useDerivedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'
import { colors } from '../../../lib/colors'

const usePlayerMoveIconAnimation = (shared: number) => {
  const progress = useDerivedValue(() => {
    return withDelay(250, withTiming(shared))
  })

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2],
      [colors.success, colors.lightGray, colors.error],
    )

    return { backgroundColor }
  })

  return { backgroundStyle }
}

export default usePlayerMoveIconAnimation
