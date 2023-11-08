import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

type SlideUpProps = {
  height?: number;
  show: boolean;
  children: React.ReactNode;
};

export const SlideUpPane: React.FC<SlideUpProps> = ({
  height = 0,
  show,
  children,
}) => {
  const animatedValue = useRef(new Animated.Value(0));

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  useEffect(() => {
    const slideUpConfig = {
      toValue: 1,
      duration: 450,
      easing: Easing.bezier(0.28, 0, 0.63, 1),
      useNativeDriver: false,
    };

    const slideDownConfig = {
      toValue: 0,
      duration: 350,
      easing: Easing.cubic,
      useNativeDriver: false,
    };

    const slideConfig = show ? slideUpConfig : slideDownConfig;

    Animated.timing(animatedValue.current, slideConfig).start();
  }, [show]);

  return (
    <Animated.View style={[styles.bottomPane, {height, bottom}]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomPane: {
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    elevation: 10,
    backgroundColor: '#afaffa',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
