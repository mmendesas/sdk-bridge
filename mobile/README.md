# SDK-bridge (mobile)

Mobile native app implementation of SDK-Bridge

### Features

- Fake webstore page with one product
- `inapp-sdk` implementation to enable communication with `web-sdk`

### Getting started

Start your native application

```sh
npx react-native run-android
```

Enable port to access local app:

```sh
adb reverse tcp:5173 tcp:5173
```
