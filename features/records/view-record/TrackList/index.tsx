import TrackListView from './TrackList.view';
import { TrackListProps } from './TrackList.view';

export default function TrackList(props: TrackListProps) {
  return <TrackListView {...props} />;
}
