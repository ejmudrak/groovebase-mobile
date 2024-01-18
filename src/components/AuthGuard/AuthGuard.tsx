import Text from '@src/components/Text';
import { View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useReauthenticate } from '@src/features/users/login/useReauthenticate';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [hasAttemptedReauth, setHasAttemptedReauth] = useState(false);
  const { navigate } = useNavigation();

  const {
    mutate: reauthenticate,
    isLoading: isReauthenticating,
    isSuccess: isReauthenticated,
    isError: isReauthenticatedError,
  } = useReauthenticate();

  useEffect(() => {
    reauthenticate();
  }, []);

  // Prevents UI from rendering if we haven't attempted to reauth yet
  useEffect(() => {
    if ((isReauthenticated || isReauthenticatedError) && !hasAttemptedReauth) {
      setHasAttemptedReauth(true);
    }
  }, [isReauthenticated, isReauthenticatedError, hasAttemptedReauth]);

  useEffect(() => {
    if (hasAttemptedReauth && isReauthenticatedError) {
      // TODO: Clear user from local storage and RQ?
    }
  }, [hasAttemptedReauth, isReauthenticatedError, navigate]);

  const isLoading = useMemo(() => {
    if (!hasAttemptedReauth) {
      return true;
    } else {
      return isReauthenticating;
    }
  }, [
    isReauthenticated,
    isReauthenticating,
    isReauthenticatedError,
    hasAttemptedReauth,
  ]);

  return <>{isLoading ? <Loading /> : children}</>;
}

const Loading = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='body1Bold'>Loading...</Text>
    </View>
  );
};
