import { SvgProps } from '@src/types';
import { Path, Svg } from 'react-native-svg';

export default function CheckIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M20 6L9 17L4 12'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
