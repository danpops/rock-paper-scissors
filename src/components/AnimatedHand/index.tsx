import React from 'react'
import { ImageProps, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
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
    scale.value = active ? withRepeat(withSpring(1.1), -1, true) : 1
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
  },
})

export default AnimatedHand
