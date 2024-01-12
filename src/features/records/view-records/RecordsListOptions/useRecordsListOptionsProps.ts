import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogoutMutation } from '@src/features/users/useLogout';

export default function useRecordsListOptionsProps() {
  const { mutate: logOut, isLoading: isLoggingOut } = useLogoutMutation();

  const handleLogout = () => {
    // logs out via the API and redirects
    logOut();

    // clears local storage set by Google SSO
    AsyncStorage.removeItem('user');
  };

  return { handleLogout, isLoggingOut };
}
