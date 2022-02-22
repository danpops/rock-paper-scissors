import React from 'react'
import { Pressable, Text } from '../components/Button'
import { MenuContainer } from '../components/Layout'
import { Heading1, Heading4 } from '../components/Text'
import { NavStackProps } from '../routes/types/route.type'

const Menu = ({ navigation }: NavStackProps) => {
  const onPressPlay = () => navigation.navigate('Play')

  return (
    <MenuContainer>
      <Heading1>Rock / Paper / Scissors</Heading1>
      <Heading4>danpops 2k22</Heading4>
      <Pressable onPress={onPressPlay}>
        <Text>Play</Text>
      </Pressable>
    </MenuContainer>
  )
}

export default Menu
