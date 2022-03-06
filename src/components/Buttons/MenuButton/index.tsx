import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../../lib/colors'

interface ButtonProps {
  onPress: () => void
  title?: string
  disabled?: boolean
  color?: string
  style?: object
}

interface TextProps {
  disabled?: boolean
  color?: string
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  margin-top: 25px;
  width: 120px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border-color: ${colors.black};
  border-width: 1px;
  background-color: ${colors.white};
`

const ButtonText = styled.Text<TextProps>`
  font-size: 16px;
  text-align: center;
  color: ${colors.black};
`

const MenuButton = (props: ButtonProps) => {
  const { onPress, title, disabled = false, style = {} } = props
  return (
    <ButtonContainer style={style} disabled={disabled} onPress={onPress}>
      <ButtonText disabled={disabled}>{title}</ButtonText>
    </ButtonContainer>
  )
}

export default MenuButton
