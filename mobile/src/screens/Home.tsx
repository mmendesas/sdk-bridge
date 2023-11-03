import React from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

import {Webstore} from '../sections/Webstore';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Webstore />
      <WebView source={{uri: 'www.google.com'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
});
