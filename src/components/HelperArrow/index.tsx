import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { FadeOut } from 'react-native-reanimated'
import useHelperArrowAnimation from './animations/useHelperArrowAnimation'

const HelperArrow = () => {
  const { arrowContainerStyle, arrowStyle, helper } = useHelperArrowAnimation()

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
    top: 70,
    left: 0,
    right: 0,
  },
})

export default HelperArrow
