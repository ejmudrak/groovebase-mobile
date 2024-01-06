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

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 500 }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.skeleton, animatedStyle, style]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: 'gray',
  },
});
