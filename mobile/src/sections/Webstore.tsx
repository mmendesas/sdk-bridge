import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import {Button} from '../components/Button';
import {product} from '../data';

export const Webstore = ({onBuyButtonClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>my webstore</Text>
      <Text style={styles.cardTitle}>Winter SALE</Text>

      <View style={styles.card}>
        <Image
          source={product.img}
          resizeMode="cover"
          style={{height: '80%'}}
        />

        <Text style={styles.cardTitle}>{product.name}</Text>
        <Text style={styles.cardPrice}>{product.price}</Text>
      </View>

      <Button
        text="BUY NOW"
        onPress={() => {
          console.log('button was clicked');
          onBuyButtonClick();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'teal',
  },
  card: {
    width: '70%',
    height: 380,
    backgroundColor: '#cdf4f6',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
