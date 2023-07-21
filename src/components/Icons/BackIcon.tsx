import { SvgProps } from '@src/types';

export default function AddPlusIcon({ color = '#000' }: SvgProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M19 12H5M5 12L12 19M5 12L12 5'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
