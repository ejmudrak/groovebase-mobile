import useUpdateRecordButtonProps from './useUpdateRecordButtonProps';
import UpdateRecordButtonView from './UpdateRecordButton.view';
import type { BaseUpdateRecordButtonProps } from './UpdateRecordButton';

export default function UpdateRecordButton(
  baseProps: BaseUpdateRecordButtonProps,
) {
  const props = useUpdateRecordButtonProps(baseProps);
  return <UpdateRecordButtonView {...props} />;
}
