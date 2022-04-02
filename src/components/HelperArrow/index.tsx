import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { FadeOut } from 'react-native-reanimated'
import useDesign from '../../hooks/useDesign'
import { AppTitles } from '../../lib/titles'
import { textStyles } from '../RPSText/styles'
import useHelperArrowAnimation from './animations/useHelperArrowAnimation'
import Arrow from '../../assets/arrow.svg'

const HelperArrow = () => {
  const { color, t } = useDesign()
  const { arrowContainerStyle, arrowStyle, helper } = useHelperArrowAnimation()

  const arrowProps = {
    width: 70,
    height: 50,
    fill: color,
    style: [styles.arrowIcon],
  }

  const title = t(AppTitles.HELPER)

  return (
    <>
      {helper && (
        <Animated.View
          exiting={FadeOut}
          style={[styles.arrowContainer, arrowContainerStyle]}
        >
          <Animated.View style={arrowStyle}>
            <Arrow {...arrowProps} />
          </Animated.View>
          <Animated.Text style={[textStyles.small, styles.text, { color }]}>
            {title}
          </Animated.Text>
        </Animated.View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  arrowIcon: {
    width: 60,
    height: 60,
    zIndex: 3,
    transform: [{ rotate: '90deg' }],
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
    opacity: 0.3,
  },
})

export default HelperArrow
