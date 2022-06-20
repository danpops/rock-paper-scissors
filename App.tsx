import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import NavStack from './src/routes/NavStack';
import {store} from './src/store/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavStack />
      </Provider>
    </NavigationContainer>
  );
}
