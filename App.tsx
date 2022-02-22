import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import NavStack from './src/routes/NavStack'
import { store } from './src/store/store'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <NavStack />
      </Provider>
    </NavigationContainer>
  )
}
