/*
  @component SpinningVinyl
  @description
    A rotating vinyl record component
*/

import { StyleSheet, Animated } from 'react-native';
import type { SpinningVinylProps } from './SpinningVinyl';

export default function SpinningVinyl({
  image,
  spinWax,
  style,
}: SpinningVinylProps) {
  const rotateStyle = { transform: [{ rotate: spinWax }] };

  return (
    <Animated.Image
      source={image}
      style={[styles.container, rotateStyle, style]}
      alt='rotating vinyl record'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
  },
});
