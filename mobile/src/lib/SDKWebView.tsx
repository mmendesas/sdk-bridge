import React from 'react';
import {StyleSheet} from 'react-native';
import WebView, {WebViewMessageEvent, WebViewProps} from 'react-native-webview';

type SDKWebViewProps = WebViewProps;

export const SDKWebView: React.FC<SDKWebViewProps> = props => {
  const handleMessage = (event: WebViewMessageEvent) => {
    const {data} = event.nativeEvent;

    console.log('[inapp-sdk]: listener >>', data);
  };

  return (
    <WebView
      {...props}
      style={styles.container} //
      onMessage={handleMessage}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
  },
});
