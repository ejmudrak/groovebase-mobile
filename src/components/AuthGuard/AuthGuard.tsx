import { useReauthenticate } from '@src/features/users/login/useReauthenticate';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import Text from '@src/components/Text';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [hasAttemptedReauth, setHasAttemptedReauth] = useState(false);

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
  }, [isReauthenticated, hasAttemptedReauth]);

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
    <View>
      <Text>Loading...</Text>
    </View>
  );
};
