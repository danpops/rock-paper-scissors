import React from 'react'
import PlayerMove from '../components/PlayerMove'
import GameOptions from '../components/GameOptions'
import { PlayContainer } from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectMove from '../components/SelectMove'

const Play = () => {
  return (
    <PlayContainer>
      <ScoreBoard />
      <PlayerMove />
      <SelectMove />
      <GameOptions />
    </PlayContainer>
  )
}

export default Play
