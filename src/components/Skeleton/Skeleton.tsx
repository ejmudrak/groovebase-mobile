import { colors } from '@src/utils/styles/colors';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export interface SkeletonProps {
  style?: any;
}

export default function Skeleton({
  style = { height: 80, width: '100%' },
}: SkeletonProps) {
  const opacity = useSharedValue(0.25);

  // Increases opacity from 0.25 to 0.5 and back to 0.25 using reverse timing animation
  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.skeleton, animatedStyle, style]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: colors.gray[200],
  },
});
