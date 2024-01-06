// App.jsx
import Toast, {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from 'react-native-toast-message';
import { colors } from './styles/colors';
import { typography } from './styles/typography';

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.green[500] }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        ...typography.body2Bold,
      }}
      text2Style={{
        ...typography.body3,
        color: colors.black[400],
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: colors.red[500] }}
      text1Style={{
        ...typography.body2Bold,
      }}
      text2Style={{
        color: colors.black[400],
      }}
    />
  ),
};
