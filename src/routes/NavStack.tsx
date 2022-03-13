import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import Menu from '../screens/Menu'
import Play from '../screens/Play'
import { NavStackParamsType } from './types/route.type'
import Colors from '../screens/Colors'
import useDesign from '../hooks/useDesign'
import { StatusBar } from 'react-native'
import HeaderBack from '../components/Buttons/HeaderBack'

const Stack = createNativeStackNavigator<NavStackParamsType>()

const NavStack = () => {
  const { fontColor } = useDesign()
  const status = fontColor === 'white' ? 'light-content' : 'dark-content'
  const screenOptionStyle: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerTintColor: fontColor,
    headerShown: true,
    headerTitle: '',
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
            headerLeft: (props) => <HeaderBack {...props} />,
          }}
        />
        <Stack.Screen
          name="Colors"
          component={Colors}
          options={{
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default NavStack
