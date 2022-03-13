import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import { AppContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import useEasterTitle from '../hooks/useEasterTitle'
import { NavStackProps } from '../routes/types/route.type'

const RPS_TITLE = 'rock / paper / scissors'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, fontColor } = useDesign()
  const { title, toggleCaps } = useEasterTitle(RPS_TITLE)
  const onPressPlay = () => navigation.navigate('Play')
  const onPressOptions = () => navigation.navigate('Colors')

  return (
    <AppContainer backgroundColor={backgroundColor}>
      <Heading1
        onPress={toggleCaps}
        style={{ marginBottom: 20 }}
        color={fontColor}
      >
        {title}
      </Heading1>
      <MenuButton onPress={onPressPlay} title="play" />
      <TextButton title="colors" onPress={onPressOptions} />
    </AppContainer>
  )
}

export default Menu
