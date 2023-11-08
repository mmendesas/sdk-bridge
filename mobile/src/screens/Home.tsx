import React, {useEffect, useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {WebViewNavigation} from 'react-native-webview';

import {Webstore} from '../sections/Webstore';
import {SDKWebView} from '../inapp-sdk/SDKWebView';
import {SlideUpPane} from '../components/SlideUp';
import {useEventHub} from '../inapp-sdk/useEventHub';

export const Home = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const eventHub = useEventHub();

  const dimensions = useWindowDimensions();

  const handleNavigationChange = (navState: WebViewNavigation) => {
    const {url, title} = navState;
    console.log(`[inapp-sdk] - navigation change: ${url}-${title}`);
  };

  useEffect(() => {
    eventHub.subscribe('openFullscreen', () => {
      setFullscreen(true);
    });

    eventHub.subscribe('closeFullscreen', () => {
      setFullscreen(false);
      setShow(false);
    });

    return () => {
      eventHub.unsubscribe('openFullscreen');
      eventHub.unsubscribe('closeFullscreen');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Webstore onBuyButtonClick={() => setShow(true)} />

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
