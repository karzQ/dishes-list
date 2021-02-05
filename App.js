import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';

import { store, persistor } from './src/config/reduxConfig';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/router';

const App = () => {

  const Loading = () => {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {/* <StatusBar options={} /> */}
        <Navigation />
      </PersistGate>
    </StoreProvider>
  );
}


export default App;