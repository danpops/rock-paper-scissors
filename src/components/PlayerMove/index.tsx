import React from 'react'
import useDesign from '../../hooks/useDesign'
import { useAppSelector } from '../../store/hooks'
import { Column, Row, Section } from '../Layout'
import { Heading3, Heading6 } from '../Text'
import MoveIcon from './MoveIcon'

const PlayerMove = () => {
  const { userPlay, compPlay, score } = useAppSelector((state) => state.game)
  const { fontColor } = useDesign()

  return (
    <Section>
      <Row>
        <Column>
          <Heading3 color={fontColor}>you.</Heading3>
          <MoveIcon playerSelection={userPlay} />
          <Heading6 color={fontColor}>{score.user}</Heading6>
        </Column>
        <Column>
          <Heading3 color={fontColor}>computer.</Heading3>
          <MoveIcon playerSelection={compPlay} />
          <Heading6 color={fontColor}>{score.comp}</Heading6>
        </Column>
      </Row>
    </Section>
  )
}

export default PlayerMove
