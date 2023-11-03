import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Webstore} from '../sections/Webstore';
import {SDKWebView} from '../lib/SDKWebView';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Webstore />
      <SDKWebView source={{uri: 'www.google.com'}} />
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
