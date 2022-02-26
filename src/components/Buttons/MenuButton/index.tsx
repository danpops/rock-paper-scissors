import React from 'react'
import styled from 'styled-components/native'

interface ButtonProps {
  onPress: () => void
  bgColor: string
  title?: string
  disabled?: boolean
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`

const MenuButton = (props: ButtonProps) => {
  const { onPress, bgColor, title, disabled = false } = props
  return (
    <ButtonContainer disabled={disabled} onPress={onPress} bgColor={bgColor}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}

export default MenuButton
