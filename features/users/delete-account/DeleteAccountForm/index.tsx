import useDeleteAccountFormProps from './useDeleteAccountFormProps';
import DeleteAccountFormView from './DeleteAccountForm.view';
import type { BaseDeleteAccountFormProps } from './DeleteAccountForm';

export default function DeleteAccountForm(baseProps: BaseDeleteAccountFormProps) {
  const props = useDeleteAccountFormProps(baseProps);
  return <DeleteAccountFormView {...props} />;
}
