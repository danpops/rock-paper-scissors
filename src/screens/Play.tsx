import React from 'react'
import PlayerMove from '../components/PlayerMove'
import GameOptions from '../components/GameOptions'
import { AppContainer, MiniContain } from '../components/Layout'
import ScoreBoard from '../components/ScoreBoard'
import SelectMove from '../components/SelectMove'
import useDesign from '../hooks/useDesign'

const Play = () => {
  const { backgroundColor } = useDesign()

  return (
    <AppContainer backgroundColor={backgroundColor}>
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
