import React from 'react'
import { StyleSheet, View } from 'react-native'
import MenuButton from '../../components/Buttons/MenuButton'
import TextButton from '../../components/Buttons/TextButton'
import RPSText from '../../components/RPSText'
import useDesign from '../../hooks/useDesign'
import { AppTitles } from '../../lib/titles'
import { NavStackProps } from '../../routes/types/route.type'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, t, fontColor } = useDesign()

  const rpsTitle = t(AppTitles.RPS_TITLE)
  const playTitle = t(AppTitles.PLAY_TITLE)
  const optionsTitle = t(AppTitles.OPTIONS_TITLE)

  const onPressPlay = () => navigation.navigate('Play')
  const onPressOptions = () => navigation.navigate('Options')

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <RPSText text={rpsTitle} heading={1} color={fontColor} />
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
})

export default Menu
