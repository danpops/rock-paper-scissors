import React from 'react'
import useDesign from '../../hooks/useDesign'
import useEasterTitle from '../../hooks/useEasterTitle'
import { useAppSelector } from '../../store/hooks'
import { Column, Row, Section } from '../Layout'
import { Heading3, Heading6 } from '../Text'
import MoveIcon from './MoveIcon'

type MoveTypes = {
  player: string
  playerSelection: string
  flipped: boolean
  shared: number
  toggleTitle: () => void
  score: number
}[]

const YOU_TITLE = 'you'
const COMP_TITLE = 'comp'

const PlayerMove = () => {
  const { userPlay, compPlay, score, selectedMoveBg } = useAppSelector(
    (state) => state.game,
  )
  const { fontColor } = useDesign()
  const { title: youTitle, toggleCaps: toggleYou } = useEasterTitle(YOU_TITLE)
  const { title: compTitle, toggleCaps: toggleComp } =
    useEasterTitle(COMP_TITLE)

  const moveSelections: MoveTypes = [
    {
      player: youTitle,
      toggleTitle: toggleYou,
      playerSelection: userPlay,
      flipped: true,
      shared: selectedMoveBg.user,
      score: score.user,
    },
    {
      player: compTitle,
      toggleTitle: toggleComp,
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
            <Heading3 onPress={move.toggleTitle} color={fontColor}>
              {move.player}
            </Heading3>
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
