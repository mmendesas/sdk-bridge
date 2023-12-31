import React from 'react';
import {StyleSheet} from 'react-native';
import WebView, {WebViewMessageEvent, WebViewProps} from 'react-native-webview';
import {useEventHub} from './useEventHub';

type SDKWebViewProps = WebViewProps;

export const TOKEN = '<<--WEB_INAPP_SDK-->>'; // same token as web

export const SDKWebView: React.FC<SDKWebViewProps> = props => {
  const eventHub = useEventHub();

  const handleInvoke = (command: any) => {
    const [method, params = []] = JSON.parse(command.args);

    // dispatch call of method
    eventHub.dispatch(method, params);
  };

  const handleMessage = (event: WebViewMessageEvent) => {
    const {data} = event.nativeEvent;

    if (data.indexOf(TOKEN) === 0) {
      const command = JSON.parse(data.replace(TOKEN, ''));
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
      startInLoadingState={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    elevation: 2,
  },
});
