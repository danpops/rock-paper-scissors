import React from 'react'
import GameResult from '../../components/GameResult'
import SelectMove from '../../components/SelectMove'
import useDesign from '../../hooks/useDesign'
import { StyleSheet, View } from 'react-native'

const Play = () => {
  const { backgroundColor } = useDesign()

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <GameResult />
      <SelectMove />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})

export default Play