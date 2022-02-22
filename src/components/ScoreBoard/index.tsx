import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useAppSelector } from '../../store/hooks'
import { Heading3, Heading4 } from '../Text'

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
})

const ScoreBoard = () => {
  const { score } = useAppSelector((state) => state.game)

  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Heading3 style={styles.title}>You</Heading3>
        <Heading4>{score.user}</Heading4>
      </View>
      <View style={styles.column}>
        <Heading3 style={styles.title}>CPU</Heading3>
        <Heading4>{score.comp}</Heading4>
      </View>
    </View>
  )
}

export default ScoreBoard
