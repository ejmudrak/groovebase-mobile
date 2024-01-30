import useRemoveRecordOptionProps from './useRemoveRecordOptionProps';
import RemoveRecordOptionView from './RemoveRecordOption.view';
import type { BaseRemoveRecordOptionProps } from './RemoveRecordOption';

export default function RemoveRecordOption(
  baseProps: BaseRemoveRecordOptionProps,
) {
  const props = useRemoveRecordOptionProps(baseProps);
  return <RemoveRecordOptionView {...props} />;
}
