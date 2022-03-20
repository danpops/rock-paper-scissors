import React from 'react'
import { Text, TextProps } from 'react-native'
import { getStyle } from './styles'

interface RPSTextProps extends TextProps {
  text: string | number | undefined
  heading?: number
  color?: string
}

const RPSText = (props: RPSTextProps) => {
  const { text, heading = 0, color = undefined, ...textProps } = props

  return (
    <Text style={[getStyle(heading), { color }]} {...textProps}>
      {text}
    </Text>
  )
}

export default RPSText
