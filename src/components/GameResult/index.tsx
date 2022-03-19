import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
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
