import React from 'react'
import { ImageProps, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import useHandAnimation from './animations/useHandAnimation'

interface AnimatedHandInterface extends ImageProps {
  onSwipe: () => void
  move: string
}

const SIZE = 130.0

const AnimatedHand = (props: AnimatedHandInterface) => {
  const { onSwipe, ...imageProps } = props
  const { panGestureEvent, shadowStyle, rStyle } = useHandAnimation(onSwipe)

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={shadowStyle}>
        <Animated.Image style={[styles.container, rStyle]} {...imageProps} />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    marginVertical: 20,
  },
})

export default AnimatedHand
