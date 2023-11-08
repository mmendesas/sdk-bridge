import React, {useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import {Button} from '../components/Button';
import {product} from '../data';
import {ErrorMessage} from '../components/ErrorMessage';

type WebstoreProps = {
  onBuyButtonClick: () => void;
};

export const Webstore: React.FC<WebstoreProps> = ({onBuyButtonClick}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>my webstore</Text>
      <Text style={styles.cardTitle}>Winter SALE</Text>

      <View style={styles.card}>
        <Image source={product.img} resizeMode="cover" style={styles.image} />
        <Text style={styles.cardTitle}>{product.name}</Text>
        <Text style={styles.cardPrice}>{product.price}</Text>
      </View>

      <Button
        disabled={hasError}
        text="BUY NOW"
        onPress={() => {
          onBuyButtonClick();
        }}
      />

      <ErrorMessage onError={() => setHasError(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '80%',
  },
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
