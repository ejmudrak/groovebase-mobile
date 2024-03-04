import { Animated, StyleProp } from 'react-native';
import vinylImages from './utils/vinyl-images';

export interface SpinningVinylProps {
  color?: keyof typeof vinylImages;
  image: any;
  spinWax: Animated.AnimatedInterpolation<string | number>;
  style?: StyleProp<any>;
}

export type BaseSpinningVinylProps = Pick<SpinningVinylProps, 'style', 'color'>;
