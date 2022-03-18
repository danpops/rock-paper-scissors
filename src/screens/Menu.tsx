import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import useDesign from '../hooks/useDesign'
import { NavStackProps } from '../routes/types/route.type'

const RPS_TITLE = 'rock / paper / scissors.'
const PLAY_TITLE = 'play'
const OPTIONS_TITLE = 'options'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, t, fontColor } = useDesign()

  const rpsTitle = t(RPS_TITLE)
  const playTitle = t(PLAY_TITLE)
  const optionsTitle = t(OPTIONS_TITLE)

  const onPressPlay = () => navigation.navigate('Play')
  const onPressOptions = () => navigation.navigate('Options')

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.heading1, { color: fontColor }]}>{rpsTitle}</Text>
      <MenuButton title={playTitle} onPress={onPressPlay} />
      <TextButton title={optionsTitle} onPress={onPressOptions} />
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
  heading1: {
    fontSize: 80,
    fontWeight: '100',
    marginBottom: 20,
  },
})

export default Menu
