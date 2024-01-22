import useEditRecordFormProps from './useEditRecordFormProps';
import EditRecordFormView from './EditRecordForm.view';
import { BaseEditRecordFormProps, EditRecordFormProps } from './EditRecordForm';
export type { EditRecordFormProps };

export default function EditRecordForm(baseProps: BaseEditRecordFormProps) {
  const props = useEditRecordFormProps(baseProps);
  return <EditRecordFormView {...props} />;
}
