import { SvgProps } from '@src/types';
import { Path, Svg } from 'react-native-svg';

export default function CollectionIcon({ color = '#000' }: SvgProps) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 3C12 4.10457 9.53757 5 6.5 5C3.46243 5 1 4.10457 1 3M12 3C12 1.89543 9.53757 1 6.5 1C3.46243 1 1 1.89543 1 3M12 3V4.5M1 3V15C1 16.1046 3.46243 17 6.5 17M6.5 9C6.33145 9 6.16468 8.99724 6 8.99185C3.19675 8.89999 1 8.04328 1 7M6.5 13C3.46243 13 1 12.1046 1 11M21 9.5C21 10.6046 18.5376 11.5 15.5 11.5C12.4624 11.5 10 10.6046 10 9.5M21 9.5C21 8.39543 18.5376 7.5 15.5 7.5C12.4624 7.5 10 8.39543 10 9.5M21 9.5V17C21 18.1046 18.5376 19 15.5 19C12.4624 19 10 18.1046 10 17V9.5M21 13.25C21 14.3546 18.5376 15.25 15.5 15.25C12.4624 15.25 10 14.3546 10 13.25'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
