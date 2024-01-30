import useActionButtonProps from './useActionButtonProps';
import ActionButtonView from './ActionButton.view';
import type { BaseActionButtonProps } from './ActionButton';

export default function ActionButton(baseProps: BaseActionButtonProps) {
  const props = useActionButtonProps(baseProps);
  return <ActionButtonView {...props} />;
}
