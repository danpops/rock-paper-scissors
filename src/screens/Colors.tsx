import React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import useEasterTitle from '../hooks/useEasterTitle'

const COLORS_TITLE = 'colors'

const Options: React.FC = () => {
  const { backgroundColor, colorOptions, fontColor } = useDesign()
  const { title, toggleCaps } = useEasterTitle(COLORS_TITLE)

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Heading1 onPress={toggleCaps} color={fontColor}>
        {title}
      </Heading1>
      {colorOptions.map((button, index) => (
        <MenuButton
          key={index}
          title={button.title}
          onPress={button.dispatchColor}
        />
      ))}
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
