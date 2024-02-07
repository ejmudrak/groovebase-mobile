import useAddRecordFormProps from './useAddRecordFormProps';
import AddRecordFormView from './AddRecordForm.view';
import type { BaseAddRecordFormProps } from './AddRecordForm';

export default function AddRecordForm(baseProps: BaseAddRecordFormProps) {
  const props = useAddRecordFormProps(baseProps);
  return <AddRecordFormView {...props} />;
}
