import styled from 'styled-components/native'
import { colors } from '../../../lib/colors'

export const PlayerMoveIcon = styled.Image`
  width: 110px;
  height: 110px;
`

export const LoadingContainer = styled.View`
  margin-vertical: 30px;
  align-content: center;
  border-color: ${colors.black}
  border-width: 2px;
  width: 134px;
  height: 134px;
  border-radius: 67px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  z-index: 1;
`
