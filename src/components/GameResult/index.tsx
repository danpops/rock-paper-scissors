import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
import RPSText from '../RPSText'
import { textStyles } from '../RPSText/styles'
import useGameResultAnimation from './animations/useGameResultAnimation'
import PlayerMoveIcon from './components/PlayerMoveIcon'

const GameResult = () => {
  const { fontColor: color, backgroundColor } = useDesign()

  const { rStyle, rTextStyle, moveSelections, resultTitle } =
    useGameResultAnimation()

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
            textStyles.h2,
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
                <RPSText text={player.player} heading={3} color={color} />
                <PlayerMoveIcon
                  flipped={player.flipped}
                  shared={player.shared}
                  playerSelection={player.playerSelection}
                />
                <RPSText text={player.score} heading={6} color={color} />
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
  resultsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 24,
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
})

export default GameResult
