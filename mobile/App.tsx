import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Something here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default App;
