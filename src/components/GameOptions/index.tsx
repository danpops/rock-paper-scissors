import React from 'react'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearMove } from '../../store/slices/game.reducer'
import MenuButton from '../Buttons/MenuButton'
import TextButton from '../Buttons/TextButton'
import { Container } from '../Layout'

const GameOptions = () => {
  const { onChallenge } = useRockPaperScissors()
  const { userPlay, compPlay } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()

  const disableChallange = userPlay === '?' && compPlay === '?'
  const disableClear = userPlay === '?'
  const opacityStyle = { opacity: disableClear ? 0.5 : 1 }

  const onClear = () => dispatch(clearMove())

  return (
    <Container>
      <MenuButton
        disabled={disableChallange}
        onPress={onChallenge}
        style={opacityStyle}
        title="challenge"
      />
      <TextButton
        onPress={onClear}
        disabled={disableClear}
        style={opacityStyle}
        title="clear"
      />
    </Container>
  )
}

export default GameOptions
