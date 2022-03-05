import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import { AppContainer } from '../components/Layout'
import { Heading1, Heading4 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import { NavStackProps } from '../routes/types/route.type'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, fontColor } = useDesign()

  const onPressPlay = () => navigation.navigate('Play')
  const onPressOptions = () => navigation.navigate('Options')

  return (
    <AppContainer backgroundColor={backgroundColor}>
      <Heading1 color={fontColor}>Rock / Paper / Scissors</Heading1>
      <Heading4 color={fontColor}>danpops 2k22</Heading4>
      <MenuButton onPress={onPressPlay} title="Play" />
      <MenuButton onPress={onPressOptions} title="Options" />
    </AppContainer>
  )
}

export default Menu
