import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import useDesign from '../hooks/useDesign'

const COLORS_TITLE = 'options'
const CAPS_TITLE = 'caps'

const Options: React.FC = () => {
  const { backgroundColor, colorOptions, fontColor, t, toggleCaps } =
    useDesign()

  const title = t(COLORS_TITLE)
  const capsTitle = t(CAPS_TITLE)
  const onPressCaps = () => toggleCaps()

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.heading1, { color: fontColor }]}>{title}</Text>
      <View style={styles.row}>
        {colorOptions.map((button, index) => (
          <MenuButton
            key={index}
            title={button.title}
            onPress={button.dispatchColor}
            style={{ margin: 10 }}
          />
        ))}
      </View>
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
    flexWrap: 'wrap',
  },
  heading1: {
    fontSize: 80,
    fontWeight: '100',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Options
