import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'

import Menu from '../screens/Menu'
import Play from '../screens/Play'
import { NavStackParamsType } from '../types/RouteType'

const Stack = createNativeStackNavigator<NavStackParamsType>()

const screenOptionStyle: NativeStackNavigationOptions = {
  headerTransparent: true,
  headerTintColor: 'white',
}

const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          headerTitle: '',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  )
}

export default NavStack
