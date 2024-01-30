import type { BaseBinsListProps } from './BinsList';

export default function useBinsListProps({
  ...restOfBaseProps
}: BaseBinsListProps) {
  return { ...restOfBaseProps };
}
