import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Home} from './src/screens/Home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafcf6',
  },
});

export default App;
