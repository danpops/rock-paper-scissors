import React from 'react'
import { Button } from 'react-native'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { resetGame } from '../../store/slices/game.reducer'
import { GameOptionContainer } from './styles'

const GameOptions = () => {
  const dispatch = useAppDispatch()
  const { isReset, userPlay, compPlay } = useAppSelector((state) => state.game)
  const { onChallenge } = useRockPaperScissors()

  const showChallenge = userPlay !== '?' && compPlay === '?'

  const onPressReset = () => dispatch(resetGame())

  return (
    <GameOptionContainer>
      {isReset && <Button title="Reset" onPress={onPressReset} />}
      {showChallenge && <Button title="Challenge" onPress={onChallenge} />}
    </GameOptionContainer>
  )
}

export default GameOptions
