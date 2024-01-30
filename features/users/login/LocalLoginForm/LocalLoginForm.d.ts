export interface LocalLoginFormProps {
  email: string;
  onChangeEmail: (newVal: string) => void;
  password: string;
  onChangePassword: (newVal: string) => void;
  logIn: () => void;
  isLoggingIn: boolean;
  error: Error | null;
  isError: boolean;
}

export type BaseLocalLoginFormProps = Pick<LocalLoginFormProps>;
