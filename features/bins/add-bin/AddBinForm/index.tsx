import useAddBinFormProps from './useAddBinFormProps';
import AddBinFormView from './AddBinForm.view';
import type { BaseAddBinFormProps } from './AddBinForm';

export default function AddBinForm(baseProps: BaseAddBinFormProps) {
  const props = useAddBinFormProps(baseProps);
  return <AddBinFormView {...props} />;
}
