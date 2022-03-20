import React from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import useDesign from '../../../../hooks/useDesign'
import useRockPaperScissors from '../../../../hooks/useRockPaperScissors'

type ContextType = {
  translateX: number
  translateY: number
}

const { height } = Dimensions.get('window')
const TEN_PERCENT_HEIGHT = height * 0.1

const useHandAnimation = (onSwipe: () => void) => {
  const { onChallenge } = useRockPaperScissors()
  const { glowColor } = useDesign()

  const [active, setActive] = React.useState(false)

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const shadowOpacity = useSharedValue(0)
  const shadowRadius = useSharedValue(12)

  const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
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
      if (distance > TEN_PERCENT_HEIGHT) {
        runOnJS(setActive)(true)
      } else {
        runOnJS(setActive)(false)
      }
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
    onEnd: () => {
      if (distance > TEN_PERCENT_HEIGHT) {
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

  const shadowStyle = useAnimatedStyle(() => {
    return {
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowRadius: shadowRadius.value,
      shadowOpacity: shadowOpacity.value,
      shadowColor: glowColor,
    }
  }, [active])

  React.useEffect(() => {
    shadowOpacity.value = active ? withSpring(1) : withSpring(0)
    shadowRadius.value = active
      ? withRepeat(
          withSequence(
            withTiming(20, { duration: 600, easing: Easing.ease }),
            withTiming(8, { duration: 600, easing: Easing.ease }),
          ),
          -1,
          true,
        )
      : 13
  }, [active])

  return {
    panGestureEvent,
    shadowStyle,
    rStyle,
  }
}

export default useHandAnimation
