import React from 'react'
import { ImageProps, StyleSheet } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'

type ContextType = {
  translateX: number
  translateY: number
}

const SIZE = 120.0

interface AnimatedHandInterface extends ImageProps {
  onSwipe: () => void
  move: string
}
const AnimatedHand = (props: AnimatedHandInterface) => {
  const { onSwipe, ...imageProps } = props
  const { onChallenge } = useRockPaperScissors()

  const [active, setActive] = React.useState(false)

  const opacityStyle = { opacity: active ? 1 : 0.7 }

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      runOnJS(onSwipe)()
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if (distance > SIZE + 8) {
        runOnJS(setActive)(true)
      } else {
        runOnJS(setActive)(false)
      }
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if (distance > SIZE + 8) {
        runOnJS(onChallenge)()
      }
      translateX.value = withSpring(0)
      translateY.value = withSpring(0)
      runOnJS(setActive)(false)
    },
  })

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.Image
        style={[styles.container, opacityStyle, rStyle]}
        {...imageProps}
      />
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
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
