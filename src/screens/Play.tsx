import React from 'react'
import PlayerMove from '../components/PlayerMove'
import GameOptions from '../components/GameOptions'
import { AppContainer } from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectMove from '../components/SelectMove'

const Play = () => {
  return (
    <AppContainer>
      <ScoreBoard />
      <PlayerMove />
      <SelectMove />
      <GameOptions />
    </AppContainer>
  )
}

export default Play
