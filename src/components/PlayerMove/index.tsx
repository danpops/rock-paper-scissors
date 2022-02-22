import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { Column, Row } from '../Layout'
import { Heading3, Heading6 } from '../Text'

const PlayerMove = () => {
  const { userPlay, compPlay } = useAppSelector((state) => state.game)
  return (
    <Row>
      <Column>
        <Heading3>You</Heading3>
        <Heading6>{userPlay}</Heading6>
      </Column>
      <Column>
        <Heading3>CPU</Heading3>
        <Heading6>{compPlay}</Heading6>
      </Column>
    </Row>
  )
}

export default PlayerMove
