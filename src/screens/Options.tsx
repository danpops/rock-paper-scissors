import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import useDesign from '../hooks/useDesign'
import useUsername from '../hooks/useUsername'
import { AppTitles } from '../lib/titles'

const Options: React.FC = () => {
  const {
    backgroundColor,
    colorOptions,
    fontColor: color,
    t,
    toggleCaps,
  } = useDesign()
  const { onChangeUser, onSubmitUser, user } = useUsername()

  const title = t(AppTitles.OPTIONS_TITLE)
  const capsTitle = t(AppTitles.CAPS_TITLE)
  const usernameTitle = t(AppTitles.USERNAME_PLACEHOLDER)

  const onPressCaps = () => toggleCaps()

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.heading1, { color }]}>{title}</Text>
      <TextInput
        style={[styles.heading6, { color }]}
        value={t(user)}
        onChangeText={onChangeUser}
        onSubmitEditing={onSubmitUser}
        placeholder={usernameTitle}
      />
      <View style={styles.row}>
        {colorOptions.map((button, index) => (
          <MenuButton
            key={index}
            title={button.title}
            onPress={button.dispatchColor}
            style={styles.button}
          />
        ))}
      </View>
      <TextButton title={capsTitle} onPress={onPressCaps} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  heading1: {
    fontSize: 80,
    fontWeight: '100',
    marginBottom: 20,
  },
  heading6: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Options
