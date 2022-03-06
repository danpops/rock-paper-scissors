import React from 'react'
import getPlayerMoveIcon from '../../../utils/imageDictionary'

import { LoadingContainer, PlayerMoveIcon } from './styles'

const SELECTING_MOVE = '?'

type MoveIconProps = {
  playerSelection: string
}

const MoveIcon = ({ playerSelection }: MoveIconProps) => {
  return (
    <LoadingContainer>
      {playerSelection !== SELECTING_MOVE && (
        <PlayerMoveIcon source={getPlayerMoveIcon(playerSelection)} />
      )}
    </LoadingContainer>
  )
}

export default MoveIcon
