import { Animated, Easing } from 'react-native';
import type { BaseSpinningVinylProps } from './SpinningVinyl';
import vinylImages from './utils/vinyl-images';

export default function useSpinningVinylProps({
  color = 'white',
  ...restOfBaseProps
}: BaseSpinningVinylProps) {
  const vinylSpinValue = new Animated.Value(0);

  // Initial animation setup
  Animated.loop(
    Animated.timing(vinylSpinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true, // Makes use of the native driver for performance
    }),
  ).start();

  // Interpolate values to rotate the vinyl
  const spinWax = vinylSpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const image = vinylImages[color as keyof typeof vinylImages].path;

  return { spinWax, image, ...restOfBaseProps };
}
