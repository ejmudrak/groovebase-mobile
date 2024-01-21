import useLocalLoginFormProps from './useLocalLoginFormProps';
import LocalLoginFormView from './LocalLoginForm.view';
import type { BaseLocalLoginFormProps } from './LocalLoginForm';

export default function LocalLoginForm(baseProps: BaseLocalLoginFormProps) {
  const props = useLocalLoginFormProps(baseProps);
  return <LocalLoginFormView {...props} />;
}
