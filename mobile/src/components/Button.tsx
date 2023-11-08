import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  onPress,
  text,
}) => {
  const disabledButton = {
    backgroundColor: disabled ? '#bbb' : 'teal',
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabledButton]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'teal',
    width: '70%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
