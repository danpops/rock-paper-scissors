import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'

import Menu from '../screens/Menu'
import Play from '../screens/Play'
import { NavStackParamsType } from './types/route.type'

const Stack = createNativeStackNavigator<NavStackParamsType>()

const screenOptionStyle: NativeStackNavigationOptions = {
  headerTransparent: true,
  headerTintColor: 'white',
  headerShown: false,
}

const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          headerBackVisible: false,
          gestureEnabled: false,
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default NavStack
