import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { Column, Row } from '../Layout'
import { Heading3, Heading6 } from '../Text'

const ScoreBoard = () => {
  const { score } = useAppSelector((state) => state.game)

  return (
    <Row>
      <Column>
        <Heading3>You</Heading3>
        <Heading6>{score.user}</Heading6>
      </Column>
      <Column>
        <Heading3>CPU</Heading3>
        <Heading6>{score.comp}</Heading6>
      </Column>
    </Row>
  )
}

export default ScoreBoard
