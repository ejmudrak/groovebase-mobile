import { SvgProps } from 'types';
import { Path, Svg } from 'react-native-svg';

export default function SortIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
