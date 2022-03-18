import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../lib/colors'

interface ButtonProps {
  onPress: () => void
  title?: string
  disabled?: boolean
  color?: string
  style?: object
}

const MenuButton = (props: ButtonProps) => {
  const { onPress, title, disabled = false, style = {} } = props
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 0,
    marginTop: 25,
    width: 120,
    height: 40,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
})

export default MenuButton
