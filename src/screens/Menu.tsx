import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import { AppContainer } from '../components/Layout'
import { Heading1, Heading4 } from '../components/Text'
import { NavStackProps } from '../routes/types/route.type'

const Menu = ({ navigation }: NavStackProps) => {
  const onPressPlay = () => navigation.navigate('Play')

  return (
    <AppContainer>
      <Heading1>Rock / Paper / Scissors</Heading1>
      <Heading4>danpops 2k22</Heading4>
      <MenuButton onPress={onPressPlay} bgColor="#bae8e8" title="Play" />
    </AppContainer>
  )
}

export default Menu
