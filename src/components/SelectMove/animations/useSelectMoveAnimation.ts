import React from 'react'
import {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { useAppSelector } from '../../../store/hooks'

const useSelectMoveAnimation = () => {
  const { moveVisible } = useAppSelector((state) => state.game)

  const move = useSharedValue(1)
  const zindex = useSharedValue(2)
  const scale = useSharedValue(1)

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: move.value,
      zIndex: zindex.value,
      transform: [{ scale: scale.value }],
    }
  })

  React.useEffect(() => {
    if (!moveVisible) {
      move.value = withDelay(170, withTiming(1))
      zindex.value = withDelay(170, withTiming(2))
      scale.value = withDelay(170, withTiming(1))
    } else {
      move.value = withDelay(20, withTiming(0))
      zindex.value = withDelay(20, withTiming(0))
      scale.value = withDelay(20, withTiming(0))
    }
  }, [moveVisible])

  return { rStyle }
}

export default useSelectMoveAnimation
