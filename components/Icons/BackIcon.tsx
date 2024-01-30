import { SvgProps } from 'types';
import { Svg, Path } from 'react-native-svg';

export default function BackIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19 12H5M5 12L12 19M5 12L12 5'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
