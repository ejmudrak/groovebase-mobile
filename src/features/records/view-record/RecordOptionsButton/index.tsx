import RecordOptionsButtonView from './RecordOptionsButton.view';
import useRecordOptionsButtonProps from './useRecordOptionsButton';
// import type { BaseRecordOptionsButtonProps } from './RecordOptionsButton';

export default function RecordOptionsButton() {
  const props = useRecordOptionsButtonProps();
  return <RecordOptionsButtonView {...props} />;
}
