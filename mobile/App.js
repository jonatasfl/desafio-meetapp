import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Home from './src/Home';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Provider>
  );
}
