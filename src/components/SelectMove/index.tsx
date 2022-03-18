import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { AppTitles } from '../../lib/titles'
import { useAppSelector } from '../../store/hooks'
import AnimatedHand from '../Buttons/AnimatedHand'

const SelectMove = () => {
  const { fontColor: color, t } = useDesign()
  const { moveOptions } = useRockPaperScissors()
  const title = t(AppTitles.SELECT_MOVE_TITLE)
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

  return (
    <Animated.View style={[styles.moveContainer, rStyle]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
      <View style={styles.row}>
        {moveOptions.map(({ onSwipe, source, move }, index) => {
          return (
            <AnimatedHand
              key={index}
              move={move}
              onSwipe={onSwipe}
              source={source}
            />
          )
        })}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  moveContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    padding: 10,
    marginTop: 10,
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
  },
})

export default SelectMove
