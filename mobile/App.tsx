import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Home} from './src/screens/Home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  );
}

export default App;
