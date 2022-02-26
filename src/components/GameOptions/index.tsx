import React from 'react'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppSelector } from '../../store/hooks'
import MenuButton from '../Buttons/MenuButton'
import { Container } from '../Layout'

const GameOptions = () => {
  const { userPlay, compPlay } = useAppSelector((state) => state.game)
  const { onChallenge } = useRockPaperScissors()

  const isDisabled = userPlay === '?' && compPlay === '?'

  return (
    <Container>
      <MenuButton
        disabled={isDisabled}
        onPress={onChallenge}
        title="Challenge"
        bgColor="#bae8e8"
      />
    </Container>
  )
}

export default GameOptions
