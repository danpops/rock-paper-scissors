import React from 'react'
import { ImageProps, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { GameMoves } from '../../../lib/constants'
import { useAppSelector } from '../../../store/hooks'
import useHandAnimation from './animations/useHandAnimation'

interface AnimatedHandInterface extends ImageProps {
  onSwipe: () => void
  move: string
}

const SIZE = 130.0

const AnimatedHand = (props: AnimatedHandInterface) => {
  const { onSwipe, move, ...imageProps } = props
  const { userPlay } = useAppSelector((state) => state.game)
  const { panGestureEvent, shadowStyle, rStyle } = useHandAnimation(onSwipe)

  const isHandEnabled = userPlay === GameMoves.EMPTY || userPlay === move

  return (
    <PanGestureHandler enabled={isHandEnabled} onGestureEvent={panGestureEvent}>
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
