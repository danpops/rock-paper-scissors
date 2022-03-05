import React from 'react'
import { TouchableOpacity } from 'react-native'
import useDesign from '../../hooks/useDesign'
import useRockPaperScissors from '../../hooks/useRockPaperScissors'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearMove } from '../../store/slices/game.reducer'
import MenuButton from '../Buttons/MenuButton'
import { Container } from '../Layout'
import { Heading5 } from '../Text'

const GameOptions = () => {
  const { fontColor } = useDesign()
  const { onChallenge } = useRockPaperScissors()
  const { userPlay, compPlay } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()

  const isDisabled = userPlay === '?' && compPlay === '?'
  const disableClear = userPlay === '?'

  const onClear = () => dispatch(clearMove())

  return (
    <Container>
      <TouchableOpacity onPress={onClear} disabled={disableClear}>
        <Heading5 color={fontColor} style={{ opacity: disableClear ? 0.5 : 1 }}>
          Clear
        </Heading5>
      </TouchableOpacity>
      <MenuButton
        disabled={isDisabled}
        onPress={onChallenge}
        title="Challenge"
      />
    </Container>
  )
}

export default GameOptions
