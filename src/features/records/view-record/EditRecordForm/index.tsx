import useEditRecordFormProps from './useEditRecordFormProps';
import EditRecordFormView from './EditRecordForm.view';
import { BaseEditRecordFormProps } from './EditRecordForm';

export default function EditRecordForm(baseProps: BaseEditRecordFormProps) {
  const props = useEditRecordFormProps(baseProps);
  return <EditRecordFormView {...props} />;
}
