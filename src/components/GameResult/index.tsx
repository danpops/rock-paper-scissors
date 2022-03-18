import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
import { AppTitles } from '../../lib/titles'
import { useAppSelector } from '../../store/hooks'
import PlayerMoveIcon from './PlayerMoveIcon'

type MoveTypes = {
  player: string
  playerSelection: string
  flipped: boolean
  shared: number
  score: number
}[]

const GameResult = () => {
  const {
    userPlay,
    compPlay,
    score,
    result: RESULT_TITLE,
    selectedMoveBg,
    moveVisible,
    username: YOU_TITLE,
  } = useAppSelector((state) => state.game)
  const { fontColor: color, backgroundColor, t } = useDesign()

  const move = useSharedValue(0)
  const zindex = useSharedValue(0)
  const scale = useSharedValue(0)
  const text = useSharedValue(1)

  const youTitle = t(YOU_TITLE)
  const compTitle = t(AppTitles.COMP_TITLE)
  const resultTitle = t(RESULT_TITLE)

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: move.value,
      zIndex: zindex.value,
      transform: [{ scale: scale.value }],
    }
  }, [])

  const rTextStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: text.value }] }
  })

  const moveSelections: MoveTypes = [
    {
      player: youTitle,
      playerSelection: userPlay,
      flipped: true,
      shared: selectedMoveBg.user,
      score: score.user,
    },
    {
      player: compTitle,
      playerSelection: compPlay,
      flipped: false,
      shared: selectedMoveBg.comp,
      score: score.comp,
    },
  ]

  React.useEffect(() => {
    if (moveVisible) {
      move.value = withDelay(20, withTiming(1))
      scale.value = withDelay(20, withTiming(1))
      zindex.value = withDelay(20, withTiming(2))
      text.value = withRepeat(
        withSequence(
          withTiming(1.5, { duration: 500, easing: Easing.ease }),
          withTiming(1.3, { duration: 500, easing: Easing.ease }),
        ),
        -1,
        true,
      )
    } else {
      scale.value = withDelay(170, withTiming(0))
      move.value = withDelay(170, withTiming(0))
      zindex.value = withDelay(170, withTiming(0))
      text.value = withDelay(170, withTiming(0))
    }
  }, [moveVisible])

  return (
    <>
      <Animated.View
        style={[
          styles.resultsContainer,
          rStyle,
          {
            backgroundColor,
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.text,
            rTextStyle,
            {
              color,
            },
          ]}
        >
          {resultTitle}
        </Animated.Text>
        <View style={styles.row}>
          {moveSelections.map((player, index) => (
            <Animated.View key={index}>
              <View style={styles.column}>
                <Text style={[styles.heading3, { color }]}>
                  {player.player}
                </Text>
                <PlayerMoveIcon
                  flipped={player.flipped}
                  shared={player.shared}
                  playerSelection={player.playerSelection}
                />
                <Text style={[styles.heading6, { color }]}>{player.score}</Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  heading3: { fontSize: 24, fontWeight: '400' },
  heading6: { fontSize: 30, fontWeight: '400' },
  resultsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 24,
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '300',
  },
})

export default GameResult
