import React from 'react'
import MenuButton from '../components/Buttons/MenuButton'
import { OptionsContainer } from '../components/Layout'
import { Heading1 } from '../components/Text'
import useDesign from '../hooks/useDesign'

const COLORS_TITLE = 'colors'

const Options: React.FC = () => {
  const [isEaster, setEaster] = React.useState(false)
  const { backgroundColor, colorOptions, fontColor } = useDesign()

  const fontEaster = () => setEaster(!isEaster)

  return (
    <OptionsContainer backgroundColor={backgroundColor}>
      <Heading1 onPress={fontEaster} color={fontColor}>
        {isEaster ? COLORS_TITLE.toUpperCase() : COLORS_TITLE}
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
