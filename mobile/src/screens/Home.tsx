import React, {useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {WebViewNavigation} from 'react-native-webview';

import {Webstore} from '../sections/Webstore';
import {SDKWebView} from '../lib/SDKWebView';
import {SlideUpPane} from '../components/SlideUp';

export const Home = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const dimensions = useWindowDimensions();

  const handleNavigationChange = (navState: WebViewNavigation) => {
    const {url, title} = navState;
    console.log(`[inapp-sdk] - navigation change: ${url}-${title}`);
  };

  return (
    <View style={styles.container}>
      <Webstore
        onBuyButtonClick={() => {
          setShow(true);

          setTimeout(() => {
            setFullscreen(true);
          }, 1500);
        }}
      />

      <SlideUpPane show={show} height={fullscreen ? dimensions.height : 280}>
        <SDKWebView
          source={{uri: 'http://localhost:5173'}}
          javaScriptEnabled={true}
          onNavigationStateChange={handleNavigationChange}
        />
      </SlideUpPane>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
  },
});
