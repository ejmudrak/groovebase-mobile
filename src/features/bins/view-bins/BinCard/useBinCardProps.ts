import type { BaseBinCardProps } from './BinCard';

export default function useBinCardProps({
  ...restOfBaseProps
}: BaseBinCardProps) {
  return { ...restOfBaseProps };
}
