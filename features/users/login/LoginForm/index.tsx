import useLoginFormProps from './useLoginFormProps';
import LoginFormView from './LoginForm.view';

export default function LoginForm() {
  const props = useLoginFormProps();
  return <LoginFormView {...props} />;
}
