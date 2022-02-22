import React from 'react'
import GameMove from '../components/GameMove'
import GameOptions from '../components/GameOptions'
import { PlayContainer } from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectMove from '../components/SelectMove'
import { Heading2 } from '../components/Text'
import { useAppSelector } from '../store/hooks'

const Play = () => {
  const { gameWinner } = useAppSelector((state) => state.game)

  return (
    <PlayContainer>
      <ScoreBoard />
      <Heading2>{gameWinner}</Heading2>
      <GameMove />
      <SelectMove />
      <GameOptions />
    </PlayContainer>
  )
}

export default Play
