import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { StatusBar } from 'react-native';

import Home from './src/Home';
import { store, persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </PersistGate>

    </Provider>
  );
}
