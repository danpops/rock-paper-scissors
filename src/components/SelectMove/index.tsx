import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { playNewGame } from '../../store/slices/gameSlice'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})

const SelectMove = () => {
  const dispatch = useAppDispatch()

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  return (
    <View style={styles.row}>
      <Button title="R" onPress={onSelectRock} />
      <Button title="P" onPress={onSelectPaper} />
      <Button title="S" onPress={onSelectScissors} />
    </View>
  )
}

export default SelectMove
