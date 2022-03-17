import React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import { NavStackProps } from '../routes/types/route.type'

const RPS_TITLE = 'rock / paper / scissors'
const PLAY_TITLE = 'play'
const SETTINGS_TITLE = 'settings'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, t, fontColor } = useDesign()

  const rpsTitle = t(RPS_TITLE)
  const playTitle = t(PLAY_TITLE)
  const settingsTitle = t(SETTINGS_TITLE)

  const onPressPlay = () => navigation.navigate('Play')
  const onPressSettings = () => navigation.navigate('Colors')

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Heading1 style={{ marginBottom: 20 }} color={fontColor}>
        {rpsTitle}
      </Heading1>
      <MenuButton title={playTitle} onPress={onPressPlay} />
      <TextButton title={settingsTitle} onPress={onPressSettings} />
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

export default Menu
