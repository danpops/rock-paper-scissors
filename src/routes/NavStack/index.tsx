import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import Menu from '../../screens/Menu'
import Play from '../../screens/Play'
import { NavStackParamsType } from '../types/route.type'
import Options from '../../screens/Options'
import useDesign from '../../hooks/useDesign'
import { Button, StatusBar } from 'react-native'
import HeaderBack from '../../components/Buttons/HeaderBack'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearMove, toggleHelper } from '../../store/slices/game.reducer'
import { AppTitles } from '../../lib/titles'

const Stack = createNativeStackNavigator<NavStackParamsType>()

const HeaderLeftPlay = (props: HeaderBackButtonProps) => (
  <HeaderBack {...props} />
)

const HeaderRightHelp = () => {
  const dispatch = useAppDispatch()
  const { helper, moveVisible } = useAppSelector((state) => state.game)
  const { color, t } = useDesign()

  const closeTitle = t(AppTitles.CLOSE_BUTTON)
  const helpTitle = t(AppTitles.HELP_BUTTON)

  const onPress = () =>
    moveVisible ? dispatch(clearMove()) : dispatch(toggleHelper(!helper))

  return (
    <Button
      onPress={onPress}
      title={moveVisible ? closeTitle : helpTitle}
      color={color}
    />
  )
}

const NavStack = () => {
  const { color } = useDesign()
  const status = color === 'white' ? 'light-content' : 'dark-content'
  const screenOptionStyle: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerTintColor: color,
    headerShown: false,
  }

  return (
    <>
      <StatusBar barStyle={status} />
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{
            gestureEnabled: false,
            headerLeft: HeaderLeftPlay,
            headerShown: true,
            headerTitle: '',
            headerRight: HeaderRightHelp,
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{
            headerShown: true,
            headerBackTitle: '',
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default NavStack
