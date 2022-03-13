import React from 'react'
import { ImageProps, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

interface AnimatedHandInterface extends ImageProps {
  active?: boolean
}
const AnimatedHand = (props: AnimatedHandInterface) => {
  const { active = false, ...imageProps } = props
  const scale = useSharedValue(1)

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  }, [])

  React.useEffect(() => {
    scale.value = active
      ? withRepeat(
          withSequence(
            withTiming(0.9, { duration: 500, easing: Easing.ease }),
            withTiming(1.08, { duration: 500, easing: Easing.ease }),
          ),
          -1,
          true,
        )
      : 1
  }, [active])

  return (
    <Animated.Image
      style={[styles.container, reanimatedStyle]}
      {...imageProps}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
})

export default AnimatedHand
