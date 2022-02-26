import React from 'react'
import PlayerMove from '../components/PlayerMove'
import GameOptions from '../components/GameOptions'
import { AppContainer, MiniContain } from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectMove from '../components/SelectMove'

const Play = () => {
  return (
    <AppContainer>
      <MiniContain>
        <ScoreBoard />
        <PlayerMove />
        <SelectMove />
        <GameOptions />
      </MiniContain>
    </AppContainer>
  )
}

export default Play
