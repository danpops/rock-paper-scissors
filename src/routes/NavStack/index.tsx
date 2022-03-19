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
import { StatusBar } from 'react-native'
import HeaderBack from '../../components/Buttons/HeaderBack'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const Stack = createNativeStackNavigator<NavStackParamsType>()

const HeaderLeftPlay = (props: HeaderBackButtonProps) => (
  <HeaderBack {...props} />
)

const NavStack = () => {
  const { fontColor } = useDesign()
  const status = fontColor === 'white' ? 'light-content' : 'dark-content'
  const screenOptionStyle: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerTintColor: fontColor,
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
          }}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{ headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </>
  )
}

export default NavStack
