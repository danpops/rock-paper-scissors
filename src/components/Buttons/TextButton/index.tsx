import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useDesign from '../../../hooks/useDesign'

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
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
})

export default TextButton
