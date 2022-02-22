import React from 'react'
import { View, Button } from 'react-native'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { resetGame } from '../../store/slices/game.reducer'

const GameOptions = () => {
  const dispatch = useAppDispatch()
  const { isReset, userPlay, compPlay } = useAppSelector((state) => state.game)
  const { onChallenge } = useRockPaperScissors()

  const showChallenge = userPlay !== '?' && compPlay === '?'

  const onPressReset = () => dispatch(resetGame())

  return (
    <View style={{ marginVertical: 50 }}>
      {isReset && <Button title="Reset" onPress={onPressReset} />}
      {showChallenge && <Button title="Challenge" onPress={onChallenge} />}
    </View>
  )
}

export default GameOptions
