import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';

export interface LoginFormProps {
  promptGoogleAuthRequest: (
    options?: AuthRequestPromptOptions | undefined,
  ) => Promise<AuthSessionResult>;
  email?: string;
  onChangeEmail: (value: string) => void;
  password?: string;
  onChangePassword: (value: string) => void;
}
