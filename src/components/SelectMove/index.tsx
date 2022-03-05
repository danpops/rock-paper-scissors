import React from 'react'
import { Pressable } from 'react-native'
import useDesign from '../../hooks/useDesign'
import { useAppDispatch } from '../../store/hooks'
import { playNewGame } from '../../store/slices/game.reducer'
import getPlayerMoveIcon from '../../utils/imageDictionary'
import { Heading3 } from '../Text'
import { SelectMoveContainer, SelectMoveIcon, SelectMoveRow } from './styles'

const SelectMove = () => {
  const dispatch = useAppDispatch()
  const { fontColor } = useDesign()

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  return (
    <SelectMoveContainer>
      <Heading3 color={fontColor}>Choose your move</Heading3>
      <SelectMoveRow>
        <Pressable onPress={onSelectRock}>
          <SelectMoveIcon source={getPlayerMoveIcon('R')} />
        </Pressable>
        <Pressable onPress={onSelectPaper}>
          <SelectMoveIcon source={getPlayerMoveIcon('P')} />
        </Pressable>
        <Pressable onPress={onSelectScissors}>
          <SelectMoveIcon source={getPlayerMoveIcon('S')} />
        </Pressable>
      </SelectMoveRow>
    </SelectMoveContainer>
  )
}

export default SelectMove
