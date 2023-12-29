import useBinsListProps from './useBinsListProps';
import BinsListView from './BinsList.view';
import type { BaseBinsListProps } from './BinsList';

export default function BinsList(baseProps: BaseBinsListProps) {
  const props = useBinsListProps(baseProps);
  return <BinsListView {...props} />;
}
