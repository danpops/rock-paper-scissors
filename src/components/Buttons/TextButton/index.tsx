import React from 'react'
import styled from 'styled-components/native'
import useDesign from '../../../hooks/useDesign'
import { Heading6 } from '../../Text'

interface TouchableProps {
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

const CustomTouchable = styled.TouchableOpacity<TouchableProps>`
  margin-top: 25px;
`

const TextStyle = styled(Heading6)<TextProps>`
  font-size: 16px;
  text-align: center;
  color: ${({ color }) => color};
`

const TextButton = (props: TouchableProps) => {
  const { fontColor } = useDesign()
  const { onPress, title, disabled = false, style = {} } = props
  return (
    <CustomTouchable onPress={onPress} disabled={disabled} style={style}>
      <TextStyle color={fontColor}>{title}</TextStyle>
    </CustomTouchable>
  )
}

export default TextButton
