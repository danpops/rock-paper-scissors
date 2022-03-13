import React from 'react'
import { Pressable } from 'react-native'
import useDesign from '../../hooks/useDesign'
import useSelectMove from '../../hooks/useSelectMove'
import { useAppSelector } from '../../store/hooks'
import AnimatedHand from '../AnimatedHand'
import { Heading3 } from '../Text'
import { SelectMoveContainer, SelectMoveRow } from './styles'

const SELECTING_MOVE = '?'

const SelectMove = () => {
  const { fontColor } = useDesign()
  const { moveOptions } = useSelectMove()
  const { userPlay, compPlay } = useAppSelector((state) => state.game)

  const stopAnimation =
    userPlay !== SELECTING_MOVE && compPlay !== SELECTING_MOVE

  return (
    <SelectMoveContainer>
      <Heading3 color={fontColor}>choose your move.</Heading3>
      <SelectMoveRow>
        {moveOptions.map(({ onPress, source, move }, index) => {
          const isUserPlay = userPlay === move
          return (
            <Pressable key={index} onPress={onPress}>
              <AnimatedHand
                active={isUserPlay && !stopAnimation}
                source={source}
              />
            </Pressable>
          )
        })}
      </SelectMoveRow>
    </SelectMoveContainer>
  )
}

export default SelectMove
