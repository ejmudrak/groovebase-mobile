import useRemoveBinOptionProps from './useRemoveBinOptionProps';
import RemoveBinOptionView from './RemoveBinOption.view';
import type { BaseRemoveBinOptionProps } from './RemoveBinOption';

export default function RemoveBinOption(baseProps: BaseRemoveBinOptionProps) {
  const props = useRemoveBinOptionProps(baseProps);
  return <RemoveBinOptionView {...props} />;
}
