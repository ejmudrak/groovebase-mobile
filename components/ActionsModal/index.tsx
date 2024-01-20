import { BaseActionsModalProps } from './ActionsModal';
import ActionsModalView from './ActionsModal.view';
import useActionsModalProps from './useActionsModalProps';

export default function ActionsModal(baseProps: BaseActionsModalProps) {
  const props = useActionsModalProps(baseProps);
  return <ActionsModalView {...props} />;
}
