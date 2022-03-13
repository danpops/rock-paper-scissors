import React from 'react'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppSelector } from '../../store/hooks'
import MenuButton from '../Buttons/MenuButton'
import { Container } from '../Layout'

const GameOptions = () => {
  const { onChallenge } = useRockPaperScissors()
  const { userPlay, compPlay } = useAppSelector((state) => state.game)

  const disableChallange = userPlay === '?' && compPlay === '?'
  const disableClear = userPlay === '?'
  const opacityStyle = { opacity: disableClear ? 0.5 : 1 }

  return (
    <Container>
      <MenuButton
        disabled={disableChallange}
        onPress={onChallenge}
        style={opacityStyle}
        title="challenge"
      />
    </Container>
  )
}

export default GameOptions
