import React from 'react'
import { StyleSheet } from 'react-native'
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
import useEasterTitle from '../../hooks/useEasterTitle'
import { useAppSelector } from '../../store/hooks'
import { Column, Row } from '../Layout'
import { Heading3, Heading6 } from '../Text'
import MoveIcon from './MoveIcon'

type MoveTypes = {
  player: string
  playerSelection: string
  flipped: boolean
  shared: number
  toggleTitle: () => void
  score: number
}[]

const YOU_TITLE = 'you'
const COMP_TITLE = 'comp'

const PlayerMove = () => {
  const { userPlay, compPlay, score, result, selectedMoveBg, moveVisible } =
    useAppSelector((state) => state.game)
  const { fontColor: color, backgroundColor } = useDesign()

  const move = useSharedValue(0)
  const zindex = useSharedValue(0)
  const scale = useSharedValue(0)
  const text = useSharedValue(1)

  const { title: youTitle, toggleCaps: toggleYou } = useEasterTitle(YOU_TITLE)
  const { title: compTitle, toggleCaps: toggleComp } =
    useEasterTitle(COMP_TITLE)

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
      toggleTitle: toggleYou,
      playerSelection: userPlay,
      flipped: true,
      shared: selectedMoveBg.user,
      score: score.user,
    },
    {
      player: compTitle,
      toggleTitle: toggleComp,
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
          {result}
        </Animated.Text>
        <Row>
          {moveSelections.map((player, index) => (
            <Animated.View key={index}>
              <Column>
                <Heading3 onPress={player.toggleTitle} color={color}>
                  {player.player}
                </Heading3>
                <MoveIcon
                  flipped={player.flipped}
                  shared={player.shared}
                  playerSelection={player.playerSelection}
                />
                <Heading6 color={color}>{player.score}</Heading6>
              </Column>
            </Animated.View>
          ))}
        </Row>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  resultsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 24,
    position: 'absolute',
  },
  text: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '300',
  },
})

export default PlayerMove
