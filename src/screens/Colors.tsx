import React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'

const COLORS_TITLE = 'colors'
const CAPS_TITLE = 'caps'

const Options: React.FC = () => {
  const { backgroundColor, colorOptions, fontColor, t, toggleCaps } =
    useDesign()

  const title = t(COLORS_TITLE)
  const capsTitle = t(CAPS_TITLE)
  const onPressCaps = () => toggleCaps()

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Heading1 color={fontColor}>{title}</Heading1>
      {colorOptions.map((button, index) => (
        <MenuButton
          key={index}
          title={button.title}
          onPress={button.dispatchColor}
        />
      ))}
      <TextButton title={capsTitle} onPress={onPressCaps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})

export default Options
