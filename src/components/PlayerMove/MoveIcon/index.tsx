import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  BounceIn,
  BounceOut,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { colors } from '../../../lib/colors'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { clearMove } from '../../../store/slices/game.reducer'
import getPlayerMoveIcon from '../../../utils/imageDictionary'

const SELECTING_MOVE = '?'

type MoveIconProps = {
  playerSelection: string
  shared: number
  flipped: boolean
}

const MoveIcon = ({
  playerSelection,
  shared = 1,
  flipped = false,
}: MoveIconProps) => {
  const { userPlay, compPlay } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()
  const showMove = userPlay !== SELECTING_MOVE && compPlay !== SELECTING_MOVE
  const icon = getPlayerMoveIcon(playerSelection)
  const onClear = () => dispatch(clearMove())

  const progress = useDerivedValue(() => {
    return withTiming(shared)
  })

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1, 2],
      [colors.success, colors.lightGray, colors.error],
    )

    return { backgroundColor }
  })

  return (
    <Animated.View
      style={[
        styles.moveContainer,
        backgroundStyle,
        flipped && styles.flippedImage,
      ]}
    >
      {showMove && (
        <Pressable onPress={onClear}>
          <Animated.Image
            entering={BounceIn}
            exiting={BounceOut}
            style={[styles.moveIcon]}
            source={icon}
          />
        </Pressable>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  moveContainer: {
    marginVertical: 30,
    alignContent: 'center',
    borderColor: colors.black,
    borderWidth: 2,
    width: 134,
    height: 134,
    borderRadius: 67,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 0,
  },
  moveIcon: {
    width: 100,
    height: 100,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  flippedImage: {
    transform: [{ scaleX: -1 }],
  },
})

export default MoveIcon
