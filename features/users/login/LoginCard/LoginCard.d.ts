import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';

export interface LoginFormProps {
  promptGoogleAuthRequest: (
    options?: AuthRequestPromptOptions | undefined,
  ) => Promise<AuthSessionResult>;
  signIn: () => Promise<void>;
  logout: () => void;
  error: Error | null;
  userInfo: any;
}
