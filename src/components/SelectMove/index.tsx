import React from 'react'
import { Pressable } from 'react-native'
import useDesign from '../../hooks/useDesign'
import useSelectMove from '../../hooks/useSelectMove'
import { Heading3 } from '../Text'
import { SelectMoveContainer, SelectMoveIcon, SelectMoveRow } from './styles'

const SelectMove = () => {
  const { fontColor } = useDesign()
  const { moveOptions } = useSelectMove()

  return (
    <SelectMoveContainer>
      <Heading3 color={fontColor}>Choose your move</Heading3>
      <SelectMoveRow>
        {moveOptions.map(({ onPress, source }, index) => (
          <Pressable key={index} onPress={onPress}>
            <SelectMoveIcon source={source} />
          </Pressable>
        ))}
      </SelectMoveRow>
    </SelectMoveContainer>
  )
}

export default SelectMove
