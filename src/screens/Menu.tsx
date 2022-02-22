import React from 'react'
import { Pressable, Text } from '../components/Button'
import { MenuContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import { NavStackProps } from '../types/RouteType'

const Menu = ({ navigation }: NavStackProps) => {
  const onPressPlay = () => navigation.navigate('Play')

  return (
    <MenuContainer>
      <Heading1>Rock / Paper / Scissors</Heading1>
      <Pressable onPress={onPressPlay}>
        <Text>Play</Text>
      </Pressable>
    </MenuContainer>
  )
}

export default Menu
