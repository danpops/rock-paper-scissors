import React from 'react'
import { Pressable } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { playNewGame } from '../../store/slices/game.reducer'
import { Heading3 } from '../Text'
import { SelectMoveContainer, SelectMoveRow, SelectMoveText } from './styles'

const SelectMove = () => {
  const dispatch = useAppDispatch()

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  return (
    <SelectMoveContainer>
      <Heading3>Choose your move</Heading3>
      <SelectMoveRow>
        <Pressable onPress={onSelectRock}>
          <SelectMoveText>R</SelectMoveText>
        </Pressable>
        <Pressable onPress={onSelectPaper}>
          <SelectMoveText>P</SelectMoveText>
        </Pressable>
        <Pressable onPress={onSelectScissors}>
          <SelectMoveText>S</SelectMoveText>
        </Pressable>
      </SelectMoveRow>
    </SelectMoveContainer>
  )
}

export default SelectMove
