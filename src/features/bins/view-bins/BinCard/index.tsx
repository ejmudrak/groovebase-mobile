import useBinCardProps from './useBinCardProps';
import BinCardView from './BinCard.view';
import type { BaseBinCardProps } from './BinCard';

export default function BinCard(baseProps: BaseBinCardProps) {
  const props = useBinCardProps(baseProps);
  return <BinCardView {...props} />;
}
