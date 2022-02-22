import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { playNewGame } from '../../store/slices/game.reducer'
import { Heading3 } from '../Text'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    marginTop: 35,
  },
  font: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 30,
  },
})

const SelectMove = () => {
  const dispatch = useAppDispatch()

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  return (
    <View style={styles.container}>
      <Heading3>Choose your move</Heading3>
      <View style={styles.row}>
        <Pressable onPress={onSelectRock}>
          <Text style={styles.font}>R</Text>
        </Pressable>
        <Pressable onPress={onSelectPaper}>
          <Text style={styles.font}>P</Text>
        </Pressable>
        <Pressable onPress={onSelectScissors}>
          <Text style={styles.font}>S</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SelectMove
