import React from 'react';
import {StyleSheet} from 'react-native';
import WebView, {WebViewMessageEvent, WebViewProps} from 'react-native-webview';

type SDKWebViewProps = WebViewProps;

export const TOKEN = '<<--WEB_INAPP_SDK-->>'; // same token as web

export const SDKWebView: React.FC<SDKWebViewProps> = props => {
  const handleInvoke = command => {
    const [method, params = []] = JSON.parse(command.args);

    // dispatch call of method
    console.log(`[inapp-sdk] calling method: ${method}`);
  };

  const handleMessage = (event: WebViewMessageEvent) => {
    const {data} = event.nativeEvent;

    if (data.indexOf(TOKEN) === 0) {
      const command = JSON.parse(data.replace(TOKEN, ''));
      console.log('[inapp-sdk]: listener >>', command);

      if (command.type === 'invoke') {
        handleInvoke(command);
      }
    }
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
