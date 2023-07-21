import { SvgProps } from '@src/types';

export default function CloseIcon({ color = '#000' }: SvgProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M18 6L6 18M6 6L18 18'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
