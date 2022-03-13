import React from 'react'
import useDesign from '../../hooks/useDesign'
import { useAppSelector } from '../../store/hooks'
import { Column, Row, Section } from '../Layout'
import { Heading3, Heading6 } from '../Text'
import MoveIcon from './MoveIcon'

type MoveTypes = {
  player: string
  playerSelection: string
  flipped: boolean
  shared: number
  score: number
}[]

const PlayerMove = () => {
  const { userPlay, compPlay, score, selectedMoveBg } = useAppSelector(
    (state) => state.game,
  )
  const { fontColor } = useDesign()

  const moveSelections: MoveTypes = [
    {
      player: 'you',
      playerSelection: userPlay,
      flipped: true,
      shared: selectedMoveBg.user,
      score: score.user,
    },
    {
      player: 'comp',
      playerSelection: compPlay,
      flipped: false,
      shared: selectedMoveBg.comp,
      score: score.comp,
    },
  ]

  return (
    <Section>
      <Row>
        {moveSelections.map((move, index) => (
          <Column key={index}>
            <Heading3 color={fontColor}>{move.player}</Heading3>
            <MoveIcon
              flipped={move.flipped}
              shared={move.shared}
              playerSelection={move.playerSelection}
            />
            <Heading6 color={fontColor}>{move.score}</Heading6>
          </Column>
        ))}
      </Row>
    </Section>
  )
}

export default PlayerMove
