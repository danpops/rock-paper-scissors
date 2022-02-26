import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { Column, Row, Container } from '../Layout'
import { Heading3 } from '../Text'
import MoveIcon from './MoveIcon'

const PlayerMove = () => {
  const { userPlay, compPlay } = useAppSelector((state) => state.game)

  return (
    <Container>
      <Row>
        <Column>
          <Heading3>You</Heading3>
          <MoveIcon playerSelection={userPlay} />
        </Column>
        <Column>
          <Heading3>CPU</Heading3>
          <MoveIcon playerSelection={compPlay} />
        </Column>
      </Row>
    </Container>
  )
}

export default PlayerMove
