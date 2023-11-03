import React from 'react';
import {StyleSheet} from 'react-native';
import WebView, {WebViewProps} from 'react-native-webview';

type SDKWebViewProps = WebViewProps;

export const SDKWebView: React.FC<SDKWebViewProps> = props => {
  const handleMessage = () => {};

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
