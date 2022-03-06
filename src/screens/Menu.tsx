import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import TextButton from '../components/Buttons/TextButton'
import { AppContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import { NavStackProps } from '../routes/types/route.type'

const RPS_TITLE = 'rock / paper / scissors'

const Menu = ({ navigation }: NavStackProps) => {
  const { backgroundColor, fontColor } = useDesign()
  const [isEaster, setEaster] = React.useState(false)
  const onPressPlay = () => navigation.navigate('Play')
  const onPressOptions = () => navigation.navigate('Colors')
  const fontEaster = () => setEaster(!isEaster)

  return (
    <AppContainer backgroundColor={backgroundColor}>
      <Heading1
        onPress={fontEaster}
        style={{ marginBottom: 20 }}
        color={fontColor}
      >
        {isEaster ? RPS_TITLE.toUpperCase() : RPS_TITLE}
      </Heading1>
      <MenuButton onPress={onPressPlay} title="play" />
      <TextButton title="colors" onPress={onPressOptions} />
    </AppContainer>
  )
}

export default Menu
