import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogoutMutation } from '@features/users/hooks/useLogout';
import { router } from 'expo-router';

export default function useRecordsListOptionsProps() {
  const { mutate: logOut, isLoading: isLoggingOut } = useLogoutMutation();

  const handleLogout = () => {
    // logs out via the API and redirects
    logOut();

    // clears local storage set by Google SSO
    AsyncStorage.removeItem('user');
  };

  const handleDeleteAccount = () => {
    router.replace('delete-account')
  }


  return { handleLogout, isLoggingOut, handleDeleteAccount };
}
