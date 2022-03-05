import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import { OptionsContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'

const Options: React.FC = () => {
  const { backgroundColor, colorOptions, fontColor } = useDesign()

  return (
    <OptionsContainer backgroundColor={backgroundColor}>
      <Heading1 color={fontColor} style={{ marginTop: 40 }}>
        Colors
      </Heading1>
      {colorOptions.map((button, index) => (
        <MenuButton key={index} title={button.title} onPress={button.onPress} />
      ))}
    </OptionsContainer>
  )
}

export default Options
