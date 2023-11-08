import React, {useEffect, useState} from 'react';
import {useEventHub} from '../inapp-sdk/useEventHub';
import {StyleSheet, Text, View} from 'react-native';

type ErrorMessageProps = {
  onError?: () => void;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({onError}) => {
  const eventHub = useEventHub();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    eventHub.subscribe('success', () => {
      setSuccess(true);
    });

    eventHub.subscribe('error', (data): void => {
      setError(data);
      onError?.();
    });

    return () => {
      eventHub.unsubscribe('success');
      eventHub.unsubscribe('error');
    };
  }, []);

  return (
    <View>
      {success && (
        <Text style={styles.successText}>Thank you for Shopping!</Text>
      )}
      {error && (
        <View style={styles.container}>
          <Text style={styles.errorText}>Something went wrong</Text>
          <Text style={styles.reasonText}>reason: {error.type}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  reasonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  successText: {
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 24,
    color: 'black',
  },
  errorText: {
    fontWeight: 'bold',
    marginTop: 40,
    color: 'red',
    fontSize: 24,
  },
});
