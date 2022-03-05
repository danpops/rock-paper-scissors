import React from 'react'
import styled from 'styled-components/native'
import { useAppSelector } from '../../../store/hooks'

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
  background-color: ${({ color }) => color};
`

const ButtonText = styled.Text<TextProps>`
  font-size: 16px;
  text-align: center;
  color: ${({ color }) => color};
`

const MenuButton = (props: ButtonProps) => {
  const { button } = useAppSelector((state) => state.design)
  const { onPress, title, disabled = false, style = {} } = props
  return (
    <ButtonContainer
      style={style}
      color={button.background}
      disabled={disabled}
      onPress={onPress}
    >
      <ButtonText color={button.color} disabled={disabled}>
        {title}
      </ButtonText>
    </ButtonContainer>
  )
}

export default MenuButton
