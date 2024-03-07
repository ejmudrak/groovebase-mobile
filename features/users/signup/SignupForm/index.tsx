import useSignupFormProps from './useSignupFormProps';
import SignupFormView from './SignupForm.view';
import type { BaseSignupFormProps } from './SignupForm';

export default function SignupForm(baseProps: BaseSignupFormProps) {
  const props = useSignupFormProps(baseProps);
  return <SignupFormView {...props} />;
}
