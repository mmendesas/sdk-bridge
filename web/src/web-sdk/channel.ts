import { EventHub } from './EventHub';

export const TOKEN = '<<--WEB_INAPP_SDK-->>';

window.WebInAppSDKChannel = Object.assign(new EventHub(), {
  sendMessage(json: any) {
    if (!window.ReactNativeWebView) {
      throw new Error('No React Native Webview detected');
    }

    window.ReactNativeWebView.postMessage(TOKEN + JSON.stringify(json));
  },
});

export default window.WebInAppSDKChannel;
