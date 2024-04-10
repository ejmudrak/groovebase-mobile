import { SvgProps } from 'types';
import { Path, Svg } from 'react-native-svg';

export default function PlaceholderCircleIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
