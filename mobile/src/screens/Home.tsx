import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Button} from '../components/Button';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Something here</Text>
      <Button
        text="click here"
        onPress={() => {
          console.log('button was clicked');
        }}
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
