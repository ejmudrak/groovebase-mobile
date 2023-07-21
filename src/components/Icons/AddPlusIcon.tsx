import { SvgProps } from '@src/types';

export default function AddPlusIcon({ color = '#000' }: SvgProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M12 5V19M5 12H19'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
