import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import { OptionsContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'
import useEasterTitle from '../hooks/useEasterTitle'

const COLORS_TITLE = 'colors'

const Options: React.FC = () => {
  const { backgroundColor, colorOptions, fontColor } = useDesign()
  const { title, toggleCaps } = useEasterTitle(COLORS_TITLE)

  return (
    <OptionsContainer backgroundColor={backgroundColor}>
      <Heading1 onPress={toggleCaps} color={fontColor}>
        {title}
      </Heading1>
      {colorOptions.map((button, index) => (
        <MenuButton
          key={index}
          title={button.title}
          onPress={button.dispatchColor}
        />
      ))}
    </OptionsContainer>
  )
}

export default Options
