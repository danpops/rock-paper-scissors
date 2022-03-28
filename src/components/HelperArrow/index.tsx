import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { FadeOut } from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
import { AppTitles } from '../../lib/titles'
import { textStyles } from '../RPSText/styles'
import useHelperArrowAnimation from './animations/useHelperArrowAnimation'

const HelperArrow = () => {
  const { color, t } = useDesign()
  const { arrowContainerStyle, arrowStyle, helper } = useHelperArrowAnimation()

  const title = t(AppTitles.HELPER)

  return (
    <>
      {helper && (
        <Animated.View
          exiting={FadeOut}
          style={[styles.arrowContainer, arrowContainerStyle]}
        >
          <Animated.Image
            style={[styles.arrowImage, arrowStyle]}
            source={require('../../assets/arrow.png')}
          />
          <Animated.Text style={[textStyles.small, styles.text, { color }]}>
            {title}
          </Animated.Text>
        </Animated.View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  arrowImage: {
    width: 60,
    height: 60,
    zIndex: 3,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 120,
    left: 0,
    right: 0,
  },
  text: {
    marginTop: 10,
    opacity: 0.1,
  },
})

export default HelperArrow
