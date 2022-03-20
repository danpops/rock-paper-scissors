import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useDesign from '../../../hooks/useDesign'
import RPSText from '../../RPSText'

interface TouchableProps {
  onPress: () => void
  title?: string
  disabled?: boolean
  color?: string
  style?: object
}

const TextButton = (props: TouchableProps) => {
  const { fontColor: color } = useDesign()
  const { onPress, title, disabled = false, style = {} } = props
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <RPSText text={title} heading={7} color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})

export default TextButton
