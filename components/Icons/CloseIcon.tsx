import { SvgProps } from 'types';
import { Path, Svg } from 'react-native-svg';

export default function CloseIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18 6L6 18M6 6L18 18'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
