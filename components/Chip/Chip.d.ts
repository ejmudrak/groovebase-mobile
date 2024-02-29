export interface ChipProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  variant?: 'filled' | 'outlined';
  label: string;
  labelColor?: string;
  icon?: React.ReactNode;
}

export type BaseChipProps = ChipProps;
