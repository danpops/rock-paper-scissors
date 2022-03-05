import React from 'react'
import PlayerMove from '../components/PlayerMove'
import GameOptions from '../components/GameOptions'
import { AppContainer, MiniContain } from '../components/Layout'
import SelectMove from '../components/SelectMove'
import useDesign from '../hooks/useDesign'

const Play = () => {
  const { backgroundColor } = useDesign()

  return (
    <AppContainer backgroundColor={backgroundColor}>
      <MiniContain>
        <PlayerMove />
        <SelectMove />
        <GameOptions />
      </MiniContain>
    </AppContainer>
  )
}

export default Play
