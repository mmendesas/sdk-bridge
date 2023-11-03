import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Webstore} from '../sections/Webstore';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Webstore />
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
