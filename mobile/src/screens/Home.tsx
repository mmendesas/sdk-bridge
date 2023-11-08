import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebViewNavigation} from 'react-native-webview';

import {Webstore} from '../sections/Webstore';
import {SDKWebView} from '../lib/SDKWebView';

export const Home = () => {
  const handleNavigationChange = (navState: WebViewNavigation) => {
    const {url, title} = navState;
    console.log(`[inapp-sdk] - navigation change: ${url}-${title}`);
  };

  return (
    <View style={styles.container}>
      <Webstore />
      <SDKWebView
        source={{uri: 'http://localhost:5173'}}
        javaScriptEnabled={true}
        onNavigationStateChange={handleNavigationChange}
      />
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
