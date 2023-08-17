import { SvgProps } from '@src/types';

export default function ChevronDownIcon({ color = '#000' }: SvgProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M6 9L12 15L18 9'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
