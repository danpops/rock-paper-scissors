import React from 'react'
import useDesign from '../../hooks/useDesign'
import { useAppSelector } from '../../store/hooks'
import { Column, Row, Container } from '../Layout'
import { Heading3, Heading6 } from '../Text'

const ScoreBoard = () => {
  const { score } = useAppSelector((state) => state.game)
  const { fontColor } = useDesign()
  return (
    <Container>
      <Row>
        <Column>
          <Heading3 color={fontColor}>You</Heading3>
          <Heading6 color={fontColor}>{score.user}</Heading6>
        </Column>
        <Column>
          <Heading3 color={fontColor}>CPU</Heading3>
          <Heading6 color={fontColor}>{score.comp}</Heading6>
        </Column>
      </Row>
    </Container>
  )
}

export default ScoreBoard
