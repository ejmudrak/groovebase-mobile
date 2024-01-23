/* 
  File: (app)/_layout.tsx
  Description: 
    Only require authentication within the (app) group's layout as users
    need to be able to access the sign-in page to sign in again

    Sets up an auth guard that handles reauthenticating the user with the Groovebase API
*/

import { Redirect, Stack } from 'expo-router';
import { useCurrentUser } from '@features/users/useCurrentUser';
import { useReauthenticate } from '@features/users/login/useReauthenticate';
import { useEffect, useMemo, useState } from 'react';

export default function AppLayout() {
  const user = useCurrentUser();
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
  }, [isReauthenticated, isReauthenticatedError, hasAttemptedReauth]);

  useEffect(() => {
    if (hasAttemptedReauth && isReauthenticatedError) {
      // TODO: Clear user from local storage and RQ?
    }
  }, [hasAttemptedReauth, isReauthenticatedError]);

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

  const userNotInLocalStorage = !user && !isLoading;
  const didReauthFail = hasAttemptedReauth && isReauthenticatedError;

  if (userNotInLocalStorage || didReauthFail) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href='/sign-in' />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='(tabs)'>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  );
}
