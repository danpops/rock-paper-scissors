import React from 'react'
import { ActivityIndicator } from 'react-native'
import getPlayerMoveIcon from '../../../utils/imageDictionary'

import { LoadingContainer, PlayerMoveIcon } from './styles'

const SELECTING_MOVE = '?'

type MoveIconProps = {
  playerSelection: string
}

const MoveIcon = ({ playerSelection }: MoveIconProps) => {
  return (
    <>
      {playerSelection === SELECTING_MOVE ? (
        <LoadingContainer>
          <ActivityIndicator size="small" />
        </LoadingContainer>
      ) : (
        <PlayerMoveIcon source={getPlayerMoveIcon(playerSelection)} />
      )}
    </>
  )
}

export default MoveIcon
